"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CertificationsModal } from "@/components/ui/CertificationsModal";

export const MissionSection = () => {
    const [isCertModalOpen, setIsCertModalOpen] = React.useState(false);

    return (
        <Section className="bg-cream text-charcoal">
            {/* Moved Hero Content */}
            <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-display font-bold text-forest mb-6 leading-tight"
                >
                    Building a Sustainable Future
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-charcoal/80 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    Promoting sustainable environmental and agricultural activities to lift communities out of poverty.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start mb-16">
                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-display font-bold text-forest mb-6">Our Mission</h2>
                    <div className="prose prose-lg text-charcoal/80">
                        <p className="mb-4">
                            EnviroOne is a 501 (c)(3) non-profit company organized in 2007 to promote sustainable environmental and agricultural activities in the US and the world.
                            There are numerous aid programs to lift the underprivileged out of poverty. Yet, many of these programs have not fully achieved their intended purposes.
                        </p>
                        <p className="font-medium text-forest/90 italic border-l-4 border-golden pl-4 py-2 bg-golden/10 rounded-r-lg">
                            "Our mission is to demonstrate that a systems approach that integrates the three main components of human development (health/environment, food, and knowledge) is not only needed to improve the lives of people successfully, but also achievable."
                        </p>
                        <p className="mt-4">
                            This is a paradigm shift from the current piecemeal approach to human development. It is the basis of our "All It Takes Is Three" strategy.
                        </p>
                    </div>
                </motion.div>

                {/* Goals & Objectives */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-4xl font-display font-bold text-forest mb-6">Goals & Objectives</h2>
                    <p className="text-charcoal/80 mb-6">
                        To achieve our goal of reducing poverty and improving human development in a sustainable manner, we focus on several objectives:
                    </p>

                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <span className="w-2 h-2 mt-2.5 rounded-full bg-terracotta flex-shrink-0" />
                            <span className="text-charcoal/80">
                                <strong>Empowering Farmers:</strong> Educating on modern techniques and helping them move from subsistence to large-scale farming as a business.
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <span className="w-2 h-2 mt-2.5 rounded-full bg-terracotta flex-shrink-0" />
                            <span className="text-charcoal/80">
                                <strong>Capacity Building:</strong> Programs that empower rural communities with livelihood and entrepreneurship skills in regenerative agriculture and medicinal cultivation.
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <span className="w-2 h-2 mt-2.5 rounded-full bg-terracotta flex-shrink-0" />
                            <span className="text-charcoal/80">
                                <strong>Clean Water Access:</strong> Drilling water wells and conducting water quality studies to improve health and environment.
                            </span>
                        </li>
                        <li className="flex gap-4">
                            <span className="w-2 h-2 mt-2.5 rounded-full bg-terracotta flex-shrink-0" />
                            <span className="text-charcoal/80">
                                <strong>Sustainable Energy:</strong> Empowering communities with cheap, sustainable solar energy solutions.
                            </span>
                        </li>
                    </ul>
                </motion.div>

                {/* Our Impact */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-4xl font-display font-bold text-forest mb-6">Our Impact</h2>
                    <p className="text-charcoal/80 mb-6">
                        For a concise overview of EnviroOne's work and results in Sierra Leone, download our 1-page EnviroOne Impact summary.
                    </p>
                    <a
                        href="/EnviroOne-Impact.pdf"
                        download="EnviroOne-Impact.pdf"
                        className="inline-block"
                    >
                        <button className="px-6 py-3 bg-forest text-white font-semibold rounded-lg hover:bg-forest/90 transition-colors shadow-md hover:shadow-lg">
                            Download
                        </button>
                    </a>
                </motion.div>
            </div>

            {/* View Certifications Button */}
            <div className="flex justify-center mt-12">
                <Button
                    variant="primary"
                    icon="arrow"
                    onClick={() => setIsCertModalOpen(true)}
                    className="bg-forest text-cream hover:bg-forest-dark"
                >
                    View Certifications
                </Button>
            </div>

            <CertificationsModal
                isOpen={isCertModalOpen}
                onClose={() => setIsCertModalOpen(false)}
            />
        </Section>
    );
};
