"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown, Loader2, CheckCircle2 } from "lucide-react";

export default function SalesRegistrationPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [experience, setExperience] = useState("Select Experience");
  const options = ["Fresher", "1-3 Years", "3-5 Years", "5+ Years"];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (experience === "Select Experience") {
      alert("Please select your experience level.");
      return;
    }
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      linkedin: formData.get("linkedin"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      experience: experience,
      bio: formData.get("bio"),
      whyHire: formData.get("whyHire"),
    };

    try {
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzqtmm5UZqJUGvxZ40ow9FrSJn0u-PdoAuEbueMwM9UKjqNWq4NQee6EDW12MFc-dGHA/exec";
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setExperience("Select Experience");
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an issue submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">
        
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">
            Employment Application
          </h1>
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Position: Sales Executive
          </p>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center justify-between gap-4 backdrop-blur-sm"
        >
          <div className="flex flex-col ml-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Application Resource</span>
            <span className="text-sm font-medium text-white">Role Responsibilities & JD.pdf</span>
          </div>
          {/* Updated link handling */}
          <a 
            href="/careers/Sales Partner Program by PersonalWebStudio.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download="Sales_Partner_Program_by_PersonalWebStudio.pdf"
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-zinc-200 transition-all active:scale-95"
          >
            <Download size={14} />
            Download Details
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white text-black rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-white/10 overflow-visible"
        >
          {isSuccess ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-bold">Application Received</h2>
              <p className="text-zinc-500 max-w-xs">Your details have been recorded. Our team will review your application and reach out via email.</p>
              <button onClick={() => setIsSuccess(false)} className="text-sm font-bold underline pt-4">Submit another response</button>
            </motion.div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">
                    Full Legal Name <span className="text-red-500">*</span>
                  </label>
                  <input required name="name" type="text" placeholder="Sahil Tekawade" className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 focus:bg-white focus:border-black outline-none transition-all placeholder:text-zinc-400 text-black font-medium" />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input required name="email" type="email" placeholder="name@example.com" className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 focus:bg-white focus:border-black outline-none transition-all placeholder:text-zinc-400 text-black font-medium" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">LinkedIn / Portfolio URL</label>
                  <input name="linkedin" type="url" placeholder="linkedin.com/in/username" className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 focus:bg-white focus:border-black outline-none transition-all placeholder:text-zinc-400 text-black font-medium" />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input required name="phone" type="tel" placeholder="+91 00000 00000" className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 focus:bg-white focus:border-black outline-none transition-all placeholder:text-zinc-400 text-black font-medium" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">
                  Permanent Residential Address <span className="text-red-500">*</span>
                </label>
                <textarea required name="address" rows={2} placeholder="Building, Street, City, State, ZIP" className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 focus:bg-white focus:border-black outline-none transition-all resize-none placeholder:text-zinc-400 text-black font-medium" />
              </div>

              <div className="space-y-1 relative">
                <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">
                  Total Experience <span className="text-red-500">*</span>
                </label>
                <div onClick={() => setIsOpen(!isOpen)} className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:border-black transition-all bg-zinc-50 shadow-sm">
                  <span className={`font-medium ${experience === "Select Experience" ? "text-zinc-400" : "text-black"}`}>{experience}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={18} className="text-zinc-500" /></motion.div>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute z-50 w-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-2xl overflow-hidden">
                      {options.map((opt) => (
                        <div key={opt} onClick={() => { setExperience(opt); setIsOpen(false); }} className="px-4 py-3 hover:bg-zinc-50 cursor-pointer text-sm font-medium transition-colors border-b border-zinc-100 last:border-none">{opt}</div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">
                  Explain about yourself (Short Bio) <span className="text-red-500">*</span>
                </label>
                <textarea required name="bio" rows={3} placeholder="A brief introduction..." className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 focus:bg-white focus:border-black outline-none transition-all resize-none placeholder:text-zinc-400 text-black font-medium" />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase text-zinc-800 tracking-wider ml-1">
                  Why should we hire you? <span className="text-red-500">*</span>
                </label>
                <textarea required name="whyHire" rows={4} placeholder="Describe your contribution..." className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 focus:bg-white focus:border-black outline-none transition-all resize-none placeholder:text-zinc-400 text-black font-medium" />
              </div>

              <div className="pt-6">
                <button disabled={isSubmitting} type="submit" className="w-full bg-black text-white font-bold py-5 rounded-2xl hover:bg-zinc-800 transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? <><Loader2 size={20} className="animate-spin" /> Processing Application...</> : "Submit Official Application"}
                </button>
              </div>
              <p className="text-[12px] text-center text-zinc-500 leading-relaxed px-6 tracking-tighter font-normal">Verify all details before submission. Once submitted, the application cannot be modified.</p>
            </form>
          )}
        </motion.div>

        <footer className="mt-12 text-center opacity-40">
          <p className="text-gray-100 text-[10px] tracking-[0.3em] uppercase">Official Recruitment Portal &bull; Secure Data Handling</p>
        </footer>
      </div>
    </div>
  );
}