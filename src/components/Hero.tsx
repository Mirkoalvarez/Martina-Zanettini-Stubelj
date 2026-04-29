import { motion } from "framer-motion";
import { Sparkles, Leaf } from "lucide-react";
import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";

const HERO_VIDEO = "/herovidd.mp4";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      <FadingVideo src={HERO_VIDEO} scale={1.2} objectPosition="center top" />

      {/* Soft base fade into next section */}
      {/*<div className="absolute inset-0 hero-fade-base pointer-events-none" />*/}
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-emerald-950/20 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-36 pb-24 md:pt-44 md:pb-32 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex self-start items-center gap-2 liquid-glass rounded-full pl-2 pr-4 py-1.5"
        >
          <span className="liquid-glass-strong rounded-full w-6 h-6 grid place-items-center">
            <Leaf className="w-3.5 h-3.5 text-[#00512B]" />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#00512B]/80 font-medium">
            Mi Biografía  — 2026
          </span>
        </motion.div>

        <div className="mt-8 flex flex-col gap-2">
          <BlurText
            as="h1"
            words={[
              <><span style={{ fontFamily: "'Fleur De Leah', cursive" }}>M</span> artina</>,
              <><span style={{ fontFamily: "'Fleur De Leah', cursive" }}>Z</span> anettini.</>,
            ]}
            className="max-w-5xl font-heading italic text-[#00512B] text-balance text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-[-0.04em] text-shadow-white"
            staggerChildren={0.1}
            delay={0.3}
          />
          <BlurText
            as="h2"
            text="Licenciada en Gestión Ambiental."
            className="max-w-5xl font-heading text-[#00512B]/95 text-balance text-2xl sm:text-4xl md:text-6xl lg:text-[5rem] leading-[0.95] tracking-[-0.04em] text-shadow-white"
            staggerChildren={0.1}
            delay={0.6}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-8 max-w-xl text-white/60 text-lg md:text-xl font-light leading-relaxed text-shadow-white-sm"
        >
          Especialista en sostenibilidad, higiene y seguridad, con un enfoque integral en la preservación ambiental y la gestión eficiente de recursos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#proyectos"
            className="liquid-glass-strong rounded-full px-7 py-3.5 text-[#00512B] font-medium text-sm flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Explorar Proyectos
          </a>
          <a
            href="#bio"
            className="liquid-glass rounded-full px-7 py-3.5 text-[#00512B] font-medium text-sm"
          >
            Acerca de mí
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
        >
          <StatCard value="+3 Idiomas" label="Ingles, Frances y Español" />
          <StatCard value="0%" label="Residuos generados" />
        </motion.div>
      </div>

      {/* Fade into previous section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none" />

    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="liquid-glass-strong rounded-[2rem] px-7 py-6 flex items-baseline gap-5">
    <span className="font-heading italic text-[#00512B] text-3xl md:text-5xl lg:text-6xl tracking-[-0.04em] leading-none">
      {value}
    </span>
    <span className="text-[#00512B]/75 text-sm md:text-base font-light leading-snug">
      {label}
    </span>
  </div>
);

export default Hero;
