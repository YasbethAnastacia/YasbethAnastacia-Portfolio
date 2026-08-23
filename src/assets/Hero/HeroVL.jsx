import { ArrowRight, Mail, MapPin, Code2, Box, Cpu, Database, Palette, Sparkles } from "lucide-react";

const areas = [
  { label: "Frontend", icon: Code2 },
  { label: "Backend", icon: Database },
  { label: "Blender / 3D", icon: Box },
  { label: "Mecatrónica", icon: Cpu },
  { label: "UI Design", icon: Palette },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#fff9fa]">
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[var(--primary-color)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[450px] w-[450px] rounded-full bg-[var(--primary-color)]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-32 w-full rounded-[50%_50%_0_0] bg-[var(--primary-color)]/10" />
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-28 pt-32 md:px-10 lg:grid-cols-2 lg:px-12">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary-color)]/30 bg-[var(--primary-color)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary-color)]">
            <Sparkles size={15} />
            Developer & Creative Technologist
          </div>
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl">
            Creo experiencias
            <span className="block text-[var(--primary-color)]">digitales, visuales</span>
            <span className="block text-[var(--primary-color)]">e interactivas.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            Combino desarrollo web, diseño 3D y mi formación en mecatrónica para transformar ideas en experiencias funcionales, creativas y centradas en las personas.
          </p>
          <div className="mt-7 flex max-w-xl flex-wrap gap-2.5">
            {areas.map(({ label, icon: Icon }) => (
              <span key={label} className="flex items-center gap-2 rounded-full border border-[var(--primary-color)]/20 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
                <Icon size={15} className="text-[var(--primary-color)]" />
                {label}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#proyectos" className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary-color)] px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:opacity-90">
              Ver proyectos
              <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl border-2 border-[var(--primary-color)] bg-white px-7 py-3.5 font-semibold text-[var(--primary-color)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--primary-color)]/5">
              <Mail size={18} />
              Contactarme
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={18} className="text-[var(--primary-color)]" />
            Colima, México
          </div>
        </div>
        <div className="relative flex min-h-[480px] items-center justify-center">
          <div className="absolute h-[370px] w-[370px] rounded-[43%_57%_61%_39%/45%_42%_58%_55%] bg-[var(--primary-color)]/10 sm:h-[430px] sm:w-[430px]" />
          <div className="absolute left-0 top-24 hidden grid-cols-4 gap-2 sm:grid">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-2 w-2 rounded-full bg-[var(--primary-color)]/50" />
            ))}
          </div>
          <div className="relative z-10 w-full max-w-[480px] rounded-[30px] border border-[var(--primary-color)]/20 bg-white/90 p-7 shadow-[0_30px_80px_rgba(244,114,182,0.20)] backdrop-blur-md">
            <div className="mb-7 flex items-center justify-between border-b border-[var(--primary-color)]/20 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[var(--primary-color)]" />
                <span className="h-3 w-3 rounded-full bg-[var(--primary-color)]/60" />
                <span className="h-3 w-3 rounded-full bg-[var(--primary-color)]/30" />
              </div>
              <span className="text-xs font-medium text-zinc-400">anastacia.dev</span>
            </div>
            <span className="text-sm font-semibold text-[var(--primary-color)]">{"<build ideas />"}</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-800">
              Código, diseño y
              <span className="block text-[var(--primary-color)]">creatividad en un solo lugar.</span>
            </h2>
            <p className="mt-4 leading-7 text-zinc-500">
              Explorando distintas áreas de tecnología para construir productos digitales más completos.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[var(--primary-color)]/5 p-4">
                <Code2 className="mb-3 text-[var(--primary-color)]" size={22} />
                <p className="font-semibold text-zinc-700">Web Development</p>
                <p className="mt-1 text-xs text-zinc-400">Frontend + Backend</p>
              </div>
              <div className="rounded-2xl bg-[var(--primary-color)]/5 p-4">
                <Box className="mb-3 text-[var(--primary-color)]" size={22} />
                <p className="font-semibold text-zinc-700">3D Creation</p>
                <p className="mt-1 text-xs text-zinc-400">Blender</p>
              </div>
              <div className="rounded-2xl bg-[var(--primary-color)]/5 p-4">
                <Palette className="mb-3 text-[var(--primary-color)]" size={22} />
                <p className="font-semibold text-zinc-700">UI Design</p>
                <p className="mt-1 text-xs text-zinc-400">Interfaces</p>
              </div>
              <div className="rounded-2xl bg-[var(--primary-color)]/5 p-4">
                <Cpu className="mb-3 text-[var(--primary-color)]" size={22} />
                <p className="font-semibold text-zinc-700">Engineering</p>
                <p className="mt-1 text-xs text-zinc-400">Mecatrónica</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-1 right-0 z-20 hidden rounded-2xl border border-[var(--primary-color)]/20 bg-white px-5 py-3 shadow-xl sm:block">
            <p className="text-xs text-zinc-400">Actualmente</p>
            <p className="text-sm font-semibold text-zinc-700">Aprendiendo · Creando · Construyendo</p>
          </div>
        </div>
      </div>
    </section>
  );
};