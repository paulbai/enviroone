import React from 'react';
import { GetInvolvedHero } from '@/components/get-involved/GetInvolvedHero';
import { WaysToGive } from '@/components/get-involved/WaysToGive';

export default function GetInvolvedPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <GetInvolvedHero />
            <WaysToGive />
        </main>
    );
}
