"use client";

import React from "react";
import { motion } from "framer-motion";

export const TacticalHUD = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden mix-blend-screen">
            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Corner Crosshairs */}
            <Crosshair className="top-8 left-8" />
            <Crosshair className="top-8 right-8" />
            <Crosshair className="bottom-8 left-8" />
            <Crosshair className="bottom-8 right-8" />

            {/* Coordinates Display */}
            <div className="absolute bottom-8 left-8 md:left-20 font-mono text-[10px] md:text-xs text-electric-lime tracking-widest flex flex-col gap-1 opacity-80">
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    LAT: 8.4657° N
                </motion.div>
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                    LONG: 12.0317° W
                </motion.div>
                <div>SECTOR: ROKEL-RIVER-BASIN</div>
            </div>

            {/* Scanning Line */}
            <motion.div
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-electric-lime/50 shadow-[0_0_10px_#CCFF00]"
            />

            {/* Digital Radar Blips (Simulated Hotspots) */}
            <RadarBlip top="30%" left="45%" delay={0} />
            <RadarBlip top="65%" left="70%" delay={2} />
            <RadarBlip top="40%" left="20%" delay={4} />
        </div>
    );
};

const Crosshair = ({ className }: { className?: string }) => (
    <div className={`absolute w-8 h-8 md:w-16 md:h-16 border border-white/30 flex items-center justify-center ${className}`}>
        <div className="w-full h-[1px] bg-white/30 absolute" />
        <div className="h-full w-[1px] bg-white/30 absolute" />
    </div>
);

const RadarBlip = ({ top, left, delay }: { top: string, left: string, delay: number }) => (
    <motion.div
        style={{ top, left }}
        className="absolute w-3 h-3 md:w-6 md:h-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
            scale: [0, 1.5, 2],
            opacity: [0, 0.8, 0],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay,
            ease: "easeOut"
        }}
    >
        <div className="absolute inset-0 rounded-full border border-electric-lime/60" />
        <div className="absolute inset-[30%] rounded-full bg-electric-lime/40" />
    </motion.div>
);
