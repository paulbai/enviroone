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

export type GetInvolvedHeroProps = {
    heading?: string | null;
    subheading?: string | null;
    image?: HeroImage;
};

export const GetInvolvedHero = ({ heading, subheading, image }: GetInvolvedHeroProps = {}) => {
    const imgSrc =
        image && image.asset
            ? urlFor(image as any).width(1600).height(900).fit("max").url()
            : "/images/get_involved_hero_new.jpg";
    const imgAlt = (image && image.alt) || "Get Involved";

    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    className="object-cover brightness-[0.6]"
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
                <h1 className="text-5xl md:text-7xl font-display font-bold text-cream mb-6 drop-shadow-lg">
                    {heading ?? "Get Involved"}
                </h1>
                <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto">
                    {subheading ?? "Together, we can create lasting change. Choose how you want to make a difference today."}
                </p>
            </motion.div>
        </section>
    );
};
