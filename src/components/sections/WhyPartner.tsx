import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { partnerBenefits } from "@/data/why-partner";

export function WhyPartner() {
  const half = Math.ceil(partnerBenefits.length / 2);
  const leftItems = partnerBenefits.slice(0, half);
  const rightItems = partnerBenefits.slice(half);

  return (
    <section
      id="partner"
      className="relative scroll-mt-24 overflow-hidden bg-navy-deep py-[clamp(4.5rem,8vw,8rem)] sm:scroll-mt-28"
    >
      <Image
        src="/images/hero/fre-sonneveld-q6n8nIrDQHE-unsplash.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep/70" />

      <Container className="relative grid items-center gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
            <span className="h-[2px] w-7 bg-gold" />
            Why Partner with NESI Week?
          </span>

          <h2 className="mb-6 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-white">
            Position Your Organisation at the Centre of Nigeria&apos;s
            Electricity Transformation
          </h2>

          <p className="mb-9 text-[1.05rem] font-light leading-[1.8] text-white/65">
            Partnership opportunities provide direct access to the
            decision-makers, institutions and innovators building the future
            of Nigeria&apos;s electricity sector.
          </p>

          <Button href="/contact" variant="primary">
            Become a Founding Partner
          </Button>
        </Reveal>

        <Reveal delay={200} className="grid gap-x-10 sm:grid-cols-2">
          <PartnerBenefitList items={leftItems} />
          <PartnerBenefitList items={rightItems} />
        </Reveal>
      </Container>
    </section>
  );
}

function PartnerBenefitList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-white/10">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-5">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
          <span className="text-[0.95rem] font-semibold text-white">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
