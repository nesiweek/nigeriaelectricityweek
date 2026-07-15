import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { MissionVision } from "@/components/sections/MissionVision";

export const metadata: Metadata = {
  title: "About | NESI Week 2026",
  description:
    "About Nigeria Electricity Week (NESI Week) — Nigeria's premier annual electricity and energy ecosystem platform.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Nigeria Electricity Week"
        description="Nigeria Electricity Week (NESI Week) is Nigeria's premier annual electricity and energy ecosystem platform established to drive collaboration, innovation, investment and sustainable growth across the Nigerian Electricity Supply Industry."
        image="/images/hero/fre-sonneveld-q6n8nIrDQHE-unsplash.jpg"
        imageAlt="Solar panels under a bright sky"
      />
      <AboutStory />
      <MissionVision />
    </>
  );
}
