"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname || "/");

    // Update active link when pathname changes
    useEffect(() => {
        setActiveLink(pathname || "/");
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Projects", href: "/projects" },
        { name: "Get involved", href: "/get-involved" },
    ];

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-golden z-[1001] origin-left"
                style={{
                    scaleX: scrollYProgress,
                    opacity: scrollYProgress
                }}
            />

            {/* Desktop & Mobile Navbar */}
            <motion.header
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[1000] h-[80px]",
                    "flex items-center transition-all duration-300",
                    scrollYProgress.get() > 0.05
                        ? "bg-forest-dark/95 backdrop-blur-md shadow-md py-0"
                        : "bg-transparent py-2"
                )}
            >
                <div className="w-full max-w-[var(--spacing-container)] mx-auto px-4 md:px-8 flex items-center justify-between">
                    {/* Logo - Add brightness filter for dark mode */}
                    <Link href="/" className="relative h-12 md:h-16 w-32 md:w-40 flex items-center" onClick={() => setActiveLink("/")}>
                        <Image
                            src="/logo.png"
                            alt="EnviroOne Logo"
                            fill
                            sizes="160px"
                            priority
                            className="object-contain object-left"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-2 bg-forest-dark/90 rounded-full p-1 backdrop-blur-md border border-white/10 shadow-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                                    activeLink === link.href ? "text-white" : "text-white/70 hover:text-white"
                                )}
                                onClick={() => setActiveLink(link.href)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {activeLink === link.href && (
                                    <motion.span
                                        layoutId="navbar-active"
                                        className="absolute inset-0 bg-white/20 rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button variant="primary" className="!py-3 !px-6 text-sm" href="/donate">
                            Donate
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-forest"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="fixed inset-0 z-[2000] bg-cream/95 backdrop-blur-md flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-forest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-display font-bold text-forest"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="/donate"
                                    className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full px-12 py-[18px] text-[16px] tracking-wide neu-btn"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Donate to Impact
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
