"use client";

import React from 'react';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Sprout, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProjectHeroCarousel } from '@/components/projects/ProjectHeroCarousel';

export default function AgriculturePage() {
    return (
        <main className="pt-20">
            <Section className="bg-forest/5 min-h-screen">
                <div className="max-w-5xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link href="/projects" className="inline-flex items-center gap-2 text-forest hover:text-green-600 transition-colors mb-6 font-medium">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-forest/10 rounded-xl text-forest">
                                <Sprout className="w-8 h-8" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal">Agriculture</h1>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-lg text-charcoal/80 max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <h3 className="text-xl font-bold text-forest mb-4">Regenerative Agriculture & Oil Palm Production</h3>
                        <p>
                            Sierra Leone’s agricultural sector faces significant challenges, including soil degradation and limited market access. Since 2017, EnviroOne has been transforming this landscape by promoting regenerative oil palm agroforestry. This approach restores soil health, increases biodiversity, and stabilizes livelihoods in the Tonkolili and Port Loko districts.
                        </p>
                        <p>
                            <strong>Innovation & Expansion:</strong> Expanding this success, since 2023, we have integrated the intercropping of cassava and native medicinal plants within oil palm systems. This innovative model taps into the region’s deep traditional healing knowledge, diversifying income while addressing rural health challenges. Operations have now expanded to include two rural communities in <strong>Makeni Roc Fola</strong> (Tonkolili District) and one community in <strong>Lungi</strong>.
                        </p>

                        <h4 className="text-lg font-bold text-forest mt-8 mb-4">Program Impact</h4>
                        <ul className="list-disc pl-5 space-y-2 mb-8">
                            <li><strong>20+ hectares</strong> under palm cultivation intercropped with cassava and medicinal plants.</li>
                            <li><strong>500+ farmers</strong> in Tonkolili and Port Loko benefiting from the program.</li>
                            <li><strong>Increased biodiversity</strong> and soil fertility across palm-based farms.</li>
                            <li><strong>Enhanced community access</strong> to herbal health resources and safe traditional remedies.</li>
                            <li><strong>Improved farmer incomes</strong> through diversified, climate-resilient livelihoods.</li>
                            <li><strong>Strengthened local knowledge</strong> on regenerative agriculture systems.</li>
                        </ul>

                        <h4 className="text-lg font-bold text-forest mt-8 mb-4">Traditional Medicine & Community Health Outcomes</h4>
                        <p>
                            With over 70–80% of the rural population relying on traditional medicine, this initiative has started to yield early health outcomes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Cultural Integration:</strong> Households increasingly use culturally familiar treatment plants (e.g., moringa, neem, ginger, bitter leaf).</li>
                            <li><strong>Access to Care:</strong> Reduced reliance on distant or costly health facilities for common ailments.</li>
                            <li><strong>Proactive Health:</strong> As herbal literacy grows, communities seek early care rather than waiting for illnesses to worsen.</li>
                            <li><strong>Trust:</strong> Community trust in herbal healers is strengthened with safety training and validation of remedies.</li>
                        </ul>

                        <div className="mt-12 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066148147-YOZYGO9QDSWRU1BN608H/07_EnviroOne%2BFarm%2BWorkers.jpg", caption: "Empowering Local Farmers" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066150950-J376GYS2WWYM6J1BQSPX/Community%2Bparticipation.jpg", caption: "Community-Led Growth" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745064747439-BY73ZBCXO1HQUGT4SJNE/Palm+w+cassava.jpg", caption: "Intercropping for Resilience" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066598577-SB569IPL748R3CKL8P02/Plantation.jpg", caption: "Revitalizing the Landscape" },
                                    { src: "/projects/agriculture_new_1.png", caption: "Harvesting Sustainability" },
                                    { src: "/projects/agriculture_new_2.png", caption: "Processing the Yield" },
                                    { src: "/projects/agriculture_new_6.png", caption: "Oil Palm Production" },
                                    { src: "/projects/agriculture_new_7.png", caption: "Tools for Success" }
                                ]}
                            />
                        </div>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
