import { ChevronRight, Mail, MapPin, Code2, CircleCheck } from "lucide-react";


export const Hero = () => {
    return (
        <main className="relative grid grid-cols-2 items-center overflow-hidden px-18 py-10 bg-red-500">
            <div className="flex flex-col gap-8 bg-blue-500">
                <div className="flex items-center gap-3 w-fit px-5 py-2 rounded-full border border-pink-200 bg-pink-50 text-[var(--primary-color)] font-semibold text-md">
                
                Full Stack Developer

                <span className="w-2.5 h-2.5 rounded-full bg-pink-300 ring-4 ring-pink-100" />
                </div>
                <div className="flex flex-col gap-2">
                <h1 className="text-6xl font-bold text-zinc-800">
                    Creo experiencias</h1>
                <h2 className="text-6xl font-bold text-[var(--primary-color)]">
                    que conectan y resuelven problemas</h2>
                </div>
                <p className="text-zinc-600 text-lg max-w-xl">
                    Desarrollo interfaces web modernas, responsivas, accesibles y centradas en las personas, con el objetivo de crear experiencias digitales que conecten y resuelvan problemas reales.</p>
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



                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm font-medium text-zinc-600 md:text-base">
  <div className="flex items-center gap-2">
    <Code2 size={20} className="text-[var(--primary-color)]" />
    Ing. Mecatrónica
  </div>

  <div className="flex items-center gap-2">
    <MapPin size={20} className="text-[var(--primary-color)]" />
    Colima, México
  </div>
</div>

            </div>
            <div className="relative flex justify-center items-center w-full h-full bg-blue-500">
                <img className="w-full h-full object-contain" src="./HERO/inicio.png" alt="" draggable={false} />
            </div>


            <div className="absolute bottom-0 left-0 w-full -z-10 pointer-events-none bg-white">
                <svg className="block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#fa9bb9" fillOpacity="0.3" d="M0,32L80,74.7C160,117,320,203,480,208C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
                </svg>
            </div>
        </main>
    );
};