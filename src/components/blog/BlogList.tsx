"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { BlogPostsListQueryResult } from "@/sanity/sanity.types";

export const BlogList = ({ posts }: { posts: BlogPostsListQueryResult }) => {
    return (
        <main className="pt-20">
            <Section className="bg-cream min-h-screen">
                <div className="max-w-6xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-forest mb-6">Our Blog</h1>
                        <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                            Stories, updates, and insights from our work in Sierra Leone.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {posts.map((post, index) => {
                            const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            });
                            const imageUrl = urlFor(post.heroImage).width(800).height(600).url();
                            const imageAlt = post.heroImage.alt ?? post.title;

                            return (
                                <motion.article
                                    key={post._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className={`group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${index === 0 ? 'border-2 border-golden' : 'border border-warmGray/20'
                                            }`}
                                    >
                                        <div className="h-64 overflow-hidden relative bg-cream">
                                            {index === 0 && (
                                                <div className="absolute top-4 left-4 z-20 bg-golden text-forest-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    Latest
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                                            <Image
                                                src={imageUrl}
                                                alt={imageAlt}
                                                width={800}
                                                height={600}
                                                className={`w-full h-full ${index === 0 ? 'object-contain' : 'object-cover'
                                                    } transform group-hover:scale-110 transition-transform duration-700`}
                                                loading={index === 0 ? 'eager' : 'lazy'}
                                            />
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal/60 mb-4 font-medium uppercase tracking-wider">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5 text-golden" />
                                                    {formattedDate}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <User className="w-3.5 h-3.5 text-golden" />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <h2 className="text-2xl font-display font-bold text-forest mb-4 leading-tight group-hover:text-terracotta transition-colors">
                                                {post.title}
                                            </h2>

                                            <p className="text-charcoal/70 mb-6 line-clamp-3 flex-grow">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-forest font-semibold group-hover:gap-2 transition-all">
                                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </Section>
        </main>
    );
};
