import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ComingSoonBadge } from "@/components/ui/ComingSoonBadge";
import { featuredExperiences } from "@/data/experiences";
import { chunk } from "@/lib/utils";

const ROW_SIZE = 4;

export function FeaturedExperiences() {
  const rows = chunk(featuredExperiences, ROW_SIZE);

  return (
    <section className="bg-off-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <div className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Featured Experiences
          </span>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Eight Days, One Industry, Many Stages
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y-2 border-gold bg-white">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid divide-slate-200 sm:grid-cols-2 sm:divide-x lg:grid-cols-4"
            >
              {row.map((experience) => (
                <article key={experience.slug} className="group flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-6 py-8 sm:px-8">
                    <h3 className="text-lg font-bold text-navy">
                      {experience.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[0.95rem] font-light leading-[1.7] text-slate-600">
                      {experience.description}
                    </p>
                    {experience.status === "coming-soon" && (
                      <ComingSoonBadge />
                    )}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
