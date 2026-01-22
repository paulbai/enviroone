"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
    src: string;
    caption: string;
    alt?: string;
}

interface ProjectHeroCarouselProps {
    slides: Slide[];
    className?: string;
}

export const ProjectHeroCarousel = ({ slides, className }: ProjectHeroCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    if (!slides || slides.length === 0) {
        return null; // Or return a placeholder
    }

    return (
        <div className={cn("relative w-full overflow-hidden rounded-2xl shadow-xl group", className)}>
            {/* Main Aspect Ratio Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-charcoal">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slides[currentIndex].src}
                            alt={slides[currentIndex].alt || slides[currentIndex].caption}
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay for Caption Readability */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Caption - Bottom Left */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl z-10 pointer-events-none">
                    <motion.div
                        key={`caption-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-electric-lime text-forest font-mono text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                                Milestone {currentIndex + 1}/{slides.length}
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white drop-shadow-md leading-tight">
                            {slides[currentIndex].caption}
                        </h3>
                    </motion.div>
                </div>

                {/* Progress Indicators - Top Right */}
                <div className="absolute top-6 right-6 flex gap-1 z-20">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "h-1 rounded-full transition-all duration-300",
                                idx === currentIndex ? "w-8 bg-electric-lime" : "w-2 bg-white/30"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Visible on Hover/Focus) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all hover:scale-110 active:scale-95"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};
