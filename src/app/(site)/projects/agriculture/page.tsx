import { notFound } from "next/navigation";
import { ProjectPageView } from "@/components/projects/ProjectPageView";
import { getProjectPageBySlug } from "@/sanity/lib/projects";

export default async function AgriculturePage() {
    const post = await getProjectPageBySlug("agriculture");
    if (!post) notFound();
    return <ProjectPageView post={post} />;
}
