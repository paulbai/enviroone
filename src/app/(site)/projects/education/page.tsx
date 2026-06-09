import { notFound } from "next/navigation";
import { ProjectPageView } from "@/components/projects/ProjectPageView";
import { getProjectPageBySlug } from "@/sanity/lib/projects";

export default async function EducationPage() {
    const post = await getProjectPageBySlug("education");
    if (!post) notFound();
    return <ProjectPageView post={post} />;
}
