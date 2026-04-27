import { motion } from "framer-motion";
import { Leaf, Sparkles, Globe } from "lucide-react";
import FadingVideo from "./FadingVideo";

const CAP_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4";

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
    <section id="proyectos" className="relative w-full overflow-hidden">
      <FadingVideo src={CAP_VIDEO} scale={1} objectPosition="center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf7]/40 via-transparent to-[#f8faf7]/60 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          <span className="kicker">// Nuestra Esencia</span>
          <h2 className="mt-5 font-heading italic text-emerald-950 text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.95]">
            Creatividad Orgánica.
          </h2>
          <p className="mt-6 text-emerald-950/80 text-lg max-w-xl font-light">
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
                className="liquid-glass-strong rounded-[2.25rem] p-7 md:p-8 flex flex-col min-h-[320px]"
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
    </section>
  );
};

export default Capabilities;
