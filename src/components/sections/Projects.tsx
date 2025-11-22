"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Selected Works
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SITE_DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 p-8 rounded-3xl hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-surface rounded-2xl border border-black/5 dark:border-white/5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </a>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}