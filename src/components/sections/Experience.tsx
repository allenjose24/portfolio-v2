"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Professional Journey</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-0 space-y-16">
        {SITE_DATA.experience.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-12 md:pl-0"
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-4 border-primary z-10" />

            <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
              <div className="bg-surface p-6 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                <div className={`flex items-center gap-2 mb-2 text-primary font-bold text-sm uppercase tracking-wider ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <Briefcase size={14} />
                  <span>{exp.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-gray-500 font-medium mb-4">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}