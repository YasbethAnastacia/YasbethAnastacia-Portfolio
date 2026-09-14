import { useEffect, useRef, useState } from "react";
import {
    Menu,
    X,
    Moon,
    Sun,
    Languages,
    ChevronDown,
    Check,
} from "lucide-react";

const translations = {
    es: {
        links: [
            { href: "#inicio", label: "Inicio" },
            { href: "#sobre-mi", label: "Sobre mí" },
            { href: "#experiencia", label: "Experiencia" },
            { href: "#proyectos", label: "Proyectos" },
            { href: "#tecnologias", label: "Tecnologías" },
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
            { href: "#tecnologias", label: "Technologies" },
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

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#inicio");

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            return savedTheme === "dark";
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const [language, setLanguage] = useState(
        () => localStorage.getItem("language") || "es"
    );

    const [languageDesktopOpen, setLanguageDesktopOpen] = useState(false);
    const [languageMobileOpen, setLanguageMobileOpen] = useState(false);

    const desktopLanguageRef = useRef(null);
    const mobileLanguageRef = useRef(null);

    const t = translations[language];
    const links = t.links;

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    useEffect(() => {
        document.documentElement.lang = language;
        localStorage.setItem("language", language);
    }, [language]);

    useEffect(() => {
        const sections = links
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    )[0];

                if (visible?.target?.id) {
                    setActive(`#${visible.target.id}`);
                }
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: [0.1, 0.25, 0.5],
            }
        );

        sections.forEach((section) =>
            observer.observe(section)
        );

        return () => observer.disconnect();
    }, [language]);

    useEffect(() => {
        const closeDropdowns = (event) => {
            const clickedDesktop =
                desktopLanguageRef.current?.contains(event.target);

            const clickedMobile =
                mobileLanguageRef.current?.contains(event.target);

            if (!clickedDesktop && !clickedMobile) {
                setLanguageDesktopOpen(false);
                setLanguageMobileOpen(false);
            }
        };

        document.addEventListener("mousedown", closeDropdowns);

        return () =>
            document.removeEventListener(
                "mousedown",
                closeDropdowns
            );
    }, []);

    useEffect(() => {
        const closeOnResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
                setLanguageMobileOpen(false);
            }
        };

        window.addEventListener("resize", closeOnResize);

        return () =>
            window.removeEventListener(
                "resize",
                closeOnResize
            );
    }, []);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        setLanguageDesktopOpen(false);
        setLanguageMobileOpen(false);
    };

    return (
        <header
            className="
                sticky
                top-0
                z-50
                bg-[var(--background-card)]
                border-b
                border-[var(--border-color)]
                backdrop-blur-xl
                transition-all
                duration-500
            "
            style={{
                boxShadow: "0 8px 30px var(--primary-10)",
            }}
        >
            <nav
                className="
                    flex
                    items-center
                    justify-between
                    h-16
                    px-5
                    md:px-10
                    lg:px-16
                "
            >
                <a
                    href="#inicio"
                    className="
                        font-semibold
                        tracking-tight
                        text-[var(--text-primary)]
                        transition-colors
                        duration-300
                        hover:text-[var(--primary-color)]
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[var(--primary-color)]
                        rounded-md
                    "
                >
                    <span className="text-[var(--primary-color)]">
                        &lt;/&gt;
                    </span>{" "}
                    Anastacia
                </a>

                <div className="hidden lg:flex items-center gap-6">
                    {links.map((link) => {
                        const isActive = active === link.href;

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`
                                    relative
                                    text-sm
                                    font-medium
                                    rounded-md
                                    transition-all
                                    duration-300
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-4
                                    focus-visible:outline-[var(--primary-color)]
                                    ${
                                        isActive
                                            ? "text-[var(--primary-color)]"
                                            : "text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
                                    }
                                `}
                            >
                                {link.label}

                                <span
                                    className={`
                                        absolute
                                        -bottom-2
                                        left-1/2
                                        -translate-x-1/2
                                        h-px
                                        bg-[var(--primary-color)]
                                        transition-all
                                        duration-300
                                        ${
                                            isActive
                                                ? "w-4 opacity-100"
                                                : "w-0 opacity-0"
                                        }
                                    `}
                                />
                            </a>
                        );
                    })}
                </div>

                <div className="hidden lg:flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() =>
                            setDarkMode((prev) => !prev)
                        }
                        aria-label={
                            darkMode
                                ? t.lightMode
                                : t.darkMode
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            w-10
                            h-10
                            rounded-full
                            bg-[var(--background-soft)]
                            border
                            border-[var(--border-color)]
                            text-[var(--text-secondary)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[var(--primary-10)]
                            hover:border-[var(--primary-color)]
                            hover:text-[var(--primary-color)]
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[var(--primary-color)]
                        "
                    >
                        <span
                            key={darkMode ? "moon" : "sun"}
                            className="animate-[navbarIcon_300ms_ease-out]"
                        >
                            {darkMode ? (
                                <Moon size={18} />
                            ) : (
                                <Sun size={18} />
                            )}
                        </span>
                    </button>

                    <div
                        ref={desktopLanguageRef}
                        className="relative"
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setLanguageDesktopOpen(
                                    (prev) => !prev
                                )
                            }
                            className="
                                flex
                                items-center
                                gap-2
                                h-10
                                px-3
                                rounded-full
                                bg-[var(--background-soft)]
                                border
                                border-[var(--border-color)]
                                text-sm
                                font-semibold
                                text-[var(--text-secondary)]
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[var(--primary-10)]
                                hover:border-[var(--primary-color)]
                                hover:text-[var(--primary-color)]
                            "
                        >
                            <Languages size={17} />

                            {language.toUpperCase()}

                            <ChevronDown
                                size={14}
                                className={`
                                    transition-transform
                                    duration-300
                                    ${
                                        languageDesktopOpen
                                            ? "rotate-180"
                                            : ""
                                    }
                                `}
                            />
                        </button>

                        <div
                            className={`
                                absolute
                                right-0
                                top-[calc(100%+10px)]
                                min-w-[190px]
                                p-2
                                rounded-2xl
                                bg-[var(--background-card)]
                                border
                                border-[var(--border-color)]
                                transition-all
                                duration-300
                                origin-top-right
                                ${
                                    languageDesktopOpen
                                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                }
                            `}
                            style={{
                                boxShadow:
                                    "0 18px 45px var(--primary-10)",
                            }}
                        >
                            <p
                                className="
                                    px-3
                                    py-2
                                    text-[11px]
                                    uppercase
                                    tracking-[0.18em]
                                    text-[var(--text-muted)]
                                "
                            >
                                {t.language}
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    changeLanguage("es")
                                }
                                className={`
                                    flex
                                    items-center
                                    justify-between
                                    w-full
                                    px-3
                                    py-2.5
                                    rounded-xl
                                    text-sm
                                    transition-all
                                    duration-200
                                    ${
                                        language === "es"
                                            ? "bg-[var(--primary-10)] text-[var(--primary-color)] font-semibold"
                                            : "text-[var(--text-secondary)] hover:bg-[var(--primary-10)] hover:text-[var(--primary-color)]"
                                    }
                                `}
                            >
                                <span>🇲🇽 {t.spanish}</span>

                                {language === "es" && (
                                    <Check size={15} />
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    changeLanguage("en")
                                }
                                className={`
                                    flex
                                    items-center
                                    justify-between
                                    w-full
                                    px-3
                                    py-2.5
                                    rounded-xl
                                    text-sm
                                    transition-all
                                    duration-200
                                    ${
                                        language === "en"
                                            ? "bg-[var(--primary-10)] text-[var(--primary-color)] font-semibold"
                                            : "text-[var(--text-secondary)] hover:bg-[var(--primary-10)] hover:text-[var(--primary-color)]"
                                    }
                                `}
                            >
                                <span>🇺🇸 {t.english}</span>

                                {language === "en" && (
                                    <Check size={15} />
                                )}
                            </button>
                        </div>
                    </div>

                    <a
                        href="#contacto"
                        className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            ml-1
                            px-4
                            py-2
                            rounded-full
                            bg-[var(--primary-color)]
                            text-white
                            text-sm
                            font-semibold
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[var(--primary-hover)]
                            hover:shadow-lg
                        "
                    >
                        {t.talk}

                        <span
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        >
                            →
                        </span>
                    </a>
                </div>

                <button
                    type="button"
                    className="
                        lg:hidden
                        flex
                        items-center
                        justify-center
                        w-10
                        h-10
                        rounded-xl
                        text-[var(--text-primary)]
                        transition-all
                        duration-300
                        hover:bg-[var(--primary-10)]
                        hover:text-[var(--primary-color)]
                    "
                    aria-label={
                        open ? t.closeMenu : t.openMenu
                    }
                    aria-expanded={open}
                    onClick={() =>
                        setOpen((prev) => !prev)
                    }
                >
                    <span
                        key={open ? "close" : "menu"}
                        className="animate-[navbarIcon_250ms_ease-out]"
                    >
                        {open ? (
                            <X size={23} />
                        ) : (
                            <Menu size={23} />
                        )}
                    </span>
                </button>
            </nav>

            <div
                className={`
                    lg:hidden
                    overflow-hidden
                    bg-[var(--background-card)]
                    border-[var(--border-color)]
                    transition-all
                    duration-500
                    ease-out
                    ${
                        open
                            ? "max-h-[720px] opacity-100 border-t"
                            : "max-h-0 opacity-0 border-t-0"
                    }
                `}
            >
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        px-5
                        pt-6
                        pb-8
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            gap-3
                            mb-7
                        "
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setDarkMode(
                                    (prev) => !prev
                                )
                            }
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                px-4
                                h-10
                                rounded-full
                                bg-[var(--background-soft)]
                                border
                                border-[var(--border-color)]
                                text-sm
                                text-[var(--text-secondary)]
                                transition-all
                                duration-300
                                hover:bg-[var(--primary-10)]
                                hover:border-[var(--primary-color)]
                                hover:text-[var(--primary-color)]
                            "
                        >
                            {darkMode ? (
                                <Moon size={17} />
                            ) : (
                                <Sun size={17} />
                            )}

                            {darkMode ? t.dark : t.light}
                        </button>

                        <div
                            ref={mobileLanguageRef}
                            className="relative"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setLanguageMobileOpen(
                                        (prev) => !prev
                                    )
                                }
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    h-10
                                    px-4
                                    rounded-full
                                    bg-[var(--background-soft)]
                                    border
                                    border-[var(--border-color)]
                                    text-sm
                                    font-semibold
                                    text-[var(--text-secondary)]
                                    transition-all
                                    duration-300
                                    hover:bg-[var(--primary-10)]
                                    hover:border-[var(--primary-color)]
                                    hover:text-[var(--primary-color)]
                                "
                            >
                                <Languages size={16} />

                                {language.toUpperCase()}

                                <ChevronDown
                                    size={14}
                                    className={`
                                        transition-transform
                                        duration-300
                                        ${
                                            languageMobileOpen
                                                ? "rotate-180"
                                                : ""
                                        }
                                    `}
                                />
                            </button>

                            <div
                                className={`
                                    absolute
                                    left-1/2
                                    -translate-x-1/2
                                    top-[calc(100%+10px)]
                                    min-w-[180px]
                                    p-2
                                    rounded-2xl
                                    bg-[var(--background-card)]
                                    border
                                    border-[var(--border-color)]
                                    z-50
                                    transition-all
                                    duration-300
                                    ${
                                        languageMobileOpen
                                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                    }
                                `}
                                style={{
                                    boxShadow:
                                        "0 18px 45px var(--primary-10)",
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        changeLanguage("es")
                                    }
                                    className={`
                                        flex
                                        items-center
                                        justify-between
                                        w-full
                                        px-3
                                        py-2.5
                                        rounded-xl
                                        text-sm
                                        transition-all
                                        duration-200
                                        ${
                                            language === "es"
                                                ? "bg-[var(--primary-10)] text-[var(--primary-color)] font-semibold"
                                                : "text-[var(--text-secondary)] hover:bg-[var(--primary-10)] hover:text-[var(--primary-color)]"
                                        }
                                    `}
                                >
                                    <span>🇲🇽 Español</span>

                                    {language === "es" && (
                                        <Check size={14} />
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        changeLanguage("en")
                                    }
                                    className={`
                                        flex
                                        items-center
                                        justify-between
                                        w-full
                                        px-3
                                        py-2.5
                                        rounded-xl
                                        text-sm
                                        transition-all
                                        duration-200
                                        ${
                                            language === "en"
                                                ? "bg-[var(--primary-10)] text-[var(--primary-color)] font-semibold"
                                                : "text-[var(--text-secondary)] hover:bg-[var(--primary-10)] hover:text-[var(--primary-color)]"
                                        }
                                    `}
                                >
                                    <span>🇺🇸 English</span>

                                    {language === "en" && (
                                        <Check size={14} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-2
                            w-full
                        "
                    >
                        {links.map((link, index) => {
                            const isActive =
                                active === link.href;

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() =>
                                        setOpen(false)
                                    }
                                    className={`
                                        flex
                                        items-center
                                        justify-center
                                        min-w-[200px]
                                        px-7
                                        py-3
                                        rounded-2xl
                                        text-center
                                        text-sm
                                        font-semibold
                                        transition-all
                                        duration-300
                                        ease-out
                                        hover:scale-[1.02]
                                        ${
                                            isActive
                                                ? `
                                                    bg-[var(--primary-10)]
                                                    text-[var(--primary-color)]
                                                `
                                                : `
                                                    text-[var(--text-secondary)]
                                                    hover:bg-[var(--primary-10)]
                                                    hover:text-[var(--primary-color)]
                                                `
                                        }
                                    `}
                                    style={{
                                        transitionDelay: open
                                            ? `${index * 25}ms`
                                            : "0ms",
                                    }}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    <a
                        href="#contacto"
                        onClick={() => setOpen(false)}
                        className="
                            group
                            flex
                            items-center
                            justify-center
                            gap-2
                            mt-6
                            min-w-[200px]
                            px-6
                            py-3
                            rounded-full
                            bg-[var(--primary-color)]
                            text-white
                            text-sm
                            font-semibold
                            transition-all
                            duration-300
                            hover:bg-[var(--primary-hover)]
                            hover:-translate-y-0.5
                            hover:shadow-lg
                        "
                    >
                        {t.talk}

                        <span
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        >
                            →
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
};