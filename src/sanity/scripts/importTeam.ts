import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { randomUUID } from "node:crypto";
import { join } from "node:path";

import { teamSeed } from "./teamSeed";

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

function stringToPortableText(text: string) {
  return [
    {
      _type: "block",
      _key: randomUUID(),
      style: "normal",
      markDefs: [],
      children: [
        { _type: "span", _key: randomUUID(), text, marks: [] },
      ],
    },
  ];
}

async function run() {
  for (const [index, member] of teamSeed.entries()) {
    const slug = slugify(member.name);
    const imagePath = join(process.cwd(), "public", "team", member.imageFile);

    console.log(`Uploading photo for ${member.name}...`);
    const asset = await client.assets.upload(
      "image",
      createReadStream(imagePath),
      { filename: member.imageFile },
    );

    await client.createOrReplace({
      _id: `teamMember.${slug}`,
      _type: "teamMember",
      name: member.name,
      role: member.role,
      bio: stringToPortableText(member.bio),
      isActive: true,
      photo: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: member.name,
      },
      orderRank: String(index).padStart(5, "0"),
    });
    console.log(`  done: ${member.name}`);
  }
  console.log(`Imported ${teamSeed.length} team members.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
