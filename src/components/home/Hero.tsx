"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";

import { VideoModal } from "@/components/ui/VideoModal";
import { Play } from "lucide-react";

// Placeholder animation data - in real project, import specific JSON
const waterCycleAnimation = {
    v: "5.5.7",
    fr: 29.9700012207031,
    ip: 0,
    op: 180.00000733155,
    w: 500,
    h: 500,
    nm: "Water Cycle",
    ddd: 0,
    assets: [],
    layers: []
};

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

    // Parallax effects
    const yBg = useTransform(scrollY, [0, 1000], [0, 500]); // Background moves slower (0.5x speed)
    const opacityContent = useTransform(scrollY, [0, 300], [1, 0]); // Content fades out

    const headline = "ALL IT TAKES IS THREE";
    const words = headline.split(" ");

    const wordVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 2 + i * 0.15, // Start after initial load animations (2s delay)
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9] as const,
            },
        }),
    };

    return (
        <section ref={containerRef} className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 h-full w-full">
                    <Image
                        src="/images/hero-children.jpg?v=2"
                        alt="Children in Sierra Leone"
                        fill
                        className="object-cover transform scale-105"
                        priority
                    />
                </div>
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
            </motion.div>

            {/* Lottie Water Cycle Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
            >
                <Lottie
                    animationData={waterCycleAnimation}
                    loop={true}
                    className="w-full h-full object-cover opacity-50"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity: opacityContent }}
                className="relative z-20 max-w-[var(--spacing-container)] px-4 md:px-8 text-center"
            >
                {/* Split Text Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-display font-bold text-cream mb-6 tracking-tight drop-shadow-lg uppercase">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={wordVariants}
                            className="inline-block mr-[0.25em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto mb-10 font-sans font-light leading-relaxed"
                >
                    Established in 2007, EnviroOne helps communities in Sierra Leone and beyond adapt to climate change by advancing agroecology, clean water access, traditional health practices, and environmental education.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 4.2, duration: 0.6, type: "spring" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >


                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cream hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    >
                        <div className="w-8 h-8 rounded-full bg-cream text-forest flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                        </div>
                        <span className="font-medium tracking-wide">Watch Our Story</span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-cream/60 text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-cream to-transparent"
                />
            </motion.div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoId="DiXj55oQH58"
            />
        </section>
    );
};
