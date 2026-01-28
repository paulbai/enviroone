"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Heart } from "lucide-react";

export const AccomplishmentsSection = () => {
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
                        <h2 className="text-4xl font-display font-bold text-forest mb-8">What We Are Doing</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    text: "Educating farmers on modern farming techniques and value chain improvement.",
                                    icon: TrendingUp,
                                    color: "text-golden"
                                },
                                {
                                    text: "Helping farmers adapt to climate change impacts and move to large-scale business farming.",
                                    icon: Sprout, // Need import or reuse CheckCircle
                                    color: "text-forest"
                                },
                                {
                                    text: "Drilling water wells to improve health and environment.",
                                    icon: CheckCircle2,
                                    color: "text-water"
                                },
                                {
                                    text: "Empowering women with livelihood skills in fruit and vegetable gardening.",
                                    icon: Users,
                                    color: "text-terracotta"
                                },
                                {
                                    text: "Implementing micro-finance loan programs for farmers, traders, and teachers.",
                                    icon: Heart,
                                    color: "text-warmGray"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                                >
                                    <div className={`mt-1 ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-charcoal/90 font-medium">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

// Simple Sprout placeholder if not imported from lucide-react in main file
const Sprout = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.2.4-4.8-.3-1.1-.6-2.3-1.9-2-3.9.4-1.8 2.5-2.1 4.5.5z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1.7-1.3 2.9-3.3 2.2-5.5-.6-1.9-3.2-2-5.4.4z" />
    </svg>
);
