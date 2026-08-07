"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-11-15T00:00:00+01:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(TARGET - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTime(getTimeLeft());
    const id = setInterval(update, 1000);
    const initial = setTimeout(update, 0);
    return () => {
      clearInterval(id);
      clearTimeout(initial);
    };
  }, []);

  const units: { label: string; value: number | undefined }[] = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <div
      className="mx-auto flex justify-center gap-3 sm:gap-4"
      role="timer"
      aria-label="Countdown to NESI Week 2026"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex w-14 flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] py-[clamp(8px,1.6vh,16px)] backdrop-blur-sm sm:w-20"
        >
          <span className="font-mono text-xl font-bold tabular-nums text-white sm:text-3xl">
            {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.1em] text-white/45 sm:text-[10px]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
