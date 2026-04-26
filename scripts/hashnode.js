const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const fetch = require("node-fetch"); // install node-fetch@2

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

// ✅ STRUCTURE-PRESERVING SANITIZER
function sanitizeContent(content) {
  return content
    // remove MDX artifacts only
    .replace(/<!--.*?-->/gs, "")
    .replace(/^import\s+.*$/gm, "")
    .replace(/^export\s+.*$/gm, "")

    // remove iframes ONLY
    .replace(/<iframe[\s\S]*?<\/iframe>/g, "")

    // normalize horizontal rules
    .replace(/\n?---\n?/g, "\n\n---\n\n")

    // ensure spacing after headings
    .replace(/(#+ .+)\n(?!\n)/g, "$1\n\n")

    // ensure spacing after blockquotes
    .replace(/\n?>\s*/g, "\n\n> ")

    // normalize excessive newlines
    .replace(/\n{3,}/g, "\n\n")

    .trim();
}

// ✅ ONLY FIX GRAPHQL BREAKERS (NOT MARKDOWN)
function normalizeForGraphQL(content) {
  return content
    .replace(/\\+"/g, '"')      // fix escaped quotes
    .replace(/\\\\/g, "\\")     // fix slashes
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
// IDEMPOTENCY
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
  return new Set(edges.map(e => e.node.slug));
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
      console.log(`⏭️ Skipping: ${slug}`);
      continue;
    }

    console.log(`➡️ Processing: ${file}`);
    console.log(`📝 Title: ${title}`);

    let clean = sanitizeContent(content);
    clean = normalizeForGraphQL(clean);

    // safety guard
    if (!clean || clean.length < 50) {
      console.log("⚠️ Skipping (empty/invalid content)");
      continue;
    }

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

    try {
      const res = await graphqlRequest(mutation, variables);

      if (res.errors) {
        console.error("❌ Publish failed:", res.errors);
      } else {
        console.log(`✅ Published: ${slug}`);
      }
    } catch (err) {
      console.error("💥 Request error:", err.message);
    }
  }

  console.log("🎉 Sync complete");
}

run();