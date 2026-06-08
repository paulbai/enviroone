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
