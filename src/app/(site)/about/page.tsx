import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionSection, type MissionBlocks } from "@/components/about/MissionSection";
import { PhilosophyDetail, type PhilosophyItem } from "@/components/about/PhilosophyDetail";
import { AccomplishmentsSection, type AccomplishmentItem } from "@/components/about/AccomplishmentsSection";
import { FullTeam } from "@/components/about/FullTeam";
import { getAboutPage } from "@/sanity/lib/pages";
import { getTeamMembers } from "@/sanity/lib/team";

type AboutData = {
    heroHeading?: string | null;
    heroSubheading?: string | null;
    missionHeading?: string | null;
    missionBody?: MissionBlocks | null;
    philosophyHeading?: string | null;
    philosophyItems?: PhilosophyItem[] | null;
    accomplishmentsHeading?: string | null;
    accomplishmentsItems?: AccomplishmentItem[] | null;
};

export default async function AboutPage() {
    const [data, teamMembers] = await Promise.all([getAboutPage(), getTeamMembers()]);
    const d = (data ?? null) as AboutData | null;

    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero heading={d?.heroHeading ?? null} subheading={d?.heroSubheading ?? null} />
            <MissionSection heading={d?.missionHeading ?? null} body={d?.missionBody ?? null} />
            <PhilosophyDetail heading={d?.philosophyHeading ?? null} items={d?.philosophyItems ?? null} />
            <AccomplishmentsSection
                heading={d?.accomplishmentsHeading ?? null}
                items={d?.accomplishmentsItems ?? null}
            />
            <FullTeam members={teamMembers} />
        </div>
    );
}
