import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <Hero />
      <Projects />
      <div className="bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10">
        <Skills />
        <Experience />
      </div>
      
      {/* Spacer */}
      <section className="h-40 flex items-center justify-center text-gray-400">
        (Contact & Footer Coming Next...)
      </section>
    </main>
  );
}