import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  CelebrateIcon,
  CollaborateIcon,
  ConnectIcon,
  InnovateIcon,
  InvestIcon,
  LearnIcon,
} from "@/components/ui/icons";
import { whyAttendItems, type WhyAttendIcon } from "@/data/why-attend";

const iconMap: Record<WhyAttendIcon, typeof ConnectIcon> = {
  connect: ConnectIcon,
  learn: LearnIcon,
  invest: InvestIcon,
  innovate: InnovateIcon,
  collaborate: CollaborateIcon,
  celebrate: CelebrateIcon,
};

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
          {whyAttendItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={index * 130}>
                <div className="group relative flex h-full flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-off-white px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                  <span className="absolute right-3 top-3 text-xs font-extrabold text-slate-300 group-hover:text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="grid h-16 w-16 place-items-center rounded-full bg-navy text-gold-light transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon width={26} height={26} />
                  </span>

                  <h3 className="text-base font-extrabold uppercase tracking-wide text-navy">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium leading-snug text-slate-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
