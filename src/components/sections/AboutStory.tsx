import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AboutStory() {
  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container className="grid items-center gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_40px_70px_-35px_rgba(16,42,67,0.5)]">
          <Image
            src="/images/hero/nesi-platform.png"
            alt="High-voltage transmission towers at sunset"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={220}>
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Our Story
          </span>

          <h2 className="mb-6 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Bringing Nigeria&apos;s Electricity Ecosystem Together
          </h2>

          <p className="text-[1.05rem] font-light leading-[1.8] text-slate-600">
            Organised by NESI Platform Limited, the event brings together
            government institutions, regulators, electricity market
            participants, investors, development partners, technology
            companies, academia, innovators and consumers under one
            integrated platform.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
