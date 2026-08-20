export const TechGroup = ({ grupo, delay = 0 }) => {
    return (
        <div style={{ animationDelay: `${delay}ms` }}>
            <div className="flex items-baseline gap-4 mb-5">
                <h3 className="text-sm tracking-[0.22em] uppercase text-zinc-500">{grupo.titulo}</h3>
                <span className="flex-1 h-px bg-pink-100" />
            </div>
            <ul className="flex flex-wrap gap-4 md:gap-6">
                {grupo.items.map((item) => (
                    <li key={item.name}>
                        <div className="group flex flex-col items-center gap-2 w-[76px]">
                            <div className="w-14 h-14 rounded-2xl bg-white/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(250,155,185,0.45)] group-hover:-translate-y-1">
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="w-8 h-8 object-contain"
                                    draggable={false}
                                />
                            </div>
                            <span className="text-xs text-zinc-500 font-medium text-center transition-colors duration-300 group-hover:text-pink-500">
                                {item.name}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
