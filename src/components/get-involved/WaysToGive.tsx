"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface WayToGiveItemProps {
    title: string;
    description: string;
    image: string;
    href: string;
    align: "left" | "right";
    index: number;
    target?: string;
}

const WayToGiveItem = ({ title, description, image, href, align, index, target }: WayToGiveItemProps) => {
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
                <Button href={href} target={target} variant="primary" className="bg-charcoal text-cream hover:bg-forest-dark group" icon="arrow">
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

                {/* Decorative Outline */}
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

export const WaysToGive = () => {
    const ways = [
        {
            title: "Become a Sponsor",
            description: "Partner with us to provide sustainable solutions to communities in need. Your sponsorship directly impacts lives through clean water, agriculture, and education projects.",
            image: "/projects/clean_water_1.png",
            href: "/get-involved/sponsor",
            align: "left" as const
        },
        {
            title: "Volunteer",
            description: "Join our global network of passionate individuals. Whether on the ground in Sierra Leone or remotely, your skills and time can help drive our mission forward.",
            image: "/projects/agriculture_new_1.png",
            href: "/get-involved/volunteer",
            align: "right" as const
        },
        {
            title: "Church Ministry",
            description: "Connect your congregation with a cause that matters. We partner with churches to bring faith and works together for transformative community development.",
            image: "/projects/clean_water_makeni_trinity_1.png",
            href: "/get-involved/church-ministry",
            align: "left" as const
        }
    ];

    return (
        <Section className="bg-cream relative z-10 py-32 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="mb-24 md:mb-32 max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-8 leading-[0.9] tracking-tight">
                    Make an Impact.
                </h2>
                <div className="h-1 w-24 bg-terracotta mb-8" />
                <p className="text-charcoal/70 text-xl font-light leading-relaxed max-w-2xl">
                    There are many ways to support our mission. Find the path that resonates with you and join us in building a better future.
                </p>
            </div>

            <div className="flex flex-col">
                {ways.map((way, i) => (
                    <WayToGiveItem key={way.title} {...way} index={i} />
                ))}
            </div>
        </Section>
    );
};
