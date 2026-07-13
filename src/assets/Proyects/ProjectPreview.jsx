import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ProyectosInformacion } from "./data";


export const ProjectPreview = () => {
    const [actual, setActual] = useState(0);
    const fotos = ProyectosInformacion[0].fotos;

    const contenedorRef = useRef(null);
    const imagenRef = useRef(null);

    const [recorrido, setRecorrido] = useState(0);
    const [animar, setAnimar] = useState(false);
    
const handleImageLoad = () => {
    const recorridoCalculado =
        imagenRef.current.offsetHeight -
        contenedorRef.current.offsetHeight;

    setRecorrido(recorridoCalculado);

    setTimeout(() => {
        setAnimar(true);
    }, 1000);
};


const handleTransitionEnd = () => {
    setAnimar((prev) => !prev);
};
    return (
        <>
            {/* CONTENEDOR LAPTOP */}

            <div  className="relative w-full max-w-4xl">

                {/* Laptop */}

                <img
                
                    src="./PROYECTOS/computadora-hchico.png"
                    alt="Laptop"
                    className="block w-full h-auto"
                />

                {/* Pantalla */}

                <div
                    ref={contenedorRef}
                    className="absolute overflow-hidden"
                    style={{
                        top: "4.3%",
                        left: "11.3%",
                        width: "77.2%",
                        height: "54.8%",
                    }}
                >


                    

                    
                    
                    <img
    ref={imagenRef}
    src="./PROYECTOS/croshamigurumis/total.png"
    alt=""
    className="w-full h-auto transition-transform duration-[12000ms] ease-linear"
    style={{
        transform: animar
            ? `translateY(-${recorrido}px)`
            : "translateY(0)"
    }}
    draggable={false}
    onLoad={handleImageLoad}
    onTransitionEnd={handleTransitionEnd}
/>

                </div>

            </div>

            {/* NAVEGACIÓN */}

            <div className="flex items-center justify-center gap-12 py-8">

                {/*<button className="group flex h-[35px] aspect-square items-center justify-center rounded-full bg-[var(--primary-color)] shadow-lg transition-all duration-300 hover:animate-[gummyArrow_.55s_ease-in-out_infinite] hover:shadow-[0_0_20px_#fa9bb9] active:scale-95">
                    <ChevronLeft className="w-7 h-7 text-white transition-all duration-300 group-hover:-translate-x-1" />
                </button>*/}


                <button className="group flex h-[35px] aspect-square items-center justify-center rounded-full bg-[var(--primary-color)] shadow-lg transition-all duration-300 hover:animate-[gummyArrow_.55s_ease-in-out_infinite] hover:shadow-[0_0_20px_#fa9bb9] active:scale-95" 
                onClick={() => setActual(
                    actual-1 === -1
                    ? ProyectosInformacion[0].fotos.length-1
                    : actual-1
                )}
                >

                    <ChevronLeft className="w-7 h-7 text-white transition-all duration-300 group-hover:-translate-x-1" />

                </button>

                <div className="flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-[var(--primary-color)]"></div>
                    <div className="w-4 h-4 rounded-full bg-pink-200"></div>
                    <div className="w-4 h-4 rounded-full bg-pink-200"></div>
                    <div className="w-4 h-4 rounded-full bg-pink-200"></div>
                </div>

                <button className="group flex h-[35px] aspect-square items-center justify-center rounded-full bg-[var(--primary-color)] shadow-lg transition-all duration-300 hover:animate-[gummyArrow_.55s_ease-in-out_infinite] hover:shadow-[0_0_20px_#fa9bb9] active:scale-95" 
                onClick={() => setActual(
                    actual+1 >= ProyectosInformacion[0].fotos.length
                    ? 0
                    : actual+1
                )}
                >

                    <ChevronRight className="w-7 h-7 text-white transition-all duration-300 group-hover:-translate-x-1" />

                </button>

            </div>
        </>
    );
};