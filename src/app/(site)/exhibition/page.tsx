import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ExhibitorInfo } from "@/components/sections/ExhibitorInfo";

const title = "Exhibition | NESI Week 2026";
const description =
  "Exhibitor information and registration for Nigeria Electricity Week (NESI Week) 2026.";
const ogImage = "/images/hero/Cover_electricite.jpg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [ogImage] },
  twitter: { title, description, images: [ogImage] },
};

export default function ExhibitionPage() {
  return (
    <>
      <PageHero
        eyebrow="Exhibition"
        title="Exhibitor Information & Registration"
        description="Showcase your products and solutions to Nigeria's electricity and energy ecosystem at NESI Week 2026."
        image="/images/hero/Cover_electricite.jpg"
        imageAlt="Electricity substation infrastructure"
      />
      <ExhibitorInfo />
    </>
  );
}
