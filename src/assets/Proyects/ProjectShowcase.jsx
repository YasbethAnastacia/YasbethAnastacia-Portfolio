import { useLanguage } from "../../hooks/useLanguage";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "../Layout/BrandIcons";
export const ProjectShowcase = ({ project, gallery }) => {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-10 lg:gap-14 xl:gap-16 items-center">
      <div key={`info-${project.id}`} className="flex flex-col gap-5 animate-[projectInfo_550ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-[0.3em] font-semibold text-[var(--text-accent)] transition-colors duration-500">
            {String(project.id).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-[var(--primary-30)] transition-colors duration-500" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--text-primary)] leading-tight transition-colors duration-500">
            {t(project.title)}
          </h3>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-accent)] font-medium">{t(project.type)}</p>
        </div>
        <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg transition-colors duration-500">{t(project.description)}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tecnologias.map((tech, index) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full bg-[var(--primary-10)] border border-[var(--border-color)] text-sm text-[var(--text-accent)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--primary-20)] hover:border-[var(--primary-color)]"
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[var(--primary-color)] text-white font-semibold border-2 border-[var(--primary-color)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[var(--primary-hover)] hover:border-[var(--primary-hover)] hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
          >
            {t("Visitar sitio")}
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-[var(--primary-color)] bg-[var(--background-card)] text-[var(--text-accent)] font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[var(--primary-10)] hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
            >
              <GitHubIcon size={18} className="transition-transform duration-300 group-hover:scale-110" />
              GitHub
            </a>
          )}
        </div>
      </div>
      <div key={`gallery-${project.id}`} className="min-w-0 animate-[projectGallery_650ms_cubic-bezier(0.22,1,0.36,1)_both]">
        {gallery}
      </div>
    </div>
  );
};
