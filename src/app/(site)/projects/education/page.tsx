"use client";

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { BookOpen, Play, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProjectHeroCarousel } from '@/components/projects/ProjectHeroCarousel';
import { VideoModal } from '@/components/ui/VideoModal';

export default function EducationPage() {
    const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

    return (
        <main className="pt-20">
            <VideoModal
                isOpen={!!currentVideoId}
                onClose={() => setCurrentVideoId(null)}
                videoId={currentVideoId || ""}
            />
            <Section className="bg-golden/5 min-h-screen">
                <div className="max-w-5xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <Link href="/projects" className="inline-flex items-center gap-2 text-forest hover:text-golden transition-colors mb-6 font-medium">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-golden/10 rounded-xl text-golden">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal">Education</h1>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-lg text-charcoal/80 max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <h3 className="text-xl font-bold text-forest mb-4">Integrating Regenerative Agriculture & Clean Water Awareness</h3>
                        <p>
                            EnviroOne’s education programming integrates regenerative agriculture and clean water awareness to strengthen rural resilience in Sierra Leone. Recognizing the interdependence of healthy soils and safe water on community health and food systems, this initiative empowers farmers, youth, and women with the knowledge and tools needed to restore ecosystems, improve water access, and promote behavioral change through participatory learning.
                        </p>

                        <h4 className="text-lg font-bold text-forest mt-8 mb-4">Key Activities</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Participatory Training on Regenerative Agriculture:</strong> Agroforestry training for students and farmers.</li>
                            <li><strong>Water Well Management & Use:</strong> Training on retrofitting, pump dismantling, and clean water usage.</li>
                            <li><strong>Solar Lamp Campaign:</strong> In 2018, EnviroOne embarked on a successful special campaign to provide solar lamps to our farming communities and their school children. Partnering with SoLight Design, we raised funds to provide free solar lamps to 5 villages.</li>
                        </ul>

                        <h4 className="text-lg font-bold text-forest mt-8 mb-4">Impact</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Over 100 smallholder farmers, youth, and women trained in regenerative agricultural practices.</li>
                            <li>Clean water education campaigns conducted in three communities.</li>
                            <li>Local educator capacity built by training 10 peer facilitators.</li>
                            <li>Improved crop yields and reduction in waterborne illnesses.</li>
                        </ul>

                        <div className="mt-12 not-prose">
                            <ProjectHeroCarousel
                                slides={[
                                    { src: "/projects/education_red_shirt_final.jpg", caption: "Community Health Education" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745037760252-XLOA5VHZQVYLTKGNW2BZ/_Students.jpg", caption: "Knowledge is Power" },
                                    { src: "/projects/education_green_hat_final.jpg", caption: "Supporting Local Farmers" },
                                    { src: "https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1571087834979-WI13WMNMPFQQIAAT07Z7/03+Students+excited+for+lights.jpg", caption: "Study Hours Extended" },
                                    { src: "/projects/education_1.png", caption: "Classroom Engagement" },
                                    { src: "/projects/education_2.png", caption: "Building Foundations" }
                                ]}
                                onVideoClick={() => setCurrentVideoId("fd93opqBc2E")}
                                videoLabel="Watch: Lighting the Way Forward"
                            />
                        </div>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
