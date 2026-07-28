"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ComingSoonBadge } from "@/components/ui/ComingSoonBadge";
import { Reveal } from "@/components/ui/Reveal";
import { featuredExperiences } from "@/data/experiences";
import { cn } from "@/lib/utils";

export function FeaturedExperiences() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [cardHeights, setCardHeights] = useState<Record<string, number>>({});
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const backRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const closedHeights = useRef<Record<string, number>>({});

  function toggleCard(slug: string) {
    const isOpening = activeSlug !== slug;

    if (isOpening) {
      const button = buttonRefs.current[slug];
      if (button && closedHeights.current[slug] === undefined) {
        closedHeights.current[slug] = button.getBoundingClientRect().height;
      }
      const back = backRefs.current[slug];
      if (back) {
        setCardHeights((prev) => ({ ...prev, [slug]: back.scrollHeight }));
      }
      setActiveSlug(slug);
    } else {
      const closed = closedHeights.current[slug];
      if (closed !== undefined) {
        setCardHeights((prev) => ({ ...prev, [slug]: closed }));
      }
      setActiveSlug(null);
    }
  }

  return (
    <section className="bg-off-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <Reveal className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Featured Experiences
          </span>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Eight Days, One Industry, Many Stages
          </h2>
          <p className="mt-3 text-sm font-light text-slate-500">
            Tap a day to reveal what&apos;s in store.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featuredExperiences.map((experience, index) => {
            const isActive = activeSlug === experience.slug;
            return (
              <Reveal key={experience.slug} delay={index * 110}>
                <button
                  ref={(el) => {
                    buttonRefs.current[experience.slug] = el;
                  }}
                  type="button"
                  onClick={() => toggleCard(experience.slug)}
                  aria-expanded={isActive}
                  style={
                    cardHeights[experience.slug] !== undefined
                      ? { height: cardHeights[experience.slug] }
                      : undefined
                  }
                  className="group relative aspect-[3/4] w-full cursor-pointer transition-[height] duration-500 ease-out [perspective:1200px]"
                >
                  <div
                    className={cn(
                      "relative h-full w-full rounded-2xl shadow-[0_20px_40px_-25px_rgba(16,42,67,0.6)] transition-transform duration-700 ease-out [transform-style:preserve-3d]",
                      isActive && "[transform:rotateY(180deg)]",
                    )}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        sizes="(min-width: 640px) 25vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/10 to-transparent" />
                      <span className="absolute right-3 top-3 flex h-8 w-8 animate-pulse items-center justify-center rounded-full bg-gold text-xs font-extrabold text-navy">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="absolute inset-x-3 bottom-3">
                        <h3 className="text-sm font-extrabold leading-tight text-white sm:text-base">
                          {experience.title}
                        </h3>
                        <span className="mt-1 inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-light">
                          Tap to reveal
                        </span>
                      </div>
                    </div>

                    {/* Back */}
                    <div
                      ref={(el) => {
                        backRefs.current[experience.slug] = el;
                      }}
                      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-navy p-3 text-left [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-4"
                    >
                      <div>
                        <h3 className="text-xs font-extrabold leading-tight text-gold sm:text-base">
                          {experience.title}
                        </h3>
                        <p className="mt-1.5 text-[0.68rem] font-light leading-[1.5] text-white/85 sm:mt-2.5 sm:text-[0.85rem]">
                          {experience.description}
                        </p>
                      </div>
                      {experience.status === "coming-soon" && (
                        <ComingSoonBadge />
                      )}
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
