"use client";

import React from "react";
import { Twitter, Facebook, Instagram, Mail } from "lucide-react";
import type { SiteSettingsQueryResult } from "@/sanity/sanity.types";

type FooterProps = {
    settings?: SiteSettingsQueryResult;
};

const DEFAULT_SL = {
    address: "77 Bai Bureh Road\nFreetown, SIERRA LEONE",
    phone: "+232 99 443377",
};

const DEFAULT_USA = {
    address: "3 Creek Lane\nMullica Hill, NJ USA 08062",
    phone: "+1 609 217 4941",
};

const DEFAULT_SOCIALS = {
    instagramUrl: "https://www.instagram.com/envirooneorg?igsh=MTI1c2U0dGQyMzluZg==",
    twitterXUrl: "https://x.com/envirooneorg?s=21&t=2kckGnNDFnZWO9217CKhXw",
    facebookUrl: "https://www.facebook.com/share/1D9wCgyKg5/?mibextid=wwXIfr",
    tumblrUrl: "https://www.tumblr.com/envirooneorg-blog",
    mailtoEmail: "mail@enviroone.org",
};

type ResourceLink = { _key: string; title: string; href: string; openInNewTab: boolean };

const DEFAULT_RESOURCES: ResourceLink[] = [
    { _key: "impact", title: "EnviroOne Impact", href: "/EnviroOne-Impact.pdf", openInNewTab: true },
    { _key: "crop", title: "Crop Guide", href: "/documents/EnviroOneCropGuideVer01.rar", openInNewTab: false },
    { _key: "hydro", title: "Hydrofracing Natural Gas", href: "/documents/Fracking-for-natural-gas-paper.pdf", openInNewTab: true },
    { _key: "biodiesel", title: "Sludge to Biodiesel", href: "/documents/Biodiesel-from-sludge.pdf", openInNewTab: true },
];

const renderMultiline = (text: string) =>
    text.split("\n").map((line, i, arr) => (
        <React.Fragment key={i}>
            {line}
            {i < arr.length - 1 ? <br /> : null}
        </React.Fragment>
    ));

export const Footer = ({ settings }: FooterProps = {}) => {
    const sl = (settings && "sierraLeoneOffice" in settings && settings.sierraLeoneOffice) || DEFAULT_SL;
    const usa = (settings && "usaOffice" in settings && settings.usaOffice) || DEFAULT_USA;
    const socials =
        (settings && "socials" in settings && settings.socials) || DEFAULT_SOCIALS;
    const orgName = (settings && "orgName" in settings && settings.orgName) || "EnviroOne";

    const settingsResources =
        settings && "footerResources" in settings && settings.footerResources
            ? settings.footerResources
                  .filter((r) => r.fileUrl)
                  .map((r) => ({
                      _key: r._key,
                      title: r.title,
                      href: r.fileUrl as string,
                      openInNewTab: Boolean(r.openInNewTab),
                  }))
            : null;

    const resources = settingsResources && settingsResources.length > 0 ? settingsResources : DEFAULT_RESOURCES;

    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-forest-dark pt-12 pb-6 overflow-hidden">
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />



            <div className="relative z-10 max-w-[var(--spacing-container)] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">

                    {/* Left Column: Sierra Leone Address */}
                    <div className="text-left py-4">
                        <div className="text-cream/80 text-sm space-y-4">
                            <p>
                                <strong className="block text-golden mb-1">Sierra Leone Office</strong>
                                {renderMultiline(sl.address)}
                            </p>
                            {sl.phone && <p>{sl.phone}</p>}
                        </div>
                    </div>

                    {/* Resources Column */}
                    <div className="text-left md:text-center py-4">
                        <h3 className="text-golden font-bold mb-3 text-sm">Resources</h3>
                        <ul className="text-cream/80 text-sm space-y-2">
                            {resources.map((r) => (
                                <li key={r._key}>
                                    <a
                                        href={r.href}
                                        {...(r.openInNewTab
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                        className="hover:text-cream transition-colors"
                                    >
                                        {r.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: USA Address */}
                    <div className="md:text-right py-4">
                        <div className="text-cream/80 text-sm space-y-4">
                            <p>
                                <strong className="block text-golden mb-1">USA Office</strong>
                                {renderMultiline(usa.address)}
                            </p>
                            {usa.phone && <p>{usa.phone}</p>}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Copyright Left, Socials Right */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-cream/40 text-sm">
                        © {year} {orgName}. All rights reserved.
                    </p>

                    {/* Social Icons - Right Side */}
                    <div className="flex gap-3">
                        {socials.mailtoEmail && (
                            <a href={`mailto:${socials.mailtoEmail}`} className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110">
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                        {socials.instagramUrl && (
                            <a href={socials.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        {socials.twitterXUrl && (
                            <a href={socials.twitterXUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110 flex items-center justify-center">
                                <img src="/x-logo-final.png" alt="X (Twitter)" className="w-4 h-4 object-contain brightness-0 invert" />
                            </a>
                        )}
                        {socials.facebookUrl && (
                            <a href={socials.facebookUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                        {socials.tumblrUrl && (
                            <a href={socials.tumblrUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-forest text-cream transition-all hover:scale-110 flex items-center justify-center">
                                <img src="/tumblr-logo-final.png" alt="Tumblr" className="w-4 h-4 object-contain brightness-0 invert" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};
