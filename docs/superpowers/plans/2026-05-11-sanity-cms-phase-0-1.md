# EnviroOne Sanity CMS — Phase 0 + Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up Sanity Studio inside the existing Next.js app at `/studio`, then make the About-page team section fully editable from that Studio — establishing the migration pattern reused by Phases 2–5.

**Architecture:** Sanity Studio is embedded as a route in the same Next.js project on Vercel. The public site is statically generated and reads published content from Sanity at build time. When an editor publishes, a Sanity webhook calls a Next.js API route that revalidates the affected pages by cache tag. The public pages are isolated from the Studio via a `(site)` route group so the Studio does not inherit the site Navbar/Footer.

**Tech Stack:** Next.js 16.1.1 (App Router, Turbopack), React 19.2.3, TypeScript, Tailwind v4, Sanity Studio v4, `next-sanity`, `@sanity/image-url`, `@sanity/orderable-document-list`, `@portabletext/react`.

**Scope note:** This plan covers **Phase 0 (Foundation)** and **Phase 1 (Team Members)** from the design spec (`docs/superpowers/specs/2026-05-11-sanity-cms-design.md`). Phases 2–5 (Blog, Home, Projects, Remaining pages) are deliberately excluded — they reuse the exact pattern established here and each gets its own short plan when reached.

**Verification approach:** The repository has no test runner, and the project's `CLAUDE.md` defines verification as "a clean build (`npm run build`) ... report any build errors" plus functional checks. This plan follows that policy: `npm run build`, `npm run typegen`, and explicit manual checks (with expected output) are the gates. No test framework is introduced — that would be unrelated scope.

**Prerequisites the implementer must have:**
- A Sanity account (free) — create at https://www.sanity.io/login if needed.
- The Vercel CLI available (`npx vercel`) and access to the `enviroone` Vercel project.
- The dev server command is `npm run dev`; production build is `npm run build`.

---

## File Structure

**Created:**
- `sanity.config.ts` — Studio configuration (project root)
- `sanity.cli.ts` — Sanity CLI configuration (project root)
- `sanity-typegen.json` — TypeScript codegen configuration (project root)
- `src/sanity/env.ts` — validated environment variable exports
- `src/sanity/lib/client.ts` — the Sanity content client
- `src/sanity/lib/image.ts` — image URL builder helper
- `src/sanity/lib/team.ts` — `getTeamMembers()` data-fetch function
- `src/sanity/queries.ts` — GROQ queries
- `src/sanity/structure.ts` — Studio left-nav structure
- `src/sanity/schemaTypes/index.ts` — schema registry
- `src/sanity/schemaTypes/teamMember.ts` — Team Member document schema
- `src/sanity/scripts/teamSeed.ts` — one-time migration source data
- `src/sanity/scripts/importTeam.ts` — one-time migration script
- `src/sanity/sanity.types.ts` — generated (by typegen; git-ignored)
- `src/app/(site)/layout.tsx` — layout for public pages (Navbar/Footer/grain)
- `src/app/studio/[[...tool]]/page.tsx` — embedded Studio route
- `src/app/api/revalidate/route.ts` — webhook → revalidation endpoint

**Modified:**
- `src/app/layout.tsx` — slimmed to `<html><body>` only; Navbar/Footer moved out
- `next.config.ts` — allow `cdn.sanity.io` images
- `package.json` — add `typegen` script (+ dependencies)
- `.gitignore` — ignore `schema.json`, `src/sanity/sanity.types.ts`
- `src/components/about/FullTeam.tsx` — read team data from props instead of a hardcoded array
- `.env.local` — local environment variables (git-ignored, created)

**Moved (via `git mv`, into the `(site)` route group — URLs unchanged):**
- `src/app/page.tsx` → `src/app/(site)/page.tsx`
- `src/app/about/` → `src/app/(site)/about/`
- `src/app/blog/` → `src/app/(site)/blog/`
- `src/app/donate/` → `src/app/(site)/donate/`
- `src/app/get-involved/` → `src/app/(site)/get-involved/`
- `src/app/projects/` → `src/app/(site)/projects/`

