import { Container } from "@/components/ui/Container";
import {
  CelebrateIcon,
  CollaborateIcon,
  ConnectIcon,
  InnovateIcon,
  InvestIcon,
  LearnIcon,
} from "@/components/ui/icons";
import { whyAttendItems, type WhyAttendIcon } from "@/data/why-attend";
import { chunk, cn } from "@/lib/utils";

const iconMap: Record<WhyAttendIcon, typeof ConnectIcon> = {
  connect: ConnectIcon,
  learn: LearnIcon,
  invest: InvestIcon,
  innovate: InnovateIcon,
  collaborate: CollaborateIcon,
  celebrate: CelebrateIcon,
};

const ROW_SIZE = 3;

export function WhyAttend() {
  const rows = chunk(whyAttendItems, ROW_SIZE);

  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <div className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Why Attend?
          </span>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Six Reasons to Be in Abuja
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y-2 border-gold">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid divide-slate-200 sm:grid-cols-2 sm:divide-x lg:grid-cols-3"
            >
              {row.map((item, itemIndex) => {
                const flatIndex = rowIndex * ROW_SIZE + itemIndex;
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.title}
                    className={cn(
                      "px-6 py-9 sm:px-8",
                      flatIndex % 2 === 1 && "bg-off-white",
                    )}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-mist text-blue">
                        <Icon width={20} height={20} />
                      </span>
                      <h3 className="text-lg font-bold text-navy">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[0.95rem] font-light leading-[1.7] text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
