import { client } from "./client";
import { blogPostsListQuery, blogPostBySlugQuery } from "../queries";
import type {
  BlogPostsListQueryResult,
  BlogPostBySlugQueryResult,
} from "../sanity.types";

export async function getBlogPosts(): Promise<BlogPostsListQueryResult> {
  return client.fetch(
    blogPostsListQuery,
    {},
    { next: { tags: ["blogPost"], revalidate: 3600 } },
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPostBySlugQueryResult> {
  return client.fetch(
    blogPostBySlugQuery,
    { slug },
    { next: { tags: ["blogPost"], revalidate: 3600 } },
  );
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const posts = await client.fetch(
    blogPostsListQuery,
    {},
    { next: { tags: ["blogPost"], revalidate: 3600 } },
  );
  return posts.map((p) => p.slug);
}