---

# PHASE 0 — FOUNDATION

## Task 1: Create the Sanity project and dataset

**Files:** none (external setup)

- [ ] **Step 1: Create the Sanity project**

In a browser, go to https://www.sanity.io/manage and log in. Click **Create new project**.
- Project name: `EnviroOne`
- After creation, open the project → **Datasets** → confirm a dataset named `production` exists. If not, create one named exactly `production` with visibility **Public**.

Copy the **Project ID** (shown on the project overview page — an 8-character string). Record it; it is needed in Task 3.

- [ ] **Step 2: Create an API write token (for the migration script only)**

In the same project: **API** → **Tokens** → **Add API token**.
- Name: `Migration script (local only)`
- Permissions: **Editor**

Copy the token immediately (shown once). Record it; it is needed in Task 3. This token is used only by the local migration script and is **never** committed or added to Vercel.

- [ ] **Step 3: Authenticate the Sanity CLI**

Run: `npx sanity@latest login`
Expected: a browser opens; after authorizing, the terminal prints `Login successful`.

- [ ] **Step 4: Verify CLI access to the project**

Run: `npx sanity@latest projects list`
Expected: a table that includes a project named `EnviroOne` with the Project ID from Step 1.

---

## Task 2: Install Sanity dependencies

**Files:** Modify `package.json` (via npm)

- [ ] **Step 1: Install the packages**

Run:
```bash
npm install sanity next-sanity @sanity/vision @sanity/image-url @sanity/orderable-document-list @portabletext/react styled-components
```

- [ ] **Step 2: Verify installation**

Run: `npm ls sanity next-sanity @sanity/image-url`
Expected: all three resolve to a version with no `UNMET DEPENDENCY` lines. `sanity` should be v4.x, `next-sanity` v10.x or newer.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore(cms): add Sanity dependencies"
```

---

## Task 3: Configure environment variables

**Files:** Create `.env.local`; Modify `.gitignore`

- [ ] **Step 1: Confirm `.gitignore` excludes env files**

Open `.gitignore`. Confirm it contains a line matching `.env*` (Next.js's default `.gitignore` includes `.env*`). If it does not, add this line:
```
.env*
```
Also add these two lines (created later by typegen and the Sanity CLI):
```
schema.json
src/sanity/sanity.types.ts
```

- [ ] **Step 2: Generate a webhook secret**

Run: `openssl rand -hex 32`
Expected: a 64-character hex string. Record it — it is the `SANITY_WEBHOOK_SECRET` value used below and again in Task 15.

- [ ] **Step 3: Create `.env.local`**

Create `.env.local` in the project root. Replace `REPLACE_*` with the real values from Task 1 and Step 2:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=REPLACE_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-03-04
SANITY_WEBHOOK_SECRET=REPLACE_WEBHOOK_SECRET
SANITY_API_WRITE_TOKEN=REPLACE_WRITE_TOKEN
```

- [ ] **Step 4: Verify `.env.local` is not tracked by git**

Run: `git status --porcelain .env.local`
Expected: **no output** (the file is ignored). If the file is listed, fix `.gitignore` before continuing.

- [ ] **Step 5: Link the Vercel project**

Run: `npx vercel link`
Answer the prompts: scope = `paulbai's projects`, link to existing project = **yes**, project name = `enviroone`.
Expected: prints `Linked to paulbais-projects/enviroone` and creates a git-ignored `.vercel/` directory.

- [ ] **Step 6: Add the three public/runtime env vars to Vercel**

