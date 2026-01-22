"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const ChurchMinistryContent = () => {
    return (
        <Section className="bg-cream relative z-10 py-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Introduction Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="/images/church-ministry-intro.png"
                            alt="Community Gathering"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-forest/10 mix-blend-multiply" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-display font-bold text-forest-dark mb-6">
                            What Is the Church Ministry Program?
                        </h2>
                        <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                            EnviroOne invites your church and congregation to join our crusade of improving the foundational pillars of human development—food, health, and knowledge—for the less privileged.
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                            We believe that empowering the poor and disadvantaged is a noble course commanded by God. By partnering with us, you help answer the call to feed the hungry, give drink to the thirsty, and care for those in need.
                        </p>
                    </motion.div>
                </div>

                {/* Involvement Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-dark mb-4">
                            How Can You Get Involved?
                        </h2>
                        <div className="h-1 w-20 bg-golden mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Prayer */}
                        <div className="bg-cream/30 p-8 rounded-xl text-center hover:bg-cream/50 transition-colors">
                            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-forest-dark mb-3">Prayer Partnership</h3>
                            <p className="text-charcoal/70">
                                Pray for EnviroOne, our donors, volunteers, and workforce to be blessed with God’s love, compassion, and wisdom as we serve.
                            </p>
                        </div>

                        {/* Speaker */}
                        <div className="bg-cream/30 p-8 rounded-xl text-center hover:bg-cream/50 transition-colors">
                            <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-6 text-golden-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-forest-dark mb-3">Host a Speaker</h3>
                            <p className="text-charcoal/70">
                                Invite EnviroOne to speak at your church service or event. We would love to share the work the Lord has blessed us to do.
                            </p>
                        </div>

                        {/* Corporate */}
                        <div className="bg-cream/30 p-8 rounded-xl text-center hover:bg-cream/50 transition-colors">
                            <div className="w-16 h-16 bg-blue-100/50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-forest-dark mb-3">Corporate Partnership</h3>
                            <p className="text-charcoal/70">
                                Engage your community to help families live with hope. We encourage you to add your organization's name to our list of partners.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-forest-dark rounded-3xl p-12 text-cream relative overflow-hidden">
                    {/* Decorative background circles */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-golden/10 rounded-full blur-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Connect With Us
                        </h2>
                        <p className="text-xl text-cream/90 mb-8 font-light">
                            We would love to be part of your Ministry. Please contact us to start a conversation about how we can work together.
                        </p>
                        <Button
                            href="mailto:ministry@enviroone.org"
                            variant="primary"
                            className="bg-golden text-forest-dark hover:bg-white hover:text-forest-dark font-bold"
                            icon="arrow"
                        >
                            Email Us at ministry@enviroone.org
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};
