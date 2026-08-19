"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CalendarIcon } from "@/components/ui/icons/CalendarIcon";
import { PinIcon } from "@/components/ui/icons/PinIcon";
import { heroSlides } from "@/data/hero";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 6000;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-page relative flex h-dvh w-full flex-col items-start justify-center overflow-hidden text-left text-white">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.image}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1500ms] ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,42,67,0.55)_0%,rgba(16,42,67,0.55)_35%,rgba(9,22,36,0.94)_100%),linear-gradient(90deg,rgba(16,42,67,0.75)_0%,rgba(16,42,67,0.15)_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <span className="mb-[clamp(14px,2.5vh,28px)] inline-flex items-center gap-2.5 text-[clamp(11px,1.1vw,13px)] font-bold uppercase tracking-[0.22em] text-gold-light">
          <span className="h-2 w-2 rounded-full bg-gold" />
          {siteConfig.fullName}
        </span>

        <h1 className="mb-[clamp(14px,2.5vh,28px)] text-[clamp(32px,6.5vw,72px)] font-extrabold leading-[1.06] tracking-tight">
          <span className="block text-[clamp(13px,1.4vw,16px)] font-semibold uppercase tracking-[0.1em] text-white/80">
            Event Theme:
          </span>
          Powering the <span className="text-gold">Future</span>
        </h1>

        <p className="flex max-w-[56ch] flex-wrap items-center gap-x-2 gap-y-1 text-[clamp(15px,1.8vw,20px)] font-light text-white/90">
          {siteConfig.pillars.map((pillar, i) => (
            <span key={pillar} className="flex items-center gap-2">
              {pillar}
              {i < siteConfig.pillars.length - 1 && (
                <span className="text-gold">&bull;</span>
              )}
            </span>
          ))}
        </p>

        <div className="mt-[clamp(20px,3.5vh,40px)] flex flex-wrap gap-[clamp(24px,4vw,40px)] border-t border-white/20 pt-[clamp(16px,2.5vh,28px)]">
          <HeroMeta
            icon="calendar"
            value={siteConfig.eventDates}
            label=""
          />
          <HeroMeta
            icon="pin"
            value={siteConfig.eventLocation}
            label=""
          />
        </div>

        <div className="mt-[clamp(24px,4vh,44px)] flex flex-wrap items-center gap-4">
          <Button
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Register Now
          </Button>
          <Button href="/contact" variant="outline">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}

function HeroMeta({
  icon,
  value,
  label,
}: {
  icon: "calendar" | "pin";
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-[clamp(32px,4vh,38px)] w-[clamp(32px,4vh,38px)] flex-shrink-0 place-items-center rounded-full border border-white/35">
        {icon === "calendar" ? (
          <CalendarIcon width={16} height={16} />
        ) : (
          <PinIcon width={16} height={16} />
        )}
      </span>
      <span>
        <strong className="block text-[clamp(13px,1.4vw,16px)] font-bold">
          {value}
        </strong>
        <span className="text-[clamp(11px,1.1vw,13px)] font-medium text-white/65">
          {label}
        </span>
      </span>
    </div>
  );
}
