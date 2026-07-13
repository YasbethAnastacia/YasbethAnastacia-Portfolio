import {
    Heart,
} from "lucide-react";

import { Experiencias } from "./Data";


export const Experience = () =>{
    return(
        <main className="min-h-screen  px-15 pt-15">
            <div className="flex gap-5 items-center justify-center pb-10 "> {/*TITULO */}
                    <img className="-scale-x-100 h-12 animate-pulse" src="./PROYECTOS/Stickers.png" alt="" />
                    <h2 className="text-7xl font-bold">
                        MI <span className="text-[var(--primary-color)]">EXPERIENCIA</span>
                    </h2>
                    <img className="h-12 animate-pulse" src="./PROYECTOS/Stickers.png" alt="" />
            </div>



            <div className="grid grid-cols-[1fr_2.5fr] gap-10">{/*division */}
                <div className="flex flex-col  px-4 py-4  gap-8 shadow-md" >

                    {Experiencias.map(({ icono: Icono, ...experiencias }) => (
                        



                            
                            <button key={experiencias.id} className="flex  gap-6 ">
                                <div className="flex items-center justify-center">
                                    <div className=" flex items-center justify-center rounded-full w-[50px] aspect-square  bg-[var(--primary-color)]">
                                        <Icono className="w-[30px] h-[30px] text-white"/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start ">
                                    {/*font-thin       → 100
                                        font-extralight → 200
                                        font-light      → 300
                                        font-normal     → 400
                                        font-medium     → 500
                                        font-semibold   → 600  
                                        font-bold       → 700
                                        font-extrabold  → 800
                                        font-black      → 900 */}

                                    <p className="text-pink-500 font-medium">{experiencias.puesto}</p>
                                    <p className="font-semibold ">{experiencias.empresa}</p>
                                    <p className="text-gray-500">{experiencias.ubicacion}</p>
                                </div>
                            </button>
                            
                    ))}


                </div>
                <div className="shadow-lg "><p>hh</p></div>
            </div>
        </main>
    )
}

