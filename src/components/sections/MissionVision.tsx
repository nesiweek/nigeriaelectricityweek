import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function MissionVision() {
  return (
    <section className="bg-off-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container className="grid items-center gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_40px_70px_-35px_rgba(16,42,67,0.5)]">
            <Image
              src="/images/hero/dealroom.png"
              alt="Electricity substation infrastructure"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
              <span className="h-[2px] w-7 bg-gold" />
              Purpose
            </span>
            <h2 className="mb-[clamp(2rem,4vw,2.5rem)] text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
              Mission &amp; Vision
            </h2>
          </Reveal>

          <div className="divide-y divide-slate-200 border-t-2 border-gold">
            <Reveal>
              <div className="py-6">
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  Mission
                </span>
                <p className="text-lg font-semibold leading-[1.6] text-navy">
                  Nigeria Electricity Week exists to strengthen the Nigerian
                  Electricity Supply Industry by creating a national platform
                  where ideas become partnerships, partnerships become
                  investments, and investments transform lives.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="py-6">
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  Vision
                </span>
                <p className="text-lg font-semibold leading-[1.6] text-navy">
                  Our vision is to establish Africa&apos;s leading electricity
                  ecosystem event while supporting Nigeria&apos;s energy
                  transition and economic development.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
