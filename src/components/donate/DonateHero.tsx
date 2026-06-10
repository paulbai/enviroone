"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export type HeroImage = {
    asset?: unknown;
    alt: string;
    _type: "image";
} | null | undefined;

export type DonateHeroProps = {
    heading?: string | null;
    subheading?: string | null;
    image?: HeroImage;
};

export const DonateHero = ({ heading, subheading, image }: DonateHeroProps = {}) => {
    const imgSrc =
        image && image.asset
            ? urlFor(image as any).width(1600).height(900).fit("max").url()
            : "/projects/clean_water_makeni_grid.jpg";
    const imgAlt = (image && image.alt) || "Donate to EnviroOne";

    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    className="object-cover object-[center_30%] md:object-center brightness-[0.5]"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/40 to-forest-dark/80" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl px-4 text-center"
            >
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-golden/20 backdrop-blur-sm border border-golden/30">
                    <span className="text-golden font-bold tracking-wider text-sm uppercase">Give Hope Today</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-cream mb-6 drop-shadow-lg">
                    {heading ?? "Your Generosity Transforms Lives"}
                </h1>
                <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto mb-8">
                    {subheading ??
                        "Every dollar you give helps provide clean water, sustainable agriculture, and education to communities in Sierra Leone."}
                </p>
            </motion.div>
        </section>
    );
};
