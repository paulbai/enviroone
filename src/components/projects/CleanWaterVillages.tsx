"use client";

import React, { useState } from "react";
import { VideoModal } from "@/components/ui/VideoModal";
import { VillageGrid } from "@/components/projects/VillageGrid";
import { VillageModal } from "@/components/projects/VillageModal";
import { villages } from "@/app/(site)/projects/clean-water/villageData";

export const CleanWaterVillages = () => {
    const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
    const [selectedVillageId, setSelectedVillageId] = useState<string | null>(null);

    const selectedVillage =
        villages.find((v) => v.id === selectedVillageId) || null;

    return (
        <>
            <VideoModal
                isOpen={!!currentVideoId}
                onClose={() => setCurrentVideoId(null)}
                videoId={currentVideoId || ""}
            />

            <VillageModal
                village={selectedVillage}
                isOpen={!!selectedVillageId}
                onClose={() => setSelectedVillageId(null)}
                onVideoClick={(videoId) => setCurrentVideoId(videoId)}
            />

            <VillageGrid
                villages={villages}
                onVillageClick={(villageId) => setSelectedVillageId(villageId)}
            />
        </>
    );
};
