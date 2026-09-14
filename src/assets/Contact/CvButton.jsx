import { Printer } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
const files = import.meta.glob("/public/CV/*.pdf", { eager: true, query: "?url", import: "default" });
export const CvButton = () => {
  const { language, t } = useLanguage();
  const available = Boolean(files["/public/CV/cv-" + language + ".pdf"]);
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {available ? (
        <a className="contact-link" href={"/CV/cv-" + language + ".pdf"} target="_blank" rel="noreferrer">
          <Printer size={17} />
          {t("Imprimir CV")}
        </a>
      ) : (
        <>
          <button type="button" className="contact-link" disabled aria-describedby="cv-status">
            <Printer size={17} />
            {t("Imprimir CV")}
          </button>
          <span id="cv-status" className="text-sm text-[var(--text-secondary)]">
            {t("CV disponible próximamente")}
          </span>
        </>
      )}
    </div>
  );
};
