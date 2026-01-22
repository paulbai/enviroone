"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ChurchMinistryHero = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/projects/clean_water_makeni_trinity_banner.png"
                    alt="Church Ministry"
                    fill
                    className="object-cover brightness-[0.5]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/60 via-forest-dark/30 to-forest-dark/70" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl px-4 text-center"
            >
                <h1 className="text-5xl md:text-7xl font-display font-bold text-cream mb-6 drop-shadow-lg">
                    Church Ministry
                </h1>
                <p className="text-xl md:text-2xl text-cream/90 font-light max-w-3xl mx-auto italic">
                    “Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.” — Matthew 25:40
                </p>
            </motion.div>
        </section>
    );
};
