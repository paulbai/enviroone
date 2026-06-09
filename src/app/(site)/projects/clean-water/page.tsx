import { notFound } from "next/navigation";
import { ProjectPageView } from "@/components/projects/ProjectPageView";
import { getProjectPageBySlug } from "@/sanity/lib/projects";
import { CleanWaterVillages } from "@/components/projects/CleanWaterVillages";

export default async function CleanWaterPage() {
    const post = await getProjectPageBySlug("clean-water");
    if (!post) notFound();
    return <ProjectPageView post={post} extraContent={<CleanWaterVillages />} />;
}
