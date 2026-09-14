import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitch = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button type="button" onClick={toggleLanguage} aria-label={language === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"} className="group relative flex items-center gap-2 h-10 px-3 rounded-full bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-primary)] shadow-sm transition-all duration-300 hover:border-[var(--primary-color)] hover:shadow-md">
            <Languages size={17} className="text-[var(--primary-color)] transition-transform duration-300 group-hover:rotate-12" />
            <div className="flex items-center gap-1 text-sm font-semibold">
                <span className={`transition-colors duration-300 ${language === "es" ? "text-[var(--primary-color)]" : "text-[var(--text-muted)]"}`}>ES</span>
                <span className="text-[var(--text-muted)]">/</span>
                <span className={`transition-colors duration-300 ${language === "en" ? "text-[var(--primary-color)]" : "text-[var(--text-muted)]"}`}>EN</span>
            </div>
        </button>
    );
};