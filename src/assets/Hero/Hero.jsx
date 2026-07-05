import { ChevronRight, Mail,  } from "lucide-react";
import { useEffect, useRef } from "react";

const tecnologias = [
    { id:1, name: "React", icon: "./TECNOLOGIAS/react.svg" },
    { id:2, name: "JavaScript", icon: "./TECNOLOGIAS/js.svg" },
    { id:3, name: "HTML", icon: "./TECNOLOGIAS/html5.svg" },
    { id:4, name: "CSS", icon: "./TECNOLOGIAS/css.svg" },
    { id:5, name: "Tailwind", icon: "./TECNOLOGIAS/tailwind.svg" },
    { id:6, name: "VS Code", icon: "./TECNOLOGIAS/vs.svg" },
    { id:7, name: "C#", icon: "./TECNOLOGIAS/csharp.svg" },
    { id:8, name: "C++", icon: "./TECNOLOGIAS/cplusplus.svg" },
    { id:9, name: "Figma", icon: "./TECNOLOGIAS/figma.svg" },
    { id:10, name: "Git", icon: "./TECNOLOGIAS/git.svg" },
    { id:11, name: "GitHub", icon: "./TECNOLOGIAS/github.svg" },
    { id:12, name: "MySQL", icon: "./TECNOLOGIAS/mysql.svg" },
    { id:13, name: "Python", icon: "./TECNOLOGIAS/python.svg" },
    { id:14, name: "Vercel", icon: "./TECNOLOGIAS/vercel.svg" },
    { id:15, name: "Vite", icon: "./TECNOLOGIAS/vite.svg" },
    { id:16, name: "Tailwind", icon: "./TECNOLOGIAS/tailwind.svg" },
];


export const Hero = () => {
    const trackRef = useRef(null);
    const offset = useRef(0);
    
    useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animation;

    const mover = () => {
        offset.current += 0.5; // velocidad

        const mitad = track.scrollWidth / 2;

        if (offset.current >= mitad) {
            offset.current = 0;
        }

        track.style.transform = `translateX(-${offset.current}px)`;

        animation = requestAnimationFrame(mover);
        };

        mover();

        return () => cancelAnimationFrame(animation);
    }, []);


    return (
        <main className="relative grid grid-cols-[1.5fr_1fr] items-center overflow-hidden px-18 py-10">
        

            {/* IZQUIERDA animate-pulse*/}
            <div className="flex flex-col gap-8  ">

                
                <div className="flex gap-2 w-fit px-5 py-2 rounded-full bg-pink-100 text-pink-500 font-medium text-xl">
                    ¡Hola!  
                    <img className="w-8 h-8 rotate-0 wave inline-block" src="./HERO/saludar.png" alt="" draggable={false} />
                    Soy
                    <h1 className="">  Yasbeth Anastacia Vázquez Hernández</h1>
                </div>

                {/* Título */}
                <div className="flex flex-col gap-2">
                <h1 className="text-6xl font-bold text-zinc-800  ">
                Ingeniera Mecatrónica
                </h1>
{/* leading-tight */}
                <h2 className=" text-6xl font-bold text-[var(--primary-color)]  ">
                
                Frontend Developer Junior
                </h2>
                </div>

                {/* Descripción */}
                <p className="text-zinc-600 text-lg max-w-xl ">
                    Me apasiona crear experiencias web atractivas,
                    funcionales y centradas en las personas. Siempre aprendiendo, siempre construyendo.
                </p>

                {/* Tecnologías */}
                <div className="bg-white rounded-2xl shadow-lg py-3 w-[400px] overflow-hidden">

                <div
                    ref={trackRef}
                    className="flex gap-5 w-max"
                >
                    {[...tecnologias, ...tecnologias].map((tecnologia, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-[var(--secondary-color)] shrink-0"
                        >
                            <img
                                className="w-10 h-10"
                                src={tecnologia.icon}
                                alt={tecnologia.name}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                </div>

                {/* Botones */}
                <div className="flex gap-6">

                    <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--primary-color)] duration-300 shadow-lg">
                    Ver proyectos
                    <ChevronRight size={18} />
                    </button>

                    <button className="pulse flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] duration-300 font-semibold">
                    Contactarme
                    <Mail size={18} />
                    </button>

                </div>

            </div>

            {/* DERECHA */}
            <div className="relative flex justify-center items-center h-[700px]">

            {/* Fondo rosa  <div className="absolute w-[520px] h-[520px] rounded-full bg-[var(--primary-color)]  opacity-70 blur-3xl"></div>*/}
            <div className="absolute w-[520px] h-[520px] rounded-full bg-[var(--primary-color)]  opacity-90 blur-3xl"></div>

            {/* Foto */}
            <div className="  z-10 w-[500px] h-[620px] rounded-[40px] bg-pink-100  overflow-hidden rounded-full shadow-2xl">
                <img className="object-cover rounded-full" src="./HERO/foto-personal.png" alt="" draggable={false}/>
            </div>
                    
            

            </div>
{/* Onda */}
<div className="absolute bottom-0 left-0 w-full -z-10 pointer-events-none">
    <svg
        className="block w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
    >
        <path
            fill="#fa9bb9"
            fillOpacity="0.3"
            d="M0,32L80,74.7C160,117,320,203,480,208C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
    </svg>
</div>
        
        </main>
    );
};