"use client";
import React from 'react';
import { motion, TargetAndTransition, Variants } from 'framer-motion';

const DigitalDesignService = () => {
  const platforms = ["UX Audit", "Wireframes", "User flows", "Prototyping"];
  const websites = ["Interactive Experiences", "Design System", "Wireframes", "Art Direction", "Responsive", "UI Kit"];
  const mobileApps = ["Research", "UX Design", "Prototyping", "Design System", "Visual Design"];

  // Standardized Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const float = (delay: number): TargetAndTransition => ({
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    },
  });

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      
      {/* Header Section - Consistent with Branding */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-semibold mb-6">
          Digital Design
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl leading-snug">
          A process of assumption & validation with a goal of taking into account 
          all the necessary variables, which are always custom.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Live UI Dashboard (No background card) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square w-full grid grid-cols-3 gap-3"
        >
          {/* Column 1 */}
          <div className="space-y-3">
            <motion.div animate={float(0)} className="rounded-2xl bg-blue-600 p-4 h-48 flex flex-col justify-between shadow-lg">
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Visitors</span>
              <div className="text-3xl font-bold self-center text-white">14k</div>
              <div className="space-y-1.5">
                <div className="h-1 w-full bg-white/20 rounded" />
                <div className="h-1 w-2/3 bg-white/40 rounded" />
              </div>
            </motion.div>
            <motion.div animate={float(0.5)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-28 shadow-lg">
               <div className="h-full w-full bg-gradient-to-t from-orange-500/20 to-transparent rounded-lg" />
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3 pt-8">
            <motion.div animate={float(0.3)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-56 flex items-end gap-1.5 shadow-lg">
               <div className="bg-zinc-700 w-full h-1/2 rounded-t" />
               <motion.div animate={{ height: ["50%", "80%", "50%"] }} transition={{ duration: 3, repeat: Infinity }} className="bg-[#EF620A] w-full h-3/4 rounded-t" />
               <div className="bg-zinc-700 w-full h-1/3 rounded-t" />
               <div className="bg-zinc-700 w-full h-full rounded-t" />
            </motion.div>
            <motion.div animate={float(0.8)} className="rounded-2xl bg-blue-500 p-4 h-40 flex items-end gap-1 shadow-lg">
               <div className="bg-white/40 w-full h-1/4 rounded-t" />
               <div className="bg-white/40 w-full h-1/2 rounded-t" />
               <div className="bg-white w-full h-3/4 rounded-t" />
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <motion.div animate={float(0.6)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-44 shadow-lg">
               <div className="h-1/2 w-full border-b border-zinc-800 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-zinc-700 animate-spin" style={{ animationDuration: '8s' }} />
               </div>
               <div className="h-2 w-1/2 bg-zinc-700 mt-4 rounded" />
            </motion.div>
            <motion.div animate={float(1.1)} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-4 h-24 shadow-lg flex flex-col justify-between">
               <div className="flex justify-between items-center">
                 <div className="w-4 h-4 bg-zinc-700 rounded-full" />
                 <div className="w-10 h-3 bg-green-500/20 rounded-sm text-[7px] text-green-500 flex items-center justify-center font-black tracking-tighter">LIVE</div>
               </div>
               <div className="h-4 w-full bg-zinc-800 rounded" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Lists - Matches Branding sizes exactly */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 self-center">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Platforms
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {platforms.map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" /> 
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Websites
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {websites.map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" /> 
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="col-span-2 pt-4">
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Mobile Apps
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:gap-y-4">
              {mobileApps.map((item, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" /> 
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DigitalDesignService;