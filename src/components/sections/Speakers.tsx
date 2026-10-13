
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { speakers } from "@/data/speakers";

const cardBackgrounds = [
    "bg-[#1728D8]",
    "bg-[#9B0BE8]",
    "bg-[#1728D8]",
    "bg-[#9B0BE8]",
];

export function Speakers() {
    return (
        <section
            id="speakers"
            className="bg-white py-16 sm:py-20 lg:py-24"
        >
            <Container>
                <Reveal className="mb-10 max-w-2xl sm:mb-14">
                    <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue">
                        <span className="h-0.5 w-7 bg-gold" />
                        Meet the Speakers
                    </span>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
                        The Voices Shaping Nigeria&apos;s Energy Future
                    </h2>

                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        Meet the industry leaders, innovators and decision-makers
                        driving conversations about the future of electricity in Nigeria.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {speakers.map((speaker, index) => (
                        <Reveal key={speaker.title}>
                            <article className="group min-w-0">
                                <div
                                    className={`relative aspect-[4/5] overflow-hidden rounded-xl ${cardBackgrounds[index % cardBackgrounds.length]
                                        }`}
                                >
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.title}
                                        fill
                                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="pt-5">
                                    <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl">
                                        {speaker.title}
                                    </h3>

                                    <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">
                                        {speaker.description.trim()}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
