import { CvButton } from "./CvButton";
import { useLanguage } from "../../hooks/useLanguage";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "../Layout/BrandIcons";
import { SectionLabel } from "../Layout/SectionLabel";
import { contact } from "../../data/contact";
import { useReveal } from "../../hooks/useReveal";
export const Contact = () => {
  const { t } = useLanguage();
  const [ref, visible] = useReveal();
  return (
    <section id="contacto" className="relative px-5 md:px-10 lg:px-16 pt-10 pb-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,155,185,0.28),transparent_42%),radial-gradient(circle_at_90%_80%,rgba(250,155,185,0.18),transparent_40%)]"
      />
      <div ref={ref} className={`relative site-reveal ${visible ? "is-visible" : ""}`}>
        <SectionLabel number="05" title={t("Contacto")} />
        <p className="text-sm tracking-[0.35em] text-[var(--text-accent)] mb-4">{t("¿TIENES UNA IDEA?")}</p>
        <h3 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] max-w-3xl leading-[1.05]">
          {t("¿Creamos algo")} <span className="text-[var(--text-accent)]">{t("juntos?")}</span>
        </h3>
        <p className="mt-5 max-w-lg text-[var(--text-secondary)] leading-relaxed">
          {t("Estoy abierta a oportunidades laborales, colaboraciones y al desarrollo de páginas web. Si tienes un proyecto en mente, hablemos.")}
        </p>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-[var(--text-primary)] transition-all duration-300 hover:gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] rounded-md"
        >
          {t("Hablemos")}
          <ArrowRight className="text-[var(--text-accent)] transition-transform duration-300 group-hover:translate-x-2" />
        </a>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={contact.tel} className="contact-link">
            <Phone size={16} />
            {contact.phone}
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="contact-link">
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--background-card)] text-[var(--text-primary)] hover:text-[var(--text-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
          >
            <Mail size={16} />
            <span className="break-all">{contact.email}</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--background-card)] text-[var(--text-primary)] hover:text-[var(--text-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--background-card)] text-[var(--text-primary)] hover:text-[var(--text-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
        </div>
        <CvButton />
      </div>
    </section>
  );
};
