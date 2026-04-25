 import fg from "fast-glob";
import fs from "fs";
import matter from "gray-matter";
import fetch from "node-fetch";

const files = await fg("blog/2022-*.md");

for (const file of files) {
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);

  await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.HASHNODE_TOKEN
    },
    body: JSON.stringify({
      query: `
        mutation PublishPost($input: PublishPostInput!) {
          publishPost(input: $input) {
            post { id slug }
          }
        }
      `,
      variables: {
        input: {
          title: data.title,
          contentMarkdown: content,
          publicationId: process.env.HASHNODE_PUBLICATION_ID,
          tags: (data.tags || []).map(t => ({ name: t }))
        }
      }
    })
  });
}