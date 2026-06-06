import React from 'react';
import { VolunteerHero } from '@/components/get-involved/VolunteerHero';
import { VolunteerRoles } from '@/components/get-involved/VolunteerRoles';

export default function VolunteerPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <VolunteerHero />
            <VolunteerRoles />
        </main>
    );
}
