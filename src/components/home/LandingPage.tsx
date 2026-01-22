"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { ScrollyBackground } from "./ScrollyBackground";
import { TacticalHUD } from "./TacticalHUD";
import { NarrativeContent } from "./NarrativeContent";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export const LandingPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative w-full h-[300vh] bg-charcoal z-10">
            {/* 1. Fixed Background & UI Layer */}
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <ScrollyBackground scrollYProgress={scrollYProgress} />
                <TacticalHUD />

                {/* Hero Title - Fades out on scroll */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 pointer-events-none mix-blend-normal">
                    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        All It Takes <span className="text-electric-lime drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">Is Three</span>
                    </h1>
                    <p className="font-mono text-sm md:text-base tracking-[0.3em] opacity-90 uppercase bg-black/40 backdrop-blur-sm px-4 py-2 inline-block rounded-full border border-white/10">
                        Agriculture • Clean Water • Education
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <ArrowDown className="text-electric-lime w-6 h-6" />
                </div>
            </div>

            {/* 2. Scrollable Narrative Layer */}
            <NarrativeContent />

            {/* 3. Final Spacer to allow full scroll of narrative */}
            <div className="h-[20vh]" />
        </section>
    );
};
