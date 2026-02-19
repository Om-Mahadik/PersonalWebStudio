"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Link2 } from "lucide-react";

const icons = [Facebook, Instagram, Linkedin, Twitter];

export default function BlogSocialMedia() {
  return (
    <div className="flex items-center justify-between mb-8 py-5 border-y border-white/5">
      <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">Spread the word</span>
      <div className="flex gap-3">
        {icons.map((Icon, i) => (
          <motion.button 
            key={i}
            whileHover={{ y: -3, color: "#fff" }}
            className="text-white/40 transition-colors"
          >
            <Icon size={16} />
          </motion.button>
        ))}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-2 p-2 bg-white text-black rounded-full"
        >
          <Link2 size={14} />
        </motion.button>
      </div>
    </div>
  );
}