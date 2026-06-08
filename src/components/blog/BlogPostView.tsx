"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import type { BlogPostBySlugQueryResult } from "@/sanity/sanity.types";

export const BlogPostView = ({
    post,
}: {
    post: NonNullable<BlogPostBySlugQueryResult>;
}) => {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const imageUrl = urlFor(post.heroImage).width(1200).height(800).url();
    const imageAlt = post.heroImage.alt ?? post.title;

    return (
        <main className="pt-20">
            <Section className="bg-cream min-h-screen">
                <article className="max-w-4xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-charcoal/60 hover:text-forest transition-colors font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl overflow-hidden shadow-sm border border-warmGray/20"
                    >
                        <div className="h-64 md:h-[500px] overflow-hidden relative">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                width={1200}
                                height={800}
                                priority={true}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                                <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-medium uppercase tracking-wider mb-4 opacity-90">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-golden" />
                                        {formattedDate}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4 text-golden" />
                                        {post.author}
                                    </div>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight shadow-sm">
                                    {post.title}
                                </h1>
                            </div>
                        </div>

                        <div className="p-8 md:p-16">
                            <div className="prose prose-lg prose-forest max-w-none">
                                <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed font-light font-sans">
                                    <PortableText value={post.body} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </article>
            </Section>
        </main>
    );
};
