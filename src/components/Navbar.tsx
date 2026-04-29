import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Bio", href: "#bio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Identidad", href: "#identidad" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 inset-x-0 mx-auto z-50 w-[min(96%,1180px)]"
      >
        <div className="liquid-glass-strong rounded-full px-3 py-2 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 pl-2">
            <span className="liquid-glass rounded-full w-12 h-12 grid place-items-center">
              <span className="font-heading italic text-xl text-emerald-950 leading-none" style={{ fontFamily: "'Fleur De Leah', cursive", position: 'relative', right: '6px' }}>M</span>
            </span>
            <span className="hidden sm:inline font-heading italic text-lg text-emerald-950"><span style={{ fontFamily: "'Fleur De Leah', cursive" }}>M</span> artina <span style={{ fontFamily: "'Fleur De Leah', cursive" }}>Z</span> anettini</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 rounded-full text-sm text-emerald-950/80 hover:text-emerald-950 hover:bg-white/40 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-full grid place-items-center text-emerald-950/80 hover:bg-white/30 transition-colors"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <div className="w-5 flex flex-col gap-[5px] items-center">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-[2px] bg-emerald-950 rounded-full origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-full h-[2px] bg-emerald-950 rounded-full"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-full h-[2px] bg-emerald-950 rounded-full origin-center"
              />
            </div>
          </button>

          <a
            href="#contacto"
            className="hidden md:inline-flex liquid-glass-strong rounded-full px-5 py-2.5 text-sm text-emerald-950 font-medium"
          >
            Empezar Impacto
          </a>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-emerald-950/30 backdrop-blur-sm"
            />

            {/* Sheet */}
            <motion.div
              initial={{ opacity: 0, y: 60, filter: "blur(12px)", translateX: "-50%" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", translateX: "-50%" }}
              exit={{ opacity: 0, y: 40, filter: "blur(8px)", translateX: "-50%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-6 left-1/2 z-50 w-[min(92%,420px)]"
            >
              <div className="liquid-glass-strong rounded-[2rem] px-6 py-8 flex flex-col items-start gap-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="w-full text-left px-4 py-3.5 rounded-2xl text-emerald-950/90 font-heading italic text-xl hover:bg-white/40 transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}

                <div className="w-12 h-[1px] bg-emerald-950/10 my-2" />

                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="w-full text-center rounded-full bg-emerald-950 text-white py-3.5 text-sm font-medium hover:bg-emerald-900 transition-colors"
                >
                  Empezar Impacto
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
