import { useEffect, useRef, useState } from "react";
import { Menu, X, Moon, Sun, Languages, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
const translations = {
  es: {
    links: [
      { href: "#inicio", label: "Inicio" },
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#experiencia", label: "Experiencia" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#tecnologias", label: "Habilidades" },
      { href: "#contacto", label: "Contacto" },
    ],
    talk: "Hablemos",
    language: "Idioma",
    spanish: "Español",
    english: "Inglés",
    appearance: "Apariencia",
    light: "Claro",
    dark: "Oscuro",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    lightMode: "Activar modo claro",
    darkMode: "Activar modo oscuro",
  },
  en: {
    links: [
      { href: "#inicio", label: "Home" },
      { href: "#sobre-mi", label: "About me" },
      { href: "#experiencia", label: "Experience" },
      { href: "#proyectos", label: "Projects" },
      { href: "#tecnologias", label: "Skills" },
      { href: "#contacto", label: "Contact" },
    ],
    talk: "Let's talk",
    language: "Language",
    spanish: "Spanish",
    english: "English",
    appearance: "Appearance",
    light: "Light",
    dark: "Dark",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightMode: "Enable light mode",
    darkMode: "Enable dark mode",
  },
};

const Controls = () => {
  const { language, setLanguage } = useLanguage(),
    { darkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false),
    ref = useRef(null),
    t = translations[language];
  useEffect(() => {
    const close = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={toggleTheme} aria-label={darkMode ? t.lightMode : t.darkMode} className="nav-control w-10 px-0">
        {darkMode ? <Moon size={18} /> : <Sun size={18} />}
      </button>
      <div ref={ref} className="relative" onKeyDown={event => { if (event.key === "Escape" && open) { event.stopPropagation(); setOpen(false); ref.current.querySelector("button").focus(); } }}>
        <button type="button" aria-label={t.language} aria-expanded={open} onClick={() => setOpen(!open)} className="nav-control">
          <Languages size={16} />
          {language.toUpperCase()}
          <ChevronDown size={14} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
        </button>
        <div inert={!open} className={"absolute right-0 top-[calc(100%+10px)] z-50 w-44 p-2 rounded-2xl border border-[var(--border-color)] bg-[var(--background-card)] shadow-xl transition-all duration-200 " + (open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none")}>
          {[["es", "🇲🇽", t.spanish], ["en", "🇺🇸", t.english]].map(([id, flag, label]) => <button type="button" key={id} aria-pressed={language === id} onClick={() => { setLanguage(id); setOpen(false); ref.current.querySelector("button").focus(); }} className="flex w-full items-center justify-between rounded-xl p-3 text-sm text-[var(--text-primary)] hover:bg-[var(--primary-10)]">
            <span>
              {flag}
              {" "}
              {label}
            </span>
            {language === id && <Check size={15} />}
          </button>)}
        </div>
      </div>
    </div>
  );
};
const NavLinks = ({ links, active, close, mobile = false }) => (
  <div className={mobile ? "flex w-full flex-col items-center gap-2" : "hidden lg:flex items-center gap-6"}>
    {links.map(link => <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined} onClick={close} className={"relative rounded-xl text-sm font-medium transition-colors hover:text-[var(--text-accent)] " + (mobile ? "w-full px-7 py-3 text-center " : "py-2 ") + (active === link.href ? "text-[var(--text-accent)] " + (mobile ? "bg-[var(--primary-10)]" : "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-4 after:-translate-x-1/2 after:bg-[var(--primary-color)]") : "text-[var(--text-secondary)]")}>
      {link.label}
    </a>)}
  </div>
);
const Talk = ({ label, close }) => (
  <a href="#contacto" onClick={close} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-color)] px-4 py-2.5 text-sm font-semibold text-[var(--on-primary)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]">
    {label}
    <span aria-hidden="true">
      →
    </span>
  </a>
);
export const Navbar = () => {
  const { language } = useLanguage(),
    t = translations[language],
    links = t.links;
  const [open, setOpen] = useState(false),
    [active, setActive] = useState("#inicio"),
    toggleRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    links.forEach((link) => {
      const node = document.querySelector(link.href);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [links]);
  useEffect(() => {
    const media = matchMedia("(min-width: 1024px)"),
      close = () => {
        if (media.matches) setOpen(false);
      };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--background-card)] backdrop-blur-xl shadow-[0_8px_30px_var(--primary-10)]" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); } }}>
      <a href="#contenido" className="skip-link">
        {language === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <nav className="flex h-16 items-center justify-between px-5 md:px-10 lg:px-16" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
        <a href="#inicio" onClick={() => setOpen(false)} className="rounded-md font-semibold tracking-tight text-[var(--text-primary)]">
          <span className="text-[var(--text-accent)]">
            &lt;/&gt;
          </span>
          {" Anastacia"}
        </a>
        <NavLinks links={links} active={active} />
        <div className="hidden lg:flex items-center gap-3">
          <Controls />
          <Talk label={t.talk} />
        </div>
        <button ref={toggleRef} type="button" className="nav-control w-10 px-0 lg:hidden" aria-label={open ? t.closeMenu : t.openMenu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      <div id="mobile-menu" inert={!open} className={"lg:hidden grid transition-[grid-template-rows,opacity] duration-300 " + (open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <div className="flex flex-col items-center gap-5 px-5 py-6">
            <Controls />
            <NavLinks links={links} active={active} close={() => setOpen(false)} mobile />
            <Talk label={t.talk} close={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
};
