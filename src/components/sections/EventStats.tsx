import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";
import { Reveal } from "@/components/ui/Reveal";
import { eventStats } from "@/data/stats";

export function EventStats() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-[clamp(4.5rem,8vw,8rem)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,114,206,0.35),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(226,160,43,0.18),transparent_50%)]" />

      <Container className="relative">
        <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-xl text-center">
          <span className="mb-3 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
            <span className="h-[2px] w-7 bg-gold" />
            By the Numbers
          </span>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-white">
            A Gathering of Unprecedented Scale
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {eventStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 140}>
              <div className="min-w-0 bg-navy-deep px-3 py-6 text-center transition-colors duration-300 hover:bg-white/[0.06] sm:px-4 sm:py-10">
                <div className="text-[clamp(1.5rem,6vw,3rem)] font-extrabold text-gold">
                  <StatCounter value={stat.value} />
                </div>
                <p className="mt-1.5 text-xs font-medium tracking-wide text-white/75 sm:mt-2.5 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
