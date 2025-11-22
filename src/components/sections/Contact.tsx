"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary/5 to-transparent p-12 rounded-3xl border border-primary/10"
      >
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Let's Collaborate
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Have a project in mind or just want to chat about AI? I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:pottumkalallenjose@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-accent transition-all shadow-lg shadow-primary/25 hover:scale-105"
          >
            <Mail size={20} />
            Say Hello
          </a>
          {SITE_DATA.profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-black/5 dark:border-white/10 rounded-full font-medium hover:border-primary hover:text-primary transition-all hover:scale-105"
            >
              <social.icon size={20} />
              {social.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}