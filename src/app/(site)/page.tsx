import { Hero } from "@/components/sections/Hero";
import { EventOverview } from "@/components/sections/EventOverview";
import { EventStats } from "@/components/sections/EventStats";
import { AboutMission } from "@/components/sections/AboutMission";
import { WhyAttend } from "@/components/sections/WhyAttend";
import { FeaturedExperiences } from "@/components/sections/FeaturedExperiences";
import { WhyPartner } from "@/components/sections/WhyPartner";
import { PartnerSponsorship } from "@/components/sections/PartnerSponsorship";
import { RegistrationCta } from "@/components/sections/RegistrationCta";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { Newsletter } from "@/components/sections/Newsletter";
import { contactInfo, siteConfig } from "@/data/site";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.fullName,
  description: siteConfig.description,
  startDate: "2026-11-15",
  endDate: "2026-11-22",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: siteConfig.eventLocation,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.addressLines[0],
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
  },
  image: [`${siteConfig.url}/images/hero/Cover_electricite.jpg`],
  organizer: {
    "@type": "Organization",
    name: contactInfo.organiser,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Hero />
      <AboutMission />
      <EventStats />
     <EventOverview />
      <WhyAttend />
      <FeaturedExperiences />
      <WhyPartner />
      <PartnerSponsorship />
      <RegistrationCta />
      <PartnersMarquee />
      <Newsletter />
    </>
  );
}
