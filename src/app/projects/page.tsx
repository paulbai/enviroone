"use client";

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { BookOpen, Droplets, Sprout, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        id: 'education',
        title: 'Education',
        description: 'Integrating regenerative agriculture and clean water awareness to strengthen rural resilience and empower future generations.',
        icon: <BookOpen className="w-8 h-8 text-golden" />,
        bgClass: 'bg-golden/10',
        borderClass: 'border-golden/20',
        textClass: 'text-golden',
        link: '/projects/education',
        image: 'https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745037760252-XLOA5VHZQVYLTKGNW2BZ/_Students.jpg'
    },
    {
        id: 'clean-water',
        title: 'Clean Water',
        description: 'Providing safe, sustainable drinking water access to over 105,000 individuals through community-led well drilling and rehabilitation.',
        icon: <Droplets className="w-8 h-8 text-water" />,
        bgClass: 'bg-water/10',
        borderClass: 'border-water/20',
        textClass: 'text-water',
        link: '/projects/clean-water',
        image: 'https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1744442695877-FUPC4GIABWCHTKSUVHW9/07+Irene+Water+Well.jpg'
    },
    {
        id: 'agriculture',
        title: 'Agriculture',
        description: 'Promoting regenerative oil palm agroforestry and intercropping systems to restore soil health, increase biodiversity, and stabilize livelihoods.',
        icon: <Sprout className="w-8 h-8 text-forest" />,
        bgClass: 'bg-forest/10',
        borderClass: 'border-forest/20',
        textClass: 'text-forest',
        link: '/projects/agriculture',
        image: 'https://images.squarespace-cdn.com/content/v1/57e2b65646c3c44183c4ddff/1745066598577-SB569IPL748R3CKL8P02/Plantation.jpg'
    }
];

export default function ProjectsPage() {
    return (
        <main className="pt-20">
            <Section className="bg-warmGray/10 min-h-screen">
                <div className="max-w-5xl mx-auto py-12 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-forest mb-6">Our Projects</h1>
                        <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
                            Since 2011, EnviroOne has been implementing programs that have impacted lives in Sierra Leone through Education, Clean Water via our Well Drilling Program, and Agriculture.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={project.link}
                                    className="group block h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute top-4 left-4 p-3 rounded-xl backdrop-blur-sm bg-white/90 z-20 ${project.textClass}`}>
                                            {project.icon}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h2 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-forest transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-charcoal/70 mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className={`inline-flex items-center gap-2 font-bold ${project.textClass} group-hover:gap-3 transition-all`}>
                                            Explore Project <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
