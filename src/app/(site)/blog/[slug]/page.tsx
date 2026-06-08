import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/blog/BlogPostView";
import { getBlogPostBySlug, getBlogPostSlugs } from "@/sanity/lib/blog";

export async function generateStaticParams() {
    const slugs = await getBlogPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post) notFound();
    return <BlogPostView post={post} />;
}
