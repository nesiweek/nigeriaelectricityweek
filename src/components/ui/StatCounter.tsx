"use client";

import { useEffect, useRef, useState } from "react";

type ParsedStat = {
  prefix: string;
  number: number;
  suffix: string;
};

function parseStat(value: string): ParsedStat {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, prefix, digits, suffix] = match;
  return { prefix, number: Number(digits.replace(/,/g, "")), suffix };
}

const ANIMATION_DURATION = 1800;

export function StatCounter({ value }: { value: string }) {
  const { prefix, number, suffix } = parseStat(value);
  const [display, setDisplay] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const start = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - start) / ANIMATION_DURATION, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.floor(eased * number));
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplay(number);
              }
            };

            requestAnimationFrame(step);
            observer.unobserve(node);
          }
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [number]);

  return (
    <span ref={spanRef} className="tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
