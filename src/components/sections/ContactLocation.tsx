import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactInfo } from "@/data/site";

const fullAddress = `${contactInfo.addressLines.join(", ")}, Nigeria`;
const mapsQuery = encodeURIComponent(fullAddress);
const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

export function ContactLocation() {
  return (
    <section className="bg-white py-[clamp(4.5rem,8vw,8rem)]">
      <Container className="grid items-center gap-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-2">
        <div>
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-blue">
            <span className="h-[2px] w-7 bg-gold" />
            Location
          </span>
          <h2 className="mb-6 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-navy">
            Find Us
          </h2>

          <address className="mb-8 space-y-1 text-[1.05rem] not-italic leading-[1.7] text-slate-600">
            {contactInfo.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>

          <Button
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="navy"
          >
            Get Directions
          </Button>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-[0_40px_70px_-35px_rgba(16,42,67,0.35)]">
          <iframe
            src={embedSrc}
            title="Map showing the NESI Week Secretariat office location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </Container>
    </section>
  );
}
