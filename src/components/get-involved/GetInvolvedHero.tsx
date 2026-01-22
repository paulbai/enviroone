"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const GetInvolvedHero = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-hero.jpg" // Using about-hero as placeholder, ideally user provides a new one or we pick another
                    alt="Get Involved"
                    fill
                    className="object-cover brightness-[0.6]"
                    priority
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
                    Get Involved
                </h1>
                <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto">
                    Together, we can create lasting change. Choose how you want to make a difference today.
                </p>
            </motion.div>
        </section>
    );
};
