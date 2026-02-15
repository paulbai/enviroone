"use client";

import React from "react";
import { motion } from "framer-motion";

const narratives = [
    {
        id: "mission",
        label: "ESTABLISHED: 2007",
        title: "Our Core Mission",
        description: "EnviroOne helps communities in Sierra Leone and beyond adapt to climate change by advancing agroecology, clean water access, traditional health practices, and environmental education.",
        color: "text-electric-lime",
        borderColor: "hover:border-electric-lime/50"
    },
    {
        id: "challenge",
        label: "CURRENT STATUS",
        title: "The Challenge",
        description: "Climate change risks include erratic rains, dry spells, and reduced farm yields. Energy poverty forces rural villages to rely on kerosene, impacting health and literacy.",
        color: "text-terracotta",
        borderColor: "hover:border-terracotta/50"
    },
    {
        id: "approach",
        label: "STRATEGIC FRAMEWORK",
        title: "All It Takes Is Three",
        description: "Our integrated approach addresses the trifecta of human development: Food (Agriculture), Health (Clean Water), and Knowledge (Education).",
        color: "text-water",
        borderColor: "hover:border-water/50"
    }
];

const stickyNarrative = {
    id: "impact",
    label: "PROGRAM IMPACT",
    title: "Proven Results",
    description: "Over 105,000 individuals provided with clean water. 30+ wells built or retrofitted. Hundreds of farmers supported with seeds and tools.",
    color: "text-forest",
    borderColor: "hover:border-forest/50"
};

export const NarrativeContent = () => {
    return (
        <div className="relative z-20 w-full max-w-[var(--spacing-container)] mx-auto px-4 md:px-8 pointer-events-none">
            <div className="w-full md:w-[45%] flex flex-col gap-[35vh] py-[30vh]">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 md:left-12 top-0 bottom-0 w-[1px] bg-white/20 -z-10" />

                {narratives.map((item, index) => (
                    <NarrativeBlock key={item.id} item={item} index={index} />
                ))}
            </div>

            {/* Static "Proven Results" Card - Sticky at the end/bottom */}
            <div className="pointer-events-auto absolute bottom-[-15vh] md:bottom-[-20vh] left-0 md:left-8 w-full md:w-[45%] z-30 px-4 md:px-0">
                <div className="relative pl-8 md:pl-12">
                    {/* Timeline Dot for Static Card */}
                    <div className={`absolute left-[-9px] md:left-[-5px] top-6 w-3 h-3 rounded-full border border-current bg-charcoal ${stickyNarrative.color} shadow-[0_0_10px_currentColor]`} />

                    {/* Content Card */}
                    <div className={`bg-charcoal/95 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-sm shadow-2xl transition-colors ${stickyNarrative.borderColor}`}>
                        <div className={`font-mono text-xs tracking-[0.2em] mb-4 ${stickyNarrative.color}`}>
                            {stickyNarrative.label}
                        </div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4 uppercase leading-none shadow-black drop-shadow-md">
                            {stickyNarrative.title}
                        </h2>
                        <p className="font-mono text-sm md:text-base text-white/90 leading-relaxed border-l-2 border-white/20 pl-4">
                            {stickyNarrative.description}
                        </p>

                        {/* Decorative Tech Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NarrativeBlock = ({ item, index }: { item: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 0.6 }}
            className="group relative pl-8 md:pl-12 pointer-events-auto"
        >
            {/* Timeline Dot */}
            <div className={`absolute left-[-9px] md:left-[-5px] top-6 w-3 h-3 rounded-full border border-current bg-charcoal ${item.color} shadow-[0_0_10px_currentColor]`} />

            {/* Content Card */}
            <div className={`bg-charcoal/95 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-sm shadow-2xl transition-colors ${item.borderColor}`}>
                <div className={`font-mono text-xs tracking-[0.2em] mb-4 ${item.color}`}>
                    {item.label}
                </div>
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4 uppercase leading-none shadow-black drop-shadow-md">
                    {item.title}
                </h2>
                <p className="font-mono text-sm md:text-base text-white/90 leading-relaxed border-l-2 border-white/20 pl-4">
                    {item.description}
                </p>

                {/* Decorative Tech Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
            </div>
        </motion.div>
    );
};
