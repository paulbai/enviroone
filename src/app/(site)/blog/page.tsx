import { BlogList } from "@/components/blog/BlogList";
import { getBlogPosts } from "@/sanity/lib/blog";

export default async function BlogPage() {
    const posts = await getBlogPosts();
    return <BlogList posts={posts} />;
}
