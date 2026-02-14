"use client";
import React from 'react';
import { motion, Variants } from "framer-motion";

const assets = [
  { color: "bg-blue-600", rotate: -5, z: 30 },
  { color: "bg-emerald-500", rotate: -15, z: 20 },
  { color: "bg-yellow-400", rotate: -25, z: 10 },
];

export default function MarketingAssets() {
  // Consistency Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12 } 
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      
      {/* Header Section - Matches Branding & Development */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-semibold mb-6">
          Marketing Assets
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl leading-snug">
          Marketing strategy is proudly responsible for half of a campaign's success, 
          another half relies solely on its implementation.
        </p>
      </motion.div>

      {/* Main Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Stacked Cards Visual (Smooth Spread) */}
        <div className="relative w-full aspect-square flex items-center justify-center">
          {assets.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: card.rotate }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: card.rotate - 5 }}
              transition={{ 
                delay: i * 0.1, 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{ zIndex: card.z }}
              className={`absolute w-[70%] h-[80%] rounded-[30px] shadow-2xl border border-white/10 ${card.color}`}
            >
              {i === 0 && (
                 <div className="p-8 flex flex-col justify-end h-full">
                    <motion.div 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md mb-6" 
                    />
                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/10 rounded-full mt-3" />
                 </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Side: Lists - Matches Branding sizes exactly */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 self-center mt-10 lg:mt-0">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Motion videos
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {["Animated logos", "Product illustrations", "Launch videos", "Visual effects"].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Illustrations
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {["Illustration 2D", "Illustration 3D", "Character Design"].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium text-zinc-200">
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
}