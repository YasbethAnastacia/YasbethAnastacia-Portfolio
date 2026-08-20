import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#tecnologias", label: "Tecnologías" },
    { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#sobre-mi");

    useEffect(() => {
        const sections = links
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target?.id) setActive(`#${visible.target.id}`);
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-[#FFF8F8]/90 backdrop-blur-md shadow-[0_8px_30px_rgba(250,155,185,0.12)] border-b border-pink-100/70">
            <nav className="flex items-center justify-between px-5 md:px-10 lg:px-16 h-16">
                <a
                    href="#inicio"
                    className="font-semibold text-zinc-800 tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
                >
                    <span className="text-[var(--primary-color)]">&lt;/&gt;</span> Anastacia
                </a>

                <div className="hidden lg:flex items-center gap-7">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md ${
                                active === link.href
                                    ? "text-[var(--primary-color)]"
                                    : "text-zinc-600 hover:text-pink-500"
                            }`}
                        >
                            {link.label}
                            {active === link.href ? (
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-px bg-[var(--primary-color)]" />
                            ) : null}
                        </a>
                    ))}
                </div>

                <a
                    href="#contacto"
                    className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-color)] text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_18px_#fa9bb9] hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)]"
                >
                    Hablemos
                    <span aria-hidden="true" className="transition-transform duration-300">
                        →
                    </span>
                </a>

                <button
                    type="button"
                    className="lg:hidden p-2 rounded-md text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                    aria-label={open ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {open ? (
                <div className="lg:hidden bg-[#FFF8F8]/95 backdrop-blur-md border-t border-pink-100 px-5 py-4 flex flex-col gap-3">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`py-2 text-sm font-medium ${
                                active === link.href ? "text-[var(--primary-color)]" : "text-zinc-700"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            ) : null}
        </header>
    );
};
