import { ChevronRight, Mail } from "lucide-react";
import { translations } from "../../data/translations";
import { useLanguage } from "../../hooks/useLanguage";
const tecnologias = [
  { id: 1, name: "React", icon: "/TECNOLOGIAS/react.svg" },
  { id: 2, name: "JavaScript", icon: "/TECNOLOGIAS/js.svg" },
  { id: 3, name: "HTML", icon: "/TECNOLOGIAS/html5.svg" },
  { id: 4, name: "CSS", icon: "/TECNOLOGIAS/css.svg" },
  { id: 5, name: "Tailwind", icon: "/TECNOLOGIAS/tailwind.svg" },
  { id: 6, name: "VS Code", icon: "/TECNOLOGIAS/vs.svg" },
  { id: 7, name: "C#", icon: "/TECNOLOGIAS/csharp.svg" },
  { id: 8, name: "C++", icon: "/TECNOLOGIAS/cplusplus.svg" },
  { id: 9, name: "Figma", icon: "/TECNOLOGIAS/figma.svg" },
  { id: 10, name: "Git", icon: "/TECNOLOGIAS/git.svg" },
  { id: 11, name: "GitHub", icon: "/TECNOLOGIAS/github.svg" },
  { id: 12, name: "MySQL", icon: "/TECNOLOGIAS/mysql.svg" },
  { id: 13, name: "Python", icon: "/TECNOLOGIAS/python.svg" },
  { id: 14, name: "Vercel", icon: "/TECNOLOGIAS/vercel.svg" },
  { id: 15, name: "Vite", icon: "/TECNOLOGIAS/vite.svg" },
];
export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language]?.hero ?? translations.es.hero;
  const irASeccion = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };
  return (
    <section
      id="inicio"
      className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center overflow-hidden px-5 md:px-10 lg:px-18 py-10 bg-[var(--background)] transition-colors duration-500"
    >
      <div className="flex flex-col gap-8 relative z-10 animate-[heroLeft_800ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <div className="flex flex-wrap items-center gap-2 w-fit px-5 py-2 rounded-full bg-[var(--primary-10)] border border-[var(--border-color)] text-[var(--text-accent)] font-medium text-base md:text-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-20)]">
          <span>{t.hello}</span>
          <img className="w-8 h-8 inline-block " src="/HERO/saludar.png" alt="" draggable={false} />
          <span>{t.im}</span>
          <h1 className="font-medium">Yasbeth Anastacia Vázquez Hernández</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] transition-colors duration-500 animate-[heroText_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{ animationDelay: "120ms" }}
          >
            {t.career}
          </h2>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-accent)] animate-[heroText_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{ animationDelay: "220ms" }}
          >
            {t.role}
          </h2>
        </div>
        <p
          className="text-[var(--text-secondary)] text-lg max-w-xl leading-relaxed transition-colors duration-500 animate-[heroText_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
          style={{ animationDelay: "320ms" }}
        >
          {t.description}
        </p>
        <div
          className="bg-[var(--background-card)] border border-[var(--border-color)] rounded-2xl shadow-lg py-3 w-full max-w-[400px] overflow-hidden transition-all duration-500 animate-[heroText_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
          style={{ animationDelay: "420ms" }}
        >
          <div className="flex gap-5 overflow-x-auto px-3 py-1" tabIndex={0} aria-label={language === "es" ? "Tecnologías" : "Technologies"}>
            {tecnologias.map((tecnologia, index) => (
              <div
                key={`${tecnologia.id}-${index}`}
                className="group flex items-center justify-center w-[60px] h-[60px] rounded-xl bg-[var(--background-soft)] border border-[var(--border-color)] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  src={tecnologia.icon}
                  alt={tecnologia.name}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 animate-[heroText_700ms_cubic-bezier(0.22,1,0.36,1)_both]" style={{ animationDelay: "520ms" }}>
          <button
            type="button"
            onClick={() => irASeccion("proyectos")}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary-color)] text-white font-semibold shadow-lg transition-all duration-300 hover:bg-[var(--primary-hover)] hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
          >
            {t.projects}
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={() => irASeccion("contacto")}
            className="group flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-[var(--primary-color)] text-[var(--text-accent)] bg-transparent font-semibold transition-all duration-300 hover:bg-[var(--primary-10)] hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
          >
            {t.contact}
            <Mail size={18} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-center h-[580px] md:h-[650px] lg:h-[700px] animate-[heroRight_900ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <div className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-[var(--primary-color)] opacity-25 blur-[90px] " />
        <div className="absolute w-[390px] h-[470px] md:w-[500px] md:h-[580px] rounded-[45%_55%_48%_52%/55%_45%_55%_45%] bg-[var(--primary-20)] rotate-6 " />
        <div className="absolute w-[390px] h-[470px] md:w-[500px] md:h-[580px] rounded-[45%_55%_48%_52%/55%_45%_55%_45%] border-2 border-[var(--primary-color)] -rotate-3 opacity-60 " />
        <div className="absolute top-[80px] right-[20px] md:top-[90px] md:right-[45px] w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--background-card)] border border-[var(--border-color)] shadow-xl " />
        <div className="absolute bottom-[90px] left-[15px] md:bottom-[100px] md:left-[35px] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary-color)] opacity-30 " />
        <div className="group relative z-10 w-[370px] max-w-full h-[470px] md:w-[470px] md:h-[590px] overflow-hidden rounded-[45%_55%_48%_52%/55%_45%_55%_45%] shadow-2xl ">
          <img
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            src="/HERO/hero-portada.png"
            alt="Yasbeth Anastacia Vázquez Hernández"
            fetchPriority="high"
            draggable={false}
          />
        </div>
        <div className="absolute z-20 bottom-[65px] right-[5px] md:bottom-[85px] md:right-[15px] bg-[var(--background-card)] border border-[var(--border-color)] shadow-xl rounded-2xl px-5 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ">
          <p className="text-xs text-[var(--text-muted)] font-medium">{t.currently}</p>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{t.creating}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full -z-10 pointer-events-none">
        <svg className="block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <path
            fill="var(--primary-soft)"
            fillOpacity="0.3"
            d="M0,32L80,74.7C160,117,320,203,480,208C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};
