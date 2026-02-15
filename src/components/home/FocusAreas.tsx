"use client";

import React from "react";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Sprout, Droplet, BookOpen } from "lucide-react"; // Removed ArrowRight import
import { Button } from "@/components/ui/Button";

interface FocusItemProps {
    title: string;
    description: string;
    image: string;
    href: string; // Changed from targetId
    color: string;
    align: "left" | "right";
    index: number;
}

const FocusItem = ({ title, description, image, href, align, index }: FocusItemProps) => { // Changed targetId to href
    const isLeft = align === "left";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-24 mb-32 last:mb-0`}
        >
            {/* Text Content */}
            <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest-dark mb-8 leading-[1.1]">
                    {title}
                </h3>
                <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-lg mb-10">
                    {description}
                </p>
                <Button href={href} variant="primary" className="bg-charcoal text-cream hover:bg-forest-dark group" icon="none">
                    Learn More
                </Button>
            </div>

            {/* Image Container with Angled Cut */}
            <div className="w-full lg:w-7/12 relative aspect-[4/3] lg:aspect-[16/10]">
                {/* Chamfered Image */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        clipPath: isLeft
                            ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%)"
                            : "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 0 100%)"
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    {/* Inner Shadow/Gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Decorative Outline (Optional tech feel) */}
                <div
                    className="absolute inset-0 border border-charcoal/10 pointer-events-none"
                    style={{
                        clipPath: isLeft
                            ? "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%)"
                            : "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 0 100%)",
                        transform: "translate(10px, 10px)",
                        zIndex: -1
                    }}
                />
            </div>
        </motion.div>
    );
};

export const FocusAreas = () => {
    const areas = [
        {
            title: "Regenerative Agriculture",
            description: "Restoring soil health and strengthening community resilience through sustainable farming practices that nurture harmony with nature.",
            image: "/projects/regenerative_ag_new.jpg",
            href: "/projects/agriculture", // Changed from targetId
            color: "text-forest",
            align: "left" as const
        },
        {
            title: "Water Well Program",
            description: "Providing critical access to clean water for districts across Sierra Leone, reducing disease and empowering communities.",
            image: "/images/water-well-high-res.jpg?v=20260131",
            href: "/projects/clean-water", // Changed from targetId
            color: "text-water",
            align: "right" as const
        },
        {
            title: "Education Program",
            description: "Building a knowledgeable foundation for the future by integrating agriculture and clean water awareness into rural learning.",
            image: "/projects/education.jpg",
            href: "/projects/education",
            color: "text-golden",
            align: "left" as const
        }
    ];

    return (
        <Section className="bg-cream relative z-10 py-32 overflow-hidden">
            {/* Background Texture (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="mb-24 md:mb-32 max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-8 leading-[0.9] tracking-tight">
                    Our Focus Areas.
                </h2>
                <div className="h-1 w-24 bg-electric-lime mb-8" />
                <p className="text-charcoal/70 text-xl font-light leading-relaxed max-w-2xl">
                    EnviroOne helps communities in Sierra Leone and beyond adapt to climate change by advancing agroecology, clean water access, and environmental education.
                </p>
            </div>

            <div className="flex flex-col">
                {areas.map((area, i) => (
                    <FocusItem key={area.title} {...area} index={i} />
                ))}
            </div>
        </Section>
    );
};