Per the project `CLAUDE.md`, use `printf` (not `echo`) to avoid trailing newlines. Run each command and, when prompted for environments, select **Production, Preview, and Development**:
```bash
printf "REPLACE_PROJECT_ID" | npx vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
printf "production" | npx vercel env add NEXT_PUBLIC_SANITY_DATASET
printf "2025-03-04" | npx vercel env add NEXT_PUBLIC_SANITY_API_VERSION
printf "REPLACE_WEBHOOK_SECRET" | npx vercel env add SANITY_WEBHOOK_SECRET
```
Do **not** add `SANITY_API_WRITE_TOKEN` to Vercel — it is local-only.

- [ ] **Step 7: Verify Vercel env vars**

Run: `npx vercel env ls`
Expected: a table listing `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`, and `SANITY_WEBHOOK_SECRET`, each present in all three environments.

- [ ] **Step 8: Commit**

```bash
git add .gitignore
git commit -m "chore(cms): ignore Sanity-generated files and env"
```

---

## Task 4: Create the Sanity client and helpers

**Files:** Create `src/sanity/env.ts`, `src/sanity/lib/client.ts`, `src/sanity/lib/image.ts`

- [ ] **Step 1: Create `src/sanity/env.ts`**

```ts
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-04";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
```

- [ ] **Step 2: Create `src/sanity/lib/client.ts`**

```ts
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // fetch fresh content at build time
  perspective: "published", // public site only ever sees published docs
});
```

- [ ] **Step 3: Create `src/sanity/lib/image.ts`**

```ts
import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
```

- [ ] **Step 4: Commit**

```bash
git add src/sanity/env.ts src/sanity/lib/client.ts src/sanity/lib/image.ts
git commit -m "feat(cms): add Sanity client and image helpers"
```

---

## Task 5: Create the schema registry and Studio config

**Files:** Create `src/sanity/schemaTypes/index.ts`, `sanity.config.ts`, `sanity.cli.ts`

- [ ] **Step 1: Create `src/sanity/schemaTypes/index.ts` (empty registry for now)**

```ts
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
};
```

- [ ] **Step 2: Create `sanity.config.ts` in the project root**

```ts
"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  title: "EnviroOne CMS",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
```

- [ ] **Step 3: Create `sanity.cli.ts` in the project root**

```ts
import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./src/sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  autoUpdates: true,
});
```

- [ ] **Step 4: Commit**

```bash
git add src/sanity/schemaTypes/index.ts sanity.config.ts sanity.cli.ts
git commit -m "feat(cms): add Sanity Studio configuration"
```

---

## Task 6: Restructure public routes into a `(site)` route group

This isolates the Studio from the site Navbar/Footer. Route groups in parentheses do **not** affect URLs — every public page keeps its exact current path.

**Files:** Move 6 route entries; Create `src/app/(site)/layout.tsx`; Modify `src/app/layout.tsx`

- [ ] **Step 1: Create the route group directory and move the public routes**

```bash
mkdir -p "src/app/(site)"
git mv src/app/page.tsx "src/app/(site)/page.tsx"
git mv src/app/about "src/app/(site)/about"
git mv src/app/blog "src/app/(site)/blog"
git mv src/app/donate "src/app/(site)/donate"
git mv src/app/get-involved "src/app/(site)/get-involved"
git mv src/app/projects "src/app/(site)/projects"
```

- [ ] **Step 2: Verify the move**

Run: `ls "src/app/(site)"` and `ls src/app`
Expected: `(site)` contains `about blog donate get-involved page.tsx projects`. `src/app` still contains `layout.tsx`, `globals.css`, `favicon.ico`, and the new `(site)` directory.

- [ ] **Step 3: Create `src/app/(site)/layout.tsx`**

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Replace `src/app/layout.tsx` with a slim root layout**

Replace the entire file contents with:
```tsx
import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, Lora, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnviroOne | Transforming Lives in Sierra Leone",
  description:
    "EnviroOne is dedicated to sustainable development, clean water access, and educational empowerment in Sierra Leone.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} ${lora.variable} ${robotoMono.variable} antialiased bg-cream text-charcoal font-sans flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
```

