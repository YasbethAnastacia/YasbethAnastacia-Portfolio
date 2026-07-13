/*PLANTILLA */



import {
    BriefcaseBusiness,
    GraduationCap,
    FolderGit2,
    ClipboardList,
    Brain,
    Trophy,
    Wrench,
    Monitor,
    Cpu,
    PencilRuler,
    Cable,
    Printer,
    FileCode2,
    GitBranch,
    Globe,
    Code2,
} from "lucide-react";

export const Experiencias = [
    
    {
        id: 3,

        icono: FolderGit2,
        logo: "/LOGO/logo.png",

        puesto: "Desarrolladora Frontend",
        empresa: "Proyectos Personales",
        ubicacion: "Remoto",

        fecha: "2025 – Actualidad",
        tipo: "Personal",

        descripcion:
            "Desarrollo de proyectos personales enfocados en el aprendizaje continuo y la creación de interfaces modernas utilizando React y tecnologías del ecosistema frontend. Cada proyecto ha sido diseñado para fortalecer mis habilidades técnicas y construir un portafolio profesional.",

        responsabilidades: [
            "Diseño y desarrollo de interfaces responsivas.",
            "Implementación de componentes reutilizables.",
            "Desarrollo de aplicaciones utilizando React y Vite.",
            "Control de versiones con Git y GitHub.",
            "Despliegue de proyectos mediante Vercel.",
        ],

        seccionExtra: {
            titulo: "Logros",
            icono: Trophy,

            contenido: [
                "Desarrollo de Crosh Amigurumis como proyecto completo.",
                "Creación de una tienda web enfocada en productos tejidos a crochet.",
                "Diseño y desarrollo de un portafolio personal desde cero.",
                "Aplicación de buenas prácticas de organización de componentes y diseño responsive.",
                "Aprendizaje autodidacta de nuevas tecnologías del ecosistema frontend.",
            ],
        },

        tecnologias: [
            {
                nombre: "React",
                icono: FileCode2,
            },
            {
                nombre: "Tailwind CSS",
                icono: Code2,
            },
            {
                nombre: "Git",
                icono: GitBranch,
            },
            {
                nombre: "GitHub",
                icono: GitBranch,
            },
            {
                nombre: "Vercel",
                icono: Globe,
            },
        ],
    },

    {
        id: 2,

        icono: BriefcaseBusiness,
        logo: "/EMPRESAS/jabil.png",

        puesto: "Ingeniera Líder de Automatización",
        empresa: "Jabil Inc.",
        ubicacion: "Zapopan, Jalisco",

        fecha: "Oct 2024 – May 2025",
        tipo: "Tiempo completo",

        descripcion:
            "Responsable del monitoreo y soporte técnico de equipos automatizados utilizados en líneas de producción. Mi trabajo consistía en supervisar su funcionamiento, atender incidencias operativas y realizar ajustes necesarios para mantener la continuidad del proceso productivo.",

        responsabilidades: [
            "Monitoreo del funcionamiento de equipos automatizados durante la producción.",
            "Diagnóstico y atención inicial de incidencias operativas.",
            "Ajuste y configuración de grippers y feeders.",
            "Configuración y ajustes mediante interfaces HMI.",
            "Cambio y colocación de rollos de componentes para la producción.",
            "Apoyo en ajustes básicos de sistemas de visión cuando fue requerido.",
            "Colaboración con operadores y personal de producción para reducir tiempos de paro.",
        ],

        seccionExtra: {
            titulo: "Habilidades desarrolladas",
            icono: Brain,

            contenido: [
                "Diagnóstico inicial de fallas en equipos automatizados.",
                "Configuración mediante interfaces HMI.",
                "Resolución de incidencias operativas.",
                "Trabajo bajo presión en entornos de producción.",
                "Comunicación y colaboración con operadores y técnicos.",
                "Adaptabilidad ante cambios en procesos productivos.",
            ],
        },

        tecnologias: [
            {
                nombre: "HMI",
                icono: Monitor,
            },
            {
                nombre: "Grippers",
                icono: Wrench,
            },
            {
                nombre: "Feeders",
                icono: Cpu,
            },
        ],
    },

    {
        id: 1,

        icono: GraduationCap,
        logo: "/EMPRESAS/hvsolutions.png",

        puesto: "Practicante de Automatización",
        empresa: "HV Solutions",
        ubicacion: "Colima, Colima",

        fecha: "Feb 2024 – Jun 2024",
        tipo: "Prácticas Profesionales",

        descripcion:
            "Participación en proyectos de automatización industrial apoyando en actividades de diseño, documentación, cableado e integración básica entre dispositivos de control.",

        responsabilidades: [
            "Elaboración y actualización de planos utilizando AutoCAD.",
            "Cableado de tableros y componentes eléctricos.",
            "Conexión básica entre PLCs y HMIs.",
            "Apoyo en pruebas de funcionamiento de sistemas.",
            "Fabricación de piezas mediante impresión 3D.",
        ],

        seccionExtra: {
            titulo: "Habilidades desarrolladas",
            icono: Brain,

            contenido: [
                "Interpretación de planos eléctricos.",
                "Diseño técnico con AutoCAD.",
                "Cableado industrial.",
                "Integración básica PLC-HMI.",
                "Trabajo en proyectos de automatización.",
            ],
        },

        tecnologias: [
            {
                nombre: "AutoCAD",
                icono: PencilRuler,
            },
            {
                nombre: "PLC",
                icono: Cpu,
            },
            {
                nombre: "HMI",
                icono: Monitor,
            },
            {
                nombre: "Cableado",
                icono: Cable,
            },
            {
                nombre: "Impresión 3D",
                icono: Printer,
            },
        ],
    },
];