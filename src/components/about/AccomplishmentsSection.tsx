"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Heart, Sprout } from "lucide-react";

export type AccomplishmentItem = {
    _key: string;
    year: string | null;
    title: string;
    description: string | null;
};

export type AccomplishmentsSectionProps = {
    heading?: string | null;
    items?: AccomplishmentItem[] | null;
};

const FALLBACK_ITEMS: AccomplishmentItem[] = [
    { _key: "f1", year: null, title: "Educating farmers on modern farming techniques and value chain improvement.", description: null },
    { _key: "f2", year: null, title: "Helping farmers adapt to climate change impacts and move to large-scale business farming.", description: null },
    { _key: "f3", year: null, title: "Drilling water wells to improve health and environment.", description: null },
    { _key: "f4", year: null, title: "Empowering women with livelihood skills in fruit and vegetable gardening.", description: null },
    { _key: "f5", year: null, title: "Implementing micro-finance loan programs for farmers, traders, and teachers.", description: null },
];

const ICON_CYCLE = [
    { Icon: TrendingUp, color: "text-golden" },
    { Icon: Sprout, color: "text-forest" },
    { Icon: CheckCircle2, color: "text-water" },
    { Icon: Users, color: "text-terracotta" },
    { Icon: Heart, color: "text-warmGray" },
];

export const AccomplishmentsSection = ({ heading, items }: AccomplishmentsSectionProps = {}) => {
    const data = items && items.length > 0 ? items : FALLBACK_ITEMS;

    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Why Africa? */}
                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-display font-bold text-forest mb-6">Why Sierra Leone?</h2>
                        <div className="prose text-charcoal/80">
                            <p>
                                Sierra Leone is among the countries with the highest rural poverty and lowest access to safe water in Africa. Decades of civil war, the Ebola crisis, and recurring climate shocks have left rural communities with fragile livelihoods, limited infrastructure, and few opportunities for the next generation. In many villages, families depend on rain-fed agriculture, walk long distances to collect unsafe water, and lack reliable access to basic health and education services. Women and girls shoulder much of this burden, spending hours each day fetching water instead of attending school or earning income.
                            </p>
                            <p className="mt-4">
                                We focus on Sierra Leone because it is a place where targeted, community-driven investments in agriculture, clean water, and education can change the trajectory of entire villages. By working closely with local leaders in chiefdoms such as Tonkolili, Port Loko, and the Western Rural Area, EnviroOne helps rural communities move from surviving crisis to building long-term resilience and hope.
                            </p>
                        </div>

                        {/* Stats / Indicators */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-forest/5 rounded-xl border border-forest/10">
                                <h4 className="text-3xl font-bold text-forest mb-1">3</h4>
                                <p className="text-sm text-charcoal/70">Key Chiefdoms Served</p>
                            </div>
                            <div className="p-4 bg-terracotta/5 rounded-xl border border-terracotta/10">
                                <h4 className="text-3xl font-bold text-terracotta mb-1">2011</h4>
                                <p className="text-sm text-charcoal/70">Year Impact Began</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Key Accomplishments List */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-display font-bold text-forest mb-8">{heading ?? "What We Are Doing"}</h2>
                        <div className="space-y-6">
                            {data.map((item, i) => {
                                const { Icon, color } = ICON_CYCLE[i % ICON_CYCLE.length];
                                return (
                                    <motion.div
                                        key={item._key}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                                    >
                                        <div className={`mt-1 ${color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            {item.year && (
                                                <p className="text-xs uppercase tracking-wider font-bold text-forest/60 mb-1">{item.year}</p>
                                            )}
                                            <p className="text-charcoal/90 font-medium">{item.title}</p>
                                            {item.description && (
                                                <p className="text-charcoal/70 text-sm mt-1">{item.description}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

