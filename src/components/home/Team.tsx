"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    isLead?: boolean;
}

const TeamCard = ({ name, role, bio, image, isLead = false }: TeamMemberProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
                "relative rounded-2xl overflow-hidden group bg-warmGray/10",
                isLead ? "md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]" : "col-span-1 h-[300px] md:h-[350px]"
            )}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className={cn("font-display font-bold text-cream", isLead ? "text-3xl" : "text-xl")}>
                        {name}
                    </h3>
                    <p className="text-golden font-medium mb-2">{role}</p>
                </div>

                <div className="h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100 group-hover:mb-2">
                    <p className="text-cream/90 text-sm">{bio}</p>
                </div>
            </div>
        </motion.div>
    );
};

export const Team = () => {
    const members = [
        {
            name: "Dr. Alpha",
            role: "Founder & Executive Director",
            bio: "Leading EnviroOne's mission with over 20 years of experience in sustainable development and public health.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
            isLead: true
        },
        {
            name: "Sarah Johnson",
            role: "Program Director",
            bio: "Overseeing field operations and community partnerships.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "David Kamara",
            role: "Agricultural Specialist",
            bio: "Expert in regenerative farming techniques.",
            image: "https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "Mariama Sesay",
            role: "Education Coordinator",
            bio: "Empowering youth through knowledge.",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "James Cole",
            role: "Water Engineer",
            bio: "Ensuring clean water access for all.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        }
    ];

    return (
        <Section>
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-forest mb-4">Our Team</h2>
                <p className="text-charcoal/80 text-lg max-w-2xl">
                    Dedicated professionals working together to create lasting change.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
                {members.map((member, i) => (
                    <TeamCard key={i} {...member} />
                ))}
            </div>
        </Section>
    );
};
