import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Proyectos from "@/components/Proyectos";
import Capabilities from "@/components/Capabilities";
import Contacto from "@/components/Contacto";

const Index = () => {
  return (
    <main id="top" className="relative min-h-screen bg-[#f8faf7] text-emerald-950">
      <Navbar />
      <Hero />
      <Bio />
      <Proyectos />
      <Capabilities />
      <Contacto />

      <footer className="relative py-12 border-t border-emerald-950/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-emerald-950/70">

            {/* Nav links */}
            <nav aria-label="Navegación footer" className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {[
                { label: "Bio", href: "#bio" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Identidad", href: "#identidad" },
                { label: "Contacto", href: "#contacto" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="font-light hover:text-emerald-950 transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Branding */}
            <p className="font-heading italic text-lg text-emerald-950 text-center">
              Martina Zanettini — 2026
            </p>

            {/* Right: tagline + back-to-top */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="font-light text-xs">Diseño · Hecho con bajo carbono.</p>
              <a
                href="#top"
                className="text-xs font-medium text-emerald-950/50 hover:text-emerald-950 transition-colors underline underline-offset-2"
              >
                Volver arriba ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default Index;
