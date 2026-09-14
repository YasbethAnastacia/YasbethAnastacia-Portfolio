import { useLanguage } from "../../hooks/useLanguage";
import { contact } from "../../data/contact";
export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 md:px-10 lg:px-16 py-8 border-t border-[var(--border-color)] bg-[var(--background-soft)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-[var(--text-primary)]">{contact.name}</p>
          <p className="text-sm text-[var(--text-accent)]">{t(contact.role)}</p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-[var(--text-secondary)] hover:text-[var(--text-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
          >
            {t("Correo")}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">© {year}</p>
      </div>
    </footer>
  );
};
