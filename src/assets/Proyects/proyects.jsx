import { ProjectList } from "./ProyectList";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectInfo } from "./ProjectInfo";

export const Proyects = () => {
    return (
        <main className="pt-15 pb-10">

            <div className="flex flex-col items-center gap-3">

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


            <section className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr]">


                <ProjectList />


                <div className="flex flex-col items-center">

                    <ProjectPreview />

                    <ProjectInfo />

                </div>

            </section>

        </main>
    );
};