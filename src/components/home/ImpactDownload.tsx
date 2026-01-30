"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export const ImpactDownload = () => {
    return (
        <Section className="bg-cream py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
                    See Our Full Impact Report
                </h3>
                <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
                    Download our comprehensive impact report to learn more about the communities we serve and the lasting change we're creating together.
                </p>
                <a
                    href="/EnviroOne-Impact.pdf"
                    download="EnviroOne-Impact.pdf"
                    className="inline-block"
                >
                    <Button
                        variant="primary"
                        className="shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                    >
                        <Download className="w-5 h-5" />
                        Download EnviroOne Impact
                    </Button>
                </a>
            </motion.div>
        </Section>
    );
};
