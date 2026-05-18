# EnviroOne CMS — Design Spec

**Date:** 2026-05-11
**Status:** Approved design — ready for implementation planning
**Author:** Brainstormed with Claude

## Goal

Give EnviroOne's non-technical staff a content management dashboard so they can
edit the website themselves — text, images, team members, blog posts, project
pages, and impact stats — without a developer and without changing the site's
existing visual design.

## Decisions Locked During Brainstorming

| Question | Decision |
|---|---|
| Content scope | **Everything dynamic** — team, blog, project pages, impact stats, hero text, focus-area copy |
| "Without changing existing code" means | Keep the **visual design and layout identical**; refactoring components to read from a CMS is fine. Work **incrementally** with a review checkpoint per section. |
| Who edits | **Non-technical staff** — needs a polished UI (form fields, drag-drop image upload, a Publish button) |
| Number of editors | **1–2 editors** |
| CMS tool | **Sanity** (hosted, free tier) |

### Why Sanity (vs. Payload, Tina)

- Friendliest editor UX of the three — best fit for non-technical staff.
- Free tier (3 editors, 10k documents, 5GB assets) comfortably covers 1–2 editors.
- Built-in image CDN — useful for a photo-heavy NGO; auto WebP + resize.
- Best-in-class Next.js integration (`next-sanity`, webhook revalidation).
- Incremental rollout works cleanly — one collection migrated at a time.

Trade-off accepted: content lives in Sanity's cloud (vendor lock-in), but it is
exportable at any time.

## Section 1 — Architecture

Three pieces, all inside the existing Next.js project on Vercel:

1. **Public site** — the current pages, unchanged visually.
2. **`/studio`** — Sanity Studio admin UI, served from the same Next.js app at
   `enviroone.org/studio`. Same project, same domain, one bookmark for editors.
3. **Sanity Cloud** — stores structured content as JSON documents, hosts images
   on its CDN, and fires webhooks on publish.

Data flow:

- Public site **reads** content from Sanity at **build time** (static
  generation — preserves the current `○ (Static) prerendered` setup).
- Studio **writes** content to Sanity Cloud.
- On Publish, Sanity fires a **webhook** to a Next.js API route, which calls
  `revalidatePath()` to rebuild only the affected pages. Propagation ≈ 5–15s.

Key decisions:

- Studio at `enviroone.org/studio` (not a separate subdomain) — same Vercel
  project, no separate hosting or auth.
- Public site stays **statically rendered** — fast, and visitor traffic never
  touches the Sanity free-tier quota.
- `/studio` auth is **Google SSO** — admins added by email; no passwords.
- Component JSX, Tailwind classes, and animations are unchanged. The only change
  inside each component is the **source** of its text/image data (Sanity instead
  of hardcoded values).

## Section 2 — Content Model (Sanity Schemas)

Content is split into **singletons** (one-of-a-kind documents, edited in place)
and **collections** (lists of many documents). Field names are written for the
editor, not for code.

### Singletons (12)

| Document | Controls |
|---|---|
| Site Settings | Org name, primary email, phone numbers (SL + USA), addresses, social URLs |
| Home Hero | Headline, accent pill text, background image |
| Home — Impact Download | Title, description, PDF file upload |
| Home — Focus Areas Intro | Section heading, description paragraph |
| About Page | Mission, philosophy, full team intro copy |
| Donate Page | Hero copy, donation options text |
| Get Involved Page | Hero copy, "Make an Impact" intro |
| Project — Agriculture | Hero, body sections, gallery, related photos |
| Project — Clean Water | Hero, body sections, bento grid items, Songo video |
| Project — Education | Hero, body sections, gallery |
| Blog Index Page | Page title + intro paragraph above the posts list |
| Footer Resources | List of downloadable resources (PDFs, `.rar` files) |

### Collections (5)

| Collection | Fields | Notes |
|---|---|---|
| Team Members | Name, role, bio (rich text), photo, display order, active flag | Active flag hides a person without deleting them. Drag-and-drop reorder. |
| Blog Posts | Title, URL slug (auto), publish date, hero image, body (rich text + image blocks), excerpt, tags | Replaces `src/app/blog/data.ts` |
| Focus Areas | Title, description, image, link, alignment (left/right) | The 3 home cards — currently hardcoded in `FocusAreas.tsx` |
| Impact Stats | Number, suffix (`+`, `%`, `/7`), label, icon (dropdown), grid span (small/medium/large) | The 9 stat cards |
| Volunteer Roles / Sponsorship Tiers | Title, description, fields per role | For the Get Involved subpages |

### Reusable building blocks

- **Rich text (Portable Text)** — bios, blog bodies, project body. Editors get
  bold/italic/links/headings/bullet lists/inline images (Google-Docs-like).
- **Image with alt text** — every image upload requires alt text (validation
  enforced). Image CDN auto-handles WebP + on-the-fly resize.
- **Internal link picker** — editors pick site pages from a dropdown instead of
  typing URLs.

### Studio navigation (left nav)

```
Site
  - Site Settings
  - Footer Resources
Home Page
  - Hero
  - Impact Download
  - Focus Areas Intro
Pages
  - About
  - Donate
  - Get Involved
Projects
  - Agriculture
  - Clean Water
  - Education
Team Members  (list)
Blog Posts    (list)
Focus Areas   (list)
Impact Stats  (list)
```

