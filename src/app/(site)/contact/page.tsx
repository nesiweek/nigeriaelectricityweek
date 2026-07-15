import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactLocation } from "@/components/sections/ContactLocation";

export const metadata: Metadata = {
  title: "Contact | NESI Week 2026",
  description:
    "Get in touch with the Nigeria Electricity Week (NESI Week) Secretariat.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Nigeria Electricity Week"
        description="For delegate registration, sponsorship opportunities, exhibition enquiries, media accreditation or general information, contact the Nigeria Electricity Week Secretariat."
        image="/images/hero/Cover_electricite.jpg"
        imageAlt="Electricity substation infrastructure"
      />
      <ContactDetails />
      <ContactForm />
      <ContactLocation />
    </>
  );
}
