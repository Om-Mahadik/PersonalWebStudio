"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ui/contact/ContactForm";
import SocialLinks from "@/components/ui/contact/SocialLinks";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 overflow-x-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tighter">
          Let's talk!
        </h1>
        <p className="text-zinc-500 text-lg max-w-sm mx-auto">
          Got a project in mind? Fill in the form or send us a{" "}
          <a href="#" className="text-zinc-300 underline underline-offset-4 hover:text-white transition-colors">
            direct email
          </a>
        </p>
      </motion.div>

      <ContactForm />
      <SocialLinks />
    </div>
  );
}