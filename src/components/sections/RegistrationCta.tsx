import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function RegistrationCta() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0072ce_0%,#102a43_65%)] py-[clamp(4rem,7vw,6rem)] text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

      <Container className="relative max-w-2xl">
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
          Week offers unparalleled opportunities to connect, collaborate and
          grow.
        </p>

        <Button href="/contact" variant="primary">
          Register Today
        </Button>
      </Container>
    </section>
  );
}
