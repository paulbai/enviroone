"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sprout, Droplet, BookOpen } from "lucide-react";

export const ThreeSection = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-terracotta to-forest flex items-center justify-center overflow-hidden py-24">
            {/* Animated Grain */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-cream">
                <motion.div
                    initial={{ opacity: 0, scale: 5 }}
                    whileInView={{ opacity: 0.1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-bold text-[400px] md:text-[600px] leading-none pointer-events-none select-none"
                >
                    3
                </motion.div>

                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 uppercase"
                    >
                        All It Takes Is Three
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light opacity-90 mb-16 max-w-3xl mx-auto leading-relaxed"
                    >
                        EnviroOne projects are designed to improve the three basic aspects of human development: food (agriculture); good health (clean water); and education.
                    </motion.p>

                    {/* Visualization of Interconnection */}
                    <div className="flex justify-center items-center gap-8 md:gap-16 mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center">
                                <Sprout className="w-10 h-10 md:w-12 md:h-12 text-cream" />
                            </div>
                            <span className="font-bold tracking-widest text-sm uppercase">Food</span>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="flex flex-col items-center gap-4 relative top-12"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center">
                                <Droplet className="w-10 h-10 md:w-12 md:h-12 text-cream" />
                            </div>
                            <span className="font-bold tracking-widest text-sm uppercase">Good Health</span>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center">
                                <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-cream" />
                            </div>
                            <span className="font-bold tracking-widest text-sm uppercase">Education</span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Button variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-forest">
                            Learn How We Do It
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
