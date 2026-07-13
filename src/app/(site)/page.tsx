import { Hero } from "@/components/sections/Hero";
import { EventOverview } from "@/components/sections/EventOverview";
import { EventStats } from "@/components/sections/EventStats";
import { AboutMission } from "@/components/sections/AboutMission";
import { WhyAttend } from "@/components/sections/WhyAttend";
import { FeaturedExperiences } from "@/components/sections/FeaturedExperiences";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventOverview />
      <EventStats />
      <AboutMission />
      <WhyAttend />
      <FeaturedExperiences />
    </>
  );
}
