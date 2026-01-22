"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Sprout, Droplet, BookOpen } from "lucide-react";

export const PhilosophyDetail = () => {
    return (
        <Section className="bg-forest text-cream relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">All It Takes Is Three</h2>
                    <p className="text-cream/80 text-lg leading-relaxed">
                        EnviroOne believes that economic growth alone is not sufficient to assess development.
                        The United Nations uses three key variables for human development: a decent standard of living (food), a long and healthy life (health), and being knowledgeable (knowledge).
                        EnviroOne endorses this concept and it is the basis of our slogan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Food */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                    >
                        <div className="w-16 h-16 rounded-full bg-terracotta/20 flex items-center justify-center mb-6 text-terracotta">
                            <Sprout className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-terracotta">Food</h3>
                        <p className="text-cream/70 leading-relaxed text-sm">
                            For the 70% of the world’s poor who live in rural areas, agriculture is the main source of income.
                            EnviroOne helps improve standard of living by training farmers and micro-financing production,
                            moving them from subsistence farming to sustainable agro-business.
                        </p>
                    </motion.div>

                    {/* Health */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                    >
                        <div className="w-16 h-16 rounded-full bg-water/20 flex items-center justify-center mb-6 text-water">
                            <Droplet className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-water">Health</h3>
                        <p className="text-cream/70 leading-relaxed text-sm">
                            The health of a community is directly linked to the quality of its environment.
                            EnviroOne is helping to improve the environment of communities by implementing
                            clean water programs where access to safe drinking water is a critical challenge.
                        </p>
                    </motion.div>

                    {/* Knowledge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                    >
                        <div className="w-16 h-16 rounded-full bg-golden/20 flex items-center justify-center mb-6 text-golden">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-golden">Knowledge</h3>
                        <p className="text-cream/70 leading-relaxed text-sm">
                            Education builds the capacity of people to escape poverty.
                            EnviroOne implements education programs in agriculture and micro-financing designed
                            to build capacity, empowering the poor to succeed and improve their lives through knowledge.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};
