"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { VideoModal } from "@/components/ui/VideoModal";

export const AboutHero = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <iframe
                    className="absolute inset-0 w-full h-full object-cover scale-[1.35]"
                    src="https://www.youtube.com/embed/DiXj55oQH58?autoplay=1&mute=1&controls=0&loop=1&playlist=DiXj55oQH58&playsinline=1&rel=0&showinfo=0&modestbranding=1"
                    allow="autoplay; encrypted-media"
                    title="EnviroOne Background Video"
                    style={{ pointerEvents: "none" }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-end items-end p-8 md:p-12 pb-16">
                <Button
                    onClick={() => setIsVideoModalOpen(true)}
                    variant="outline"
                    icon="play"
                    className="bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 hover:border-white font-medium"
                >
                    Watch Video About Us
                </Button>
            </div>

            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
                videoId="DiXj55oQH58"
            />
        </section>
    );
};
