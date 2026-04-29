import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Bio = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="bio"
      className="relative w-full bg-cover bg-center bg-no-repeat pb-0"
      style={{ backgroundImage: "url('/imgtrayectoria.png')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-emerald-950/60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-32 pb-32 md:pb-44">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 max-w-5xl mx-auto">

          {/* Left column - title + image */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-start shrink-0 w-full md:w-auto"
          >
            <h2 className="font-heading italic text-white/90 text-4xl md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[0.95]">
              Mi Trayectoria
            </h2>

            {/* Portrait — responsive: big on mobile, smaller on desktop */}
            <motion.img
              src="/bio-portrait.png"
              alt="Martina Zanettini — retrato profesional"
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 w-28 h-28 md:w-[100px] md:h-[100px] rounded-2xl object-cover shadow-lg shadow-black/20"
            />
          </motion.div>

          {/* Right column - body text with read-more */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col gap-4 md:pt-4"
          >
            <div className={`overflow-hidden transition-all duration-500 ${!expanded ? "max-h-[9rem] md:max-h-none" : "max-h-[2000px]"}`}>
              <p className="text-white/75 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>

            {/* Read-more toggle — only visible on mobile */}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="md:hidden self-start liquid-glass rounded-full px-5 py-2 text-sm text-white/80 font-medium hover:bg-white/20 transition-colors"
            >
              {expanded ? "Leer menos ↑" : "Leer más →"}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Organic wave divider */}
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

export default Bio;
