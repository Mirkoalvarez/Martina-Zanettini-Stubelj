import { motion } from "framer-motion";
import { Leaf, Sparkles, Globe } from "lucide-react";
import FadingVideo from "./FadingVideo";

const CAP_VIDEO = "/floresvideo.mp4";

const cards = [
  {
    icon: Leaf,
    title: "Identidad",
    tags: ["Branding", "Sustentable", "Bio-mimética"],
    text: "Creamos marcas que respiran y evolucionan con su entorno.",
  },
  {
    icon: Sparkles,
    title: "Digital",
    tags: ["UI/UX", "Low Carbon", "Eficiencia"],
    text: "Interfaces fluidas con la menor huella de carbono posible.",
  },
  {
    icon: Globe,
    title: "Estrategia",
    tags: ["Consultoría", "ESG", "Futuro"],
    text: "Guiamos agencias hacia un modelo de negocio en armonía con el planeta.",
  },
];

const Capabilities = () => {
  return (
    <section id="identidad" className="relative w-full overflow-hidden">
      <FadingVideo src={CAP_VIDEO} scale={1} objectPosition="center" />
      {/* White fade — top of section */}
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/50 via-white/10 to-transparent pointer-events-none z-10" />
      {/* Soft overlay + bottom fade */}
      {/*<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8faf7]/60 pointer-events-none" />*/}
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-emerald-950/20 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <span className="kicker text-shadow-white-sm text-emerald-950">// Mi Esencia</span>
          <h2 className="mt-5 font-heading italic text-emerald-950 text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.95] text-shadow-dark-sm">
            Filosofía: Creatividad Orgánica.
          </h2>
          <p className="mt-6 text-emerald-950 text-lg max-w-xl font-medium text-shadow-dark-sm">
            Tres disciplinas que florecen juntas para diseñar futuros más
            verdes, más claros y más bellos.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.12 }}
                className="liquid-glass-strong rounded-[2.25rem] p-7 md:p-8 flex flex-col md:min-h-[320px]"
              >
                <div className="flex items-center justify-between">
                  <span className="liquid-glass rounded-full w-12 h-12 grid place-items-center">
                    <Icon className="w-5 h-5 text-emerald-900" />
                  </span>
                  <span className="kicker text-emerald-900/60">0{i + 1}</span>
                </div>

                <h3 className="mt-8 font-heading italic text-emerald-950 text-4xl md:text-5xl tracking-[-0.03em] leading-none">
                  {card.title}
                </h3>

                <p className="mt-4 text-emerald-950/80 font-light leading-relaxed">
                  {card.text}
                </p>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="liquid-glass rounded-full px-3 py-1 text-xs text-emerald-950/80 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
      {/* Organic wave divider - connects Bio to Proyectos */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none" style={{ marginBottom: "-2px" }}>
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[100px] lg:h-[120px]"
        >
          <path
            d="M0,120 L0,60 C120,80 240,95 360,85 C480,75 540,40 720,30 C900,20 1020,55 1140,65 C1260,75 1380,55 1440,45 L1440,120 Z"
            className="fill-emerald-950/80"
          />
          <path
            d="M0,120 L0,75 C180,95 300,100 480,90 C660,80 780,50 960,45 C1140,40 1300,65 1440,60 L1440,120 Z"
            className="fill-emerald-950/50"
          />
          <path
            d="M0,120 L0,90 C200,105 400,110 600,100 C800,90 1000,70 1200,75 C1320,78 1400,85 1440,80 L1440,120 Z"
            className="fill-emerald-950"
          />
        </svg>
      </div>
    </section>
  );
};

export default Capabilities;
