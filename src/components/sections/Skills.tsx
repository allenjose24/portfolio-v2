"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";
import { Cpu, Globe, Code, Terminal } from "lucide-react";

const iconMap: Record<string, any> = {
  "Languages": Code,
  "Frontend": Globe,
  "Core AI/ML": Cpu,
  "Tools & Libs": Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Technical Arsenal</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SITE_DATA.skills.map((skillGroup, idx) => {
          const Icon = iconMap[skillGroup.category] || Code;
          
          return (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-surface border border-black/5 dark:border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-lg">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.05), type: "spring", stiffness: 200 }}
                    className="px-3 py-1.5 text-xs font-medium bg-background border border-black/5 dark:border-white/5 rounded-md hover:bg-primary hover:text-white hover:border-primary transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}