import React from 'react';
import { SponsorshipHero } from '@/components/get-involved/SponsorshipHero';
import { SponsorshipOptions } from '@/components/get-involved/SponsorshipOptions';

export default function SponsorPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <SponsorshipHero />
            <SponsorshipOptions />
        </main>
    );
}
