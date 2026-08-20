import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const pad = (value) => String(value).padStart(2, "0");

export const ProjectGallery = ({ images, title, index, onChange }) => {
    const total = images.length;
    const inView = useRef(false);

    const go = (direction) => {
        if (direction === "prev") {
            onChange(index === 0 ? total - 1 : index - 1);
        } else {
            onChange(index === total - 1 ? 0 : index + 1);
        }
    };

    useEffect(() => {
        const section = document.getElementById("proyectos");
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                inView.current = entry.isIntersecting;
            },
            { threshold: 0.25 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onKey = (event) => {
            if (!inView.current) return;
            if (event.key === "ArrowLeft") go("prev");
            if (event.key === "ArrowRight") go("next");
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index, total]);

    return (
        <div
            className="flex flex-col gap-5"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    go("prev");
                }
                if (event.key === "ArrowRight") {
                    event.preventDefault();
                    go("next");
                }
            }}
        >
            <div className="rounded-2xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(250,155,185,0.18)] border border-pink-100/80">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-pink-50/80">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffb3c7]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffd3e0]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fa9bb9]" />
                    <span className="ml-3 text-[11px] text-zinc-400 truncate">{title}</span>
                </div>
                <div className="relative bg-zinc-100 aspect-[16/10] overflow-hidden group">
                    <img
                        key={images[index]}
                        src={images[index]}
                        alt={`${title}, captura ${index + 1} de ${total}`}
                        className="site-gallery-frame w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        draggable={false}
                    />
                </div>
            </div>

            <div className="flex items-center justify-center gap-6">
                <button
                    type="button"
                    onClick={() => go("prev")}
                    aria-label="Captura anterior"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-md transition-all duration-300 hover:shadow-[0_0_18px_#fa9bb9] hover:-translate-x-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                >
                    <ChevronLeft />
                </button>

                <p className="text-sm tracking-[0.2em] text-zinc-500 font-medium tabular-nums">
                    {pad(index + 1)} / {pad(total)}
                </p>

                <button
                    type="button"
                    onClick={() => go("next")}
                    aria-label="Captura siguiente"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-color)] text-white shadow-md transition-all duration-300 hover:shadow-[0_0_18px_#fa9bb9] hover:translate-x-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]"
                >
                    <ChevronRight />
                </button>
            </div>

            <div className="flex justify-center gap-2" role="tablist" aria-label="Capturas del proyecto">
                {images.map((image, i) => (
                    <button
                        key={image + i}
                        type="button"
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Ir a la captura ${i + 1}`}
                        onClick={() => onChange(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] ${
                            i === index ? "w-7 bg-[var(--primary-color)]" : "w-2.5 bg-pink-200 hover:bg-pink-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};
