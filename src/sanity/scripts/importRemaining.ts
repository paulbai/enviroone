import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { randomUUID } from "node:crypto";
import { join } from "node:path";

import {
  aboutPageSeed,
  donatePageSeed,
  getInvolvedPageSeed,
  volunteerPageSeed,
  sponsorshipPageSeed,
  churchMinistryPageSeed,
  siteSettingsSeed,
} from "./remainingSeed";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

async function uploadAsset(kind: "image" | "file", srcPath: string) {
  const filename = srcPath.split("/").pop() ?? kind;
  const path = join(process.cwd(), "public", srcPath.replace(/^\//, ""));
  console.log(`  Uploading ${kind} ${srcPath}...`);
  return client.assets.upload(kind, createReadStream(path), { filename });
}

function imageField(assetId: string, alt: string) {
  return {
    _type: "image",
    asset: { _type: "reference", _ref: assetId },
    alt,
  };
}

// Tiny HTML → Portable Text converter for the limited tag set we use:
// h3, h4, p (with optional <strong>), ul/li (with optional <strong>).
function htmlToPortableText(html: string) {
  const blocks: any[] = [];

  function tokenizeInline(
    inner: string,
  ): Array<{ text: string; bold: boolean }> {
    const tokens: Array<{ text: string; bold: boolean }> = [];
    const re = /<strong>([\s\S]*?)<\/strong>|([^<]+)/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(inner)) !== null) {
      if (m[1] !== undefined) tokens.push({ text: m[1], bold: true });
      else if (m[2] !== undefined) tokens.push({ text: m[2], bold: false });
    }
    return tokens
      .map((t) => ({ ...t, text: t.text.replace(/\s+/g, " ") }))
      .filter((t) => t.text.trim().length > 0 || t.text === " ");
  }

  function spans(tokens: Array<{ text: string; bold: boolean }>) {
    return tokens.map((t) => ({
      _type: "span",
      _key: randomUUID(),
      text: t.text,
      marks: t.bold ? ["strong"] : [],
    }));
  }

  const blockRe = /<(h3|h4|p|ul)[^>]*>([\s\S]*?)<\/\1>/g;
  let bm: RegExpExecArray | null;
  while ((bm = blockRe.exec(html)) !== null) {
    const tag = bm[1];
    const inner = bm[2];
    if (tag === "h3" || tag === "h4" || tag === "p") {
      blocks.push({
        _type: "block",
        _key: randomUUID(),
        style: tag === "p" ? "normal" : tag,
        markDefs: [],
        children: spans(tokenizeInline(inner)),
      });
    } else if (tag === "ul") {
      const liRe = /<li[^>]*>([\s\S]*?)<\/li>/g;
      let lm: RegExpExecArray | null;
      while ((lm = liRe.exec(inner)) !== null) {
        blocks.push({
          _type: "block",
          _key: randomUUID(),
          style: "normal",
          listItem: "bullet",
          level: 1,
          markDefs: [],
          children: spans(tokenizeInline(lm[1])),
        });
      }
    }
  }
  return blocks;
}

async function importAboutPage() {
  console.log("Seeding aboutPage...");
  const hero = await uploadAsset("image", aboutPageSeed.heroImageFile);
  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    heroHeading: aboutPageSeed.heroHeading,
    heroSubheading: aboutPageSeed.heroSubheading,
    heroImage: imageField(hero._id, aboutPageSeed.heroImageAlt),
    missionHeading: aboutPageSeed.missionHeading,
    missionBody: htmlToPortableText(aboutPageSeed.missionBodyHtml),
    philosophyHeading: aboutPageSeed.philosophyHeading,
    philosophyItems: aboutPageSeed.philosophyItems.map((item) => ({
      _key: randomUUID(),
      _type: "philosophyItem",
      ...item,
    })),
    accomplishmentsHeading: aboutPageSeed.accomplishmentsHeading,
    accomplishmentsItems: aboutPageSeed.accomplishmentsItems.map((item) => ({
      _key: randomUUID(),
      _type: "accomplishmentItem",
      ...item,
    })),
  });
  console.log("  done: aboutPage");
}

async function importDonatePage() {
  console.log("Seeding donatePage...");
  const hero = await uploadAsset("image", donatePageSeed.heroImageFile);
  await client.createOrReplace({
    _id: "donatePage",
    _type: "donatePage",
    heroHeading: donatePageSeed.heroHeading,
    heroSubheading: donatePageSeed.heroSubheading,
    heroImage: imageField(hero._id, donatePageSeed.heroImageAlt),
    optionsHeading: donatePageSeed.optionsHeading,
    optionsIntro: donatePageSeed.optionsIntro,
    donationOptions: donatePageSeed.donationOptions.map((opt) => ({
      _key: randomUUID(),
      _type: "donationOption",
      ...opt,
    })),
  });
  console.log("  done: donatePage");
}

