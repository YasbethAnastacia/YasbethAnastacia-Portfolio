import { ExperienceDetail } from "./ExperienceDetail";

export const ExperienceTimeline = ({ items, activa, onSelect }) => {
    return (
        <ol className="relative ml-3">
            <span
                aria-hidden="true"
                className="site-timeline-line absolute left-[5px] top-2 bottom-2 w-px bg-[var(--primary-color)]/35"
            />

            {items.map((experiencia) => {
                const activaActual = activa.id === experiencia.id;

                return (
                    <li key={experiencia.id} className="relative">
                        <button
                            type="button"
                            onClick={() => onSelect(experiencia)}
                            className={`w-full text-left pl-8 pr-3 py-4 transition-all duration-300 rounded-r-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] ${
                                activaActual ? "bg-pink-50/80" : "hover:bg-pink-50/40"
                            }`}
                            aria-current={activaActual ? "true" : undefined}
                        >
                            <span
                                className={`absolute left-0 top-6 rounded-full border-2 transition-all duration-300 ${
                                    activaActual
                                        ? "w-3.5 h-3.5 bg-[var(--primary-color)] border-white shadow-[0_0_16px_#fa9bb9] scale-125"
                                        : "w-3 h-3 bg-white border-[var(--primary-color)]"
                                }`}
                            />
                            <p
                                className={`font-semibold transition-colors duration-300 ${
                                    activaActual ? "text-[var(--primary-color)] text-lg" : "text-zinc-800"
                                }`}
                            >
                                {experiencia.puesto}
                            </p>
                            <p className="text-zinc-600">{experiencia.empresa}</p>
                            <p className="text-sm text-zinc-400 mt-0.5">{experiencia.fecha}</p>
                        </button>

                        {activaActual ? (
                            <div className="lg:hidden pl-8 pb-6">
                                <ExperienceDetail key={experiencia.id} experiencia={experiencia} compact />
                            </div>
                        ) : null}
                    </li>
                );
            })}
        </ol>
    );
};
