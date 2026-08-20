export const ExperienceDetail = ({ experiencia, compact = false }) => {
    const ExtraIcono = experiencia.seccionExtra.icono;

    return (
        <article key={experiencia.id} className={`site-gallery-frame ${compact ? "pt-2" : "pt-1"}`}>
            <p className="text-xs tracking-[0.25em] text-pink-400 mb-3">DETALLE</p>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-800 leading-tight">
                {experiencia.puesto}
            </h3>
            <p className="text-lg text-[var(--primary-color)] font-medium mt-1">
                {experiencia.empresa}
            </p>
            <p className="text-sm text-zinc-500 mt-2">
                {experiencia.fecha} · {experiencia.ubicacion} · {experiencia.tipo}
            </p>

            <p className="text-gray-600 leading-relaxed mt-6 max-w-xl">
                {experiencia.descripcion}
            </p>

            <div className="mt-8">
                <h4 className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-3">
                    Responsabilidades
                </h4>
                <ul className="flex flex-col gap-2.5">
                    {experiencia.responsabilidades.map((item, index) => (
                        <li
                            key={item}
                            className="site-stagger-item flex gap-3 text-gray-600"
                            style={{ animationDelay: `${index * 55}ms` }}
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-color)]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <h4 className="text-sm tracking-[0.2em] uppercase text-zinc-500 mb-3 flex items-center gap-2">
                    <ExtraIcono className="w-4 h-4 text-pink-500" />
                    {experiencia.seccionExtra.titulo}
                </h4>
                <ul className="flex flex-col gap-2.5">
                    {experiencia.seccionExtra.contenido.map((item, index) => (
                        <li
                            key={item}
                            className="site-stagger-item flex gap-3 text-gray-600"
                            style={{ animationDelay: `${index * 55 + 80}ms` }}
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-color)]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};