async function importGetInvolvedPage() {
  console.log("Seeding getInvolvedPage...");
  const hero = await uploadAsset("image", getInvolvedPageSeed.heroImageFile);
  const ways = await Promise.all(
    getInvolvedPageSeed.waysToGive.map(async (w) => {
      const asset = await uploadAsset("image", w.imageFile);
      return {
        _key: randomUUID(),
        _type: "wayToGive",
        title: w.title,
        description: w.description,
        image: imageField(asset._id, w.imageAlt),
        href: w.href,
        align: w.align,
      };
    }),
  );
  await client.createOrReplace({
    _id: "getInvolvedPage",
    _type: "getInvolvedPage",
    heroHeading: getInvolvedPageSeed.heroHeading,
    heroSubheading: getInvolvedPageSeed.heroSubheading,
    heroImage: imageField(hero._id, getInvolvedPageSeed.heroImageAlt),
    waysHeading: getInvolvedPageSeed.waysHeading,
    waysIntro: getInvolvedPageSeed.waysIntro,
    waysToGive: ways,
  });
  console.log("  done: getInvolvedPage");
}

async function importVolunteerPage() {
  console.log("Seeding volunteerPage...");
  const hero = await uploadAsset("image", volunteerPageSeed.heroImageFile);
  const roles = await Promise.all(
    volunteerPageSeed.roles.map(async (r) => {
      const asset = await uploadAsset("image", r.imageFile);
      return {
        _key: randomUUID(),
        _type: "volunteerRole",
        title: r.title,
        description: r.description,
        tasks: r.tasks,
        image: imageField(asset._id, r.imageAlt),
        align: r.align,
      };
    }),
  );
  await client.createOrReplace({
    _id: "volunteerPage",
    _type: "volunteerPage",
    heroHeading: volunteerPageSeed.heroHeading,
    heroSubheading: volunteerPageSeed.heroSubheading,
    heroImage: imageField(hero._id, volunteerPageSeed.heroImageAlt),
    rolesHeading: volunteerPageSeed.rolesHeading,
    rolesIntro: volunteerPageSeed.rolesIntro,
    roles,
  });
  console.log("  done: volunteerPage");
}

async function importSponsorshipPage() {
  console.log("Seeding sponsorshipPage...");
  const hero = await uploadAsset("image", sponsorshipPageSeed.heroImageFile);
  const tiers = await Promise.all(
    sponsorshipPageSeed.tiers.map(async (t) => {
      const asset = await uploadAsset("image", t.imageFile);
      return {
        _key: randomUUID(),
        _type: "sponsorshipTier",
        title: t.title,
        problem: t.problem,
        solution: t.solution,
        impact: t.impact,
        cost: t.cost,
        image: imageField(asset._id, t.imageAlt),
        donateLink: t.donateLink,
        align: t.align,
      };
    }),
  );
  await client.createOrReplace({
    _id: "sponsorshipPage",
    _type: "sponsorshipPage",
    heroHeading: sponsorshipPageSeed.heroHeading,
    heroSubheading: sponsorshipPageSeed.heroSubheading,
    heroImage: imageField(hero._id, sponsorshipPageSeed.heroImageAlt),
    tiersHeading: sponsorshipPageSeed.tiersHeading,
    tiersIntro: sponsorshipPageSeed.tiersIntro,
    tiers,
  });
  console.log("  done: sponsorshipPage");
}

async function importChurchMinistryPage() {
  console.log("Seeding churchMinistryPage...");
  const hero = await uploadAsset(
    "image",
    churchMinistryPageSeed.heroImageFile,
  );
  await client.createOrReplace({
    _id: "churchMinistryPage",
    _type: "churchMinistryPage",
    heroHeading: churchMinistryPageSeed.heroHeading,
    heroSubheading: churchMinistryPageSeed.heroSubheading,
    heroImage: imageField(hero._id, churchMinistryPageSeed.heroImageAlt),
    body: htmlToPortableText(churchMinistryPageSeed.bodyHtml),
  });
  console.log("  done: churchMinistryPage");
}

async function importSiteSettings() {
  console.log("Seeding siteSettings...");
  const resources = await Promise.all(
    siteSettingsSeed.footerResources.map(async (r) => {
      const asset = await uploadAsset("file", r.fileSrc);
      return {
        _key: randomUUID(),
        _type: "footerResource",
        title: r.title,
        ...(r.description ? { description: r.description } : {}),
        file: {
          _type: "file",
          asset: { _type: "reference", _ref: asset._id },
        },
        openInNewTab: r.openInNewTab,
      };
    }),
  );
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    orgName: siteSettingsSeed.orgName,
    primaryEmail: siteSettingsSeed.primaryEmail,
    sierraLeoneOffice: siteSettingsSeed.sierraLeoneOffice,
    usaOffice: siteSettingsSeed.usaOffice,
    socials: siteSettingsSeed.socials,
    footerResources: resources,
  });
  console.log("  done: siteSettings");
}

async function run() {
  await importAboutPage();
  await importDonatePage();
  await importGetInvolvedPage();
  await importVolunteerPage();
  await importSponsorshipPage();
  await importChurchMinistryPage();
  await importSiteSettings();
  console.log("Imported 7 page singletons.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
