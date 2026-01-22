"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { Droplet, Sprout, BookOpen, Users, MapPin, Heart, Sun, Leaf, Activity } from "lucide-react";

// CountUp Component
const CountUp = ({ to, duration = 2, suffix = "" }: { to: number; duration?: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isInView && mounted) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue, mounted]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current && mounted) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix, mounted]);

    return <span ref={ref} className="tabular-nums">0{suffix}</span>;
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
                "relative overflow-hidden p-8 flex flex-col justify-between group neu-flat",
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
                <p className="text-charcoal/80 font-medium text-sm md:text-base leading-snug">{label}</p>
            </div>
        </motion.div>
    );
};

export const ImpactStats = () => {
    return (
        <Section className="bg-cream relative z-20 pt-20 md:pt-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)] md:auto-rows-[280px]">
                {/* Row 1 */}
                {/* [4 cols] Wells */}
                <StatCard
                    className="md:col-span-4"
                    value={30}
                    suffix="+"
                    label="Water Wells Built"
                    icon={Droplet}
                    gradient="bg-gradient-to-br from-water to-transparent"
                    delay={0}
                />
                {/* [5 cols] People Served (Hero) */}
                <StatCard
                    className="md:col-span-5"
                    value={105000}
                    suffix="+"
                    label="People Provided with Clean Water"
                    icon={Users}
                    gradient="bg-gradient-to-br from-forest to-water"
                    delay={0.1}
                />
                {/* [3 cols] Hectares */}
                <StatCard
                    className="md:col-span-3"
                    value={20}
                    suffix="+"
                    label="Hectares Cultivated"
                    icon={Leaf}
                    gradient="bg-gradient-to-br from-terracotta to-transparent"
                    delay={0.2}
                />

                {/* Row 2 */}
                {/* [3 cols] Facilitators */}
                <StatCard
                    className="md:col-span-3"
                    value={10}
                    label="Peer Facilitators Trained"
                    icon={BookOpen}
                    gradient="bg-gradient-to-br from-golden to-transparent"
                    delay={0.3}
                />
                {/* [6 cols] Farmers */}
                <StatCard
                    className="md:col-span-6"
                    value={500}
                    suffix="+"
                    label="Farmers Supported with Seeds & Tools"
                    icon={Sprout}
                    gradient="bg-gradient-to-br from-forest to-golden"
                    delay={0.4}
                />
                {/* [3 cols] Districts */}
                <StatCard
                    className="md:col-span-3"
                    value={3}
                    label="Districts Served (Tonkolili, Port Loko, Waterloo)"
                    icon={MapPin}
                    gradient="bg-gradient-to-br from-warmGray to-transparent"
                    delay={0.5}
                />

                {/* Row 3 */}
                {/* [5 cols] Youth/Women */}
                <StatCard
                    className="md:col-span-5"
                    value={100}
                    suffix="+"
                    label="Youth & Women Trained"
                    icon={Sun}
                    gradient="bg-gradient-to-br from-terracotta to-golden"
                    delay={0.6}
                />
                {/* [4 cols] Illness Reduction - Symbolic Number or text? Keep simpler stats */}
                {/* Using 40% reduction as placeholder or just symbolic count like 24/7 access */}
                <StatCard
                    className="md:col-span-4"
                    value={24}
                    suffix="/7"
                    label="Access to Clean Water & Medicine"
                    icon={Heart}
                    gradient="bg-gradient-to-br from-water to-forest"
                    delay={0.7}
                />
                {/* [3 cols] Women Burden */}
                <StatCard
                    className="md:col-span-3"
                    value={60}
                    suffix="%"
                    label="Reduction in Water Collection Time"
                    icon={Activity}
                    gradient="bg-gradient-to-br from-forest to-transparent"
                    delay={0.8}
                />
            </div>
        </Section>
    );
};
