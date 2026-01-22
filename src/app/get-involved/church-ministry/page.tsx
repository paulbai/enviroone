import React from 'react';
import { ChurchMinistryHero } from '@/components/get-involved/ChurchMinistryHero';
import { ChurchMinistryContent } from '@/components/get-involved/ChurchMinistryContent';

export default function ChurchMinistryPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <ChurchMinistryHero />
            <ChurchMinistryContent />
        </main>
    );
}
