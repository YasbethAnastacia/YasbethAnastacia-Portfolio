import { useLanguage } from "../../hooks/useLanguage";
import { ChevronDown } from "lucide-react";
import { ExperienceDetail } from "./ExperienceDetail";

export const ExperienceTimeline = ({ items, activa, onSelect, mostrarDetalleMovil }) => {
  const { t } = useLanguage();
  return (
    <ol className="relative ml-3">
      <span aria-hidden="true" className="site-timeline-line absolute left-[5px] top-2 bottom-2 w-px bg-[var(--primary-30)] transition-colors duration-500" />

      {items.map((experiencia, index) => {
        const activaActual = activa.id === experiencia.id;
        const activaMovil = activaActual && mostrarDetalleMovil;

        return (
          <li
            key={experiencia.id}
            className="relative animate-[timelineItem_500ms_ease-out_both]"
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            <button
              type="button"
              onClick={() => onSelect(experiencia)}
              aria-expanded={activaMovil}
              aria-current={activaActual ? "true" : undefined}
              className={`group relative w-full text-left pl-8 pr-4 py-4 rounded-r-2xl transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] ${activaMovil ? "bg-[var(--primary-10)]" : "hover:bg-[var(--background-soft)]"} ${activaActual ? "lg:bg-[var(--primary-10)]" : "lg:hover:bg-[var(--background-soft)]"} hover:translate-x-1`}
            >
              <span
                className={`absolute left-0 top-6 rounded-full border-2 transition-all duration-300 ease-out ${activaMovil ? ` w-3.5 h-3.5 bg-[var(--primary-color)] border-[var(--background-card)] shadow-[0_0_16px_var(--primary-soft)] scale-125 ` : ` w-3 h-3 bg-[var(--background-card)] border-[var(--primary-color)] `} ${activaActual ? ` lg:w-3.5 lg:h-3.5 lg:bg-[var(--primary-color)] lg:border-[var(--background-card)] lg:shadow-[0_0_16px_var(--primary-soft)] lg:scale-125 ` : ""} group-hover:scale-125`}
              />

              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p
                    className={`font-semibold leading-snug transition-all duration-300 ease-out ${activaMovil ? "text-[var(--primary-color)] text-lg" : "text-[var(--text-primary)]"} ${activaActual ? "lg:text-[var(--primary-color)] lg:text-lg" : ""} group-hover:text-[var(--primary-color)]`}
                  >
                    {t(experiencia.puesto)}
                  </p>

                  <p className="mt-0.5 text-[var(--text-secondary)] transition-colors duration-500">{t(experiencia.empresa)}</p>

                  <p className="text-sm text-[var(--text-muted)] mt-0.5 transition-colors duration-500">{t(experiencia.fecha)}</p>
                </div>

                <ChevronDown
                  size={19}
                  className={`lg:hidden shrink-0 transition-all duration-500 ease-out ${activaMovil ? ` rotate-180 text-[var(--primary-color)] ` : ` rotate-0 text-[var(--text-muted)] `} group-hover:text-[var(--primary-color)]`}
                />
              </div>
            </button>

            <div
              aria-hidden={!activaMovil}
              inert={!activaMovil}
              className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-500 ease-out ${activaMovil ? ` grid-rows-[1fr] opacity-100 ` : ` grid-rows-[0fr] opacity-0 `}`}
            >
              <div className="overflow-hidden">
                <div
                  className={`pl-8 pb-6 pt-3 transition-all duration-500 ease-out ${activaMovil ? ` translate-y-0 opacity-100 ` : ` -translate-y-3 opacity-0 `}`}
                >
                  <div
                    className="rounded-2xl bg-[var(--background-card)] border border-[var(--border-color)] p-4 transition-colors duration-500"
                    style={{
                      boxShadow: "0 12px 35px var(--primary-10)",
                    }}
                  >
                    <ExperienceDetail experiencia={experiencia} compact />
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