The Navbar, Footer, and grain-overlay (previously here) now live in `(site)/layout.tsx`. The body keeps `flex flex-col min-h-screen`, so the `(site)` layout's `<main className="flex-grow">` still produces a sticky footer.

- [ ] **Step 5: Build to verify routing still works**

Run: `npm run build`
Expected: build succeeds. The route list still shows `/`, `/about`, `/blog`, `/blog/[slug]`, `/donate`, `/get-involved`, `/get-involved/church-ministry`, `/get-involved/sponsor`, `/get-involved/volunteer`, `/projects`, `/projects/agriculture`, `/projects/clean-water`, `/projects/education` — identical paths to before.

- [ ] **Step 6: Verify the site still renders**

Run `npm run dev`, open `http://localhost:3000`, and confirm the home page, Navbar, and Footer render exactly as before. Stop the dev server.

- [ ] **Step 7: Commit**

```bash
git add src/app
git commit -m "refactor(cms): move public pages into (site) route group"
```

---

## Task 7: Create the embedded Studio route

**Files:** Create `src/app/studio/[[...tool]]/page.tsx`

- [ ] **Step 1: Create the directory and page**

Create `src/app/studio/[[...tool]]/page.tsx`:
```tsx
import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

The relative import path `../../../../sanity.config` climbs four directories (`[[...tool]]` → `studio` → `app` → `src` → project root).

- [ ] **Step 2: Build to verify the Studio route compiles**

Run: `npm run build`
Expected: build succeeds; the route list now also shows `/studio/[[...tool]]`.

- [ ] **Step 3: Verify the Studio loads locally**

Run `npm run dev`, open `http://localhost:3000/studio`.
Expected: Sanity Studio loads (you may be prompted to log in with the Sanity account from Task 1). The left nav shows an empty content list (no schemas yet). The site Navbar/Footer must **not** appear on this page. Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add src/app/studio
git commit -m "feat(cms): embed Sanity Studio at /studio"
```

---

## Task 8: Create the webhook revalidation route

**Files:** Create `src/app/api/revalidate/route.ts`

- [ ] **Step 1: Create the route**

Create `src/app/api/revalidate/route.ts`:
```ts
import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

type WebhookPayload = { _type?: string };

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_WEBHOOK_SECRET,
    );

    if (isValidSignature === false) {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad request: missing _type", { status: 400 });
    }

    revalidateTag(body._type);

    return Response.json({ revalidated: true, type: body._type });
  } catch (err) {
    console.error("Revalidation webhook error:", err);
    return new Response("Internal server error", { status: 500 });
  }
}
```

This validates the Sanity webhook's HMAC signature, then revalidates every Next.js cache entry tagged with the published document's `_type` (e.g. `teamMember`).

- [ ] **Step 2: Build to verify the route compiles**

Run: `npm run build`
Expected: build succeeds; the route list shows `/api/revalidate`.

- [ ] **Step 3: Verify the route rejects unsigned requests**

Run `npm run dev`, then in a second terminal:
```bash
curl -s -X POST http://localhost:3000/api/revalidate -o /dev/null -w "%{http_code}\n"
```
Expected: `401` (no valid signature). Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add src/app/api
git commit -m "feat(cms): add Sanity webhook revalidation endpoint"
```

---

## Task 9: Deploy Phase 0 and verify the live Studio

**Files:** none (deploy)

- [ ] **Step 1: Push to trigger the Vercel deploy**

```bash
git push origin main
```
The `enviroone` Vercel project auto-builds from `main`.

- [ ] **Step 2: Confirm the deployment succeeded**

Wait ~2 minutes, then run: `npx vercel ls enviroone`
Expected: the newest deployment shows state `READY`. If it shows `ERROR`, run `npx vercel logs <deployment-url>` and fix the build before continuing.

- [ ] **Step 3: Verify the live Studio loads**

