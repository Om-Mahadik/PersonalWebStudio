"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

const SERVICES = ["WEBSITES", "STRATEGY", "BRANDING", "UI/UX DESIGN"];

const HeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SERVICES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Optimized Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2 
      } 
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative w-full bg-black pt-32 pb-24 md:pt-32 md:pb-10 px-6 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Decor (Static opacity for performance) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-zinc-800/20 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        
        {/* 1. Compact Avatar Badge */}
        <motion.div 
          variants={itemVars}
          className="flex items-center gap-3 mb-6 bg-zinc-900/30 border border-white/5 pl-1.5 pr-4 py-1 rounded-full backdrop-blur-xl"
        >
          <div className="flex -space-x-2.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="founder" className="w-full h-full object-cover grayscale" />
              </div>
            ))}
          </div>
          <span className="text-zinc-500 text-[8px] font-mono uppercase tracking-[0.2em] font-bold flex items-center gap-2">
            <Sparkles size={10} className="text-blue-500" />
            Trusted by founders
          </span>
        </motion.div>

        {/* 2. Bold Kinetic Headline */}
        <motion.h1 
          variants={itemVars}
          className="text-white text-[12vw] md:text-[7.2vw] font-[1000] leading-[0.95] tracking-tighter max-w-6xl"
        >
          We Build
          <span className="inline-flex items-center px-3 md:px-5 translate-y-[-1vw]">
            <motion.div 
              animate={{ rotate: [-6, -2, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[14vw] h-[8vw] md:w-[8.5vw] md:h-[5vw] rounded-full overflow-hidden border border-white/20 bg-zinc-800 shadow-2xl"
            >
              <img src="/portfolio/port1.jpg" className="w-full h-full object-cover" alt="Work 1" />
            </motion.div>
          </span>
          <br />
          <div className="h-[12vw] md:h-[7.2vw] inline-block overflow-hidden align-bottom px-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={SERVICES[index]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-blue-600 block italic"
                style={{ fontStyle: 'italic', transform: 'skewX(-8deg)' }}
              >
                {SERVICES[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <br />
          <span className="text-transparent font-light" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}>
            For
          </span>
          <span className="inline-flex items-center px-3 md:px-5">
            <motion.div 
               animate={{ rotate: [3, 7, 3], y: [0, 5, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="w-[14vw] h-[8vw] md:w-[8.5vw] md:h-[5vw] rounded-full overflow-hidden border border-white/20 bg-zinc-800 shadow-2xl"
            >
              <img src="/portfolio/port2.jpg" className="w-full h-full object-cover" alt="Work 2" />
            </motion.div>
          </span>
          Digital Impact.
        </motion.h1>

        {/* 3. Minimalist Star Rating */}
        <motion.div 
          variants={itemVars}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#FBBF24" stroke="#FBBF24" strokeWidth={0} />
            ))}
          </div>
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
            5.0 Star Rated Team
          </p>
        </motion.div>

        {/* 4. Small Action Section */}
        <motion.div 
          variants={itemVars}
          className="mt-8 flex flex-col items-center gap-8"
        >
          <p className="text-zinc-600 text-xs md:text-sm max-w-lg leading-relaxed font-medium">
            Transforming bold visions into <span className="text-zinc-400 font-bold">high-performance</span> digital products.
          </p>

          <Link href="/contact">
  <button className="group relative flex items-center gap-5 bg-zinc-900/50 border border-white/10 text-white pl-8 pr-2 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-zinc-800 hover:border-blue-500/50 active:scale-95 shadow-xl">
    Start Journey
    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
      <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
    </div>
  </button>
</Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroText;