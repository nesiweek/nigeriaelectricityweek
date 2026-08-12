import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whyAttendItems } from "@/data/why-attend";

export function WhyAttend() {
  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Why Attend?
          </span>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Six Reasons to Be in Abuja
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {whyAttendItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 130}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_20px_40px_-25px_rgba(16,42,67,0.6)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-navy-deep/10" />

                <span className="absolute right-3 top-3 text-xs font-extrabold text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-gold sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-white/85 sm:text-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
