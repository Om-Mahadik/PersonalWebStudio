"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DigitalDesignService = () => {
  const platforms = ["UX Audit", "Wireframes", "User flows", "Prototyping"];
  const websites = ["Interactive Experiences", "Design System", "Wireframes", "Art Direction", "Responsive", "UI Kit"];
  const mobileApps = ["Research", "UX Design", "Prototyping", "Design System", "Visual Design"];

  // Animation for the floating effect
  const float = (delay: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    },
  });

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-4xl mb-16">
        <h2 className="text-5xl md:text-7xl font-semibold mb-6">Digital Design</h2>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
          A process of assumption & validation with a goal of taking into account 
          all the necessary variables, which are always custom and are to be uncovered
        </p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Live UI Dashboard */}
        <div className="relative h-[500px] w-full grid grid-cols-3 gap-3 p-4">
          
          {/* Column 1 */}
          <div className="space-y-3">
            <motion.div animate={float(0)} className="rounded-2xl bg-blue-600 p-4 h-48 flex flex-col justify-between shadow-lg">
              <span className="text-[10px] opacity-80">Website Visitors</span>
              <div className="text-2xl font-bold self-center">14k</div>
              <div className="space-y-1">
                <div className="h-1 w-full bg-white/20 rounded" />
                <div className="h-1 w-2/3 bg-white/40 rounded" />
              </div>
            </motion.div>
            <motion.div animate={float(0.5)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-28 shadow-lg">
               <div className="h-full w-full bg-gradient-to-t from-orange-500/20 to-transparent rounded-lg" />
            </motion.div>
            <motion.div animate={float(1)} className="rounded-xl bg-zinc-900 border border-zinc-800 h-10 px-3 flex items-center">
              <div className="w-full h-1 bg-zinc-700 rounded" />
            </motion.div>
          </div>

          {/* Column 2 (Middle) */}
          <div className="space-y-3 pt-8">
            <motion.div animate={float(0.3)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-56 flex items-end gap-1 shadow-lg">
               <div className="bg-zinc-700 w-full h-1/2 rounded-t" />
               <div className="bg-orange-500 w-full h-3/4 rounded-t" />
               <div className="bg-zinc-700 w-full h-1/3 rounded-t" />
               <div className="bg-zinc-700 w-full h-full rounded-t" />
            </motion.div>
            <motion.div animate={float(0.8)} className="rounded-2xl bg-blue-500 p-4 h-40 flex items-end gap-1 shadow-lg">
               <div className="bg-white/40 w-full h-1/4 rounded-t" />
               <div className="bg-white/40 w-full h-1/2 rounded-t" />
               <div className="bg-white w-full h-3/4 rounded-t" />
               <div className="bg-white/40 w-full h-1/2 rounded-t" />
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <motion.div animate={float(0.6)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-44 shadow-lg">
               <div className="h-1/2 w-full border-b border-zinc-800" />
               <div className="h-2 w-1/2 bg-zinc-700 mt-4 rounded" />
            </motion.div>
            <motion.div animate={float(1.1)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-24 shadow-lg flex flex-col justify-between">
               <div className="flex justify-between items-center">
                 <div className="w-4 h-4 bg-zinc-700 rounded-full" />
                 <div className="w-8 h-2 bg-green-500/20 rounded" />
               </div>
               <div className="h-4 w-full bg-zinc-800 rounded" />
            </motion.div>
            <motion.div animate={float(1.4)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-24 shadow-lg">
               <div className="h-full w-full bg-zinc-800/50 rounded-lg animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Lists */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          <div className="space-y-10">
            <div>
              <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-6">Platforms</h3>
              <ul className="space-y-4">
                {platforms.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97757]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-6">Mobile Apps</h3>
              <ul className="space-y-4">
                {mobileApps.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D97757]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-6">Websites</h3>
            <ul className="space-y-4">
              {websites.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97757]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalDesignService;