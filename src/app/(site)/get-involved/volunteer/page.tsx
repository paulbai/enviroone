import React from 'react';
import { VolunteerHero, type HeroImage } from '@/components/get-involved/VolunteerHero';
import { VolunteerRoles, type Role } from '@/components/get-involved/VolunteerRoles';
import { getVolunteerPage } from '@/sanity/lib/pages';

type VolunteerData = {
    heroHeading?: string | null;
    heroSubheading?: string | null;
    heroImage?: HeroImage;
    rolesHeading?: string | null;
    rolesIntro?: string | null;
    roles?: Role[] | null;
};

export default async function VolunteerPage() {
    const data = (await getVolunteerPage()) as VolunteerData | null;

    return (
        <main className="flex flex-col min-h-screen">
            <VolunteerHero
                heading={data?.heroHeading ?? null}
                subheading={data?.heroSubheading ?? null}
                image={data?.heroImage ?? null}
            />
            <VolunteerRoles
                heading={data?.rolesHeading ?? null}
                intro={data?.rolesIntro ?? null}
                roles={data?.roles ?? null}
            />
        </main>
    );
}
