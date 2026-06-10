import React from 'react';
import { GetInvolvedHero, type HeroImage } from '@/components/get-involved/GetInvolvedHero';
import { WaysToGive, type WayToGive } from '@/components/get-involved/WaysToGive';
import { getGetInvolvedPage } from '@/sanity/lib/pages';

type GetInvolvedData = {
    heroHeading?: string | null;
    heroSubheading?: string | null;
    heroImage?: HeroImage;
    waysHeading?: string | null;
    waysIntro?: string | null;
    waysToGive?: WayToGive[] | null;
};

export default async function GetInvolvedPage() {
    const data = (await getGetInvolvedPage()) as GetInvolvedData | null;

    return (
        <main className="flex flex-col min-h-screen">
            <GetInvolvedHero
                heading={data?.heroHeading ?? null}
                subheading={data?.heroSubheading ?? null}
                image={data?.heroImage ?? null}
            />
            <WaysToGive
                heading={data?.waysHeading ?? null}
                intro={data?.waysIntro ?? null}
                ways={data?.waysToGive ?? null}
            />
        </main>
    );
}
