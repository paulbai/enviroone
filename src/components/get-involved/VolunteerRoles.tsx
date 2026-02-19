"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface VolunteerRoleProps {
    title: string;
    description: string;
    details: string[];
    image: string;
    align: "left" | "right";
    index: number;
}

const VolunteerRoleItem = ({ title, description, details, image, align, index }: VolunteerRoleProps) => {
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

                <p className="text-lg text-charcoal/80 leading-relaxed font-light mb-8">
                    {description}
                </p>

                <div className="bg-cream-dark/30 p-6 rounded-xl border border-forest/10 w-full mb-8">
                    <h4 className="font-bold text-forest text-sm uppercase tracking-wider mb-4">Key Responsibilities & Opportunities</h4>
                    <ul className="space-y-3">
                        {details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-charcoal/80">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-golden shrink-0" />
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-2">
                    <Button href="mailto:mail@enviroone.org" variant="primary" className="bg-forest text-cream hover:bg-forest-dark shadow-lg shadow-forest/20" icon="arrow">
                        Apply Now
                    </Button>
                </div>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-7/12 sticky top-24">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-golden/10 mix-blend-multiply z-10" />
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

export const VolunteerRoles = () => {
    const roles = [
        {
            title: "Volunteer Program",
            description: "EnviroOne has a sound volunteer program for all its projects. Students can also volunteer as interns. We offer opportunities to become paid Ambassadors, rewarding commitment and accomplishments with increased recognition.",
            details: [
                "Play active roles in setting project goals and implementation.",
                "Define procedures and timelines for community projects.",
                "Gain hands-on experience in sustainable development.",
                "Opportunity to transition into a paid Ambassador role."
            ],
            image: "/images/volunteer_program_woman.jpg",
            align: "left" as const
        },
        {
            title: "Internship",
            description: "Our internship program offers hands-on work experience with a wide range of people and responsibilities, preparing you for future jobs. We encourage creativity and research opportunities with partner universities.",
            details: [
                "Marketing, Fundraising, and Web Development.",
                "Media, Communication, and IT/MIS.",
                "Field work in Agriculture, Clean Water, and Micro-finance.",
                "Mentorship from project managers and Ambassadors."
            ],
            image: "/projects/education_1.png",
            align: "right" as const
        },
        {
            title: "Ambassador",
            description: "The EnviroOne Ambassador program spreads awareness about our impact on the poor and disadvantaged. Ambassadors act as representatives on specific projects and, in some cases, as project managers.",
            details: [
                "Acquire new volunteers, donors, and corporate partners.",
                "Develop and champion your own projects with web presence.",
                "Rally friends and family to support your specific cause.",
                "Interact and collaborate with fellow Ambassadors globally."
            ],
            image: "/images/ambassador-new.jpg",
            align: "left" as const
        }
    ];

    return (
        <Section className="bg-cream relative z-10 py-24">
            <div className="flex flex-col">
                {roles.map((role, i) => (
                    <VolunteerRoleItem key={role.title} {...role} index={i} />
                ))}
            </div>
        </Section>
    );
};