Open `https://enviroone.org/studio` in a browser.
Expected: Sanity Studio loads after login. The public site at `https://enviroone.org` is unchanged.

> **Phase 0 checkpoint.** Stop here for review. The Studio is live; the site is visually identical. Phase 1 begins next.

---

# PHASE 1 — TEAM MEMBERS

## Task 10: Add the Team Member schema

**Files:** Create `src/sanity/schemaTypes/teamMember.ts`; Modify `src/sanity/schemaTypes/index.ts`

- [ ] **Step 1: Create `src/sanity/schemaTypes/teamMember.ts`**

```ts
import { defineType, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: UsersIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "teamMember" }),
    defineField({
      name: "name",
      title: "Full name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the photo for screen readers.",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Show on website",
      type: "boolean",
      description: "Turn off to hide this person without deleting them.",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
```

- [ ] **Step 2: Register the schema in `src/sanity/schemaTypes/index.ts`**

Replace the file contents with:
```ts
import type { SchemaTypeDefinition } from "sanity";

import { teamMember } from "./teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember],
};
```

- [ ] **Step 3: Build to verify the schema compiles**

Run: `npm run build`
Expected: build succeeds with no type errors.

- [ ] **Step 4: Commit**

```bash
git add src/sanity/schemaTypes
git commit -m "feat(cms): add Team Member schema"
```

---

## Task 11: Add the orderable Studio structure

**Files:** Create `src/sanity/structure.ts`; Modify `sanity.config.ts`

- [ ] **Step 1: Create `src/sanity/structure.ts`**

```ts
import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { UsersIcon } from "@sanity/icons";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "teamMember",
        title: "Team Members",
        icon: UsersIcon,
        S,
        context,
      }),
    ]);
```

- [ ] **Step 2: Wire the structure into `sanity.config.ts`**

In `sanity.config.ts`, add the import below the existing `schema` import:
```ts
import { structure } from "./src/sanity/structure";
```
Then change the `structureTool()` call to:
```ts
    structureTool({ structure }),
```

- [ ] **Step 3: Build to verify**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Verify the Studio shows the Team Members list**

Run `npm run dev`, open `http://localhost:3000/studio`.
Expected: the left nav shows **Team Members**. Opening it shows an empty, drag-orderable list. Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add src/sanity/structure.ts sanity.config.ts
git commit -m "feat(cms): add orderable Team Members list to Studio"
```

---

## Task 12: Migrate the existing team members into Sanity

**Files:** Create `src/sanity/scripts/teamSeed.ts`, `src/sanity/scripts/importTeam.ts`

- [ ] **Step 1: Create the seed data file `src/sanity/scripts/teamSeed.ts`**

Open the current `src/components/about/FullTeam.tsx` and copy the 16 objects from its `teamMembers` array (the array spanning roughly lines 11–115). Paste them into the new file below, and for each object **rename the `image` key to `imageFile` and strip the `/team/` prefix** from its value (e.g. `image: "/team/david_kargbo.png"` becomes `imageFile: "david_kargbo.png"`).

```ts
export interface TeamSeedMember {
  name: string;
  role: string;
  bio: string;
  imageFile: string;
}

