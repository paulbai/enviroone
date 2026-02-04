"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { Village } from '@/app/projects/clean-water/villageData';
import { ProjectHeroCarousel } from './ProjectHeroCarousel';

interface VillageModalProps {
    village: Village | null;
    isOpen: boolean;
    onClose: () => void;
    onVideoClick: (videoId: string) => void;
}

export const VillageModal = ({ village, isOpen, onClose, onVideoClick }: VillageModalProps) => {
    if (!village) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="min-h-full flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="sticky top-0 z-10 bg-gradient-to-r from-water to-water/80 text-white px-8 py-6 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-display font-bold">
                                            {village.displayName}
                                        </h2>
                                        <p className="text-white/90 mt-1">
                                            {village.projectCount} {village.projectCount === 1 ? 'Water Well Project' : 'Water Well Projects'}
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-8 py-8">
                                    {village.projects.map((project, index) => (
                                        <div
                                            key={project.id}
                                            className={index > 0 ? "mt-12 pt-12 border-t border-gray-200" : ""}
                                        >
                                            {/* Project Name */}
                                            <h3 className="text-2xl font-bold text-forest mb-2">
                                                {project.name}
                                            </h3>

                                            {/* Sponsor Info */}
                                            {project.sponsor && (
                                                <p className="text-sm text-gray-600 mb-6">
                                                    Sponsored by {project.sponsor}
                                                </p>
                                            )}

                                            {/* Photo Carousel */}
                                            {project.photos.length > 0 ? (
                                                <div className="mb-6">
                                                    <ProjectHeroCarousel slides={project.photos} />
                                                </div>
                                            ) : (
                                                <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500 mb-6">
                                                    Photos coming soon
                                                </div>
                                            )}

                                            {/* Video Button */}
                                            {project.videoId && (
                                                <div className="not-prose">
                                                    <button
                                                        onClick={() => onVideoClick(project.videoId!)}
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-water text-white font-bold rounded-full hover:bg-water/90 transition-all shadow-md hover:shadow-lg group"
                                                    >
                                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                            <Play className="w-4 h-4 fill-current" />
                                                        </div>
                                                        Watch: {project.name} Video
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
