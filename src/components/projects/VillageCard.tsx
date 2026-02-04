"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface VillageCardProps {
    id: string;
    name: string;
    displayName: string;
    heroImage: string;
    projectCount: number;
    isLarge?: boolean;
    onClick: () => void;
}

export const VillageCard = ({
    name,
    displayName,
    heroImage,
    projectCount,
    isLarge = false,
    onClick
}: VillageCardProps) => {
    return (
        <motion.div
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-300",
                isLarge ? "col-span-2 row-span-2 min-h-[400px]" : "col-span-1 row-span-1 min-h-[250px]"
            )}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={heroImage}
                    alt={displayName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                {/* Project Count Badge */}
                <div className="mb-3">
                    <span className="inline-block bg-electric-lime text-forest font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {projectCount} {projectCount === 1 ? 'Well' : 'Wells'}
                    </span>
                </div>

                {/* Village Name */}
                <h3 className={cn(
                    "font-display font-bold text-white drop-shadow-lg leading-tight",
                    isLarge ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                )}>
                    {name}
                </h3>

                {/* Hover Indicator */}
                <div className="mt-3 flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Projects</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};
