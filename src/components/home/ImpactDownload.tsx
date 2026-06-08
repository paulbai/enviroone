"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import type { ImpactDownloadQueryResult } from "@/sanity/sanity.types";

const DEFAULT_TITLE = "See Our Full Impact Report";
const DEFAULT_DESCRIPTION =
    "Download our comprehensive impact report to learn more about the communities we serve and the lasting change we're creating together.";
const DEFAULT_BUTTON_LABEL = "Download";
const DEFAULT_PDF_URL = "/EnviroOne-Impact.pdf";

export const ImpactDownload = ({ data }: { data: ImpactDownloadQueryResult }) => {
    const title = data?.title ?? DEFAULT_TITLE;
    const description = data?.description ?? DEFAULT_DESCRIPTION;
    const buttonLabel = data?.buttonLabel ?? DEFAULT_BUTTON_LABEL;
    const pdfUrl = data?.pdfUrl ?? DEFAULT_PDF_URL;

    return (
        <Section className="bg-cream py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-forest mb-4">
                    {title}
                </h3>
                <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
                    {description}
                </p>
                <a
                    href={pdfUrl}
                    download="EnviroOne-Impact.pdf"
                    className="inline-flex justify-center"
                >
                    <Button
                        variant="primary"
                        className="shadow-lg hover:shadow-xl transition-shadow px-8"
                    >
                        {buttonLabel}
                    </Button>
                </a>
            </motion.div>
        </Section>
    );
};
