import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectPreview = () => {
    return (
        <>
            {/* CONTENEDOR LAPTOP */}

            <div className="relative w-full max-w-4xl">

                {/* Laptop */}

                <img
                    src="./PROYECTOS/computadora-hchico.png"
                    alt="Laptop"
                    className="block w-full h-auto"
                />

                {/* Pantalla */}

                <div
                    className="absolute overflow-hidden"
                    style={{
                        top: "4.3%",
                        left: "11.3%",
                        width: "77.2%",
                        height: "54.8%",
                    }}
                >
                    <img
                        src="./PROYECTOS/croshamigurumis/hero.png"
                        alt=""
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                </div>

            </div>

            {/* NAVEGACIÓN */}

            <div className="flex items-center justify-center gap-12 py-8">

                <button className="flex h-[45px] aspect-square rounded-full shadow-lg bg-[var(--primary-color)] items-center justify-center transition-all duration-300 hover:bg-pink-500 hover:shadow-[0_0_20px_#fa9bb9] hover:scale-110 active:scale-95">
                    <ChevronLeft className="text-white w-7 h-7" />
                </button>

                <div className="flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-[var(--primary-color)]"></div>
                    <div className="w-4 h-4 rounded-full bg-pink-200"></div>
                    <div className="w-4 h-4 rounded-full bg-pink-200"></div>
                    <div className="w-4 h-4 rounded-full bg-pink-200"></div>
                </div>

                <button className="group flex h-[45px] aspect-square items-center justify-center rounded-full bg-[var(--primary-color)] shadow-lg transition-all duration-300 hover:animate-[gummyArrow_.55s_ease-in-out_infinite] hover:shadow-[0_0_20px_#fa9bb9] hover:scale-110 active:scale-95">
                    <ChevronRight className="w-7 h-7 text-white transition-all duration-300 group-hover:translate-x-1" />
                </button>

            </div>
        </>
    );
};