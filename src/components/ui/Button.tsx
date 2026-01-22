"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
    icon?: "arrow" | "heart" | "none";
    href?: string;
    target?: string;
    rel?: string;
}

// Using Framer Motion button for interactions
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", children, icon = "arrow", href, onClick, ...props }, ref) => {
        const isPrimary = variant === "primary";
        const isOutline = variant === "outline";

        const commonClasses = cn(
            "inline-flex items-center justify-center font-medium transition-all duration-300",
            "rounded-full px-12 py-[18px] text-[16px] tracking-wide", // 18px 48px padding, pill shape
            // Neumorphic Primary Button
            isPrimary && "neu-btn",
            // Keep specific hover scales only for non-neu variants if desired, or let neu-btn handle its own move
            !isPrimary && "hover:scale-105 active:scale-95",

            variant === "secondary" && "bg-transparent border-2 border-forest text-forest hover:bg-forest hover:text-cream",
            isOutline && "border-2 border-current bg-transparent hover:bg-white/10",
            className
        );

        const content = (
            <>
                <span>{children}</span>
                {icon !== "none" && isPrimary && (
                    <motion.div
                        initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                        whileHover={{ width: "auto", opacity: 1, marginLeft: 8 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        {icon === "arrow" ? <ArrowRight className="w-5 h-5" /> : <Heart className="w-5 h-5" />}
                    </motion.div>
                )}
            </>
        );

        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(commonClasses, "relative z-50 cursor-pointer")}
                    onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
                    {...(props as any)}
                >
                    {content}
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref as any}
                className={commonClasses}
                // We can keep Framer Motion props for the button version if we want, or rely on CSS for consistency
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClick}
                {...(props as any)}
            >
                {content}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
