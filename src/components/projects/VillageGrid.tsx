"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { VillageCard } from './VillageCard';
import { Village } from '@/app/projects/clean-water/villageData';

interface VillageGridProps {
    villages: Village[];
    onVillageClick: (villageId: string) => void;
}

export const VillageGrid = ({ villages, onVillageClick }: VillageGridProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
        >
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
                {villages.map((village) => (
                    <VillageCard
                        key={village.id}
                        id={village.id}
                        name={village.name}
                        displayName={village.displayName}
                        heroImage={village.heroImage}
                        projectCount={village.projectCount}
                        isLarge={village.id === 'lungi'} // Lungi gets the large card
                        onClick={() => onVillageClick(village.id)}
                    />
                ))}
            </div>
        </motion.div>
    );
};
