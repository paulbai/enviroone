import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionSection } from "@/components/about/MissionSection";
import { PhilosophyDetail } from "@/components/about/PhilosophyDetail";
import { AccomplishmentsSection } from "@/components/about/AccomplishmentsSection";
import { FullTeam } from "@/components/about/FullTeam";
import { getTeamMembers } from "@/sanity/lib/team";

export default async function AboutPage() {
    const teamMembers = await getTeamMembers();
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <MissionSection />
            <PhilosophyDetail />
            <AccomplishmentsSection />
            <FullTeam members={teamMembers} />
        </div>
    );
}
