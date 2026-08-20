import { ArrowRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../Layout/BrandIcons";
import { SectionLabel } from "../Layout/SectionLabel";
import { contact } from "../../data/contact";
import { useReveal } from "../../hooks/useReveal";

export const Contact = () => {
    const [ref, visible] = useReveal();

    return (
        <section
            id="contacto"
            className="relative px-5 md:px-10 lg:px-16 pt-10 pb-16 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,155,185,0.28),transparent_42%),radial-gradient(circle_at_90%_80%,rgba(250,155,185,0.18),transparent_40%)]"
            />

            <div ref={ref} className={`relative site-reveal ${visible ? "is-visible" : ""}`}>
                <SectionLabel number="05" title="Contacto" />

                <p className="text-sm tracking-[0.35em] text-pink-400 mb-4">¿TIENES UNA IDEA?</p>
                <h3 className="text-4xl md:text-6xl font-bold text-zinc-800 max-w-3xl leading-[1.05]">
                    ¿Creamos algo{" "}
                    <span className="text-[var(--primary-color)]">juntos?</span>
                </h3>
                <p className="mt-5 max-w-lg text-gray-600 leading-relaxed">
                    Estoy abierta a oportunidades laborales, colaboraciones y al desarrollo de
                    páginas web. Si tienes un proyecto en mente, hablemos.
                </p>

                <a
                    href={`mailto:${contact.email}`}
                    className="group mt-8 inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-zinc-800 transition-all duration-300 hover:gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
                >
                    Hablemos
                    <ArrowRight className="text-[var(--primary-color)] transition-transform duration-300 group-hover:translate-x-2" />
                </a>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 text-zinc-700 hover:text-pink-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                    >
                        <Mail size={16} />
                        Email
                    </a>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 text-zinc-700 hover:text-pink-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                    >
                        <LinkedInIcon size={16} />
                        LinkedIn
                    </a>
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 text-zinc-700 hover:text-pink-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                    >
                        <GitHubIcon size={16} />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
