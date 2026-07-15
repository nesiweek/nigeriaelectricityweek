"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-navy text-white shadow-[0_10px_25px_-8px_rgba(16,42,67,0.5)] transition-all duration-300 hover:bg-blue",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ChevronUpIcon width={20} height={20} />
    </button>
  );
}
