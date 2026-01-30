import { LandingPage } from "@/components/home/LandingPage";
import { ImpactStats } from "@/components/home/ImpactStats";
import { FocusAreas } from "@/components/home/FocusAreas";
import { StoriesCarousel } from "@/components/home/StoriesCarousel";
import { ThreeSection } from "@/components/home/ThreeSection";
import { Team } from "@/components/home/Team";
import { ImpactDownload } from "@/components/home/ImpactDownload";
// Other components will be imported here as they are created

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <LandingPage />
      <ImpactStats />
      <ImpactDownload />
      <FocusAreas />
      {/* <StoriesCarousel /> */}
      {/* 
      <ThreeSection />
      <Team />
      <div className="h-[50vh] bg-cream" /> {/* Spacer to verify scrolling */}
    </div>
  );
}
