"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Droplet, Sprout } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Section } from "@/components/ui/Section";
import { ProjectHeroCarousel } from "@/components/projects/ProjectHeroCarousel";
import { VideoModal } from "@/components/ui/VideoModal";
import { urlFor } from "@/sanity/lib/image";
import type { ProjectPageBySlugQueryResult } from "@/sanity/sanity.types";

const ICONS = {
    sprout: Sprout,
    droplet: Droplet,
    "book-open": BookOpen,
} as const;

const ACCENT_STYLES = {
    forest: {
        bgPage: "bg-forest/5",
        bgIcon: "bg-forest/10",
        textIcon: "text-forest",
        textBack: "text-forest",
        textBackHover: "hover:text-green-600",
    },
    water: {
        bgPage: "bg-water/5",
        bgIcon: "bg-water/10",
        textIcon: "text-water",
        textBack: "text-forest",
        textBackHover: "hover:text-water",
    },
    golden: {
        bgPage: "bg-golden/5",
        bgIcon: "bg-golden/10",
        textIcon: "text-golden",
        textBack: "text-forest",
        textBackHover: "hover:text-golden",
    },
} as const;

type ProjectPageViewProps = {
    post: NonNullable<ProjectPageBySlugQueryResult>;
    extraContent?: React.ReactNode;
};

export const ProjectPageView = ({ post, extraContent }: ProjectPageViewProps) => {
    const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

    const IconComponent = ICONS[post.icon];
    const accent = ACCENT_STYLES[post.accent];

    const slides =
        post.carousel?.map((s) => ({
            src: urlFor(s.image).width(1600).height(900).fit("max").url(),
            caption: s.caption,
            alt: s.image.alt,
        })) ?? [];

    const hasVideo = Boolean(post.featuredVideoId);

    return (
        <main className="pt-20">
            {hasVideo && (
                <VideoModal
                    isOpen={!!currentVideoId}
                    onClose={() => setCurrentVideoId(null)}
                    videoId={currentVideoId || ""}
                />
            )}

            <Section className={`${accent.bgPage} min-h-screen`}>
                <div className="max-w-5xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href="/projects"
                            className={`inline-flex items-center gap-2 ${accent.textBack} ${accent.textBackHover} transition-colors mb-6 font-medium`}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <div
                                className={`p-3 ${accent.bgIcon} rounded-xl ${accent.textIcon}`}
                            >
                                <IconComponent className="w-8 h-8" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
                                {post.title}
                            </h1>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-lg text-charcoal/80 max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <PortableText value={post.body} />

                        {slides.length > 0 && (
                            <div className="mt-12 not-prose">
                                <ProjectHeroCarousel
                                    slides={slides}
                                    onVideoClick={
                                        hasVideo
                                            ? () =>
                                                  setCurrentVideoId(
                                                      post.featuredVideoId,
                                                  )
                                            : undefined
                                    }
                                    videoLabel={post.featuredVideoLabel ?? undefined}
                                />
                            </div>
                        )}
                    </motion.div>

                    {extraContent}
                </div>
            </Section>
        </main>
    );
};
