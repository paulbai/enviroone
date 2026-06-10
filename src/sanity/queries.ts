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

export const blogPostsListQuery = defineQuery(`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    author,
    heroImage,
    excerpt
  }
`);

export const blogPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    author,
    heroImage,
    excerpt,
    body
  }
`);

export const homeHeroQuery = defineQuery(`
  *[_id == "homeHero"][0] {
    headline,
    accentText,
    pillText,
    damagedImage,
    restoredImage,
    heroChildrenImage
  }
`);

export const focusAreasIntroQuery = defineQuery(`
  *[_id == "focusAreasIntro"][0] {
    heading,
    description
  }
`);

export const impactDownloadQuery = defineQuery(`
  *[_id == "impactDownload"][0] {
    title,
    description,
    buttonLabel,
    "pdfUrl": pdfFile.asset->url
  }
`);

export const focusAreasQuery = defineQuery(`
  *[_type == "focusArea"] | order(orderRank) {
    _id,
    title,
    description,
    image,
    link,
    align
  }
`);

export const impactStatsQuery = defineQuery(`
  *[_type == "impactStat"] | order(orderRank) {
    _id,
    value,
    suffix,
    label,
    icon,
    gridSpan,
    accent
  }
`);

export const projectsIndexQuery = defineQuery(`
  *[_id == "projectsIndex"][0] { heading, description }
`);

export const projectCardsQuery = defineQuery(`
  *[_type == "projectPage"] | order(orderRank) {
    _id, title, "slug": slug.current, icon, accent, summary, cardImage
  }
`);

export const projectPagesSlugsQuery = defineQuery(`
  *[_type == "projectPage"] { "slug": slug.current }
`);

export const projectPageBySlugQuery = defineQuery(`
  *[_type == "projectPage" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, icon, accent, summary, cardImage,
    body, carousel, featuredVideoId, featuredVideoLabel
  }
`);

export const aboutPageQuery = defineQuery(`
  *[_id == "aboutPage"][0] {
    heroHeading,
    heroSubheading,
    heroImage,
    missionHeading,
    missionBody,
    philosophyHeading,
    philosophyItems[] { _key, title, description, icon },
    accomplishmentsHeading,
    accomplishmentsItems[] { _key, year, title, description }
  }
`);

export const donatePageQuery = defineQuery(`
  *[_id == "donatePage"][0] {
    heroHeading,
    heroSubheading,
    heroImage,
    optionsHeading,
    optionsIntro,
    donationOptions[] { _key, title, description, amount, link }
  }
`);

export const getInvolvedPageQuery = defineQuery(`
  *[_id == "getInvolvedPage"][0] {
    heroHeading,
    heroSubheading,
    heroImage,
    waysHeading,
    waysIntro,
    waysToGive[] { _key, title, description, image, href, align }
  }
`);

export const volunteerPageQuery = defineQuery(`
  *[_id == "volunteerPage"][0] {
    heroHeading,
    heroSubheading,
    heroImage,
    rolesHeading,
    rolesIntro,
    roles[] { _key, title, description, tasks, image, align }
  }
`);

export const sponsorshipPageQuery = defineQuery(`
  *[_id == "sponsorshipPage"][0] {
    heroHeading,
    heroSubheading,
    heroImage,
    tiersHeading,
    tiersIntro,
    tiers[] { _key, title, problem, solution, impact, cost, image, donateLink, align }
  }
`);

export const churchMinistryPageQuery = defineQuery(`
  *[_id == "churchMinistryPage"][0] {
    heroHeading,
    heroSubheading,
    heroImage,
    body
  }
`);

export const siteSettingsQuery = defineQuery(`
  *[_id == "siteSettings"][0] {
    orgName,
    primaryEmail,
    sierraLeoneOffice,
    usaOffice,
    socials,
    footerResources[] {
      _key,
      title,
      description,
      openInNewTab,
      "fileUrl": file.asset->url
    }
  }
`);
