"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { ScrollyBackground } from "./ScrollyBackground";
import { TacticalHUD } from "./TacticalHUD";
import { NarrativeContent } from "./NarrativeContent";
import { ArrowDown } from "lucide-react";
import type { HomeHeroQueryResult } from "@/sanity/sanity.types";

interface LandingPageProps {
    hero: HomeHeroQueryResult;
}

const DEFAULT_HEADLINE = "All It Takes Is Three";
const DEFAULT_ACCENT = "Is Three";
const DEFAULT_PILL = "Food • Health • Knowledge";

export const LandingPage = ({ hero }: LandingPageProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headline = hero?.headline ?? DEFAULT_HEADLINE;
    const accent = hero?.accentText ?? DEFAULT_ACCENT;
    const pill = hero?.pillText ?? DEFAULT_PILL;

    // If accent is a suffix of headline, split headline into prefix + accent.
    let prefix = headline;
    let accentText = "";
    if (accent && headline.endsWith(accent)) {
        prefix = headline.slice(0, headline.length - accent.length);
        accentText = accent;
    }

    const damagedImage = hero?.damagedImage ?? null;
    const restoredImage = hero?.restoredImage ?? null;

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-charcoal z-10">
            {/* 1. Fixed Background & UI Layer */}
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <ScrollyBackground
                    scrollYProgress={scrollYProgress}
                    damagedImage={damagedImage}
                    restoredImage={restoredImage}
                />
                <TacticalHUD />

                {/* Hero Title - Fades out on scroll */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 pointer-events-none mix-blend-normal">
                    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                        {prefix}
                        {accentText && (
                            <span className="text-electric-lime drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]">{accentText}</span>
                        )}
                    </h1>
                    <p className="font-mono text-sm md:text-base tracking-[0.3em] opacity-90 uppercase bg-black/40 backdrop-blur-sm px-4 py-2 inline-block rounded-full border border-white/10">
                        {pill}
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
