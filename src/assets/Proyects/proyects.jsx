import { ProjectList } from "./ProyectList";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectInfo } from "./ProjectInfo";

export const Proyects = () => {
    return (
        <main className="pt-15  relative ">
            <div className="-z-20 absolute inset-0 opacity-30 ">
                <img className=" h-full" src="./PROYECTOS/fondo2.svg" alt="" />
            </div>
            <div className="flex flex-col items-center gap-3 pb-10">

                <div className="flex gap-5 items-center justify-center">

                    <img className="-scale-x-100 h-12 animate-pulse" src="./PROYECTOS/Stickers.png" alt="" />

                    <h2 className="text-7xl font-bold">
                        MIS <span className="text-[var(--primary-color)]">PROYECTOS</span>
                    </h2>

                    <img className="h-12 animate-pulse" src="./PROYECTOS/Stickers.png" alt="" />

                </div>

                <p>
                    Explora algunos de los proyectos que he desarrollado con dedicación y creatividad
                </p>

                <div className="w-25 h-0.5 bg-[var(--primary-color)] rounded-full mx-auto mt-3"></div>

            </div>


            <section className="flex flex-col lg:grid lg:grid-cols-[1fr_1.7fr]">


                <ProjectList />


                <div className="flex flex-col items-center">

                    <ProjectPreview />

                    <ProjectInfo />

                </div>

            </section>

        </main>
    );
};