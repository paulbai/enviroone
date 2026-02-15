"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ExperimentalBackgroundProps {
    scrollYProgress: MotionValue<number>;
}

export const ExperimentalBackground = ({ scrollYProgress }: ExperimentalBackgroundProps) => {
    // Parallax effect for the background layers
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    return (
        <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/30 blur-[120px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ y: y1 }}
            />

            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-600/20 blur-[100px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ y: y2 }}
            />

            <motion.div
                className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/20 blur-[80px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Mesh Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
};
