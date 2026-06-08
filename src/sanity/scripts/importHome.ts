import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { join } from "node:path";

import {
  homeHeroSeed,
  focusAreasIntroSeed,
  impactDownloadSeed,
} from "./homeSeed";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

async function uploadImage(relativePath: string) {
  const filename = relativePath.split("/").pop()!;
  const fullPath = join(process.cwd(), "public", relativePath);
  console.log(`  Uploading image ${relativePath}...`);
  return client.assets.upload("image", createReadStream(fullPath), {
    filename,
  });
}

async function uploadPdf(relativePath: string) {
  const filename = relativePath.split("/").pop()!;
  const fullPath = join(process.cwd(), "public", relativePath);
  console.log(`  Uploading PDF ${relativePath}...`);
  return client.assets.upload("file", createReadStream(fullPath), {
    filename,
  });
}

async function importHomeHero() {
  console.log("Seeding homeHero...");
  const damagedAsset = await uploadImage(homeHeroSeed.damagedImageFile);
  const restoredAsset = await uploadImage(homeHeroSeed.restoredImageFile);
  const childrenAsset = homeHeroSeed.heroChildrenImageFile
    ? await uploadImage(homeHeroSeed.heroChildrenImageFile)
    : null;

  await client.createOrReplace({
    _id: "homeHero",
    _type: "homeHero",
    headline: homeHeroSeed.headline,
    accentText: homeHeroSeed.accentText,
    pillText: homeHeroSeed.pillText,
    damagedImage: {
      _type: "image",
      asset: { _type: "reference", _ref: damagedAsset._id },
      alt: homeHeroSeed.damagedImageAlt,
    },
    restoredImage: {
      _type: "image",
      asset: { _type: "reference", _ref: restoredAsset._id },
      alt: homeHeroSeed.restoredImageAlt,
    },
    ...(childrenAsset
      ? {
          heroChildrenImage: {
            _type: "image",
            asset: { _type: "reference", _ref: childrenAsset._id },
            alt: homeHeroSeed.heroChildrenImageAlt ?? "",
          },
        }
      : {}),
  });
  console.log("  done: homeHero");
}

async function importFocusAreasIntro() {
  console.log("Seeding focusAreasIntro...");
  await client.createOrReplace({
    _id: "focusAreasIntro",
    _type: "focusAreasIntro",
    heading: focusAreasIntroSeed.heading,
    description: focusAreasIntroSeed.description,
  });
  console.log("  done: focusAreasIntro");
}

async function importImpactDownload() {
  console.log("Seeding impactDownload...");
  const pdfAsset = await uploadPdf(impactDownloadSeed.pdfFile);

  await client.createOrReplace({
    _id: "impactDownload",
    _type: "impactDownload",
    title: impactDownloadSeed.title,
    description: impactDownloadSeed.description,
    buttonLabel: impactDownloadSeed.buttonLabel,
    pdfFile: {
      _type: "file",
      asset: { _type: "reference", _ref: pdfAsset._id },
    },
  });
  console.log("  done: impactDownload");
}

async function run() {
  await importHomeHero();
  await importFocusAreasIntro();
  await importImpactDownload();
  console.log("Imported 3 home-page singletons.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
