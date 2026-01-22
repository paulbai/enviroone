"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface CertificationsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const certifications = [
    {
        title: "Renewal Certificate",
        url: "https://www.enviroone.org/s/Renewal-Certificate.jpg",
        type: "Certificate"
    },
    {
        title: "EnviroOne Attestation",
        url: "https://www.enviroone.org/s/EnviroOne-Attestation.pdf",
        type: "Attestation"
    },
    {
        title: "Agriculture Attestation 2015",
        url: "https://www.enviroone.org/s/Attestation_Agriculture_2015.jpg",
        type: "Attestation"
    },
    {
        title: "NGO Attestation Social Welfare",
        url: "https://www.enviroone.org/s/NGO-Attestation_Social-welfare.jpg",
        type: "Attestation"
    },
    {
        title: "Attestation Agriculture Tonkolili",
        url: "https://www.enviroone.org/s/Attestation_Agric_Tonkolili.jpg",
        type: "Attestation"
    }
];

export const CertificationsModal: React.FC<CertificationsModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-forest">Certifications & Recognitions</h3>
                                <p className="text-charcoal/60 text-sm mt-1">
                                    Official documents attesting to EnviroOne's impact and legitimacy.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-charcoal/60 hover:text-charcoal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-8 bg-cream">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {certifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className="neu-flat rounded-2xl p-6 group transition-transform hover:scale-[1.02] flex flex-col h-full"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="neu-icon w-12 h-12 flex items-center justify-center rounded-xl text-forest shrink-0">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1 min-w-0 pt-1">
                                                <h4 className="font-bold text-forest-dark text-lg leading-tight mb-2">{cert.title}</h4>
                                                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-forest/10 text-forest tracking-wide">
                                                    {cert.type}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-4 flex justify-end">
                                            <a
                                                href={cert.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="neu-btn px-4 py-2 rounded-lg text-sm font-bold text-forest flex items-center gap-2 hover:text-terracotta transition-colors"
                                            >
                                                View Document <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
