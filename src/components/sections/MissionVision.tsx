import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function MissionVision() {
  return (
    <section className="bg-off-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Purpose
          </span>
          <h2 className="mb-[clamp(2.5rem,5vw,3.5rem)] text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Mission &amp; Vision
          </h2>
        </Reveal>

        <div className="grid divide-y divide-slate-200 border-t-2 border-gold bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <Reveal>
            <div className="px-8 py-10">
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
            <div className="px-8 py-10">
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
      </Container>
    </section>
  );
}
