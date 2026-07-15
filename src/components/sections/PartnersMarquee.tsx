import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { partnerLogos } from "@/data/partners";

const REPEATS_PER_LAP = 4;

const lap = Array.from({ length: REPEATS_PER_LAP }, () => partnerLogos).flat();
const track = [...lap, ...lap];

export function PartnersMarquee() {
  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container>
        <div className="mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Our Partners
          </span>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-navy">
            Strategic Partnerships Are at the Heart of Nigeria Electricity
            Week
          </h2>
        </div>
      </Container>

      <div className="relative overflow-hidden border-y border-slate-200 py-5 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 has-[>div:hover]:[animation-play-state:paused]">
          {track.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="relative h-11 w-28 flex-shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="112px"
                className="object-contain opacity-55 grayscale transition duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      <Container className="mt-[clamp(2.5rem,5vw,3.5rem)] text-center">
        <Button href="/contact" variant="navy">
          Partner with Us
        </Button>
      </Container>
    </section>
  );
}
