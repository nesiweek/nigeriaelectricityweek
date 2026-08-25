import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function RegistrationCta() {
  return (
    <section
      id="register"
      className="relative scroll-mt-24 overflow-hidden py-[clamp(4rem,7vw,6rem)] text-center text-white sm:scroll-mt-28"
    >
      <Image
        src="/images/hero/Event.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,114,206,0.88)_0%,rgba(16,42,67,0.94)_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

      <Container className="relative max-w-2xl">
        <Reveal>
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
            <span className="h-[2px] w-7 bg-gold" />
            Registration
          </span>

          <h2 className="mb-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-white">
            Join Nigeria&apos;s Biggest Electricity &amp; Energy Gathering
          </h2>

          <p className="mb-9 text-[1.05rem] font-light leading-[1.8] text-white/75">
            Whether you are a policymaker, utility, investor, technology
            provider, startup, researcher or consumer, Nigeria Electricity
            Week offers unparalleled opportunities to connect, collaborate
            and grow.
          </p>

          <Button
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Register Today
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
