"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="relative bg-charcoal pt-12 pb-6 overflow-hidden">
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />



            <div className="relative z-10 max-w-[var(--spacing-container)] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 items-start">

                    {/* Left Column: Sierra Leone Address */}
                    <div className="text-left py-4">
                        <div className="text-cream/80 text-sm space-y-4">
                            <p>
                                <strong className="block text-golden mb-1">Sierra Leone Office</strong>
                                77 Bai Bureh Road<br />
                                Freetown, SIERRA LEONE
                            </p>
                            <p>
                                +232 99 443377
                            </p>
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="text-left py-4">
                        <h3 className="text-golden font-bold mb-3 text-sm">Resources</h3>
                        <ul className="text-cream/80 text-sm space-y-2">
                            <li>
                                <a href="/EnviroOne-Impact.pdf" className="hover:text-cream transition-colors">
                                    EnviroOne Impact
                                </a>
                            </li>
                            <li>
                                <a href="https://www.enviroone.org/s/EnviroOneCropGuideVer01.rar" className="hover:text-cream transition-colors">
                                    Crop Guide
                                </a>
                            </li>
                            <li>
                                <a href="https://www.enviroone.org/s/Fracking-for-natural-gas-paper.pdf" className="hover:text-cream transition-colors">
                                    Hydrofracing Natural Gas
                                </a>
                            </li>
                            <li>
                                <a href="https://www.enviroone.org/s/Biodiesel-from-sludge.pdf" className="hover:text-cream transition-colors">
                                    Sludge to Biodiesel
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Center Column: Socials & Email */}
                    <div className="flex flex-col items-center justify-center py-4">
                        <h3 className="text-cream font-bold mb-4">Stay Connected</h3>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-4">
                            <a href="https://www.instagram.com/envirooneorg?igsh=MTI1c2U0dGQyMzluZg==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/envirooneorg?s=21&t=2kckGnNDFnZWO9217CKhXw" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110 flex items-center justify-center">
                                <img src="/x-logo-final.png" alt="X (Twitter)" className="w-4 h-4 object-contain brightness-0 invert" />
                            </a>
                            <a href="https://www.facebook.com/share/1D9wCgyKg5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.tumblr.com/envirooneorg-blog" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110 flex items-center justify-center">
                                <img src="/tumblr-logo-final.png" alt="Tumblr" className="w-4 h-4 object-contain brightness-0 invert" />
                            </a>
                        </div>

                        <a href="mailto:mail@enviroone.org" className="text-water hover:text-cream transition-colors text-sm">
                            mail@enviroone.org
                        </a>
                    </div>

                    {/* Right Column: USA Address */}
                    <div className="md:text-right py-4">
                        <div className="text-cream/80 text-sm space-y-4">
                            <p>
                                <strong className="block text-golden mb-1">USA Office</strong>
                                3 Creek Lane<br />
                                Mullica Hill, NJ USA 08062
                            </p>
                            <p>
                                +1 609 217 4941
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex justify-center">
                    <p className="text-cream/40 text-sm text-center">
                        © 2026 EnviroOne. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
