"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export const DonateOptions = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Section className="bg-cream relative z-10 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Embedded Donation Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Loading State */}
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-2xl z-10">
                            <div className="text-center">
                                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-forest-dark border-r-transparent mb-4"></div>
                                <p className="text-charcoal/60">Loading donation form...</p>
                            </div>
                        </div>
                    )}

                    {/* Iframe Container */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <iframe
                            src="https://www.enviroone.org/checkout/donate?donatePageId=57f5646ed2b8578aac1f3fd8"
                            title="EnviroOne Donation Form"
                            className="w-full border-0"
                            style={{ height: '1200px' }}
                            onLoad={() => setIsLoading(false)}
                            allow="payment"
                        />
                    </div>
                </motion.div>

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
