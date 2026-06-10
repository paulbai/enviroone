import React from 'react';
import { ChurchMinistryHero, type HeroImage } from '@/components/get-involved/ChurchMinistryHero';
import { ChurchMinistryContent } from '@/components/get-involved/ChurchMinistryContent';
import { getChurchMinistryPage } from '@/sanity/lib/pages';

type ChurchMinistryData = {
    heroHeading?: string | null;
    heroSubheading?: string | null;
    heroImage?: HeroImage;
};

export default async function ChurchMinistryPage() {
    const data = (await getChurchMinistryPage()) as ChurchMinistryData | null;

    return (
        <main className="flex flex-col min-h-screen">
            <ChurchMinistryHero
                heading={data?.heroHeading ?? null}
                subheading={data?.heroSubheading ?? null}
                image={data?.heroImage ?? null}
            />
            <ChurchMinistryContent />
        </main>
    );
}
