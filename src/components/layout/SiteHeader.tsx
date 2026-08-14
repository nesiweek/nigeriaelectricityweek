"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { Button } from "@/components/ui/Button";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-300",
        isScrolled
          ? "bg-navy/95 py-3.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "bg-navy/55 py-5 backdrop-blur-sm",
      )}
    >
      <div className="px-page mx-auto flex max-w-[1240px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo height={48} />
          {/* <span className="flex flex-col leading-tight">
            <span className="text-[1.05rem] font-extrabold tracking-wide text-white">
              {siteConfig.name}
            </span>
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-gold-light">
              Nigeria Electricity Supply Industry
            </span>
          </span> */}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              !item.href.includes("#") && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative py-1.5 text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-white/80 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100",
                    isActive && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            className="hidden lg:inline-flex"
          >
            Register Interest
          </Button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="relative h-5 w-7 lg:hidden"
          >
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-full bg-white transition-transform duration-300",
                isMenuOpen && "translate-y-[9px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[9px] h-0.5 w-full bg-white transition-opacity duration-200",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-0.5 w-full bg-white transition-transform duration-300",
                isMenuOpen && "-translate-y-[9px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="px-page flex flex-col gap-1 bg-navy pb-6 pt-4 lg:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-3 text-sm font-semibold",
                !item.href.includes("#") && pathname === item.href
                  ? "bg-white/10 text-white"
                  : "text-white/80",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="mt-2 w-full">
            Register Interest
          </Button>
        </nav>
      )}

      <ScrollProgressBar />
    </header>
  );
}
