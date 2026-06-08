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