### Deliberate scoping choices

1. **Project pages are singletons, not a collection** — each project has unique
   layout needs; separate singletons give each a tailored form.
2. **Blog uses Portable Text** — renders into the existing blog layout; editors
   see no difference from today.
3. **No multilingual setup** — the site is English-only; i18n would double schema
   complexity. Can be added later.
4. **No comments, forms, or analytics in the CMS** — out of scope; those stay in
   existing tools or get added separately later.

## Section 3 — Migration Order (Incremental Checkpoints)

Six phases. Each is a **separate Git branch → PR → Vercel preview deploy** that
the user reviews and approves before the next phase starts. The site stays fully
live throughout. After each phase, that content is immediately editable by the
client — value is delivered incrementally.

| Phase | Work | Visible change | Checkpoint |
|---|---|---|---|
| 0 — Foundation | Install Sanity, create project, deploy Studio at `/studio`, wire Google SSO + publish→rebuild webhook | None | Log into `/studio`, confirm it loads |
| 1 — Team Members | Migrate 16 team members + photos; refactor `FullTeam.tsx` | None | Edit a bio, watch it go live in ~10s |
| 2 — Blog Posts | Migrate `blog/data.ts`; refactor blog list + `[slug]` pages | None | Write, publish, delete a test post |
| 3 — Home Page | Hero, Focus Areas, Impact Stats, Impact Download → Sanity | None | Change the hero headline, confirm update |
| 4 — Project Pages | Agriculture, Clean Water, Education singletons (bento grid, Songo video) | None | Edit each project page |
| 5 — Remaining Pages | About, Donate, Get Involved, Footer, Site Settings | None | Final review |

Order rationale:

- **Phase 0 first** validates the whole pipeline (auth, Studio, webhook,
  revalidation) before touching a component. Lowest risk.
- **Team first** because `FullTeam.tsx` already stores its data as a clean array
  — maps to a Sanity collection nearly 1:1. Easiest real migration; validates the
  pattern repeated everywhere else.
- **Projects late** because they are the most complex (custom layouts, embedded
  video) — the pattern is well-rehearsed by then.
- **Footer/Settings last** — low-churn, low-risk.

Properties:

- Stopping after any phase leaves the site in a valid state (some content
  CMS-driven, the rest still hardcoded — nothing half-broken).
- Estimated effort: Phase 0 ≈ 1 day; Phases 1–2 ≈ 1 day each; Phase 3 ≈ 1–2 days;
  Phase 4 ≈ 2 days; Phase 5 ≈ 1 day. ≈ **7–8 working days**, spread across review
  cycles.

## Section 4 — Image Migration & Handling

Not every image becomes CMS-managed.

| Stays in `/public` (code) | Moves to Sanity CDN |
|---|---|
| Logo, favicon | Team member photos (~16) |
| Decorative SVGs, grain textures | Project page images & galleries |
| Social icons (X, Tumblr PNGs) | Hero background images |
| | Focus-area card images |
| | Blog post images |

PDFs and `.rar` resources become Sanity file uploads under "Footer Resources" so
the client can swap them.

Rule of thumb: if an editor would ever want to change it → Sanity. If it is
structural/decorative → stays in code.

**One-time migration:** a dev-run script reads current `/public` images, uploads
them to Sanity's asset store, and links each to the right document. Editors never
do this — it is a dev task during each phase.

**New uploads:** editor drags an image into Studio → Sanity CDN auto-generates
WebP and multiple sizes. The site keeps using `next/image` with Sanity as the
image source, preserving existing lazy-loading and optimization. Mobile users get
smaller images automatically.

Every image upload requires alt text (schema validation) — accessibility + SEO.

## Section 5 — Failure Handling

The site is statically generated, which makes it naturally resilient.

| Failure | Result |
|---|---|
| Sanity down during a Vercel build | Build fails → Vercel keeps the last good deploy live. Visitors see no difference. Retry later. |
| Sanity down while site is live | Zero impact — pages are pre-built static HTML, no runtime Sanity calls. |
| Sanity down when an editor tries to edit | `/studio` will not load; public site is fine. Editor retries later. |
| Publish webhook fails to fire | Content is saved in Sanity; site does not update. Mitigation: fallback timed revalidation (every 60 min) + a manual "Rebuild site" button in Studio. |
| Editor deletes a document a page needs | Singletons are locked from deletion in Studio config. Collection-driven components handle empty data gracefully (empty list renders nothing, not a crash). |
| Editor publishes incomplete data | Schema validation rules block publishing until required fields are filled. |

**Draft vs. published:** Sanity separates drafts from published content. The
public site reads only *published* docs.

**Rollback:** every publish is versioned in Sanity's document history; any
document can be reverted to a previous version with one click.

## Out of Scope

- Multilingual / i18n content.
- Comments, contact forms, or analytics inside the CMS.
- Redesigning any page layout or visual styling.
- Changing hosting (stays on Vercel) or the domain (stays `enviroone.org`).

## Open Items for Implementation Planning

- Exact Sanity project/dataset names and the two editor email addresses
  (collected at Phase 0).
- Which `next-sanity` / Studio version to pin against Next.js 16.
- Webhook secret + the revalidation API route path.
