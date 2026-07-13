import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact | NESI Week 2026",
  description:
    "Get in touch with the Nigeria Electricity Week (NESI Week) Secretariat.",
};

export default function ContactPage() {
  return (
    <Container className="pb-24 pt-32">
      <SectionHeading
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        description="Page content in progress."
      />
    </Container>
  );
}
