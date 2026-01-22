import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string; // For background colors/gradients
    children: ReactNode;
    fullWidth?: boolean; // If true, content is not constrained to 1200px (but padding still applies?)
    // Actually, full width usually means full bleed.
    // PRD says: "Alternate full-bleed and constrained sections"
    // If fullWidth is true, the container is full width.
    containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className, children, fullWidth = false, containerClassName }) => {
    return (
        <section
            id={id}
            className={cn(
                "relative py-[60px] md:py-[80px] lg:py-[120px]",
                className
            )}
        >
            <div
                className={cn(
                    "mx-auto px-4 md:px-8", // Basic horizontal padding
                    fullWidth ? "w-full" : "max-w-[var(--spacing-container)]",
                    containerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
};
