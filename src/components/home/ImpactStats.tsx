"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { Droplet, Sprout, BookOpen, Users, MapPin, Heart, Sun, Leaf, Activity } from "lucide-react";
import type { ImpactStatsQueryResult } from "@/sanity/sanity.types";

const ICONS = {
    droplet: Droplet,
    users: Users,
    leaf: Leaf,
    "book-open": BookOpen,
    sprout: Sprout,
    "map-pin": MapPin,
    sun: Sun,
    heart: Heart,
    activity: Activity,
} as const;

const ACCENT_GRADIENTS = {
    water: "bg-gradient-to-br from-water to-transparent",
    "forest-water": "bg-gradient-to-br from-forest to-water",
    terracotta: "bg-gradient-to-br from-terracotta to-transparent",
    golden: "bg-gradient-to-br from-golden to-transparent",
    "forest-golden": "bg-gradient-to-br from-forest to-golden",
    warmGray: "bg-gradient-to-br from-warmGray to-transparent",
    "terracotta-golden": "bg-gradient-to-br from-terracotta to-golden",
    "water-forest": "bg-gradient-to-br from-water to-forest",
    forest: "bg-gradient-to-br from-forest to-transparent",
} as const;

const SPAN_CLASSES = {
    small: "col-span-1 md:col-span-3",
    medium: "col-span-2 md:col-span-4",
    large: "col-span-2 md:col-span-5",
} as const;

// CountUp Component
const CountUp = ({ to, duration = 2, suffix = "" }: { to: number; duration?: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const startValue = Math.floor(to * 0.5);
    const isInView = useInView(ref, { once: true, margin: "0px" });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isInView && mounted && ref.current) {
            const controls = animate(startValue, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(value).toLocaleString() + suffix;
                    }
                }
            });
            return () => controls.stop();
        }
    }, [isInView, to, duration, suffix, mounted, startValue]);

    return <span ref={ref} className="tabular-nums">{startValue.toLocaleString()}{suffix}</span>;
};

// Stat Card Component
interface StatCardProps {
    value: number;
    label: string;
    suffix?: string;
    icon: React.ElementType;
    className?: string; // For grid spans
    gradient: string;
    delay?: number;
}

const StatCard = ({ value, label, suffix = "", icon: Icon, className, gradient, delay = 0 }: StatCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden p-6 md:p-8 flex flex-col justify-between group neu-flat",
                className
            )}
        >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 flex justify-between items-start mb-4">
                <div className="w-16 h-16 neu-icon text-forest-dark group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-8 h-8 opacity-80" />
                </div>
            </div>

            <div className="relative z-10 mt-4">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-forest-dark mb-2 tracking-tight">
                    <CountUp to={value} suffix={suffix} />
                </h3>
                <p className="text-charcoal/80 font-medium text-base md:text-lg leading-snug">{label}</p>
            </div>
        </motion.div>
    );
};

export const ImpactStats = ({ stats }: { stats: ImpactStatsQueryResult }) => {
    if (!stats || stats.length === 0) {
        return null;
    }

    return (
        <Section className="bg-cream relative z-20 pt-16 md:pt-32 pb-16">
            <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] md:auto-rows-[280px]">
                {stats.map((stat, index) => {
                    const Icon = ICONS[stat.icon];
                    const gradient = ACCENT_GRADIENTS[stat.accent];
                    const span = SPAN_CLASSES[stat.gridSpan];
                    return (
                        <StatCard
                            key={stat._id}
                            className={span}
                            value={stat.value}
                            suffix={stat.suffix ?? ""}
                            label={stat.label}
                            icon={Icon}
                            gradient={gradient}
                            delay={index * 0.1}
                        />
                    );
                })}
            </div>
        </Section>
    );
};
