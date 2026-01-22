"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CertificationsModal } from "@/components/ui/CertificationsModal";

export const AboutHero = () => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-hero.jpg"
                    alt="EnviroOne Community"
                    fill
                    className="object-cover brightness-[0.7]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl px-4 text-center"
            >
                <h1 className="text-5xl md:text-7xl font-display font-bold text-cream mb-6 drop-shadow-lg">
                    Building a Sustainable Future
                </h1>
                <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto mb-10">
                    Promoting sustainable environmental and agricultural activities to lift communities out of poverty.
                </p>

                <Button
                    variant="primary"
                    icon="arrow"
                    onClick={() => setIsCertModalOpen(true)}
                    className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
                >
                    View Certifications
                </Button>

                <CertificationsModal
                    isOpen={isCertModalOpen}
                    onClose={() => setIsCertModalOpen(false)}
                />
            </motion.div>
        </section>
    );
};
