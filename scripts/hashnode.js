const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const fetch = require("node-fetch");

const HASHNODE_API = "https://gql.hashnode.com";
const TOKEN = process.env.HASHNODE_TOKEN;
const PUBLICATION_ID = process.env.HASHNODE_PUBLICATION_ID;

const BLOG_DIR = path.join(__dirname, "../blog");

// ----------------------
// HELPERS
// ----------------------

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 🚨 CRITICAL FIX
function sanitizeContent(content) {
  return content
    // remove MDX / Docusaurus junk
    .replace(/<!--.*?-->/gs, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/g, "")
    .replace(/^import\s+.*$/gm, "")

    // remove weird HTML tags
    .replace(/<[^>]+>/g, "")

    // fix images (keep markdown)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "![$1]($2)")

    .trim();
}

// 🚨 CRITICAL FIX (this was your missing piece)
function normalizeForGraphQL(content) {
  return content
    .replace(/\\+"/g, '"')       // fix \" → "
    .replace(/\\\\/g, "\\")      // fix \\ → \
    .replace(/[\u0000-\u001F]/g, "") // remove control chars
    .trim();
}

// ----------------------
// GRAPHQL
// ----------------------

async function graphqlRequest(query, variables) {
  const res = await fetch(HASHNODE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  return res.json();
}

// ----------------------
// FETCH EXISTING POSTS (IDEMPOTENCY)
// ----------------------

async function getExistingSlugs() {
  const query = `
    query GetPosts($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        posts(first: 50) {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  `;

  const res = await graphqlRequest(query, {
    publicationId: PUBLICATION_ID,
  });

  const edges = res?.data?.publication?.posts?.edges || [];
  return new Set(edges.map((e) => e.node.slug));
}

// ----------------------
// MAIN
// ----------------------

async function run() {
  console.log("🚀 Starting Hashnode sync...");

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  console.log(`📂 Found ${files.length} files`);

  console.log("🔍 Fetching existing posts...");
  const existing = await getExistingSlugs();
  console.log(`📚 Found ${existing.size} existing posts`);

  for (const file of files) {
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);

    const title = data.title || file;
    const slug = slugify(title);

    if (existing.has(slug)) {
      console.log(`⏭️ Skipping (already exists): ${slug}`);
      continue;
    }

    console.log(`➡️ Processing: ${file}`);
    console.log(`📝 Title: ${title}`);

    // 🚨 sanitize + normalize
    let clean = sanitizeContent(content);
    clean = normalizeForGraphQL(clean);

    const tags = (data.tags || []).slice(0, 4).map(tag => ({
      name: tag,
      slug: slugify(tag),
    }));

    const mutation = `
      mutation Publish($input: PublishPostInput!) {
        publishPost(input: $input) {
          post {
            id
            slug
          }
        }
      }
    `;

    const variables = {
      input: {
        title,
        slug,
        contentMarkdown: clean,
        publicationId: PUBLICATION_ID,
        tags,
      },
    };

    const res = await graphqlRequest(mutation, variables);

    console.log("📡 Response:", JSON.stringify(res, null, 2));

    if (res.errors) {
      console.error("❌ Publish failed:", res.errors);
    } else {
      console.log(`✅ Published: ${slug}`);
    }
  }

  console.log("🎉 Sync complete");
}

run();