export const teamSeed: TeamSeedMember[] = [
  // Paste the 16 members here, in their current order, e.g.:
  // {
  //   name: "Dr. David M. Kargbo",
  //   role: "Chairman & CEO",
  //   bio: "Dr. David M. Kargbo is Chairman and CEO of EnviroOne...",
  //   imageFile: "david_kargbo.png",
  // },
  // ...15 more
];
```

- [ ] **Step 2: Verify the seed file has exactly 16 members**

Run: `npx tsx -e "import('./src/sanity/scripts/teamSeed.ts').then(m => console.log(m.teamSeed.length))"`
Expected: `16`.

- [ ] **Step 3: Verify every referenced photo file exists**

Run:
```bash
npx tsx -e "import('./src/sanity/scripts/teamSeed.ts').then(m => { const fs=require('fs'); m.teamSeed.forEach(t => { const p='public/team/'+t.imageFile; if(!fs.existsSync(p)) console.log('MISSING: '+p); }); console.log('check complete'); })"
```
Expected: `check complete` with **no** `MISSING:` lines. If a file is missing, correct the `imageFile` value to match an actual file in `public/team/`.

- [ ] **Step 4: Create the migration script `src/sanity/scripts/importTeam.ts`**

```ts
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
```

The script is idempotent: each document uses a deterministic `_id` (`teamMember.<slug>`) with `createOrReplace`, so re-running it overwrites rather than duplicates. `orderRank` is seeded with a zero-padded index; the orderable plugin reassigns proper ranks the first time an editor drags an item.

- [ ] **Step 5: Run the migration**

Run: `npx tsx --env-file=.env.local src/sanity/scripts/importTeam.ts`
Expected: 16 `done: <name>` lines followed by `Imported 16 team members.` with no errors.

- [ ] **Step 6: Verify the data landed in Sanity**

Open `http://localhost:3000/studio` (run `npm run dev` if needed) → **Team Members**.
Expected: 16 members, each with a photo, role, and biography. Stop the dev server.

- [ ] **Step 7: Commit**

```bash
git add src/sanity/scripts
git commit -m "feat(cms): add team member migration script and seed data"
```

---

## Task 13: Allow Sanity images, add the query, and generate types

**Files:** Modify `next.config.ts`, `package.json`; Create `src/sanity/queries.ts`, `sanity-typegen.json`

- [ ] **Step 1: Allow `cdn.sanity.io` images in `next.config.ts`**

In `next.config.ts`, add a third entry to the `remotePatterns` array (after the `images.squarespace-cdn.com` entry):
```ts
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
```

- [ ] **Step 2: Create the GROQ query `src/sanity/queries.ts`**

```ts
import { defineQuery } from "next-sanity";

export const teamMembersQuery = defineQuery(`
  *[_type == "teamMember" && isActive == true] | order(orderRank) {
    _id,
    name,
    role,
    bio,
    photo
  }
`);
```

- [ ] **Step 3: Create `sanity-typegen.json` in the project root**

```json
{
  "path": "./src/**/*.{ts,tsx,js,jsx}",
  "schema": "./schema.json",
  "generates": "./src/sanity/sanity.types.ts"
}
```

- [ ] **Step 4: Add a `typegen` script to `package.json`**

In the `"scripts"` block of `package.json`, add:
```json
    "typegen": "sanity schema extract --enforce-required-fields && sanity typegen generate",
```

- [ ] **Step 5: Generate the types**

Run: `npm run typegen`
Expected: prints that the schema was extracted and that types were generated; creates `schema.json` and `src/sanity/sanity.types.ts`. Confirm `src/sanity/sanity.types.ts` contains an exported type named `TeamMembersQueryResult`.

- [ ] **Step 6: Confirm generated files are git-ignored**

Run: `git status --porcelain schema.json src/sanity/sanity.types.ts`
Expected: **no output** (both ignored, per Task 3 Step 1).

- [ ] **Step 7: Build to verify**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 8: Commit**

```bash
git add next.config.ts src/sanity/queries.ts sanity-typegen.json package.json
git commit -m "feat(cms): add team query, image domain, and type generation"
```

---

## Task 14: Render the team section from Sanity

**Files:** Create `src/sanity/lib/team.ts`; Modify `src/components/about/FullTeam.tsx`, `src/app/(site)/about/page.tsx`

- [ ] **Step 1: Create the data-fetch function `src/sanity/lib/team.ts`**

```ts
import { client } from "./client";
import { teamMembersQuery } from "../queries";
import type { TeamMembersQueryResult } from "../sanity.types";

export async function getTeamMembers(): Promise<TeamMembersQueryResult> {
  return client.fetch(
    teamMembersQuery,
    {},
    { next: { tags: ["teamMember"], revalidate: 3600 } },
  );
}
```

