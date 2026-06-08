import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { randomUUID } from "node:crypto";
import { join } from "node:path";

import { blogSeed } from "./blogSeed";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

function paragraphsToPortableText(paragraphs: string[]) {
  return paragraphs.map((text) => ({
    _type: "block",
    _key: randomUUID(),
    style: "normal",
    markDefs: [],
    children: [
      { _type: "span", _key: randomUUID(), text, marks: [] },
    ],
  }));
}

async function run() {
  for (const post of blogSeed) {
    const imagePath = join(
      process.cwd(),
      "public",
      post.imageDir,
      post.imageFile,
    );

    console.log(`Uploading hero for ${post.title}...`);
    const asset = await client.assets.upload(
      "image",
      createReadStream(imagePath),
      { filename: post.imageFile },
    );

    await client.createOrReplace({
      _id: `blogPost.${post.slug}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      publishedAt: post.publishedAt,
      author: post.author,
      heroImage: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: post.title,
      },
      excerpt: post.excerpt,
      body: paragraphsToPortableText(post.paragraphs),
    });
    console.log(`  done: ${post.title}`);
  }
  console.log(`Imported ${blogSeed.length} blog posts.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
