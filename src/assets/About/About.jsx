import { useLanguage } from "../../hooks/useLanguage";
import { MapPin, Languages, GraduationCap, Code2 } from "lucide-react";
import { SectionLabel } from "../Layout/SectionLabel";
import { useReveal } from "../../hooks/useReveal";
export const About = () => {
  const { t } = useLanguage();
  const [photoRef, photoVisible] = useReveal();
  const [textRef, textVisible] = useReveal();
  return (
    <section id="sobre-mi" className="relative overflow-hidden px-5 md:px-10 lg:px-16 pt-12 md:pt-16 pb-16 md:pb-20 bg-[var(--background)] transition-colors duration-500">
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-10 w-40 h-40 rounded-full bg-[var(--primary-color)] opacity-15 blur-3xl " />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 w-64 h-64 rounded-full bg-[var(--soft-20)] blur-[90px]" />
      <SectionLabel number="01" title={t("Sobre mí")} />
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
        <div ref={photoRef} className={`relative flex justify-center transition-all duration-700 ease-out ${photoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <div className="relative flex items-center justify-center w-[320px] h-[360px] md:w-[390px] md:h-[430px]">
            <div className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full bg-[var(--primary-color)] opacity-20 blur-3xl " />
            <div className="absolute w-[285px] h-[285px] md:w-[345px] md:h-[345px] rounded-full border border-[var(--primary-color)] opacity-30 scale-110 " />
            <div className="absolute w-[285px] h-[285px] md:w-[345px] md:h-[345px] rounded-full border border-[var(--border-color)] opacity-70 scale-[1.17] " />
            <div className="absolute top-5 right-3 md:right-1 w-12 h-12 rounded-full bg-[var(--background-card)] border border-[var(--border-color)] shadow-sm  transition-colors duration-500" />
            <div className="absolute bottom-8 left-5 w-8 h-8 rounded-full bg-[var(--primary-color)] opacity-25 " />
            <div className="group relative z-10 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden bg-[var(--background-soft)] shadow-xl ring-8 ring-[var(--background-card)] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <img src="/HERO/mi.jpeg" alt={t("Retrato de Yasbeth Anastacia Vázquez Hernández")} className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]" draggable={false} />
            </div>
            <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[var(--background-card)] backdrop-blur-md shadow-lg border border-[var(--border-color)] whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--primary-10)] text-[var(--text-accent)] transition-all duration-300">
                <Code2 size={18} />
              </div>
              <div>
                <p className="text-[11px] text-[var(--text-muted)] font-medium">
                  {t("En constante aprendizaje")}
                </p>
                <p className="text-sm text-[var(--text-primary)] font-semibold">
                  {t("Frontend Developer")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={textRef} className={`flex flex-col gap-6 transition-all duration-700 ease-out ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--text-accent)] font-semibold transition-colors duration-500">
              {t("Un poco sobre mí")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[var(--text-primary)] leading-tight transition-colors duration-500">
              {t("¡Hola! Soy")}
              {" "}
              <span className="text-[var(--text-accent)]">
                Anastacia
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl transition-colors duration-500">
            <p>
              {t("Soy Ingeniera en Mecatrónica egresada del Instituto Tecnológico de Colima, con interés en combinar tecnología, creatividad y desarrollo de software.")}
            </p>
            <p>
              {t("Me apasiona el desarrollo web y la creación de interfaces modernas, funcionales y centradas en las personas, cuidando tanto la experiencia como los pequeños detalles visuales.")}
            </p>
            <p>
              {t("Actualmente continúo creciendo profesionalmente como")}
              {" "}
              <span className="font-semibold text-[var(--text-accent)]">
                {t("Frontend Developer")}
              </span>
              {t(", desarrollando proyectos que me permiten aprender, experimentar y convertir ideas en experiencias digitales.")}
            </p>
          </div>
          <blockquote className="relative max-w-2xl rounded-r-2xl border-l-4 border-[var(--primary-color)] bg-[var(--primary-10)] px-6 py-4 transition-all duration-300 hover:translate-x-1 hover:bg-[var(--primary-20)]">
            <p className="text-[var(--text-secondary)] italic leading-relaxed transition-colors duration-500">
              {t("Creo que la tecnología puede cambiar vidas, y me motiva ser parte de proyectos que generen un impacto positivo en las personas.")}
            </p>
          </blockquote>
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-card)] shadow-sm border border-[var(--border-color)] text-sm text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-md">
              <MapPin size={16} className="text-[var(--text-accent)] transition-transform duration-300 group-hover:scale-110" />
              {t("Colima, México")}
            </div>
            <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-card)] shadow-sm border border-[var(--border-color)] text-sm text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-md">
              <GraduationCap size={16} className="text-[var(--text-accent)] transition-transform duration-300 group-hover:scale-110" />
              {t("Ing. Mecatrónica")}
            </div>
            <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background-card)] shadow-sm border border-[var(--border-color)] text-sm text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-md">
              <Languages size={16} className="text-[var(--text-accent)] transition-transform duration-300 group-hover:scale-110" />
              {t("Español · Inglés intermedio")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
