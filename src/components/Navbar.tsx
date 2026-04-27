import { motion } from "framer-motion";

const links = [
  { label: "Bio", href: "#bio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1180px)]"
    >
      <div className="liquid-glass-strong rounded-full px-3 py-2 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 pl-2">
          <span className="liquid-glass rounded-full w-10 h-10 grid place-items-center">
            <span className="font-heading italic text-xl text-emerald-950 leading-none">a</span>
          </span>
          <span className="hidden sm:inline font-heading italic text-lg text-emerald-950">aether</span>
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

        <a
          href="#contacto"
          className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm text-emerald-950 font-medium"
        >
          Empezar Impacto
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
