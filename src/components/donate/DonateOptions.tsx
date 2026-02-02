"use client";

import React, { useEffect } from "react";
import { Section } from "@/components/ui/Section";

export const DonateOptions = () => {
    useEffect(() => {
        // Load Squarespace donation block script
        const script = document.createElement('script');
        script.src = 'https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10515/assets/ss-merch-core.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <Section className="bg-cream relative z-10 py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* Squarespace Donation Block */}
                <div
                    className="sqs-block donate-block sqs-block-donate bg-white rounded-2xl shadow-lg p-8"
                    data-block-type="69"
                >
                    <div
                        className="sqs-block-content"
                        dangerouslySetInnerHTML={{
                            __html: `
                                <div class="donation-form-wrapper">
                                    <script src="https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10515/assets/ss-merch-core.js"></script>
                                    <div 
                                        class="squarespace-donation-block" 
                                        data-donate-page-id="57f5646ed2b8578aac1f3fd8"
                                    ></div>
                                </div>
                            `
                        }}
                    />
                </div>

                {/* Other Ways to Give - text link */}
                <div className="text-center mt-12">
                    <p className="text-charcoal/60">
                        Looking for other ways to help? <a href="/get-involved" className="text-forest hover:underline font-medium">Explore volunteer opportunities</a>
                    </p>
                </div>
            </div>
        </Section>
    );
};
