"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const nomineeSlides = [
    {
        src: "/images/nominees/top-nominees.jpeg",
        alt: "NESI Awards top nominees ",
        label: "Top nominees",
    },
    {
        src: "/images/nominees/customer.jpeg",
        alt: "NESI Awards for Customer, Renewables and Energy Transition",
        label: "Customer, Renewables and Energy Transition",
    },
    {
        src: "/images/nominees/distribution.jpeg",
        alt: "NESI Awards for Distribution and Customer",
        label: "Distribution and Customer",
    },
    {
        src: "/images/nominees/generation.jpeg",
        alt: "NESI Awards for Generation",
        label: "Generation",
    },
    {
        src: "/images/nominees/innovation.jpeg",
        alt: "NESI Awards for innovation, Technology and Investment",
        label: "Innovation, Technology and Investment",
    },
    {
        src: "/images/nominees/leadership.jpeg",
        alt: "NESI Awards for Leadership and People",
        label: "Leadership and people",
    },
    {
        src: "/images/nominees/transmission.jpeg",
        alt: "NESI Awards for Transmission and Market",
        label: "Transmission and market",
    },
];

const lastIndex = nomineeSlides.length - 1;

export function TopNominees() {
    const trackRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

    const enlargedSlide =
        enlargedIndex !== null ? nomineeSlides[enlargedIndex] : null;

    /* Keep the active index in sync with the scroll / swipe position */
    const handleScroll = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        // Fully scrolled to the end: the last slide may not reach the start edge
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
            setActiveIndex(lastIndex);
            return;
        }

        let closest = 0;
        let smallestDistance = Infinity;
        slideRefs.current.forEach((slide, index) => {
            if (!slide) return;
            const distance = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closest = index;
            }
        });
        setActiveIndex(closest);
    }, []);

    function scrollToSlide(index: number) {
        const track = trackRef.current;
        const slide = slideRefs.current[index];
        if (!track || !slide) return;
        track.scrollTo({
            left: slide.offsetLeft - track.offsetLeft,
            behavior: "smooth",
        });
    }

    function scrollByStep(direction: 1 | -1) {
        const next = Math.min(Math.max(activeIndex + direction, 0), lastIndex);
        scrollToSlide(next);
    }

    /* Enlarged viewer helpers */
    function stepEnlarged(direction: 1 | -1) {
        setEnlargedIndex((current) => {
            if (current === null) return current;
            const next =
                (current + direction + nomineeSlides.length) %
                nomineeSlides.length;
            return next;
        });
    }

    function closeEnlarged() {
        if (enlargedIndex !== null) {
            // Bring the carousel to the slide the user was viewing
            scrollToSlide(enlargedIndex);
        }
        setEnlargedIndex(null);
    }

    /* Lock page scroll and handle keyboard while the viewer is open */
    useEffect(() => {
        if (enlargedIndex === null) return;

        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") closeEnlarged();
            if (event.key === "ArrowLeft") stepEnlarged(-1);
            if (event.key === "ArrowRight") stepEnlarged(1);
        }

        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enlargedIndex]);

    const atStart = activeIndex === 0;
    const atEnd = activeIndex === lastIndex;


    return (
        <section
            id="top-150-innovators"
            aria-labelledby="top-150-heading"
            className="relative isolate scroll-mt-24 overflow-hidden py-16 text-white sm:py-20 lg:py-24"
        >
            {/* Reuse the existing landing-page background */}
            <Image
                src="/images/hero/Event.png"
                alt=""
                fill
                sizes="100vw"
                priority={false}
                className="-z-20 object-cover"
            />

            {/* Darker blue gradient background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(0,70,130,0.96)_0%,rgba(10,28,48,0.985)_65%,rgba(2,10,26,0.99)_100%)]" />

            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.07),transparent_55%)]" />

            <Container className="max-w-7xl">
                <Reveal>
                    <div className=" mb-10 max-w-3xl text-left sm:mb-12">
                        <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
                            <span className="h-[2px] w-7 bg-gold items-right" />
                            NESI Awards
                            <span className="h-[2px] w-7 bg-gold" />
                        </span>

                        <h2
                            id="top-150-heading"
                            className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-tight tracking-tight"
                        >
                            Meet the{" "}
                            <span className="text-gold-light">Top Nominees</span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Celebrating the top nominees of the NESI Awards! .
                        </p>
                    </div>
                </Reveal>

                <div className="mx-auto max-w-6xl">
                    {/* Scrollable / swipeable track */}
                    <div className="relative">
                        <div
                            ref={trackRef}
                            onScroll={handleScroll}
                            tabIndex={0}
                            role="region"
                            aria-roledescription="carousel"
                            aria-label="Top 150 innovators lists"
                            onKeyDown={(event) => {
                                if (event.key === "ArrowLeft") {
                                    event.preventDefault();
                                    scrollByStep(-1);
                                }
                                if (event.key === "ArrowRight") {
                                    event.preventDefault();
                                    scrollByStep(1);
                                }
                            }}
                            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            <ul className="flex gap-4 sm:gap-6">
                                {nomineeSlides.map((slide, index) => (
                                    <li
                                        key={slide.src}
                                        ref={(element) => {
                                            slideRefs.current[index] = element;
                                        }}
                                        aria-roledescription="slide"
                                        aria-label={`${index + 1} of ${nomineeSlides.length}`}
                                        // Mobile: one poster at a time. Larger screens: compact cards, rest hidden until scrolled.
                                        className="w-[calc(100vw-2rem)] shrink-0 snap-start sm:w-[260px] lg:w-[290px]"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setEnlargedIndex(index)}
                                            className="group relative mx-auto block w-full max-w-[18rem] cursor-zoom-in rounded-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-black/25 transition hover:border-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold sm:max-w-none"
                                            aria-label={`Enlarge ${slide.label}`}
                                        >
                                            <div className="relative aspect-[4/5] w-full">
                                                <Image
                                                    src={slide.src}
                                                    alt={slide.alt}
                                                    fill
                                                    sizes="(max-width: 640px) 80vw, 290px"
                                                    className="object-contain"
                                                    priority={index === 0}
                                                />
                                            </div>

                                            {/* Visible only on large screens when hovering or focusing */}
                                            <span className="absolute bottom-4 right-4 hidden rounded-full bg-[#102a43]/90 px-3 py-2 text-xs font-semibold text-white shadow-lg sm:bottom-5 sm:right-5 lg:block lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                                                <span aria-hidden="true">⤢ </span>
                                                Tap to enlarge
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Desktop arrow buttons overlaying the track */}
                        <button
                            type="button"
                            onClick={() => scrollByStep(-1)}
                            disabled={atStart}
                            aria-label="Scroll to previous list"
                            className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#102a43]/90 text-xl text-white shadow-lg backdrop-blur transition hover:bg-gold hover:text-[#102a43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-0 md:flex"
                        >
                            <span aria-hidden="true">←</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollByStep(1)}
                            disabled={atEnd}
                            aria-label="Scroll to next list"
                            className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#102a43]/90 text-xl text-white shadow-lg backdrop-blur transition hover:bg-gold hover:text-[#102a43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-0 md:flex"
                        >
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>

                    {/* Dots + mobile arrows */}
                    <div className="mt-5 flex items-center justify-between gap-3 sm:mt-6 md:justify-center">
                        <button
                            type="button"
                            onClick={() => scrollByStep(-1)}
                            disabled={atStart}
                            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/25 px-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-40 md:hidden"
                            aria-label="View previous list"
                        >
                            <span aria-hidden="true">←</span>
                        </button>

                        <div className="flex items-center justify-center gap-2">
                            {nomineeSlides.map((slide, index) => (
                                <button
                                    key={slide.src}
                                    type="button"
                                    onClick={() => scrollToSlide(index)}
                                    aria-label={`View ${slide.label}`}
                                    aria-current={activeIndex === index ? "true" : undefined}
                                    className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#102a43] ${activeIndex === index
                                        ? "w-7 bg-gold"
                                        : "w-2.5 bg-white/40 hover:bg-white/75"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => scrollByStep(1)}
                            disabled={atEnd}
                            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/25 px-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-40 md:hidden"
                            aria-label="View next list"
                        >
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </Container>

            {/* Enlarged viewer */}
            {enlargedSlide && enlargedIndex !== null && createPortal(
                <div
                    className="fixed inset-0 z-[1000] overscroll-none bg-[#020914]/95 backdrop-blur-md"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Enlarged view: ${enlargedSlide.label}`}
                    tabIndex={-1}
                    ref={(element) => element?.focus()}
                    onClick={closeEnlarged}
                >
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            closeEnlarged();
                        }}
                        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                        aria-label="Close enlarged image"
                    >
                        ×
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            stepEnlarged(-1);
                        }}
                        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:left-6 sm:h-12 sm:w-12"
                        aria-label="Previous list"
                    >
                        ←
                    </button>

                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            stepEnlarged(1);
                        }}
                        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-6 sm:h-12 sm:w-12"
                        aria-label="Next list"
                    >
                        →
                    </button>

                    {/* Poster is sized to the viewport so it always fits without scrolling */}
                    <div className="flex h-full w-full items-center justify-center px-3 sm:px-24">
                        <div
                            className="relative h-[72dvh] w-full max-w-4xl"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <Image
                                key={`enlarged-${enlargedSlide.src}`}
                                src={enlargedSlide.src}
                                alt={enlargedSlide.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, 80vw"
                                className="rounded-lg object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <span className="pointer-events-none absolute bottom-4 left-0 right-0 z-10 text-center text-sm font-semibold text-white/80">
                        {enlargedIndex + 1} of {nomineeSlides.length}
                    </span>
                </div>,
                document.body
            )}
        </section>
    );
}
