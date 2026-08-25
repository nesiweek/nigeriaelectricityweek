import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function EventOverview() {
  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container className="grid items-center gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            About NESI Week
          </span>

          <h2 className="mb-6 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Where Nigeria&apos;s Electricity Future Comes Together
          </h2>

          <div className="space-y-4 text-[1.05rem] font-light leading-[1.8] text-slate-600">
            <p>
              Nigeria Electricity Week (NESI Week) is the country&apos;s
              flagship annual platform dedicated to advancing collaboration,
              innovation, investment and sustainable development across the
              electricity and energy sector.
            </p>
            <p>
              Designed as more than a conference, NESI Week connects industry
              leaders, government institutions, regulators, investors,
              financiers, innovators and the public through a week-long
              experience of dialogue, exhibitions, business networking,
              innovation showcases, sports, wellness and recognition.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={220}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_40px_70px_-35px_rgba(16,42,67,0.5)]"
        >
          <Image
            src="/images/hero/nesiweek-image.png"
            alt="Electricity substation infrastructure"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4 text-white">
            <div>
              <strong className="block text-2xl font-extrabold">
                7 Days
              </strong>
              <span className="text-xs uppercase tracking-[0.1em] text-white/75">
                Of Dialogue &amp; Exhibition
              </span>
            </div>
            <div>
              <strong className="block text-2xl font-extrabold">
                1 Industry
              </strong>
              <span className="text-xs uppercase tracking-[0.1em] text-white/75">
                United in Abuja
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
