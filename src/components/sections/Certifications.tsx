"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SITE_DATA.certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface border border-black/5 dark:border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle size={14} />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}