The `tags: ["teamMember"]` option links this fetch to the webhook (Task 8 revalidates the `teamMember` tag). `revalidate: 3600` is the hourly fallback from the design spec, in case a webhook is ever missed.

- [ ] **Step 2: Update the imports in `src/components/about/FullTeam.tsx`**

Replace the existing import block at the top of the file:
```tsx
"use client";

import React, { useState } from "react";
import NextImage from "next/image";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
```
with:
```tsx
"use client";

import React, { useState } from "react";
import NextImage from "next/image";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import type { TeamMembersQueryResult } from "@/sanity/sanity.types";

type TeamMember = TeamMembersQueryResult[number];
```

(The `cn` import is removed — it is unused after this refactor.)

- [ ] **Step 3: Delete the hardcoded `teamMembers` array**

Delete the entire `const teamMembers = [ ... ];` array (the 16-object array near the top of the file). It is replaced by the `members` prop in the next step.

- [ ] **Step 4: Change the component signature to accept a `members` prop**

Replace:
```tsx
export const FullTeam = () => {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
```
with:
```tsx
export const FullTeam = ({ members }: { members: TeamMembersQueryResult }) => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
```

- [ ] **Step 5: Render the grid from `members` and use Sanity image URLs**

In the grid, replace:
```tsx
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={i}
```
with:
```tsx
                {members.map((member, i) => (
                    <motion.div
                        key={member._id}
```
Then, in the same card, replace the `<NextImage .../>` for the card photo:
```tsx
                            <NextImage
                                src={member.image}
                                alt={member.name}
                                width={400}
                                height={300}
                                loading="lazy"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
```
with:
```tsx
                            <NextImage
                                src={urlFor(member.photo).width(400).height(300).fit("max").url()}
                                alt={member.photo.alt ?? member.name}
                                width={400}
                                height={300}
                                loading="lazy"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
```

- [ ] **Step 6: Update the modal image and biography**

In the modal, replace the `<NextImage .../>` for the modal photo:
```tsx
                                    <NextImage
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
```
with:
```tsx
                                    <NextImage
                                        src={urlFor(selectedMember.photo).width(800).height(800).url()}
                                        alt={selectedMember.photo.alt ?? selectedMember.name}
                                        width={800}
                                        height={800}
                                        className="w-full h-full object-cover"
                                    />
```
Then replace the biography paragraph:
```tsx
                                    <div className="prose prose-stone max-w-none text-charcoal/80 leading-relaxed">
                                        <p>{selectedMember.bio}</p>
                                    </div>
```
with:
```tsx
                                    <div className="prose prose-stone max-w-none text-charcoal/80 leading-relaxed">
                                        <PortableText value={selectedMember.bio} />
                                    </div>
```

- [ ] **Step 7: Make the About page fetch and pass the team data**

In `src/app/(site)/about/page.tsx`, add the import:
```tsx
import { getTeamMembers } from "@/sanity/lib/team";
```
Change the component to `async` and pass the prop:
```tsx
export default async function AboutPage() {
    const teamMembers = await getTeamMembers();
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <MissionSection />
            <PhilosophyDetail />
            <AccomplishmentsSection />
            <FullTeam members={teamMembers} />
        </div>
    );
}
```

- [ ] **Step 8: Build to verify**

Run: `npm run build`
Expected: build succeeds with no type errors. The `/about` route still appears as `○ (Static)`.

- [ ] **Step 9: Verify the team section renders from Sanity**

Run `npm run dev`, open `http://localhost:3000/about`, scroll to **Our Team**.
Expected: all 16 members render with photos, roles, and bios; clicking **Read More** opens the modal with the biography. The section looks identical to before the migration. Stop the dev server.

- [ ] **Step 10: Commit**

