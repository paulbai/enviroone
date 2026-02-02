"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Heart } from "lucide-react";

export const DonateOptions = () => {
    return (
        <Section className="bg-cream relative z-10 py-24">
            <div className="max-w-5xl mx-auto px-4">
                {/* Main Donation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-forest-dark to-forest rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
                >
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-lime/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <div className="w-20 h-20 mx-auto bg-golden/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-golden/30">
                                <Heart className="w-10 h-10 text-golden fill-golden" />
                            </div>
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
                            Make Your Donation Today
                        </h2>
                        <p className="text-xl text-cream/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            Your secure donation provides clean water, sustainable agriculture, and education to communities in Sierra Leone. Every contribution makes a lasting impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                href="https://www.enviroone.org/checkout/donate?donatePageId=57f5646ed2b8578aac1f3fd8"
                                target="_blank"
                                variant="primary"
                                className="bg-golden text-forest-dark hover:bg-white hover:text-forest-dark font-bold text-lg px-10 py-5 h-auto min-w-[240px] shadow-xl hover:shadow-2xl transition-all"
                            >
                                Donate Securely Now
                            </Button>
                        </div>
                        <p className="mt-6 text-cream/50 text-sm">
                            You will be redirected to our secure payment page
                        </p>
                    </div>
                </motion.div>

                {/* Impact Information */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm text-center"
                    >
                        <div className="text-3xl mb-3">🌱</div>
                        <h3 className="text-lg font-bold text-forest-dark mb-2">Sustainable Farming</h3>
                        <p className="text-charcoal/70 text-sm">
                            Support regenerative agriculture practices that restore soil health and food security
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-6 rounded-xl shadow-sm text-center"
                    >
                        <div className="text-3xl mb-3">💧</div>
                        <h3 className="text-lg font-bold text-forest-dark mb-2">Clean Water Access</h3>
                        <p className="text-charcoal/70 text-sm">
                            Provide safe drinking water to entire villages, reducing disease and saving lives
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-6 rounded-xl shadow-sm text-center"
                    >
                        <div className="text-3xl mb-3">📚</div>
                        <h3 className="text-lg font-bold text-forest-dark mb-2">Education Programs</h3>
                        <p className="text-charcoal/70 text-sm">
                            Give children the gift of knowledge and a brighter future through quality education
                        </p>
                    </motion.div>
                </div>

                {/* Other Ways to Give - text link */}
                <div className="text-center mt-12">
                    <p className="text-charcoal/60">
                        Looking for other ways to help? <a href="/get-involved" className="text-forest hover:underline font-medium">Explore volunteer opportunities</a>
                    </p>
                </div>
            </div>
        </Section>
    );
};
