import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";

const Index = () => {
  return (
    <main id="top" className="relative min-h-screen bg-[#f8faf7] text-emerald-950">
      <Navbar />
      <Hero />
      <Capabilities />

      <footer id="contacto" className="relative py-12 border-t border-emerald-950/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-emerald-950/70">
          <p className="font-heading italic text-lg text-emerald-950">aether — 2026</p>
          <p className="font-light">Diseño regenerativo · Hecho con bajo carbono.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
