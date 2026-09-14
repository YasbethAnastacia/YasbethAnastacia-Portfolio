import { ChevronLeft, ChevronRight, Laptop, Smartphone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
export const ProjectGallery = ({ images, mobileImages, title, index, onChange }) => {
  const { t } = useLanguage();
  const [device, setDevice] = useState("laptop");
  const mobile = device === "mobile",
    shots = mobile ? mobileImages : images,
    total = shots.length;
  const current = Math.min(index, Math.max(0, total - 1));
  const go = (step) => {
    if (total > 1) onChange((current + step + total) % total);
  };
  return (
    <div
      className="flex flex-col gap-4 min-w-0"
      role="region"
      aria-label={t("Capturas del proyecto")}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target.closest("[data-devices]")) return;
        if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
          event.preventDefault();
          go(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div data-devices role="group" aria-label={t("Dispositivo de la galería")} className="flex justify-center gap-2">
        {[
          { id: "laptop", label: "Laptop", Icon: Laptop },
          { id: "mobile", label: "Celular", Icon: Smartphone },
        ].map(({ id, label, Icon }) => (
          <button
            type="button"
            key={id}
            aria-pressed={device === id}
            onClick={() => {
              setDevice(id);
              onChange(0);
            }}
            className={"device-button " + (device === id ? "selected" : "")}
          >
            <Icon size={17} />
            {t(label)}
          </button>
        ))}
      </div>
      <div className="gallery-stage">
        <div className={"gallery-mockup " + (mobile ? "phone" : "laptop")}>
          <div className="gallery-chrome" aria-hidden="true">
            {mobile ? (
              <span className="phone-speaker" />
            ) : (
              <>
                <span />
                <span />
                <span />
                <small>{title}</small>
              </>
            )}
          </div>
          <div className="gallery-screen">
            {total > 0 && (
              <img
                key={shots[current] + device}
                src={shots[current]}
                alt={title + ", " + t("captura") + " " + (current + 1) + " " + t("de") + " " + total}
                className="w-full h-full object-cover object-top animate-[experienceDetail_350ms_ease-out]"
                loading="lazy"
                draggable={false}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button type="button" onClick={() => go(-1)} disabled={total < 2} aria-label={t("Captura anterior")} className="gallery-arrow">
          <ChevronLeft />
        </button>
        <p className="text-sm tracking-[0.2em] text-[var(--text-secondary)] tabular-nums" aria-live="polite" aria-atomic="true">
          {String(total ? current + 1 : 0).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <button type="button" onClick={() => go(1)} disabled={total < 2} aria-label={t("Captura siguiente")} className="gallery-arrow">
          <ChevronRight />
        </button>
      </div>
      <div className="flex flex-wrap justify-center" role="group" aria-label={t("Capturas del proyecto")}>
        {shots.map((shot, i) => (
          <button
            type="button"
            key={shot}
            onClick={() => onChange(i)}
            aria-pressed={i === current}
            aria-label={t("Ir a la captura") + " " + (i + 1)}
            className="gallery-dot"
          >
            <span className={i === current ? "selected" : ""} />
          </button>
        ))}
      </div>
    </div>
  );
};
