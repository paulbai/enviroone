import { LandingPage } from "@/components/home/LandingPage";
import { ImpactStats } from "@/components/home/ImpactStats";
import { FocusAreas } from "@/components/home/FocusAreas";
import { StoriesCarousel } from "@/components/home/StoriesCarousel";
import { ThreeSection } from "@/components/home/ThreeSection";
import { Team } from "@/components/home/Team";
import { ImpactDownload } from "@/components/home/ImpactDownload";
import {
  getHomeHero,
  getFocusAreasIntro,
  getImpactDownload,
  getFocusAreas,
  getImpactStats,
} from "@/sanity/lib/home";
// Other components will be imported here as they are created

export default async function Home() {
  const [hero, focusAreasIntro, impactDownload, focusAreas, stats] =
    await Promise.all([
      getHomeHero(),
      getFocusAreasIntro(),
      getImpactDownload(),
      getFocusAreas(),
      getImpactStats(),
    ]);

  return (
    <div className="flex flex-col min-h-screen">
      <LandingPage hero={hero} />
      <ImpactStats stats={stats} />
      <ImpactDownload data={impactDownload} />
      <FocusAreas intro={focusAreasIntro} areas={focusAreas} />
      {/* <StoriesCarousel /> */}
      {/*
      <ThreeSection />
      <Team />
      <div className="h-[50vh] bg-cream" /> {/* Spacer to verify scrolling */}
    </div>
  );
}
