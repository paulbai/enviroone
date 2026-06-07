import React from 'react';
import { DonateHero } from '@/components/donate/DonateHero';
import { DonateOptions } from '@/components/donate/DonateOptions';

export default function DonatePage() {
    return (
        <main className="flex flex-col min-h-screen">
            <DonateHero />
            <DonateOptions />
        </main>
    );
}
