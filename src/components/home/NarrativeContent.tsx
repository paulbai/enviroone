"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

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
        color: "text-electric-lime",
        borderColor: "hover:border-electric-lime/50"
    }
];

export const NarrativeContent = () => {
    return (
        <div className="relative z-20 w-full max-w-[var(--spacing-container)] mx-auto px-4 md:px-8 pointer-events-none">
            <div className="w-full md:w-[45%] flex flex-col gap-[20vh] pt-[20vh] pb-[30vh]">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 md:left-12 top-[20vh] bottom-[30vh] w-[1px] bg-white/20 -z-10" />

                {narratives.map((item, index) => (
                    <NarrativeBlock key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

const NarrativeBlock = ({ item, index }: { item: any, index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "end 10%"]
    });

    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [5, 0, 0, 5]);
    const filter = useMotionTemplate`blur(${blurValue}px)`;

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity, filter }}
            className="group relative pl-8 md:pl-12 pointer-events-auto"
        >
            {/* Timeline Dot */}
            <div className={`absolute left-[-9px] md:left-[-5px] top-6 w-3 h-3 rounded-full border border-current bg-charcoal ${item.color} shadow-[0_0_10px_currentColor]`} />

            {/* Content Card */}
            <div className={`bg-charcoal/95 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-sm shadow-2xl transition-colors ${item.borderColor}`}>
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
