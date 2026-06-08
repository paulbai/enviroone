import { createClient } from "@sanity/client";

import { impactStatsSeed } from "./impactStatsSeed";

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
  for (const [index, stat] of impactStatsSeed.entries()) {
    const slug = slugify(stat.label);

    await client.createOrReplace({
      _id: `impactStat.${slug}`,
      _type: "impactStat",
      value: stat.value,
      suffix: stat.suffix,
      label: stat.label,
      icon: stat.icon,
      gridSpan: stat.gridSpan,
      accent: stat.accent,
      orderRank: String(index).padStart(5, "0"),
    });
    console.log(`  done: ${stat.label}`);
  }
  console.log(`Imported ${impactStatsSeed.length} impact stats.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
