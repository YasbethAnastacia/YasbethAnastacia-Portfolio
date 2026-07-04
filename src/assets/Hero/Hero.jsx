import { ChevronRight, Mail } from "lucide-react";


const tecnologias = [
    { id:1, name: "React", icon: "./TECNOLOGIAS/react.svg" },
    { id:2, name: "JavaScript", icon: "./TECNOLOGIAS/js.svg" },
    { id:3, name: "HTML", icon: "./TECNOLOGIAS/html5.svg" },
    { id:4, name: "CSS", icon: "./TECNOLOGIAS/css.svg" },
    { id:5, name: "Tailwind", icon: "./TECNOLOGIAS/tailwind.svg" },
    { id:6, name: "VS Code", icon: "./TECNOLOGIAS/vs.svg" },
    { id:7, name: "C#", icon: "./TECNOLOGIAS/csharp.svg" },
    { id:8, name: "C++", icon: "./TECNOLOGIAS/cplusplus.svg" },
    { id:9, name: "Figma", icon: "./TECNOLOGIAS/figm a.svg" },
    { id:5, name: "Tailwind", icon: "./TECNOLOGIAS/tailwind.svg" },
    { id:10, name: "Git", icon: "./TECNOLOGIAS/git.svg" },
    { id:11, name: "GitHub", icon: "./TECNOLOGIAS/github.svg" },
    { id:12, name: "MySQL", icon: "./TECNOLOGIAS/mysql.svg" },
    { id:13, name: "Python", icon: "./TECNOLOGIAS/python.svg" },
    { id:14, name: "Vercel", icon: "./TECNOLOGIAS/vercel.svg" },
    { id:15, name: "Vite", icon: "./TECNOLOGIAS/vite.svg" },
    
    
];


export const Hero = () => {
    return (
        <main className="grid grid-cols-[1.5fr_1fr] items-center bg-[#FFF8F8] overflow-hidden px-18">
        

            {/* IZQUIERDA */}
            <div className="flex flex-col gap-8  ">

                {/* Badge */}
                <div className="flex gap-2 w-fit px-5 py-2 rounded-full bg-pink-100 text-pink-500 font-medium text-xl">
                    ¡Hola!  
                    <img className="w-8 h-8" src="./HERO/saludar.png" alt="" />
                    Soy
                    <h1 >  Yasbeth Anastacia Vázquez Hernández</h1>
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
                <div className="flex max-w-130 gap-5 bg-white rounded-2xl shadow-lg  ">
                    <div className="w-12 h-12 rounded-xl bg-pink-100"></div>
                    {/* Tecnologías 

                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--secondary-color)]"><img className="w-10 h-10" src="./TECNOLOGIAS/react.svg" alt="" /></div>

                    <div className="w-12 h-12 rounded-xl bg-pink-100"></div>

                    <div className="w-12 h-12 rounded-xl bg-pink-100"></div>

                    <div className="w-12 h-12 rounded-xl bg-pink-100"></div>
                    <div className="w-12 h-12 rounded-xl bg-pink-100"></div>
                    <div className="w-12 h-12 rounded-xl bg-pink-100"></div>*/}

                </div>

                {/* Botones */}
                <div className="flex gap-6">

                    <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--primary-color)] duration-300 shadow-lg">
                    Ver proyectos
                    <ChevronRight size={18} />
                    </button>

                    <button className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] duration-300 font-semibold">
                    Contactarme
                    <Mail size={18} />
                    </button>

                </div>

            </div>

            {/* DERECHA */}
            <div className="relative flex justify-center items-center h-[700px]">

            {/* Fondo rosa  <div className="absolute w-[520px] h-[520px] rounded-full bg-[var(--primary-color)]  opacity-70 blur-3xl"></div>*/}
            

            {/* Foto */}
            <div className=" z-10 w-[500px] h-[620px] rounded-[40px] bg-pink-100  overflow-hidden rounded-full shadow-2xl">
                <img className="object-cover rounded-full" src="./HERO/foto-personal.png" alt="" />
            </div>

            

            </div>

        
        </main>
    );
};