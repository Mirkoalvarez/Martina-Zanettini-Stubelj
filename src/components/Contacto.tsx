import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Contacto = () => {
  return (
    <section id="contacto" className="relative w-full bg-[#f8faf7]">
      {/* Top gradient - blends with Bio wave divider */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-950 via-emerald-950/60 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="font-heading italic text-emerald-950 text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] leading-[0.95] text-center max-w-3xl mx-auto mb-16"
        >
          Construyamos un futuro mas verde juntos.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Col 1 - Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="liquid-glass-strong rounded-[2.25rem] p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading italic text-emerald-950 text-3xl md:text-4xl tracking-[-0.03em] leading-none">
                Contactame
              </h3>

              <div className="mt-8 flex flex-col gap-5">
                <a
                  href="https://linkedin.com/in/martinazanettini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-emerald-950/80 hover:text-emerald-950 transition-colors group"
                >
                  <span className="liquid-glass rounded-full w-10 h-10 grid place-items-center shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-light text-sm md:text-base">
                    linkedin.com/in/martinazanettini
                  </span>
                </a>

                <a
                  href="mailto:martina@ejemplo.com"
                  className="flex items-center gap-3 text-emerald-950/80 hover:text-emerald-950 transition-colors group"
                >
                  <span className="liquid-glass rounded-full w-10 h-10 grid place-items-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-light text-sm md:text-base">
                    martina@ejemplo.com
                  </span>
                </a>

                <div className="flex items-center gap-3 text-emerald-950/80">
                  <span className="liquid-glass rounded-full w-10 h-10 grid place-items-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </span>
                  <span className="font-light text-sm md:text-base">
                    Buenos Aires, Argentina
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-10 text-emerald-950/50 text-xs font-light">
              Respondo en un plazo de 24-48 horas.
            </p>
          </motion.div>

          {/* Col 2 - Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="liquid-glass-strong rounded-[2.25rem] p-8 md:p-10 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs uppercase tracking-[0.2em] text-emerald-950/50 font-medium"
              >
                Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-2xl border border-emerald-950/10 bg-white/40 px-5 py-3 text-base text-emerald-950 font-light placeholder:text-emerald-950/30 focus:outline-none focus:ring-2 focus:ring-emerald-800/20 transition-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-company"
                className="text-xs uppercase tracking-[0.2em] text-emerald-950/50 font-medium"
              >
                Empresa
              </label>
              <input
                id="contact-company"
                type="text"
                placeholder="Tu empresa u organizacion"
                className="w-full rounded-2xl border border-emerald-950/10 bg-white/40 px-5 py-3 text-base text-emerald-950 font-light placeholder:text-emerald-950/30 focus:outline-none focus:ring-2 focus:ring-emerald-800/20 transition-shadow"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs uppercase tracking-[0.2em] text-emerald-950/50 font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Contame sobre tu proyecto..."
                className="w-full rounded-2xl border border-emerald-950/10 bg-white/40 px-5 py-3 text-base text-emerald-950 font-light placeholder:text-emerald-950/30 focus:outline-none focus:ring-2 focus:ring-emerald-800/20 transition-shadow resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-emerald-950 text-white py-3.5 text-sm font-medium hover:bg-emerald-900 transition-colors"
            >
              Enviar Mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
