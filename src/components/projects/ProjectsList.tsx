"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Droplet, Sprout, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { urlFor } from "@/sanity/lib/image";
import type {
    ProjectsIndexQueryResult,
    ProjectCardsQueryResult,
} from "@/sanity/sanity.types";

const ICONS = {
    sprout: Sprout,
    droplet: Droplet,
    "book-open": BookOpen,
} as const;

const ICON_COLORS = {
    forest: "text-forest",
    water: "text-water",
    golden: "text-golden",
} as const;

const ACCENT_STYLES = {
    forest: {
        bg: "bg-forest/10",
        border: "border-forest/20",
        text: "text-forest",
    },
    water: {
        bg: "bg-water/10",
        border: "border-water/20",
        text: "text-water",
    },
    golden: {
        bg: "bg-golden/10",
        border: "border-golden/20",
        text: "text-golden",
    },
} as const;

type ProjectsListProps = {
    intro: NonNullable<ProjectsIndexQueryResult>;
    projects: ProjectCardsQueryResult;
};

export const ProjectsList = ({ intro, projects }: ProjectsListProps) => {
    return (
        <main className="pt-20">
            <Section className="bg-warmGray/10 min-h-screen">
                <div className="max-w-5xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-forest mb-6">
                            {intro.heading ?? "Our Projects"}
                        </h1>
                        {intro.description && (
                            <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                                {intro.description}
                            </p>
                        )}
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => {
                            const IconComponent = ICONS[project.icon];
                            const accent = ACCENT_STYLES[project.accent];
                            const iconColor = ICON_COLORS[project.accent];
                            const imageUrl = urlFor(project.cardImage)
                                .width(600)
                                .height(400)
                                .fit("crop")
                                .url();
                            const imageAlt = project.cardImage.alt ?? project.title;

                            return (
                                <motion.div
                                    key={project._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="group block h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                            <Image
                                                src={imageUrl}
                                                alt={imageAlt}
                                                width={600}
                                                height={400}
                                                loading="lazy"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div
                                                className={`absolute top-4 left-4 p-3 rounded-xl backdrop-blur-sm bg-white/90 z-20 ${iconColor}`}
                                            >
                                                <IconComponent
                                                    className={`w-8 h-8 ${iconColor}`}
                                                />
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <h2 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-forest transition-colors">
                                                {project.title}
                                            </h2>
                                            <p className="text-charcoal/70 mb-6 flex-grow">
                                                {project.summary}
                                            </p>

                                            <div
                                                className={`inline-flex items-center gap-2 font-bold ${accent.text} group-hover:gap-3 transition-all`}
                                            >
                                                Explore Project{" "}
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Section>
        </main>
    );
};
