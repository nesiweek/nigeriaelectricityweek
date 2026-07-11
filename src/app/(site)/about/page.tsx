import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About | NESI Week 2026",
  description:
    "About Nigeria Electricity Week (NESI Week) — Nigeria's premier annual electricity and energy ecosystem platform.",
};

export default function AboutPage() {
  return (
    <Container className="py-24">
      <SectionHeading
        eyebrow="About"
        title="About Nigeria Electricity Week"
        description="Page content in progress."
      />
    </Container>
  );
}
