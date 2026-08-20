import { SectionLabel } from "../Layout/SectionLabel";
import { TechGroup } from "./TechGroup";
import { useReveal } from "../../hooks/useReveal";

const categorias = [
    {
        titulo: "Frontend",
        items: [
            { name: "React", icon: "./TECNOLOGIAS/react.svg" },
            { name: "JavaScript", icon: "./TECNOLOGIAS/js.svg" },
            { name: "HTML5", icon: "./TECNOLOGIAS/html5.svg" },
            { name: "CSS3", icon: "./TECNOLOGIAS/css.svg" },
            { name: "Tailwind", icon: "./TECNOLOGIAS/tailwind.svg" },
            { name: "Vite", icon: "./TECNOLOGIAS/vite.svg" },
        ],
    },
    {
        titulo: "Herramientas",
        items: [
            { name: "Git", icon: "./TECNOLOGIAS/git.svg" },
            { name: "GitHub", icon: "./TECNOLOGIAS/github.svg" },
            { name: "VS Code", icon: "./TECNOLOGIAS/vs.svg" },
            { name: "Figma", icon: "./TECNOLOGIAS/figma.svg" },
            { name: "Vercel", icon: "./TECNOLOGIAS/vercel.svg" },
        ],
    },
    {
        titulo: "Otras bases",
        items: [
            { name: "C#", icon: "./TECNOLOGIAS/csharp.svg" },
            { name: "C++", icon: "./TECNOLOGIAS/cplusplus.svg" },
            { name: "Python", icon: "./TECNOLOGIAS/python.svg" },
            { name: "MySQL", icon: "./TECNOLOGIAS/mysql.svg" },
        ],
    },
];

export const Technologies = () => {
    const [ref, visible] = useReveal();

    return (
        <section id="tecnologias" className="px-5 md:px-10 lg:px-16 pt-6 md:pt-10 pb-12">
            <SectionLabel number="04" title="Tecnologías" />

            <div ref={ref} className={`site-reveal flex flex-col gap-10 ${visible ? "is-visible" : ""}`}>
                {categorias.map((grupo, index) => (
                    <TechGroup key={grupo.titulo} grupo={grupo} delay={index * 80} />
                ))}
            </div>
        </section>
    );
};
