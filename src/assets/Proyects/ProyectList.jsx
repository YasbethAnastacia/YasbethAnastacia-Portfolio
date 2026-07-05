export const ProjectList = () => {
    return (
        <div className="relative px-3 flex gap-3 items-start ">
            

            <div className="flex flex-col  h-[1050px] overflow-y-auto overflow-x-hidden gap-2 px-7 py-4">

                {/* PROYECTO 1 */}

                <div className="flex ">

                    <div className="hidden bg-white w-[11px] h-[11px] rounded-full mt-2 shrink-0" />

                    <button className="bg-[var(--background)]  shadow-lg rounded-xl p-3 flex gap-3 w-full hover:scale-105 transition-transform duration-300 select-none">

                        <div className="w-50 h-30 shrink-0 shadow-lg">

                            <img
                                className="w-full h-full object-cover rounded-md"
                                src="./PROYECTOS/croshamigurumis/hero.png"
                                alt=""
                                draggable={false}
                            />

                        </div>

                        <div className="flex flex-col justify-center">

                            <h3 className="text-xl font-bold text-[var(--primary-color)]">
                                CROSH AMIGURUMIS
                            </h3>

                            <p className="text-sm text-gray-600">
                                Tienda en línea para la venta de amigurumis
                                elaborados a mano, desarrollada con React,
                                Vite y Tailwind CSS.
                            </p>

                        </div>

                    </button>

                </div>



            </div>

        </div>
    );
};