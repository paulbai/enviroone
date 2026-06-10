import React from 'react';
import { DonateHero, type HeroImage } from '@/components/donate/DonateHero';
import { DonateOptions, type DonationOption } from '@/components/donate/DonateOptions';
import { getDonatePage } from '@/sanity/lib/pages';

type DonateData = {
    heroHeading?: string | null;
    heroSubheading?: string | null;
    heroImage?: HeroImage;
    optionsHeading?: string | null;
    optionsIntro?: string | null;
    donationOptions?: DonationOption[] | null;
};

export default async function DonatePage() {
    const data = (await getDonatePage()) as DonateData | null;

    return (
        <main className="flex flex-col min-h-screen">
            <DonateHero
                heading={data?.heroHeading ?? null}
                subheading={data?.heroSubheading ?? null}
                image={data?.heroImage ?? null}
            />
            <DonateOptions
                heading={data?.optionsHeading ?? null}
                intro={data?.optionsIntro ?? null}
                options={data?.donationOptions ?? null}
            />
        </main>
    );
}
