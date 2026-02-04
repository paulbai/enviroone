"use client";

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Droplets, Play, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { VideoModal } from '@/components/ui/VideoModal';
import { ProjectHeroCarousel } from '@/components/projects/ProjectHeroCarousel';

export default function CleanWaterPage() {
    const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

    return (
        <main className="pt-20">
            <VideoModal
                isOpen={!!currentVideoId}
                onClose={() => setCurrentVideoId(null)}
                videoId={currentVideoId || ""}
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


                        {/* ========== MALOKO WATER WELL ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Maloko Water Well</h4>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_18.png", caption: "Community Gathering for Prayer" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_15.png", caption: "Drilling Phase 1" },
                                        { src: "/projects/clean_water_16.png", caption: "Drilling Phase 2" },
                                        { src: "/projects/clean_water_17.png", caption: "Water Source Secured" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_19.png", caption: "Celebration of Water" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Maloko Water Well Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== PROVO-SPONSORED WATER WELL RETROFIT ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Provo-Sponsored Water Well Retrofit</h4>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_20.png", caption: "Assessment & Prayer" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_21.png", caption: "Repairs in Progress" },
                                        { src: "/projects/clean_water_22.png", caption: "Flow Restored" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_23.png", caption: "Sustainable Maintenance Handover" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Provo Retrofit Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== PROBLEM WATER WELLS - SIERRA LEONE ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Problem Water Wells Retrofit - Sierra Leone</h4>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_24.png", caption: "Diagnosing Issues" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_25.png", caption: "Engineering Fix" },
                                        { src: "/projects/clean_water_26.png", caption: "Well Safe Again" },
                                        { src: "/projects/clean_water_27.png", caption: "Community Check" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_28.png", caption: "Long-Term Solution Delivered" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Retrofit Project Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== KAFFU BULLOM CHIEFDOM ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Kaffu Bullom Chiefdom Water Well Retrofit</h4>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_kaffu_grid.jpg", caption: "Community Gathering" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_kaffu_grid.jpg", caption: "Water Flowing" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_kaffu_grid.jpg", caption: "Health Restored" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Kaffu Bullom Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== MASAMBONGPIE COMMUNITY ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Masambongpie Community Water Well</h4>

                            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                                Photos coming soon
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("lS7tLhf-gbw")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Masambongpie Water Well Video
                                </button>
                            </div>
                        </div>

                        {/* ========== LUNGI COMMUNITY ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Lungi Community Water Well</h4>
                            <p className="text-sm text-gray-600 mb-6">Sponsored by Bill & Dawn Flitcraft, New Jersey USA</p>

                            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                                Photos coming soon
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("PY7-B8jWkSE")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Lungi Community Water Well Video
                                </button>
                            </div>
                        </div>

                        {/* ========== MARUNIA COMMUNITY ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Marunia Community Water Well</h4>
                            <p className="text-sm text-gray-600 mb-6">Sponsored by PROVCO Ventures, Pennsylvania USA</p>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_marunia_grid.jpg", caption: "A New Beginning" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_marunia_grid.jpg", caption: "Clean Water" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_marunia_grid.jpg", caption: "Community Pride" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Marunia Water Well Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== MAKOMP COMMUNITY ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Makomp Community Water Well</h4>
                            <p className="text-sm text-gray-600 mb-6">Sponsored by Trinity United Methodist Church, Mullica Hill NJ USA</p>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_makomp_grid.png", caption: "Drilling Success" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_makomp_grid.png", caption: "Fresh Water" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_makomp_grid.png", caption: "Trinity Support" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Makomp Water Well Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== MASOILA COMMUNITY ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Masoila Community Water Well</h4>
                            <p className="text-sm text-gray-600 mb-6">Sponsored by Doug & Denise Brown, New Jersey USA</p>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_masoila_1.png", caption: "New Well" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_masoila_2.png", caption: "Community Handover" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_masoila_3.png", caption: "Gratitude" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Masoila Water Well Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== TOMBO BANA COMMUNITY ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Tombo Bana Community Water Well</h4>
                            <p className="text-sm text-gray-600 mb-6">Sponsored by Richard & Nancy Stetson, New Jersey USA</p>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_tombo_1.png", caption: "Breaking Ground" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_tombo_2.png", caption: "Construction" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_tombo_3.png", caption: "Clean Water" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("NWImYHhSWco")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Tombo Bana & Tombo Lol Celebration
                                </button>
                            </div>
                        </div>

                        {/* ========== MAKENI ROCFOLA (LISA BORGESE) ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Makeni Rocfola Community Water Well</h4>
                            <p className="text-sm text-gray-600 mb-6">Sponsored by Lisa Borgese, New Jersey USA</p>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_makeni_grid.jpg", caption: "Phase 1" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_makeni_grid.jpg", caption: "Phase 2" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_makeni_grid.jpg", caption: "Phase 3" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Makeni Rocfola Video (Coming Soon)
                                </button>
                            </div>
                        </div>

                        {/* ========== SONGO WATER RELIEF ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Songo Water Relief</h4>

                            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                                Photos coming soon
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("2EcKP2ZU0rs")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Songo Water Relief Video
                                </button>
                            </div>
                        </div>

                        {/* ========== MAKENI ROCFOLA (TRINITY UMC) ========== */}
                        <div className="mt-12 border-t border-gray-200 pt-12">
                            <h4 className="text-2xl font-bold text-forest mb-8">Makeni Rocfola Community Water Well</h4>
                            <p className="text-sm text-gray-600 mb-6">Sponsored by Trinity United Methodist Church, Mullica Hill NJ USA</p>

                            <div className="not-prose">
                                <ProjectHeroCarousel
                                    slides={[
                                        // Milestone 1: Prayer
                                        { src: "/projects/clean_water_makeni_trinity_banner.png", caption: "Trinity Sponsorship Banner" },
                                        // Milestone 2: Construction
                                        { src: "/projects/clean_water_makeni_trinity_3.png", caption: "Construction Progress" },
                                        // Milestone 3: Celebration & Handing Over
                                        { src: "/projects/clean_water_makeni_trinity_2.png", caption: "Impact" },
                                        { src: "/projects/clean_water_makeni_trinity_4.png", caption: "Community" }
                                    ]}
                                />
                            </div>

                            {/* Video Button */}
                            <div className="mt-6 not-prose">
                                <button
                                    onClick={() => setCurrentVideoId("")}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                    disabled
                                >
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-4 h-4 fill-current" />
                                    </div>
                                    Watch: Makeni Rocfola Trinity Video (Coming Soon)
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
