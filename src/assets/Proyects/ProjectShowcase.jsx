import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "../Layout/BrandIcons";

export const ProjectShowcase = ({ project, gallery }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-10 lg:gap-12 items-center">
            <div key={project.id} className="site-reveal-left is-visible flex flex-col gap-5">
                <p className="text-xs tracking-[0.3em] text-pink-400">
                    {String(project.id).padStart(2, "0")}
                </p>
                <h3 className="text-3xl md:text-5xl font-bold text-zinc-800 leading-tight">
                    {project.title}
                </h3>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--primary-color)]">
                    {project.type}
                </p>
                <p className="text-gray-600 leading-relaxed max-w-md">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-1">
                    {project.tecnologias.map((tech) => (
                        <span
                            key={tech}
                            className="text-sm text-pink-600 bg-pink-50 px-3 py-1.5 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                    {project.live ? (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--primary-color)] text-white font-semibold transition-all duration-300 hover:gap-3 hover:shadow-[0_0_18px_#fa9bb9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                        >
                            Visitar sitio
                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    ) : null}
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                        >
                            <GitHubIcon size={18} />
                            GitHub
                        </a>
                    ) : null}
                </div>
            </div>

            <div key={`gallery-${project.id}`} className="site-reveal-right is-visible">
                {gallery}
            </div>
        </div>
    );
};
