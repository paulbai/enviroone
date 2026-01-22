"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const DonateOptions = () => {
    const impactCards = [
        {
            amount: "$20",
            title: "Supports a Farmer",
            description: "Provides inputs and training for one month, helping a family move from subsistence to sustainable farming.",
            icon: "🌱"
        },
        {
            amount: "$50",
            title: "Clean Water Access",
            description: "Contributes to the maintenance of a well, ensuring an entire village has access to safe drinking water.",
            icon: "💧"
        },
        {
            amount: "$100",
            title: "Educates a Child",
            description: "Helps provide school supplies and resources, giving a child the gift of knowledge and a brighter future.",
            icon: "📚"
        }
    ];

    return (
        <Section className="bg-cream relative z-10 py-24">
            <div className="max-w-5xl mx-auto px-4">

                {/* Intro Text */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-forest-dark mb-6">
                        Where Your Money Goes
                    </h2>
                    <p className="text-lg text-charcoal/80">
                        At EnviroOne, we believe in transparency and impact. Your donation goes directly to our projects in Sierra Leone, empowering communities to break the cycle of poverty.
                    </p>
                </div>

                {/* Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {impactCards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl mb-4">{card.icon}</div>
                            <div className="text-golden-dark font-bold text-xl mb-2">{card.amount}</div>
                            <h3 className="text-xl font-bold text-forest-dark mb-3">{card.title}</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Main Donation CTA */}
                <div className="bg-forest-dark rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
                            Ready to Make a Difference?
                        </h2>
                        <p className="text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-light">
                            Your secure donation represents a lifeline for families in need. Join us in building a sustainable future today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                href="https://secure.squarespace.com/commerce/donate?donatePageId=57f5646ed2b8578aac1f3fd8"
                                target="_blank"
                                variant="primary"
                                className="bg-golden text-forest-dark hover:bg-white hover:text-forest-dark font-bold text-lg px-8 py-4 h-auto min-w-[200px]"
                            >
                                Donate Securely
                            </Button>
                        </div>
                        <p className="mt-6 text-cream/40 text-sm">
                            You will be redirected to our secure payment processor.
                        </p>
                    </div>
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
