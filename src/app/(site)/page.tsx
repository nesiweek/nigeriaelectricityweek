import { Hero } from "@/components/sections/Hero";
import { EventOverview } from "@/components/sections/EventOverview";
import { EventStats } from "@/components/sections/EventStats";
import { AboutMission } from "@/components/sections/AboutMission";
import { WhyAttend } from "@/components/sections/WhyAttend";
import { FeaturedExperiences } from "@/components/sections/FeaturedExperiences";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { RegistrationCta } from "@/components/sections/RegistrationCta";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventOverview />
      <EventStats />
      <AboutMission />
      <WhyAttend />
      <FeaturedExperiences />
      <WhyPartner />
      <RegistrationCta />
      <PartnersMarquee />
      <Newsletter />
    </>
  );
}
