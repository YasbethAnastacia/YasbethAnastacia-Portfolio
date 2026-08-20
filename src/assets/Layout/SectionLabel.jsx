export const SectionLabel = ({ number, title, align = "start" }) => {
    return (
        <div
            className={`flex items-center gap-3 mb-8 ${
                align === "center" ? "justify-center" : ""
            }`}
        >
            <span className="text-[var(--primary-color)] text-xs font-semibold tracking-[0.28em]">
                {number}
            </span>
            <span className="h-px w-8 bg-[var(--primary-color)]/50" />
            <h2 className="text-xs md:text-sm font-semibold tracking-[0.28em] text-zinc-700 uppercase">
                {title}
            </h2>
        </div>
    );
};
