const fs = require("fs");
const fg = require("fast-glob");
const matter = require("gray-matter");

const fetch = global.fetch;

const ENDPOINT = "https://gql.hashnode.com";

const TOKEN = process.env.HASHNODE_TOKEN;
const PUBLICATION_ID = process.env.HASHNODE_PUBLICATION_ID;
const HOST = process.env.HASHNODE_HOST;

if (!TOKEN || !PUBLICATION_ID || !HOST) {
  console.error("❌ Missing env vars: HASHNODE_TOKEN, HASHNODE_PUBLICATION_ID, HASHNODE_HOST");
  process.exit(1);
}

// 🧹 Clean Docusaurus → Hashnode incompatible content
function sanitizeContent(content) {
  return content
    // remove truncate markers
    .replace(/<!--\s*truncate\s*-->/g, "")

    // convert youtube iframes to links
    .replace(
      /<iframe.*?src="https:\/\/www\.youtube\.com\/embed\/(.*?)".*?<\/iframe>/g,
      "https://www.youtube.com/watch?v=$1"
    )

    // remove ALL remaining HTML tags
    .replace(/<[^>]+>/g, "")

    // normalize spacing
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// 🧠 Normalize tags
function formatTags(tags = []) {
  return tags.map(t => ({
    name: t,
    slug: t
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
  }));
}

// 🔍 Fetch existing posts (idempotency)
async function fetchExistingPosts() {
  console.log("🔍 Fetching existing posts...");

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN
    },
    body: JSON.stringify({
      query: `
        query GetPosts($host: String!) {
          publication(host: $host) {
            posts(first: 50) {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        }
      `,
      variables: { host: HOST }
    })
  });

  const json = await res.json();

  if (json.errors) {
    console.error("❌ Failed to fetch posts:", json.errors);
    return new Set();
  }

  const posts = json.data.publication.posts.edges.map(e => e.node.title);

  console.log(`📚 Found ${posts.length} existing posts`);

  return new Set(posts);
}

// 🚀 Publish post
async function publishPost(file, existingTitles) {
  console.log(`\n➡️ Processing: ${file}`);

  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);

  if (!data.title) {
    console.log("⚠️ Skipping (no title)");
    return;
  }

  if (existingTitles.has(data.title)) {
    console.log("⏭️ Skipping (already exists)");
    return;
  }

  const cleanContent = sanitizeContent(content);

  if (!cleanContent || cleanContent.length < 50) {
    console.log("⚠️ Skipping (content too short after sanitize)");
    return;
  }

  console.log("📝 Title:", data.title);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN
    },
    body: JSON.stringify({
      query: `
        mutation PublishPost($input: PublishPostInput!) {
          publishPost(input: $input) {
            post {
              id
              slug
            }
          }
        }
      `,
      variables: {
        input: {
          title: data.title,
          contentMarkdown: cleanContent,
          publicationId: PUBLICATION_ID,
          tags: formatTags(data.tags),
          coverImageOptions: data.cover_image
            ? { coverImageURL: data.cover_image }
            : undefined,
          canonicalUrl: data.canonical_url || undefined
        }
      }
    })
  });

  const json = await res.json();

  console.log("📡 Response:", JSON.stringify(json, null, 2));

  if (json.errors) {
    console.error("❌ Publish failed:", json.errors);
  } else {
    console.log("✅ Published:", json.data.publishPost.post.slug);
  }
}

// 🧩 Main
async function main() {
  console.log("🚀 Starting Hashnode sync...\n");

  // 👉 adjust if needed
  const files = await fg("blog/2022-*.md");

  console.log(`📂 Found ${files.length} files`);

  if (files.length === 0) {
    console.log("❌ No files found.");
    return;
  }

  const existingTitles = await fetchExistingPosts();

  for (const file of files) {
    await publishPost(file, existingTitles);
  }

  console.log("\n🎉 Sync complete");
}

main().catch(err => {
  console.error("🔥 Fatal error:", err);
  process.exit(1);
});