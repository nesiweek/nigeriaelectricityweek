import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { foundingSponsors } from "@/data/partners";

export function PartnerSponsorship() {
  return (
    <section className="bg-navy py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
            <span className="h-[2px] w-7 bg-gold" />
            Sponsorship
          </span>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-white">
            Founding Sponsors &amp; Sponsorship Opportunities
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Pioneer / Founding Sponsors recognition */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Pioneer Sponsors
              </span>
              <h3 className="mb-6 text-xl font-bold text-white">
                Founding Partners of NESI Week 2026
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {foundingSponsors.map((sponsor) => (
                  <div
                    key={sponsor.src}
                    className="flex h-20 items-center justify-center rounded-lg bg-white px-4"
                  >
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={160}
                      height={64}
                      className="h-8 w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Open call for additional sponsors */}
          <Reveal delay={180}>
            <div className="flex h-full flex-col rounded-2xl border border-gold/30 bg-white/[0.03] p-6 sm:p-8">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Open Call
              </span>
              <h3 className="mb-4 text-xl font-bold text-white">
                Become a Sponsor
              </h3>
              <p className="mb-8 flex-1 text-sm font-light leading-[1.7] text-white/70">
                A limited number of sponsorship slots remain for NESI Week
                2026. Position your organisation alongside industry leaders
                and reach Nigeria&apos;s electricity ecosystem. Download the
                prospectus for full sponsorship tiers, benefits and pricing.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/downloads/nesi-week-sponsorship-prospectus.pdf"
                  variant="outline"
                  className="border-white/25 text-white hover:border-white hover:bg-white/10 sm:flex-1"
                  download
                >
                  Download Brochure
                </Button>
                <Button
                  href="/contact?subject=Sponsorship+Opportunities"
                  variant="primary"
                  className="sm:flex-1"
                >
                  Register as Sponsor
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
