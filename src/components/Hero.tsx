import { motion } from "framer-motion";
import { Sparkles, Leaf } from "lucide-react";
import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_074327_a4d6275d-82d9-4c83-bfbe-f1fb2213c17c.mp4";

const Hero = () => {
  return (
    <section id="bio" className="relative min-h-[100svh] w-full overflow-hidden">
      <FadingVideo src={HERO_VIDEO} scale={1.2} objectPosition="center top" />

      {/* Soft base fade into next section */}
      <div className="absolute inset-0 hero-fade-base pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-36 pb-24 md:pt-44 md:pb-32 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex self-start items-center gap-2 liquid-glass rounded-full pl-2 pr-4 py-1.5"
        >
          <span className="liquid-glass-strong rounded-full w-6 h-6 grid place-items-center">
            <Leaf className="w-3.5 h-3.5 text-emerald-900" />
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-950/80 font-medium">
            Pioneros en Diseño Regenerativo — 2026
          </span>
        </motion.div>

        <BlurText
          as="h1"
          text="Diseñando el Mañana con el Pulso de la Naturaleza."
          className="mt-8 max-w-5xl font-heading italic text-emerald-950 text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-[-0.04em]"
          staggerChildren={0.1}
          delay={0.3}
        />

        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-8 max-w-xl text-emerald-950/80 text-lg md:text-xl font-light leading-relaxed"
        >
          Transformamos visiones en ecosistemas digitales. Una biografía
          dedicada a la preservación estética y la innovación sostenible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#proyectos"
            className="liquid-glass-strong rounded-full px-7 py-3.5 text-emerald-950 font-medium text-sm flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Explorar Proyectos
          </a>
          <a
            href="#impacto"
            className="liquid-glass rounded-full px-7 py-3.5 text-emerald-950 font-medium text-sm"
          >
            Ver Impacto
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
        >
          <StatCard value="12k+" label="Hectáreas reforestadas" />
          <StatCard value="100%" label="Energía limpia en servidores" />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="liquid-glass-strong rounded-[2rem] px-7 py-6 flex items-baseline gap-5">
    <span className="font-heading italic text-emerald-950 text-5xl md:text-6xl tracking-[-0.04em] leading-none">
      {value}
    </span>
    <span className="text-emerald-950/75 text-sm md:text-base font-light leading-snug">
      {label}
    </span>
  </div>
);

export default Hero;
