import { useState } from "react";
import { Experiencias } from "./Data";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ExperienceDetail } from "./ExperienceDetail";
import { SectionLabel } from "../Layout/SectionLabel";
import { useReveal } from "../../hooks/useReveal";

export const Experience = () => {
    const [seleccionada, setSeleccionada] = useState(Experiencias[0]);
    const [ref, visible] = useReveal();

    return (
        <section id="experiencia" className="px-5 md:px-10 lg:px-16 pt-6 md:pt-10 pb-12">
            <SectionLabel number="02" title="Experiencia" />

            <div
                ref={ref}
                className={`site-reveal lg:grid lg:grid-cols-[0.9fr_1.3fr] lg:gap-16 ${visible ? "is-visible" : ""}`}
            >
                <ExperienceTimeline
                    items={Experiencias}
                    activa={seleccionada}
                    onSelect={setSeleccionada}
                />
                <div className="hidden lg:block">
                    <ExperienceDetail key={seleccionada.id} experiencia={seleccionada} />
                </div>
            </div>
        </section>
    );
};
