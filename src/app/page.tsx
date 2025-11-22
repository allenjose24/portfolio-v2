import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <Hero />
      <Projects />
      
      {/* Gradient Background Wrapper for middle sections */}
      <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <Skills />
        <Experience />
        <Certifications />
      </div>

      <Contact />
      <Footer />
    </main>
  );
}