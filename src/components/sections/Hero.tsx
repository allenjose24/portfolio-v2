"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { SITE_DATA } from "@/data";

export default function Hero() {
  return (
    <section id="home" className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-background">
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas>
          {/* This creates the 3D star field */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_auto] animate-shine">
              {SITE_DATA.profile.name}
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          {SITE_DATA.profile.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a 
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-white font-bold hover:bg-accent transition-colors shadow-lg shadow-primary/25"
          >
            View Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
}