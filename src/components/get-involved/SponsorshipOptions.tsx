"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface SponsorshipOptionProps {
    title: string;
    problem: string;
    solution: string;
    impact: string;
    cost: string;
    image: string;
    donateLink: string;
    align: "left" | "right";
    index: number;
}

const SponsorshipItem = ({ title, problem, solution, impact, cost, image, donateLink, align, index }: SponsorshipOptionProps) => {
    const isLeft = align === "left";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-start gap-12 lg:gap-24 mb-32 last:mb-0`}
        >
            {/* Text Content */}
            <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-forest-dark mb-6 leading-[1.1]">
                    {title}
                </h3>

                <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed font-light">
                    <div>
                        <h4 className="font-bold text-forest text-sm uppercase tracking-wider mb-2">The Problem</h4>
                        <p>{problem}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-forest text-sm uppercase tracking-wider mb-2">Our Solution</h4>
                        <p>{solution}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-forest text-sm uppercase tracking-wider mb-2">Your Impact</h4>
                        <p>{impact}</p>
                    </div>
                    <div className="bg-golden/10 p-4 rounded-lg border border-golden/20">
                        <h4 className="font-bold text-golden-dark text-sm uppercase tracking-wider mb-2">Sponsorship</h4>
                        <p className="font-medium text-charcoal">{cost}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <Button href={donateLink} target="_blank" variant="primary" className="bg-terracotta text-cream hover:bg-terracotta-dark shadow-lg shadow-terracotta/20" icon="heart">
                        Sponsor Now
                    </Button>
                </div>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-7/12 sticky top-24">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-forest/10 mix-blend-multiply z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export const SponsorshipOptions = () => {
    const options = [
        {
            title: "Sponsor A Farm",
            problem: "Agriculture provides about half of Sierra Leone's GDP, yet 44% of people remain food-poor. Poverty forces many children to work on family farms instead of attending school.",
            solution: "EnviroOne helps farmers organize as Climate Smart Communities (CSCs), providing inputs, greenhouses with drip irrigation, and training to move from subsistence to business farming.",
            impact: "Your support increases crop production, creates jobs, and shifts farming from survival to a sustainable business, allowing parents to afford education for their children.",
            cost: "Consider a gift of at least $20/month to sponsor a farmer. Greenhouses packages start at $7,000.",
            image: "/images/sponsor-a-farm-new.jpg",
            donateLink: "https://secure.squarespace.com/commerce/donate?donatePageId=57f5bb46e58c62bd11184dbd",
            align: "left" as const
        },
        {
            title: "Sponsor A Village",
            problem: "Piecemeal development approaches often fail. Communities lack integrated access to nutritious food, good health, and quality education.",
            solution: "We implement the 'All It Takes Is 3' strategy, integrating health, social, and economic well-being led by the communities themselves.",
            impact: "You will join a community of supporters dedicated to lifting an entire village out of poverty, receiving regular progress updates.",
            cost: "Consider a gift of at least $20/month. Full village sustainability projects can range up to $100,000.",
            image: "/images/sponsor-a-village-new.jpg",
            donateLink: "https://secure.squarespace.com/commerce/donate?donatePageId=57f5bb46e58c62bd11184dbd",
            align: "right" as const
        },
        {
            title: "Sponsor A Water Well",
            problem: "Almost half of Sub-Saharan Africa lacks clean drinking water. Many rely on contaminated sources, leading to disease and forcing women and children to walk miles daily.",
            solution: "We drill new wells and rehabilitate old ones, ensuring ongoing maintenance training and community ownership.",
            impact: "You represent a lifeline. Clean water drastically reduces disease and liberates time for education and economic activity.",
            cost: "Drilling a well averages $5,000. Monthly sponsorship of $20 helps maintain these lifelines.",
            image: "/images/sponsor-a-water-well-new.png",
            donateLink: "https://secure.squarespace.com/commerce/donate?donatePageId=57f5bb46e58c62bd11184dbd",
            align: "left" as const
        }
    ];

    return (
        <Section className="bg-cream relative z-10 py-24">
            <div className="flex flex-col">
                {options.map((opt, i) => (
                    <SponsorshipItem key={opt.title} {...opt} index={i} />
                ))}
            </div>
        </Section>
    );
};
