import React from 'react';
import { SponsorshipHero, type HeroImage } from '@/components/get-involved/SponsorshipHero';
import { SponsorshipOptions, type Tier } from '@/components/get-involved/SponsorshipOptions';
import { getSponsorshipPage } from '@/sanity/lib/pages';

type SponsorshipData = {
    heroHeading?: string | null;
    heroSubheading?: string | null;
    heroImage?: HeroImage;
    tiersHeading?: string | null;
    tiersIntro?: string | null;
    tiers?: Tier[] | null;
};

export default async function SponsorPage() {
    const data = (await getSponsorshipPage()) as SponsorshipData | null;

    return (
        <main className="flex flex-col min-h-screen">
            <SponsorshipHero
                heading={data?.heroHeading ?? null}
                subheading={data?.heroSubheading ?? null}
                image={data?.heroImage ?? null}
            />
            <SponsorshipOptions
                heading={data?.tiersHeading ?? null}
                intro={data?.tiersIntro ?? null}
                tiers={data?.tiers ?? null}
            />
        </main>
    );
}
