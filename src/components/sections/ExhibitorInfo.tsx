import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const valueProps = [
  "NESI Week provides exhibitors with access to a curated audience of decision-makers actively seeking innovative solutions, strategic partnerships, and opportunities that align with Africa’s evolving energy priorities.",
  "The exhibition experience is designed to support product discovery, market validation, and commercial engagement by connecting exhibitors with corporate leaders, investors, institutions, regulators, and ecosystem partners.",
  "Exhibitors benefit from direct engagement with senior-level stakeholders, opportunities to showcase products and solutions, participation in curated sessions and demonstrations, and increased visibility within a trusted, high-level industry platform.",
  "For organisations seeking to validate offerings, enter new markets, or accelerate adoption, NESI Week provides a platform where visibility is converted into opportunity.",
];

export function ExhibitorInfo() {
  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Exhibitor Information
          </span>

          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Why Exhibit at NESI Week
          </h2>
        </Reveal>

        <div className="mx-auto max-w-3xl divide-y divide-slate-200 border-t-2 border-gold">
          {valueProps.map((text, index) => (
            <Reveal key={text} delay={index * 130}>
              <div className="flex gap-6 py-8 sm:gap-10">
                <span className="flex-shrink-0 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-none text-slate-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-[1.05rem] font-light leading-[1.8] text-slate-600">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320} className="mt-10 text-center">
          <Button
            href="/contact?subject=Exhibitor+Registration"
            variant="primary"
          >
            Register as an Exhibitor
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
