import { SectionLabel } from "../Layout/SectionLabel";
import { useReveal } from "../../hooks/useReveal";

export const About = () => {
    const [photoRef, photoVisible] = useReveal();
    const [textRef, textVisible] = useReveal();

    return (
        <section id="sobre-mi" className="relative px-5 md:px-10 lg:px-16 pt-12 md:pt-16 pb-12">
            <div
                aria-hidden="true"
                className="site-float pointer-events-none absolute right-[8%] top-10 w-40 h-40 rounded-full bg-[var(--primary-color)] opacity-15 blur-3xl"
            />

            <SectionLabel number="01" title="Sobre mí" />

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
                <div
                    ref={photoRef}
                    className={`site-reveal-left relative flex justify-center ${photoVisible ? "is-visible" : ""}`}
                >
                    <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full bg-[var(--primary-color)] opacity-30 blur-3xl" />
                    <div className="relative z-10 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden bg-pink-100 shadow-xl ring-8 ring-white">
                        <img
                            src="./HERO/foto-personal.png"
                            alt="Retrato de Yasbeth Anastacia Vázquez Hernández"
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                </div>

                <div
                    ref={textRef}
                    className={`site-reveal-right flex flex-col gap-5 ${textVisible ? "is-visible" : ""}`}
                >
                    <p className="text-3xl md:text-4xl font-semibold text-zinc-800 leading-tight">
                        ¡Hola! Soy{" "}
                        <span className="text-[var(--primary-color)]">Anastacia</span>
                    </p>

                    <div className="flex flex-col gap-3 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                        <p>
                            Ingeniera en Mecatrónica egresada del Instituto Tecnológico de
                            Colima.
                        </p>
                        <p>
                            Me apasiona el desarrollo web y crear interfaces modernas,
                            funcionales y centradas en las personas.
                        </p>
                        <p>
                            Actualmente continúo desarrollándome profesionalmente como{" "}
                            <span className="font-semibold text-pink-500">Frontend Developer</span>.
                        </p>
                    </div>

                    <blockquote className="relative pl-5 border-l-2 border-[var(--primary-color)] max-w-xl">
                        <p className="text-zinc-600 italic leading-relaxed">
                            Creo que la tecnología puede cambiar vidas, y me motiva ser parte de
                            proyectos que generen un impacto positivo en las personas.
                        </p>
                    </blockquote>

                    <p className="text-sm text-zinc-500 tracking-wide">
                        Colima, México · Español · Inglés (intermedio)
                    </p>
                </div>
            </div>
        </section>
    );
};
