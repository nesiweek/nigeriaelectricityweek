import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden border-b-2 border-gold text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,42,67,0.55)_0%,rgba(16,42,67,0.55)_35%,rgba(9,22,36,0.92)_100%)]" />
      </div>

      <div className="px-page relative w-full pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(7rem,14vw,9rem)]">
        <div className="mx-auto w-full max-w-[1240px]">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-[30ch] text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.08] text-gold">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-[60ch] text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-[1.7] text-white/80">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
