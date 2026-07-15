import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutMission() {
  return (
    <section className="bg-off-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container className="grid items-center gap-[clamp(3rem,6vw,6rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_40px_70px_-35px_rgba(16,42,67,0.5)]">
          <Image
            src="/images/hero/american-public-power-association-VuR4oHZ3ucc-unsplash.jpg"
            alt="Utility linemen working on an electricity pole"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Building Africa&apos;s Premier Electricity Ecosystem
          </span>

          <h2 className="mb-6 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            About Nigeria Electricity Week (NESI Week)
          </h2>

          <div className="space-y-4 text-[1.05rem] font-light leading-[1.8] text-slate-600">
            <p>
              Nigeria Electricity Week exists to strengthen the Nigerian
              Electricity Supply Industry by creating a national platform
              where ideas become partnerships, partnerships become
              investments, and investments transform lives.
            </p>
            <p>
              The Founding Edition will convene leaders from across the
              electricity value chain to discuss policy, infrastructure,
              technology, financing, customer experience, digital
              transformation, energy access and sustainability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