```bash
git add src/sanity/lib/team.ts src/components/about/FullTeam.tsx "src/app/(site)/about/page.tsx"
git commit -m "feat(cms): render About team section from Sanity"
```

---

## Task 15: Connect the publish webhook and verify end-to-end

**Files:** none (external setup) + deploy

- [ ] **Step 1: Deploy the Phase 1 changes**

```bash
git push origin main
```
Wait ~2 minutes, then run `npx vercel ls enviroone` and confirm the newest deployment is `READY`.

- [ ] **Step 2: Create the Sanity webhook**

In a browser, go to https://www.sanity.io/manage → the `EnviroOne` project → **API** → **Webhooks** → **Create webhook**:
- Name: `Revalidate enviroone.org`
- URL: `https://enviroone.org/api/revalidate`
- Dataset: `production`
- Trigger on: **Create**, **Update**, **Delete**
- Filter: `_type == "teamMember"`
- Projection: `{ "_type": _type }`
- HTTP method: `POST`
- API version: `v2025-03-04`
- Secret: paste the `SANITY_WEBHOOK_SECRET` value from Task 3 Step 2

Save the webhook.

- [ ] **Step 3: Verify the live About page renders the team**

Open `https://enviroone.org/about`, scroll to **Our Team**.
Expected: all 16 members render correctly.

- [ ] **Step 4: Verify end-to-end editing**

In `https://enviroone.org/studio` → **Team Members**, open any member, change their role text, and click **Publish**. Wait ~15 seconds, then hard-refresh `https://enviroone.org/about`.
Expected: the changed role appears on the live page. Revert the change afterward (edit back + Publish) so live content is accurate.

- [ ] **Step 5: Verify the webhook delivery succeeded**

In https://www.sanity.io/manage → project → **API** → **Webhooks** → the webhook → **Attempts log**.
Expected: the most recent attempt shows HTTP `200`.

> **Phase 1 checkpoint.** The About-page team section is now fully editable by non-technical staff from `/studio`. This is the pattern Phases 2–5 reuse: define schema → add to structure → migrate data → add query + typegen → render from props → extend the webhook filter.

---

## Self-Review

**Spec coverage (against `2026-05-11-sanity-cms-design.md`):**
- Architecture (Studio at `/studio`, static site, webhook revalidation, Google SSO, `(site)` isolation) — Tasks 6, 7, 8, 9. Google SSO is Sanity's default login for Studio; adding the second editor email is a one-click invite in sanity.io/manage and is noted for the editor, not a code task.
- Content model — only `teamMember` is in scope for Phase 1 (Task 10); remaining schemas are explicitly deferred to later phases.
- Migration order — this plan is Phases 0–1 only, as stated in the header scope note.
- Image handling (Sanity CDN, `next/image`, required alt text) — Tasks 10 (alt validation), 13 (CDN domain), 14 (`urlFor`).
- Failure handling — build-time failure keeps the last good deploy (standard Vercel behavior); webhook-miss fallback is the `revalidate: 3600` in Task 14; signature rejection verified in Task 8 Step 3.

**Placeholder scan:** The only intentionally-incomplete block is `teamSeed.ts` in Task 12 Step 1 — it is filled by copying 16 existing objects from `FullTeam.tsx`, with exact transform instructions and a verification step (Step 2 checks the count is 16, Step 3 checks the files exist). This is a copy of existing visible code, not an unspecified placeholder.

**Type consistency:** `TeamMembersQueryResult` (generated, Task 13) is consumed consistently in `team.ts`, `FullTeam.tsx`, and via `TeamMember = TeamMembersQueryResult[number]`. The query (Task 13) projects `_id, name, role, bio, photo` — the same fields read in `FullTeam.tsx` (Task 14). The webhook revalidates the `teamMember` tag (Task 8); the fetch sets the `teamMember` tag (Task 14) — matched.

**Scope:** Phases 0–1 only; produces working, shippable software (live Studio + CMS-driven team section). Phases 2–5 each get their own plan.
