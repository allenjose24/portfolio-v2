"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="backdrop-blur-xl bg-white/70 dark:bg-black/70 border border-white/20 dark:border-white/10 px-6 py-3 rounded-full shadow-lg flex items-center gap-6">
        <Link href="#home" className="font-heading font-bold text-lg hover:text-primary transition">Allen.</Link>
        
        {/* Divider */}
        <div className="w-[1px] h-4 bg-gray-400/30 hidden md:block"></div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition">
              {item}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className="relative w-8 h-8 flex items-center justify-center hover:text-primary transition"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
          <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
        </button>
      </div>
    </motion.nav>
  );
}