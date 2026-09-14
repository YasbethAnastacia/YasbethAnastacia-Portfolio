import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react";
import { BriefcaseBusiness, MousePointerClick } from "lucide-react";

import { Experiencias } from "./Data";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ExperienceDetail } from "./ExperienceDetail";
import { SectionLabel } from "../Layout/SectionLabel";
import { useReveal } from "../../hooks/useReveal";

export const Experience = () => {
  const { t } = useLanguage();
  const [seleccionada, setSeleccionada] = useState(Experiencias[0]);
  const [seleccionMovil, setSeleccionMovil] = useState(false);

  const [ref, visible] = useReveal();

  const seleccionarExperiencia = (experiencia) => {
    setSeleccionada(experiencia);
    setSeleccionMovil(true);
  };

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden px-5 md:px-10 lg:px-16 pt-8 md:pt-12 pb-16 md:pb-20 bg-[var(--background)] transition-colors duration-500"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-24 w-56 h-56 rounded-full bg-[var(--primary-10)] blur-3xl animate-[experienceGlow_7s_ease-in-out_infinite]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-10 w-72 h-72 rounded-full bg-[var(--primary-10)] blur-[100px] animate-[experienceGlowReverse_8s_ease-in-out_infinite]"
      />

      <SectionLabel number="02" title={t("Experiencia")} />

      <div className="mb-8 md:mb-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-10)] text-[var(--primary-color)] border border-[var(--border-color)] mb-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-20)]">
          <BriefcaseBusiness size={16} />

          <span className="text-sm font-medium">{t("Trayectoria profesional")}</span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight transition-colors duration-500">
          {t("Experiencia, aprendizaje y proyectos que han formado mi camino")}
        </h2>

        <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-[var(--text-secondary)] transition-colors duration-500">
          {t(
            "Aquí puedes explorar las etapas más importantes de mi desarrollo profesional, desde automatización e ingeniería hasta mi enfoque actual en desarrollo web frontend.",
          )}
        </p>
      </div>

      <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_1.38fr] gap-8 lg:gap-10 xl:gap-14 items-start">
          <div className={`relative transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <div
              className="absolute inset-0 rounded-[28px] bg-[var(--background-card)] border border-[var(--border-color)] transition-colors duration-500"
              style={{
                boxShadow: "0 18px 50px var(--primary-10)",
              }}
            />

            <div className="relative z-10 p-4 md:p-5">
              <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${!seleccionMovil ? "max-h-32 opacity-100 translate-y-0 mb-5" : "max-h-0 opacity-0 -translate-y-3 mb-0 pointer-events-none"}`}
              >
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[var(--background-soft)] border border-[var(--border-color)] transition-all duration-300">
                  <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-[var(--background-card)] text-[var(--primary-color)] border border-[var(--border-color)] shadow-sm transition-all duration-300">
                    <MousePointerClick size={18} className="animate-pulse" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)] transition-colors duration-500">{t("Explora mi experiencia")}</p>

                    <p className="text-xs text-[var(--text-muted)] mt-0.5 transition-colors duration-500">
                      {t("Selecciona una experiencia para ver más información.")}
                    </p>
                  </div>
                </div>
              </div>

              <ExperienceTimeline items={Experiencias} activa={seleccionada} onSelect={seleccionarExperiencia} mostrarDetalleMovil={seleccionMovil} />
            </div>
          </div>

          <div
            className={`hidden lg:block transition-all duration-700 delay-100 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-7"}`}
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[30px] bg-[var(--primary-10)] transition-colors duration-500"
              />

              <div
                className="relative rounded-[30px] bg-[var(--background-card)] border border-[var(--border-color)] px-7 xl:px-9 py-7 xl:py-8 transition-all duration-500"
                style={{
                  boxShadow: "0 22px 60px var(--primary-10)",
                }}
              >
                <div key={seleccionada.id} className="animate-[experienceDetail_450ms_ease-out]">
                  <ExperienceDetail experiencia={seleccionada} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
