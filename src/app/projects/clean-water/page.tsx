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

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Maloko Water Well Drilling and Opening Activities</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_15.png", caption: "Maloko Drilling: Phase 1" },
                                    { src: "/projects/clean_water_16.png", caption: "Maloko Drilling: Phase 2" },
                                    { src: "/projects/clean_water_17.png", caption: "Water Source Secured" },
                                    { src: "/projects/clean_water_18.png", caption: "Community Gathering" },
                                    { src: "/projects/clean_water_19.png", caption: "Celebration of Water" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Retrofitting Provo-Sponsored Water Well</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_20.png", caption: "Provo Retrofit: Assessment" },
                                    { src: "/projects/clean_water_21.png", caption: "Provo Retrofit: Repairs" },
                                    { src: "/projects/clean_water_22.png", caption: "Provo Retrofit: Flow Restored" },
                                    { src: "/projects/clean_water_23.png", caption: "Sustainable Maintenance" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Retrofitting problem water wells in Sierra Leone</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_24.png", caption: "Problem Well: Diagnosing Issues" },
                                    { src: "/projects/clean_water_25.png", caption: "Problem Well: Engineering Fix" },
                                    { src: "/projects/clean_water_26.png", caption: "Problem Well: Safe Again" },
                                    { src: "/projects/clean_water_27.png", caption: "Problem Well: Community Check" },
                                    { src: "/projects/clean_water_28.png", caption: "Problem Well: Long-Term Solution" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Retrofitting problem water wells in Kaffu Bullom Chiefdom</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_kaffu_grid.jpg", caption: "Kaffu Bullom: Community Relief" },
                                    { src: "/projects/clean_water_kaffu_grid.jpg", caption: "Kaffu Bullom: Water Flowing" },
                                    { src: "/projects/clean_water_kaffu_grid.jpg", caption: "Kaffu Bullom: Health Restored" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Masambongpie Community Water Well</h4>
                        <div className="not-prose">
                            <button
                                onClick={() => setCurrentVideoId("lS7tLhf-gbw")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                            >
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Watch: Masambongpie Water Well Project
                            </button>
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Lungi Community Water Well Sponsored by Bill & Dawn Flitcraft, New Jersey USA</h4>
                        <div className="not-prose">
                            <button
                                onClick={() => setCurrentVideoId("PY7-B8jWkSE")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                            >
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Watch: Lungi Community Water Well Project
                            </button>
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Marunia Community Water Well, Marunia Sierra Leone sponsored by PROVCO Ventures, Pennsylvania USA</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_marunia_grid.jpg", caption: "Marunia: A New Beginning" },
                                    { src: "/projects/clean_water_marunia_grid.jpg", caption: "Marunia: Clean Water" },
                                    { src: "/projects/clean_water_marunia_grid.jpg", caption: "Marunia: Community Pride" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Makomp Community Water Well Sponsored by Trinity United Methodist Church, Mullica Hill NJ USA</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_makomp_grid.png", caption: "Makomp: Drilling Success" },
                                    { src: "/projects/clean_water_makomp_grid.png", caption: "Makomp: Fresh Water" },
                                    { src: "/projects/clean_water_makomp_grid.png", caption: "Makomp: Trinity Support" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Masoila Community Water Well Sponsored by Doug & Denise Brown, New Jersey USA</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_masoila_1.png", caption: "Masoila: New Well" },
                                    { src: "/projects/clean_water_masoila_2.png", caption: "Masoila: Community Handover" },
                                    { src: "/projects/clean_water_masoila_3.png", caption: "Masoila: Gratitude" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Tombo Bana Community Water Well Sponsored by Richard & Nancy Stetson, New Jersey USA</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_tombo_1.png", caption: "Tombo Bana: Breaking Ground" },
                                    { src: "/projects/clean_water_tombo_2.png", caption: "Tombo Bana: Construction" },
                                    { src: "/projects/clean_water_tombo_3.png", caption: "Tombo Bana: Clean Water" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Makeni Rocfola Community Water Well Sponsored by Lisa Borgese, New Jersey USA</h4>
                        <div className="mt-8 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_makeni_grid.jpg", caption: "Makeni Rocfola: Phase 1" },
                                    { src: "/projects/clean_water_makeni_grid.jpg", caption: "Makeni Rocfola: Phase 2" },
                                    { src: "/projects/clean_water_makeni_grid.jpg", caption: "Makeni Rocfola: Phase 3" }
                                ]}
                            />
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Community water wells for Tombo Bana and Tombo Lol villages with celebrations by the communities and the Sierra Leone National Press</h4>
                        <div className="not-prose">
                            <button
                                onClick={() => setCurrentVideoId("NWImYHhSWco")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                            >
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Watch: Community Celebration
                            </button>
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">EnviroOne brings much-needed water relief to Songo, Sierra Leone</h4>
                        <div className="not-prose">
                            <button
                                onClick={() => setCurrentVideoId("2EcKP2ZU0rs")}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                            >
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Watch: Songo Water Relief
                            </button>
                        </div>

                        <h4 className="text-xl font-bold text-forest mt-12 mb-6">Makeni Rocfola community water wells, sponsored by Trinity United Methodist Church, Mullica Hill NJ USA</h4>
                        <div className="space-y-4 not-prose">
                            <img src="/projects/clean_water_makeni_trinity_banner.png" alt="Makeni Trinity Well Banner" className="rounded-lg w-full h-auto shadow-sm" />

                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/clean_water_makeni_trinity_2.png", caption: "Trinity Sponsorship: Impact" },
                                    { src: "/projects/clean_water_makeni_trinity_3.png", caption: "Trinity Sponsorship: Construction" },
                                    { src: "/projects/clean_water_makeni_trinity_4.png", caption: "Trinity Sponsorship: Community" }
                                ]}
                            />
                        </div>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
