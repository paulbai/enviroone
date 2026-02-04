"use client";

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Droplets, Play, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { VideoModal } from '@/components/ui/VideoModal';
import { ProjectHeroCarousel } from '@/components/projects/ProjectHeroCarousel';
import { VillageGrid } from '@/components/projects/VillageGrid';
import { VillageModal } from '@/components/projects/VillageModal';
import { villages } from './villageData';

export default function CleanWaterPage() {
    const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
    const [selectedVillageId, setSelectedVillageId] = useState<string | null>(null);

    const selectedVillage = villages.find(v => v.id === selectedVillageId) || null;

    return (
        <main className="pt-20">
            <VideoModal
                isOpen={!!currentVideoId}
                onClose={() => setCurrentVideoId(null)}
                videoId={currentVideoId || ""}
            />

            <VillageModal
                village={selectedVillage}
                isOpen={!!selectedVillageId}
                onClose={() => setSelectedVillageId(null)}
                onVideoClick={(videoId) => setCurrentVideoId(videoId)}
            />

            <Section className="bg-water/5 min-h-screen">
                <div className="max-w-5xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link href="/projects" className="inline-flex items-center gap-2 text-forest hover:text-water transition-colors mb-6 font-medium">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-water/10 rounded-xl text-water">
                                <Droplets className="w-8 h-8" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal">Clean Water</h1>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-lg text-charcoal/80 max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <h3 className="text-xl font-bold text-forest mb-4">Water for Life: A Holistic Approach</h3>
                        <p>
                            EnviroOne believes that a healthy community is multidimensional. In rural Sierra Leone, access to clean water emerges as the most urgent foundation for physical health and economic vitality.
                        </p>
                        <p>
                            Since 2017, EnviroOne has dug <strong>over 30 water wells</strong>, providing clean drinking water to over <strong>105,000 individuals</strong> across the Tonkolili, Port Loko, and Bombali districts, as well as the Western Rural Area (Waterloo).
                        </p>
                        <p>
                            Our site selection prioritizes community need, hydrogeologic suitability, and strong community ownership to ensure sustainability.
                        </p>

                        <h4 className="text-lg font-bold text-forest mt-8 mb-4">Program Impact</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Health:</strong> Significant decrease in waterborne illnesses (cholera, typhoid) and improved maternal/child health.</li>
                            <li><strong>Social:</strong> Reduced water collection burden on women and girls, leading to higher school attendance.</li>
                            <li><strong>Economic:</strong> Lower household medical spending and new opportunities for small-scale water-fed businesses.</li>
                            <li><strong>Agricultural:</strong> Year-round access for medicinal plants, agroforestry, and regenerative agriculture.</li>
                            <li><strong>Environmental:</strong> Reduced riverbank degradation and support for ecosystem health.</li>
                        </ul>

                        {/* Action Buttons */}
                        <div className="mt-8 mb-8 not-prose flex flex-wrap gap-4">
                            <button
                                onClick={() => setCurrentVideoId("myeXYnH-niI")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                            >
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Watch: Clean Water Project I
                            </button>
                            <button
                                onClick={() => setCurrentVideoId("RRMQSRSJYOY")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                            >
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Watch: Clean Water Project II
                            </button>
                        </div>

                        <div className="mt-12 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1744442692268-EGQ6YJ63UN4SWI9Q27OT/01a+Digging.jpg", caption: "Initial Digging Phase" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1744442693090-FSQHO4HJ7XEVCNTQJ8FF/02+Concreting.jpg", caption: "Securing the Well" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1744442694128-YV8X4JQVWPDYOPW5O5Z4/05a+Pump+Installation.jpg", caption: "Pump Installation" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1744442695877-FUPC4GIABWCHTKSUVHW9/07+Irene+Water+Well.jpg", caption: "Irene Community Well" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1744442978454-FXMQKGO5QEJ04B0TS2B3/Water+well+opening+photo0.jpg", caption: "Opening Ceremony" },
                                    { src: "/projects/clean_water_1.png", caption: "Clean Water Access" },
                                    { src: "/projects/clean_water_2.png", caption: "Community Impact" }
                                ]}
                            />
                        </div>
                    </motion.div>

                    {/* Village Bento Grid */}
                    <VillageGrid
                        villages={villages}
                        onVillageClick={(villageId) => setSelectedVillageId(villageId)}
                    />
                </div>
            </Section>
        </main>
    );
}
