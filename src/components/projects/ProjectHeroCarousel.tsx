"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
    src: string;
    caption: string;
    alt?: string;
}

interface ProjectHeroCarouselProps {
    slides: Slide[];
    className?: string;
    onVideoClick?: () => void;
    videoLabel?: string;
}

export const ProjectHeroCarousel = ({ slides, className, onVideoClick, videoLabel }: ProjectHeroCarouselProps) => {
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
                        <Image
                            src={slides[currentIndex].src}
                            alt={slides[currentIndex].alt || slides[currentIndex].caption}
                            width={1920}
                            height={1080}
                            priority={currentIndex === 0}
                            className="w-full h-full object-contain"
                            sizes="100vw"
                        />
                        {/* Gradient Overlay for Controls Visibility */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>
                </AnimatePresence>

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

                {/* Video Button - Bottom Right (Inside Carousel) */}
                {onVideoClick && (
                    <div className="absolute bottom-6 right-6 z-30">
                        <button
                            onClick={onVideoClick}
                            className="flex items-center gap-2 px-4 py-2 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
                        >
                            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-3 h-3 fill-current" />
                            </div>
                            <span className="text-sm">{videoLabel || "Watch Video"}</span>
                        </button>
                    </div>
                )}
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
