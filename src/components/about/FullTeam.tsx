"use client";

import React, { useState } from "react";
import NextImage from "next/image";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import type { TeamMembersQueryResult } from "@/sanity/sanity.types";

type TeamMember = TeamMembersQueryResult[number];

export const FullTeam = ({ members }: { members: TeamMembersQueryResult }) => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    return (
        <Section className="bg-warmGray/5">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-forest mb-4">Our Team</h2>
                <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
                    A diverse group of dedicated professionals passionate about sustainable development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member, i) => (
                    <motion.div
                        key={member._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden w-full aspect-[4/3] shrink-0 bg-gray-100">
                            <NextImage
                                src={urlFor(member.photo).width(400).height(300).fit("max").url()}
                                alt={member.photo.alt ?? member.name}
                                width={400}
                                height={300}
                                loading="lazy"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-forest mb-1">{member.name}</h3>
                            <p className="text-sm font-bold text-terracotta uppercase tracking-wider mb-4">{member.role}</p>

                            <div className="mt-auto">
                                <button
                                    onClick={() => setSelectedMember(member)}
                                    className="inline-flex items-center text-forest font-bold text-sm hover:text-terracotta transition-colors group/btn"
                                >
                                    READ MORE
                                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] cursor-pointer"
                        />
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-[2001] flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="bg-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto flex flex-col md:flex-row relative">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 p-2 text-forest/60 hover:text-forest hover:bg-black/5 rounded-full z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Modal Image */}
                                <div className="w-full md:w-1/3 aspect-square md:aspect-auto shrink-0 relative bg-forest-dark/5">
                                    <NextImage
                                        src={urlFor(selectedMember.photo).width(800).height(800).url()}
                                        alt={selectedMember.photo.alt ?? selectedMember.name}
                                        width={800}
                                        height={800}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Modal Body */}
                                <div className="p-8 md:p-12 flex-1 relative">
                                    <h3 className="text-3xl font-display font-bold text-forest mb-2">{selectedMember.name}</h3>
                                    <p className="text-terracotta font-bold uppercase tracking-wider mb-6">{selectedMember.role}</p>
                                    <div className="prose prose-stone max-w-none text-charcoal/80 leading-relaxed">
                                        <PortableText value={selectedMember.bio} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Section>
    );
};
