"use client";
import { motion } from "framer-motion";
import { Instagram, Facebook, Link2, Linkedin, MessageCircle } from 'lucide-react';

const socials = [
  { icon: <Instagram size={22} />, href: "#" },
  { icon: <Facebook size={22} />, href: "#" },
  { icon: <Link2 size={22} />, href: "#" },
  { icon: <Linkedin size={22} />, href: "#" },
  { icon: <MessageCircle size={22} />, href: "#" },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-8 mt-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="px-8 py-2 border border-zinc-800 rounded-full text-zinc-500 text-sm bg-zinc-950"
      >
        Follow us on
      </motion.div>
      <div className="flex gap-4">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ y: -5, borderColor: "#52525b", backgroundColor: "#18181b" }}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all shadow-lg"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}