import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { join } from "node:path";

import { focusAreasSeed } from "./focusAreasSeed";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function run() {
  for (const [index, area] of focusAreasSeed.entries()) {
    const slug = slugify(area.title);
    const filename = area.imageFile.split("/").pop()!;
    const imagePath = join(process.cwd(), "public", area.imageFile);

    console.log(`Uploading image for ${area.title}...`);
    const asset = await client.assets.upload(
      "image",
      createReadStream(imagePath),
      { filename },
    );

    await client.createOrReplace({
      _id: `focusArea.${slug}`,
      _type: "focusArea",
      title: area.title,
      description: area.description,
      image: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: area.imageAlt,
      },
      link: {
        kind: area.link.kind,
        href: area.link.href,
      },
      align: area.align,
      orderRank: String(index).padStart(5, "0"),
    });
    console.log(`  done: ${area.title}`);
  }
  console.log(`Imported ${focusAreasSeed.length} focus areas.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
