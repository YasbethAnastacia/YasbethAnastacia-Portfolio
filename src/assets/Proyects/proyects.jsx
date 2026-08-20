import { useState } from "react";
import { projects } from "./data";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectShowcase } from "./ProjectShowcase";
import { SectionLabel } from "../Layout/SectionLabel";

export const Proyects = () => {
    const [activeId, setActiveId] = useState(projects[0].id);
    const [imageIndex, setImageIndex] = useState(0);
    const project = projects.find((item) => item.id === activeId) ?? projects[0];

    const selectProject = (id) => {
        setActiveId(id);
        setImageIndex(0);
    };

    return (
        <section id="proyectos" className="relative px-5 md:px-10 lg:px-16 pt-6 md:pt-10 pb-14 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-20 -z-10">
                <img src="./PROYECTOS/fondo2.svg" alt="" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
                <SectionLabel number="03" title="Proyectos" />
                <nav className="flex flex-wrap gap-2 md:mb-8" aria-label="Lista de proyectos">
                    {projects.map((item) => {
                        const active = item.id === activeId;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => selectProject(item.id)}
                                className={`px-3 py-2 rounded-full text-xs md:text-sm tracking-[0.12em] font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] ${
                                    active
                                        ? "bg-[var(--primary-color)] text-white shadow-md"
                                        : "text-zinc-500 hover:text-pink-500 hover:bg-pink-50"
                                }`}
                            >
                                {String(item.id).padStart(2, "0")} {item.short}
                            </button>
                        );
                    })}
                </nav>
            </div>

            <ProjectShowcase
                project={project}
                gallery={
                    <ProjectGallery
                        images={project.images}
                        title={project.urlLabel}
                        index={imageIndex}
                        onChange={setImageIndex}
                    />
                }
            />
        </section>
    );
};
