import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Hero />
      
      {/* We will add the Projects section here next! */}
      <section className="h-screen flex items-center justify-center text-gray-400">
        (Projects Section Coming Soon...)
      </section>
    </main>
  );
}