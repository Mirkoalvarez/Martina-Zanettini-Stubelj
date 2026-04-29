import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Proyecto Uno",
    image: "/bio-portrait.png",
    summary: "Gestión integral de residuos industriales con reducción del 80% en disposición final.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Proyecto Dos",
    image: "/bio-portrait.png",
    summary: "Auditoría de higiene y seguridad en planta manufacturera, ISO 45001.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Proyecto Tres",
    image: "/bio-portrait.png",
    summary: "Plan de gestión ambiental para proyecto minero, EIA aprobado por autoridad.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Proyecto Cuatro",
    image: "/bio-portrait.png",
    summary: "Consultoría ESG para pyme agroindustrial, huella de carbono Scope 1-2-3.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const SWIPE_THRESHOLD = 60;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    filter: "blur(12px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
    filter: "blur(12px)",
  }),
};

const Proyectos = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const next = current + newDirection;
    if (next < 0 || next >= projects.length) return;
    setCurrent([next, newDirection]);
  };

  const project = projects[current];

  return (
    <section
      id="proyectos"
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/imgproyecto.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-emerald-950/60 pointer-events-none" />
      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-950 via-emerald-950/60 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 min-h-screen flex flex-col">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">
              // Proyectos
            </span>
            <h2 className="mt-3 font-heading italic text-white/90 text-4xl md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[0.95]">
              Mis Proyectos
            </h2>
          </div>

          {/* Navigation arrows — desktop only */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => paginate(-1)}
              disabled={current === 0}
              aria-label="Proyecto anterior"
              className="w-11 h-11 rounded-full border border-white/20 grid place-items-center text-white/70 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={current === projects.length - 1}
              aria-label="Proyecto siguiente"
              className="w-11 h-11 rounded-full border border-white/20 grid place-items-center text-white/70 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel card */}
        <div className="relative flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              /* ── Swipe gesture ── */
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
              }}
              className="liquid-glass-strong rounded-[2.25rem] p-6 md:p-12 w-full cursor-grab active:cursor-grabbing select-none"
              style={{
                background: "hsla(0, 0%, 100%, 0.08)",
                borderColor: "hsla(0, 0%, 100%, 0.15)",
              }}
            >
              {/* Mobile layout: title+image → text */}
              {/* Desktop layout: text ← | → title+image */}
              <div className="flex flex-col md:flex-row-reverse items-start gap-6 md:gap-16">

                {/* Right (top on mobile) — title + image */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 shrink-0 w-full md:w-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-16 h-16 md:w-[100px] md:h-[100px] rounded-2xl object-cover shadow-lg shadow-black/20 shrink-0"
                  />
                  <h3 className="font-heading italic text-white/90 text-2xl md:text-5xl tracking-[-0.04em] leading-[1.1] md:mt-5">
                    {project.title}
                  </h3>
                </div>

                {/* Left (bottom on mobile) — summary + full text */}
                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-white/90 text-base md:text-lg font-medium leading-snug">
                    {project.summary}
                  </p>
                  <p className="text-white/60 text-sm md:text-base font-light leading-relaxed line-clamp-4 md:line-clamp-none">
                    {project.text}
                  </p>
                </div>
              </div>

              {/* Swipe hint — visible only on mobile, fades after interaction */}
              <p className="md:hidden mt-5 text-center text-white/30 text-xs select-none pointer-events-none">
                ← Deslizá para ver más →
              </p>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            disabled={current === 0}
            aria-label="Proyecto anterior"
            className="md:hidden w-10 h-10 rounded-full border border-white/20 grid place-items-center text-white/70 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                aria-label={`Ir al proyecto ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === current
                  ? "w-8 bg-white/80"
                  : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            disabled={current === projects.length - 1}
            aria-label="Proyecto siguiente"
            className="md:hidden w-10 h-10 rounded-full border border-white/20 grid place-items-center text-white/70 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
