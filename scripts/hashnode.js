const fs = require("fs");
const path = require("path");
const fg = require("fast-glob");
const matter = require("gray-matter");

// Node 18+ has fetch built-in in GitHub Actions
const fetch = global.fetch;

const ENDPOINT = "https://gql.hashnode.com";

const TOKEN = process.env.HASHNODE_TOKEN;
const PUBLICATION_ID = process.env.HASHNODE_PUBLICATION_ID;

if (!TOKEN || !PUBLICATION_ID) {
  console.error("❌ Missing HASHNODE_TOKEN or HASHNODE_PUBLICATION_ID");
  process.exit(1);
}

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
        query GetPosts($id: ID!) {
          publication(id: $id) {
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
      variables: { id: PUBLICATION_ID }
    })
  });

  const json = await res.json();

  if (json.errors) {
    console.error("❌ Failed to fetch existing posts:", json.errors);
    return new Set();
  }

  const posts = json.data.publication.posts.edges.map(e => e.node.title);
  console.log(`📚 Found ${posts.length} existing posts`);

  return new Set(posts);
}

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
          contentMarkdown: content,
          publicationId: PUBLICATION_ID,
          tags: (data.tags || []).map(t => ({ name: t })),
          coverImageOptions: data.cover_image
            ? { coverImageURL: data.cover_image }
            : undefined
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

async function main() {
  console.log("🚀 Starting Hashnode sync...");

  // 👉 adjust this if you want only 2022
  const files = await fg("blog/2022-*.md");

  console.log(`📂 Found ${files.length} markdown files`);

  if (files.length === 0) {
    console.log("❌ No files found. Check your path.");
    return;
  }

  const existingTitles = await fetchExistingPosts();

  for (const file of files) {
    await publishPost(file, existingTitles);
  }

  console.log("\n🎉 Done");
}

main().catch(err => {
  console.error("🔥 Fatal error:", err);
  process.exit(1);
});