"use client";

import React, { useRef } from "react";
import NextImage from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryCardProps {
    quote: string;
    author: string;
    role: string;
    image: string;
}

const StoryCard = ({ quote, author, role, image }: StoryCardProps) => {
    return (
        <div className="flex-none w-[320px] md:w-[420px] snap-center">
            <div className="relative h-full bg-cream rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md border border-warmGray/10 flex flex-col items-center text-center">
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-2xl pointer-events-none mix-blend-multiply" />

                <div className="relative z-10">
                    <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white shadow-sm mx-auto mb-6">
                        <NextImage
                            src={image}
                            alt={author}
                            width={120}
                            height={120}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <Quote className="w-8 h-8 text-golden/40 mx-auto mb-4" />

                    <blockquote className="font-serif text-lg md:text-xl text-charcoal/80 italic mb-6 leading-relaxed">
                        "{quote}"
                    </blockquote>

                    <div>
                        <cite className="not-italic font-bold font-display text-forest block">{author}</cite>
                        <span className="text-sm text-warmGray uppercase tracking-wider">{role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StoriesCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: containerRef });
    const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = 450; // card width + gap
            containerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const stories = [
        {
            quote: "The water well has changed everything. My children are healthy, and I can grow vegetables year-round.",
            author: "Aminata Kamara",
            role: "Farmer, Port Loko",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop"
        },
        {
            quote: "Education combined with farming knowledge has given our youth a real future in their own community.",
            author: "Samuel Bangura",
            role: "Youth Leader",
            image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=300&auto=format&fit=crop"
        },
        {
            quote: "We no longer walk miles for water. We have time to learn and build our businesses.",
            author: "Fatmata Sesay",
            role: "Entrepreneur",
            image: "https://images.unsplash.com/photo-1548268770-66368d18e9a6?q=80&w=300&auto=format&fit=crop"
        },
        {
            quote: "EnviroOne listened to what we needed. They didn't just bring equipment; they brought knowledge.",
            author: "Ibrahim Turay",
            role: "Village Elder",
            image: "https://images.unsplash.com/photo-1529421308418-e4fa5e608215?q=80&w=300&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-[120px] bg-white relative overflow-hidden">
            <div className="max-w-[var(--spacing-container)] mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-forest mb-4">Impact Stories</h2>
                    <p className="text-charcoal/80 text-lg max-w-xl">
                        Voices from the communities we serve in Sierra Leone.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="hidden md:flex gap-4">
                    <button onClick={() => scroll("left")} className="p-3 rounded-full border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => scroll("right")} className="p-3 rounded-full border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div
                    ref={containerRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 px-4 md:px-[calc((100vw-1200px)/2+2rem)] scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {stories.map((story, i) => (
                        <StoryCard key={i} {...story} />
                    ))}
                    {/* Spacer for right padding */}
                    <div className="w-4 md:w-8 flex-none" />
                </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-[var(--spacing-container)] mx-auto px-4 md:px-8 mt-4">
                <div className="h-1 bg-warmGray/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-terracotta"
                        style={{ scaleX }}
                    />
                </div>
            </div>
        </section>
    );
};
