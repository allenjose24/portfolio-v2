import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <Hero />
      <Projects />
      
      {/* Spacer for next sections */}
      <section className="h-40 flex items-center justify-center text-gray-400">
        (Skills & Experience Coming Next...)
      </section>
    </main>
  );
}