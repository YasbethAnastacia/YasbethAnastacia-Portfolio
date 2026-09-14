import { useLanguage } from "../../hooks/useLanguage";
import { useState } from "react";
import { projects } from "./data";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectShowcase } from "./ProjectShowcase";
import { SectionLabel } from "../Layout/SectionLabel";
import { useReveal } from "../../hooks/useReveal";
export const Proyects = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(projects[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const [ref, visible] = useReveal();
  const project = projects.find((item) => item.id === activeId) ?? projects[0];
  const selectProject = (id) => {
    if (id === activeId) return;
    setActiveId(id);
    setImageIndex(0);
  };
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden px-5 md:px-10 lg:px-16 pt-6 md:pt-10 pb-16 md:pb-20 bg-[var(--background)] transition-colors duration-500"
    >
      <div aria-hidden="true" className="projects-background pointer-events-none absolute inset-0 z-0 opacity-20 transition-opacity duration-500">
        <img src="/PROYECTOS/wave.svg" alt="" className="w-full h-full object-cover" draggable={false} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute z-0 -left-20 top-20 w-64 h-64 rounded-full bg-[var(--primary-20)] blur-[100px] " />
      <div aria-hidden="true" className="pointer-events-none absolute z-0 -right-24 bottom-10 w-72 h-72 rounded-full bg-[var(--soft-20)] blur-[110px] " />
      <div className="relative z-10">
        <SectionLabel number="03" title={t("Proyectos")} />
        <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="w-full mb-10">
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full" aria-label={t("Lista de proyectos")}>
              {projects.map((item, index) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectProject(item.id)}
                    aria-pressed={active}
                    className={`group relative overflow-hidden flex items-center justify-center gap-2 w-full min-h-[52px] px-4 py-3 rounded-2xl border text-xs md:text-sm tracking-[0.1em] font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] ${active ? ` bg-[var(--primary-color)] border-[var(--primary-color)] text-white -translate-y-1 shadow-lg ` : ` bg-[var(--background-card)] border-[var(--border-color)] text-[var(--text-secondary)] hover:-translate-y-1 hover:text-[var(--text-accent)] hover:border-[var(--primary-color)] hover:bg-[var(--background-soft)] hover:shadow-md `}`}
                    style={{
                      animationDelay: `${index * 70}ms`,
                    }}
                  >
                    {!active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[var(--primary-10)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                      />
                    )}
                    <span className={`relative z-10 transition-all duration-300 ${active ? "opacity-90" : "text-[var(--text-accent)]"}`}>
                      {String(item.id).padStart(2, "0")}
                    </span>
                    <span className="relative z-10 truncate">{t(item.short)}</span>
                  </button>
                );
              })}
            </nav>
          </div>
          <div key={project.id} className="animate-[projectChange_500ms_cubic-bezier(0.22,1,0.36,1)_both]">
            <ProjectShowcase
              project={project}
              gallery={
                <ProjectGallery
                  images={project.images}
                  mobileImages={project.mobileImages}
                  title={project.urlLabel}
                  index={imageIndex}
                  onChange={setImageIndex}
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
