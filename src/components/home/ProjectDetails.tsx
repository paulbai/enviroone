"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

interface ProjectSectionProps {
    id: string;
    number: string;
    title: string;
    description: string;
    points: string[];
    image: string;
    theme: "forest" | "water" | "golden"; // Corresponds to Agri, Water, Edu
    align: "left" | "right";
}

const ProjectSection = ({ id, number, title, description, points, image, theme, align }: ProjectSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const themeColors = {
        forest: { text: "text-forest", bg: "bg-forest", gradient: "from-forest/10 to-transparent", bullet: "text-forest" },
        water: { text: "text-water", bg: "bg-water", gradient: "from-water/10 to-transparent", bullet: "text-water" },
        golden: { text: "text-golden", bg: "bg-golden", gradient: "from-golden/10 to-transparent", bullet: "text-golden" },
    };

    const colors = themeColors[theme];
    const isLeft = align === "left";

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center py-24 overflow-hidden"
            id={id}
        >
            {/* Background Gradient Mesh */}
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", colors.gradient)} />

            {/* Sticky Number */}
            <div className="absolute top-32 left-8 md:left-12 z-0 pointer-events-none hidden lg:block">
                <span className={cn(
                    "text-[120px] leading-none font-display font-bold text-transparent opacity-20 stroke-text",
                    "stroke-charcoal" // Custom CSS needed for text-stroke if not in Tailwind v4 utils yet.
                )} style={{ WebkitTextStroke: "2px rgba(46, 46, 46, 0.2)" }}>
                    {number}
                </span>
            </div>

            <div className="relative z-10 max-w-[var(--spacing-container)] mx-auto px-4 md:px-8 w-full">
                <div className={cn(
                    "flex flex-col gap-12 lg:gap-24 items-center",
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                )}>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <motion.div
                                style={{ y: yParallax, scale: 1.1 }}
                                className="absolute inset-0 bg-cover bg-center"
                                initial={{ filter: "grayscale(100%)" }}
                                whileInView={{ filter: "grayscale(0%)" }}
                                transition={{ duration: 1 }}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                            </motion.div>
                            {/* Texture Overlay on Image */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <span className={cn("text-lg font-bold tracking-widest uppercase mb-4 block", colors.text)}>
                            Project {number}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {points.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className={cn("mt-1 p-1 rounded-full bg-cream", colors.text)}>
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-charcoal/70">{point}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <Button variant="primary" className="shadow-none hover:shadow-lg">
                            View Project Details
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export const ProjectDetails = () => {
    return (
        <div className="bg-cream">
            <ProjectSection
                id="agriculture"
                number="01"
                theme="forest"
                align="left"
                title="Regenerative Agriculture"
                description="We focus on restoring soil health, strengthening community resilience, and nurturing harmony with nature."
                image="https://images.unsplash.com/photo-1625246333195-09870c453503?q=80&w=1000&auto=format&fit=crop"
                points={[
                    "20+ hectares under palm cultivation intercropped by cassava and medicinal plants",
                    "500+ farmers in 2 districts (Tonkolili and Port Loko) benefiting from the EnviroOne agriculture program",
                    "Increased biodiversity and soil fertility across palm-based farms",
                    "Enhanced community access to herbal health resources and safe traditional remedies",
                    "Improved farmer incomes through diversified, climate-resilient livelihoods",
                    "Strengthened local knowledge on regenerative agriculture systems"
                ]}
            />
            <ProjectSection
                id="water"
                number="02"
                theme="water"
                align="right"
                title="Water Well Program"
                description="Our flagship water program serves the people of 2 districts (Tionkolili and Port Loko) and a Western Rural Area (Waterloo), ensuring critical access to life's most basic need."
                image="https://images.unsplash.com/photo-1617112837592-7f284dbb02c6?q=80&w=1000&auto=format&fit=crop"
                points={[
                    "Over 30 EnviroOne water wells provide clean water to over 105,000 individuals in 3 districts",
                    "Decrease in waterborne illnesses",
                    "Reduced time and burden on women and girls for water collection",
                    "Year-round access to water for medicinal plants and agroforestry",
                    "Greater availability of safe water in schools and learning centers",
                    "Lower household spending on water treatment and medical care"
                ]}
            />
            <ProjectSection
                id="education"
                number="03"
                theme="golden"
                align="left"
                title="Education Program"
                description="We integrate regenerative agriculture and clean water awareness to strengthen rural resilience, building a knowledgeable foundation for the future."
                image="https://images.unsplash.com/photo-1427504743050-dad16035928b?q=80&w=1000&auto=format&fit=crop"
                points={[
                    "Clean water and regenerative education campaigns conducted in Tonkolili and Port Loko districts benefiting over 100 smallholder farmers, youth, and women",
                    "Local educator capacity built by training 10 peer facilitators and youth educators",
                    "Increased adoption of soil-enhancing and water-safe practices",
                    "Strengthened local knowledge and leadership through trained facilitators",
                    "Scalable model for climate- and health-responsive education built and can be adopted in rural West Africa"
                ]}
            />
        </div>
    );
};
