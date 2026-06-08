"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";

interface ScrollyBackgroundProps {
    scrollYProgress: MotionValue<number>;
    damagedImage?: SanityImageSource | null;
    restoredImage?: SanityImageSource | null;
}

const DEFAULT_DAMAGED_SRC = "/images/hero-children.jpg";
const DEFAULT_RESTORED_SRC = "/images/restored-landscape-new.jpg";

export const ScrollyBackground = ({
    scrollYProgress,
    damagedImage,
    restoredImage,
}: ScrollyBackgroundProps) => {
    // 0 -> 0.5: Damaged state visible
    // 0.5 -> 1.0: Restored state starts revealing

    // We'll use a circular clip path to reveal the "Restored" layer from the center out, or a simple opacity fade.
    // The "Inversa" effect often uses a mask. Let's try a radial mask reveal.
    const maskSize = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "150%"]);
    const clipPath = useTransform(maskSize, (val) => `circle(${val} at 50% 50%)`);
    const scanOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    const damagedSrc = damagedImage
        ? urlFor(damagedImage).width(1920).height(1080).fit("max").url()
        : DEFAULT_DAMAGED_SRC;
    const restoredSrc = restoredImage
        ? urlFor(restoredImage).width(1920).height(1080).fit("max").url()
        : DEFAULT_RESTORED_SRC;

    const damagedAlt =
        damagedImage && typeof damagedImage === "object" && "alt" in damagedImage
            ? (damagedImage.alt as string | undefined) ?? "Children in Sierra Leone"
            : "Children in Sierra Leone";
    const restoredAlt =
        restoredImage && typeof restoredImage === "object" && "alt" in restoredImage
            ? (restoredImage.alt as string | undefined) ?? "Restored Green Valley Landscape"
            : "Restored Green Valley Landscape";

    return (
        <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={damagedSrc}
                    alt={damagedAlt}
                    className="w-full h-full object-cover object-[70%_25%] md:object-[50%_20%]"
                />
            </div>

            {/* Layer 2: Restored State (Reveal) */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    // Using CSS clip-path for performance
                    clipPath
                }}
            >
                <img
                    src={restoredSrc}
                    alt={restoredAlt}
                    className="w-full h-full object-cover object-[50%_80%] md:object-center filter brightness-110 saturate-110"
                />
                <div className="absolute inset-0 bg-forest-dark/20 mix-blend-overlay" />
            </motion.div>

            {/* Scan Line Overlay Effect during transition */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    opacity: scanOpacity
                }}
            >
                <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </motion.div>
        </div>
    );
};
