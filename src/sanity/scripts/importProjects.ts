import { createClient } from "@sanity/client";
import { createReadStream } from "node:fs";
import { Readable } from "node:stream";
import { randomUUID } from "node:crypto";
import { join } from "node:path";

import { projectsIndexSeed, projectPagesSeed } from "./projectsSeed";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

async function uploadImage(src: string) {
  const filename = (src.split("/").pop() ?? "image").split("?")[0];
  if (src.startsWith("http")) {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`Failed to fetch ${src}: ${res.status}`);
    if (!res.body) throw new Error(`No body for ${src}`);
    // @ts-expect-error Readable.fromWeb accepts a web ReadableStream
    const stream = Readable.fromWeb(res.body);
    return client.assets.upload("image", stream, { filename });
  }
  const path = join(process.cwd(), "public", src.replace(/^\//, ""));
  return client.assets.upload("image", createReadStream(path), { filename });
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

async function uploadSlide(
  src: string,
  caption: string,
  linkVideoId?: string,
) {
  const asset = await uploadImage(src);
  return {
    _key: randomUUID(),
    _type: "carouselSlide",
    image: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: caption,
    },
    caption,
    ...(linkVideoId ? { linkVideoId } : {}),
  };
}

async function run() {
  // 1. projectsIndex singleton
  console.log("Writing projectsIndex...");
  await client.createOrReplace({
    _id: "projectsIndex",
    _type: "projectsIndex",
    ...projectsIndexSeed,
  });
  console.log("  done: projectsIndex");

  // 2. Each project page
  for (const [index, p] of projectPagesSeed.entries()) {
    console.log(`Uploading card image for ${p.slug}...`);
    const cardAsset = await uploadImage(p.cardImageSrc);

    console.log(
      `Uploading ${p.carousel.length} carousel slides for ${p.slug} (concurrent)...`,
    );
    const slides = await Promise.all(
      p.carousel.map((s) => uploadSlide(s.src, s.caption, s.linkVideoId)),
    );

    const doc: any = {
      _id: `projectPage.${p.slug}`,
      _type: "projectPage",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      icon: p.icon,
      accent: p.accent,
      summary: p.summary,
      cardImage: {
        _type: "image",
        asset: { _type: "reference", _ref: cardAsset._id },
        alt: p.cardImageAlt,
      },
      body: htmlToPortableText(p.bodyHtml),
      carousel: slides,
      orderRank: String(index).padStart(5, "0"),
    };
    if (p.featuredVideoId) doc.featuredVideoId = p.featuredVideoId;
    if (p.featuredVideoLabel) doc.featuredVideoLabel = p.featuredVideoLabel;

    await client.createOrReplace(doc);
    console.log(`  done: ${p.slug}`);
  }

  console.log(
    `Imported 1 projectsIndex + ${projectPagesSeed.length} projectPage documents.`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
