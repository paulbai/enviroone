import { ProjectsList } from "@/components/projects/ProjectsList";
import { getProjectsIndex, getProjectCards } from "@/sanity/lib/projects";

export default async function ProjectsPage() {
    const [intro, projects] = await Promise.all([
        getProjectsIndex(),
        getProjectCards(),
    ]);
    const safeIntro = intro ?? {
        heading: "Our Projects",
        description:
            "Since 2011, EnviroOne has been implementing programs that have impacted lives in Sierra Leone through Education, Clean Water via our Well Drilling Program, and Agriculture.",
    };
    return <ProjectsList intro={safeIntro} projects={projects} />;
}
