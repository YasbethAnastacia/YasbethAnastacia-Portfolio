export const ProjectInfo = () => {
    return (
        <div className=" p-7 w-full flex flex-col gap-6 border-y-1 border-[var(--primary-color)]">

            <div>

                <h2 className="text-4xl font-bold text-pink-500 mb-3">
                    CROSH AMIGURUMIS
                </h2>

                <p className="text-gray-600 leading-relaxed text-justify">
                    Crosh Amigurumis es un proyecto de emprendimiento dedicado
                    a la creación y venta de amigurumis elaborados mediante la
                    técnica del crochet. La aplicación permite mostrar los
                    productos de forma moderna, organizada y responsiva,
                    ofreciendo una experiencia agradable tanto en dispositivos
                    móviles como de escritorio.
                </p>

            </div>

            <div>

                <h3 className="font-bold text-xl mb-4">
                    Tecnologías utilizadas
                </h3>

                <div className="flex flex-wrap gap-3">

                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium">
                        React
                    </span>

                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium">
                        Vite
                    </span>

                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium">
                        Tailwind CSS
                    </span>

                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium">
                        JavaScript
                    </span>

                    <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-medium">
                        Responsive Design
                    </span>

                </div>

            </div>

            <div className="flex gap-5 justify-end">

                <button className="px-6 py-3 rounded-full bg-[var(--primary-color)] text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_#fa9bb9] hover:scale-105 active:scale-95">
                    Ver Demo
                </button>

                <button className="px-6 py-3 rounded-full border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white hover:scale-105 active:scale-95">
                    Ver Código
                </button>

            </div>

        </div>
    );
};