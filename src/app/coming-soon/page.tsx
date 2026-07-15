import type { Metadata } from "next";
import Logo from "@/components/Logo";
import Countdown from "@/components/Countdown";

export const metadata: Metadata = {
  title: "NESI Week 2026 | Coming Soon",
  description:
    "Nigeria Electricity Week (NESI Week) 2026 — 15–22 November, Abuja, Nigeria.",
};

export default function ComingSoonPage() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-navy-deep">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(0,114,206,0.16),transparent_55%),radial-gradient(circle_at_12%_92%,rgba(226,160,43,0.12),transparent_50%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <header className="relative z-10 flex shrink-0 items-center justify-between px-[5vw] py-[clamp(14px,2.5vh,28px)]">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-extrabold tracking-wide text-white">
            NESI Week
          </span>
        </div>
      </header>

      <main className="relative z-10 flex min-h-0 flex-1 items-center justify-center px-[6vw] text-center">
        <svg
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[min(78vh,620px)] w-[min(78vh,620px)] -translate-x-1/2 -translate-y-1/2 opacity-30 [animation:spin-slow_120s_linear_infinite]"
          viewBox="0 0 620 620"
          aria-hidden="true"
        >
          <circle
            cx="310"
            cy="310"
            r="290"
            fill="none"
            stroke="#0072CE"
            strokeWidth="1"
            strokeDasharray="420 1400"
            opacity="0.5"
          />
          <circle
            cx="310"
            cy="310"
            r="240"
            fill="none"
            stroke="#E2A02B"
            strokeWidth="1"
            strokeDasharray="320 1200"
            strokeDashoffset="-260"
            opacity="0.45"
          />
          <circle
            cx="310"
            cy="310"
            r="190"
            fill="none"
            stroke="#0F7D41"
            strokeWidth="1"
            strokeDasharray="240 950"
            strokeDashoffset="-460"
            opacity="0.35"
          />
        </svg>

        <div className="relative z-10 w-full max-w-[880px]">
          <h1 className="mb-[clamp(10px,1.8vh,16px)] text-[clamp(30px,6vw,64px)] font-extrabold leading-[1.08] tracking-tight text-white [animation:fade-up_0.7s_ease_0.08s_both]">
            NESI WEEK
            <br />
            <span className="block bg-gradient-to-r from-gold to-[#f3c874] bg-clip-text text-[clamp(13px,2vw,20px)] font-semibold tracking-normal text-transparent">
              (Nigeria Electricity Supply Industry) 2026
            </span>
          </h1>

          <p className="mx-auto mb-[clamp(10px,1.8vh,20px)] max-w-[760px] text-[clamp(13px,1.6vw,17px)] font-light leading-[1.7] text-white/65 [animation:fade-up_0.7s_ease_0.16s_both]">
            Nigeria&apos;s premier annual electricity and energy ecosystem
            platform bringing together policymakers, regulators, utilities,
            investors, technology providers, innovators, development partners
            and consumers to shape the future of the Nigerian Electricity
            Supply Industry.
          </p>

          <p className="mb-[clamp(18px,3vh,32px)] text-xs font-semibold uppercase tracking-[0.2em] text-gold/85 [animation:fade-up_0.7s_ease_0.2s_both]">
            Coming Soon ...
          </p>

          <div className="mb-[clamp(18px,3vh,32px)] [animation:fade-up_0.7s_ease_0.24s_both]">
            <Countdown />
          </div>

          <div className="flex flex-col items-center gap-2 text-sm font-semibold tracking-[0.03em] text-gold [animation:fade-up_0.7s_ease_0.32s_both] sm:flex-row sm:justify-center sm:gap-3">
            <span>15–22 November 2026</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
            <span>Abuja, Nigeria</span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 flex shrink-0 flex-col items-center gap-1.5 border-t border-white/[0.07] px-[5vw] py-[clamp(10px,2vh,24px)] text-center text-[11px] text-white/35 sm:flex-row sm:justify-between sm:text-[12.5px]">
        <span>&copy; 2026 NESI Platform Limited. All rights reserved.</span>
        <span className="flex flex-col gap-1 sm:flex-row sm:gap-4">
          <a
            href="tel:+2348037987223"
            className="transition-colors hover:text-gold"
          >
            +234 803 798 7223
          </a>
        </span>
      </footer>
    </div>
  );
}
