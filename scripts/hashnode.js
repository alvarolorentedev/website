const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const fetch = require("node-fetch");

const { unified } = require("unified");
const remarkParse = require("remark-parse").default;
const remarkStringify = require("remark-stringify").default;

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

// ✅ FIXED: stable markdown formatting
function processMarkdown(content) {
  return unified()
    .use(remarkParse)
    .use(remarkStringify, {
      bullet: "-",
      fences: true,
      listItemIndent: "one",
      rule: "-",           // fix horizontal rules
      ruleSpaces: false,   // avoid spacing bugs
      tightDefinitions: true,
    })
    .processSync(content)
    .toString();
}

// minimal cleaning only
function sanitizeContent(content) {
  return content
    .replace(/<!--.*?-->/gs, "")
    .replace(/^import\s+.*$/gm, "")
    .replace(/^export\s+.*$/gm, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/g, "")
    .trim();
}

// only fix GraphQL-breaking chars
function normalizeForGraphQL(content) {
  return content
    .replace(/\\+"/g, '"')
    .replace(/\\\\/g, "\\")
    .replace(/[\u0000-\u001F]/g, "")
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
// FETCH EXISTING POSTS
// ----------------------

async function getExistingPosts() {
  const query = `
    query GetPosts($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        posts(first: 50) {
          edges {
            node {
              id
              slug
              title
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

  return edges.map(e => ({
    id: e.node.id,
    slug: e.node.slug,
    title: (e.node.title || "").toLowerCase().trim(),
  }));
}

// ----------------------
// MAIN
// ----------------------

async function run() {
  console.log("🚀 Starting Hashnode sync...");

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  console.log(`📂 Found ${files.length} files`);

  console.log("🔍 Fetching existing posts...");
  const existing = await getExistingPosts();
  console.log(`📚 Found ${existing.length} existing posts`);

  for (const file of files) {
    const fullPath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf-8");

    const { data, content } = matter(raw);

    const title = data.title || file;
    const slug = slugify(title);

    console.log(`➡️ Processing: ${file}`);
    console.log(`📝 Title: ${title}`);

    // ----------------------
    // CONTENT PIPELINE
    // ----------------------

    let clean = sanitizeContent(content);
    clean = processMarkdown(clean);

    // ✅ FIX: enforce spacing between sections
    clean = clean
      .replace(/---##/g, "---\n\n##")
      .replace(/([^\n])##/g, "$1\n\n##");

    clean = normalizeForGraphQL(clean);

    if (!clean || clean.length < 50) {
      console.log("⚠️ Skipping (empty/invalid)");
      continue;
    }

    // ----------------------
    // TAGS (safe)
    // ----------------------

    const tags = (data.tags || [])
      .slice(0, 4)
      .map(tag => ({
        name: String(tag),
        slug: slugify(tag),
      }))
      .filter(t => t.name && t.slug);

    // ----------------------
    // DUPLICATE FIX
    // ----------------------

    const existingPost = existing.find(
      p => p.slug === slug || p.title === title.toLowerCase().trim()
    );

    const isUpdate = !!existingPost;

    // ----------------------
    // MUTATION
    // ----------------------

    const mutation = isUpdate
      ? `
        mutation Update($input: UpdatePostInput!) {
          updatePost(input: $input) {
            post {
              id
              slug
            }
          }
        }
      `
      : `
        mutation Publish($input: PublishPostInput!) {
          publishPost(input: $input) {
            post {
              id
              slug
            }
          }
        }
      `;

    const variables = isUpdate
      ? {
          input: {
            id: existingPost.id,
            title,
            contentMarkdown: clean,
            tags,
          },
        }
      : {
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
        console.error("❌ Failed:", JSON.stringify(res.errors, null, 2));
      } else {
        console.log(
          isUpdate
            ? `🔁 Updated: ${slug}`
            : `✅ Published: ${slug}`
        );
      }
    } catch (err) {
      console.error("💥 Request error:", err.message);
    }
  }

  console.log("🎉 Sync complete");
}

run();