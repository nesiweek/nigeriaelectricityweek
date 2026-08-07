import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactLocation } from "@/components/sections/ContactLocation";

const title = "Contact | NESI Week 2026";
const description =
  "Get in touch with the Nigeria Electricity Week (NESI Week) Secretariat.";
const ogImage = "/images/hero/Cover_electricite.jpg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [ogImage] },
  twitter: { title, description, images: [ogImage] },
};

type ContactPageProps = {
  searchParams: Promise<{ subject?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { subject } = await searchParams;

  return (
    <>
      <PageHero
        title="Contact Nigeria Electricity Week"
        description="For delegate registration, sponsorship opportunities, exhibition enquiries, media accreditation or general information, contact the Nigeria Electricity Week Secretariat."
        image="/images/hero/Cover_electricite.jpg"
        imageAlt="Electricity substation infrastructure"
      />
      <ContactDetails />
      <ContactForm initialSubject={subject} />
      <ContactLocation />
    </>
  );
}
