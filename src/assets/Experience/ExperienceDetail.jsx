export const ExperienceDetail = ({ experiencia, compact = false }) => {
    const ExtraIcono = experiencia.seccionExtra.icono;

    return (
        <article
            key={experiencia.id}
            className={`
                site-gallery-frame
                transition-colors
                duration-500
                ${compact ? "pt-2" : "pt-1"}
            `}
        >
            <div
                className="
                    animate-[experienceBlock_450ms_ease-out_both]
                    transition-colors
                    duration-500
                "
            >
                <p
                    className="
                        text-xs
                        tracking-[0.25em]
                        text-[var(--primary-soft)]
                        mb-3
                        transition-colors
                        duration-500
                    "
                >
                    DETALLE
                </p>

                <h3
                    className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-[var(--text-primary)]
                        leading-tight
                        transition-colors
                        duration-500
                    "
                >
                    {experiencia.puesto}
                </h3>

                <p
                    className="
                        text-lg
                        text-[var(--primary-color)]
                        font-medium
                        mt-1
                        transition-colors
                        duration-500
                    "
                >
                    {experiencia.empresa}
                </p>

                <p
                    className="
                        text-sm
                        text-[var(--text-muted)]
                        mt-2
                        leading-relaxed
                        transition-colors
                        duration-500
                    "
                >
                    {experiencia.fecha} · {experiencia.ubicacion} ·{" "}
                    {experiencia.tipo}
                </p>
            </div>

            <p
                className="
                    text-[var(--text-secondary)]
                    leading-relaxed
                    mt-6
                    max-w-xl
                    animate-[experienceBlock_500ms_ease-out_both]
                    transition-colors
                    duration-500
                "
            >
                {experiencia.descripcion}
            </p>

            <div
                className="
                    mt-8
                    animate-[experienceBlock_550ms_ease-out_both]
                    transition-colors
                    duration-500
                "
            >
                <h4
                    className="
                        text-sm
                        tracking-[0.2em]
                        uppercase
                        text-[var(--text-muted)]
                        mb-4
                        transition-colors
                        duration-500
                    "
                >
                    Responsabilidades
                </h4>

                <ul className="flex flex-col gap-3">
                    {experiencia.responsabilidades.map((item, index) => (
                        <li
                            key={item}
                            className="
                                site-stagger-item
                                group
                                flex
                                gap-3
                                text-[var(--text-secondary)]
                                leading-relaxed
                                transition-all
                                duration-300
                                hover:translate-x-1
                                hover:text-[var(--text-primary)]
                            "
                            style={{
                                animationDelay: `${index * 70}ms`,
                            }}
                        >
                            <span
                                className="
                                    mt-[9px]
                                    h-1.5
                                    w-1.5
                                    shrink-0
                                    rounded-full
                                    bg-[var(--primary-color)]
                                    transition-all
                                    duration-300
                                    group-hover:scale-150
                                "
                            />

                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="
                    mt-8
                    animate-[experienceBlock_600ms_ease-out_both]
                    transition-colors
                    duration-500
                "
            >
                <h4
                    className="
                        text-sm
                        tracking-[0.2em]
                        uppercase
                        text-[var(--text-muted)]
                        mb-4
                        flex
                        items-center
                        gap-2
                        transition-colors
                        duration-500
                    "
                >
                    <ExtraIcono
                        className="
                            w-4
                            h-4
                            text-[var(--primary-color)]
                            transition-transform
                            duration-300
                            hover:scale-110
                        "
                    />

                    {experiencia.seccionExtra.titulo}
                </h4>

                <ul className="flex flex-col gap-3">
                    {experiencia.seccionExtra.contenido.map(
                        (item, index) => (
                            <li
                                key={item}
                                className="
                                    site-stagger-item
                                    group
                                    flex
                                    gap-3
                                    text-[var(--text-secondary)]
                                    leading-relaxed
                                    transition-all
                                    duration-300
                                    hover:translate-x-1
                                    hover:text-[var(--text-primary)]
                                "
                                style={{
                                    animationDelay: `${
                                        index * 70 + 100
                                    }ms`,
                                }}
                            >
                                <span
                                    className="
                                        mt-[9px]
                                        h-1.5
                                        w-1.5
                                        shrink-0
                                        rounded-full
                                        bg-[var(--primary-color)]
                                        transition-all
                                        duration-300
                                        group-hover:scale-150
                                    "
                                />

                                <span>{item}</span>
                            </li>
                        )
                    )}
                </ul>
            </div>

            {experiencia.tecnologias?.length > 0 && (
                <div
                    className="
                        mt-8
                        animate-[experienceBlock_650ms_ease-out_both]
                        transition-colors
                        duration-500
                    "
                >
                    <h4
                        className="
                            text-sm
                            tracking-[0.2em]
                            uppercase
                            text-[var(--text-muted)]
                            mb-4
                            transition-colors
                            duration-500
                        "
                    >
                        Tecnologías
                    </h4>

                    <div className="flex flex-wrap gap-2.5">
                        {experiencia.tecnologias.map(
                            (tecnologia, index) => {
                                const TecnologiaIcono =
                                    tecnologia.icono;

                                return (
                                    <div
                                        key={`${tecnologia.nombre}-${index}`}
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-2
                                            px-3.5
                                            py-2
                                            rounded-xl
                                            bg-[var(--background-soft)]
                                            border
                                            border-[var(--border-color)]
                                            text-sm
                                            text-[var(--text-secondary)]
                                            transition-all
                                            duration-300
                                            ease-out
                                            hover:-translate-y-1
                                            hover:bg-[var(--primary-10)]
                                            hover:border-[var(--primary-color)]
                                            hover:text-[var(--text-primary)]
                                            hover:shadow-md
                                        "
                                    >
                                        <TecnologiaIcono
                                            size={15}
                                            className="
                                                text-[var(--primary-color)]
                                                transition-transform
                                                duration-300
                                                group-hover:scale-110
                                                group-hover:-rotate-3
                                            "
                                        />

                                        <span>
                                            {tecnologia.nombre}
                                        </span>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            )}
        </article>
    );
};