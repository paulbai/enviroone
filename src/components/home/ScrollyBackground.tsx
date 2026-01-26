"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollyBackgroundProps {
    scrollYProgress: MotionValue<number>;
}

export const ScrollyBackground = ({ scrollYProgress }: ScrollyBackgroundProps) => {
    // 0 -> 0.5: Damaged state visible
    // 0.5 -> 1.0: Restored state starts revealing

    // We'll use a circular clip path to reveal the "Restored" layer from the center out, or a simple opacity fade.
    // The "Inversa" effect often uses a mask. Let's try a radial mask reveal.
    const maskSize = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "150%"]);

    return (
        <div className="absolute inset-0 w-full h-full z-0">
            {/* Layer 1: Damaged State (Base) */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/images/hero-children.jpg"
                    alt="Children in Sierra Leone"
                    className="w-full h-full object-cover filter sepia-[0.3] contrast-125 saturate-50"
                />
                <div className="absolute inset-0 bg-muddy-brown/40 mix-blend-multiply" />
            </div>

            {/* Layer 2: Restored State (Reveal) */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    // Using CSS clip-path for performance
                    clipPath: useTransform(maskSize, (val) => `circle(${val} at 50% 50%)`)
                }}
            >
                <img
                    src="/images/restored-landscape-new.jpg"
                    alt="Restored Green Valley Landscape"
                    className="w-full h-full object-cover filter brightness-110 saturate-110"
                />
                <div className="absolute inset-0 bg-forest-dark/20 mix-blend-overlay" />
            </motion.div>

            {/* Scan Line Overlay Effect during transition */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    opacity: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])
                }}
            >
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </motion.div>
        </div>
    );
};
