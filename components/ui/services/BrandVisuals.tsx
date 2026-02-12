"use client";

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { PenLine, Play } from 'lucide-react';
import FontChangeBlock from './blocks/FontChangeBlock'; 
import ColorPalette from './blocks/ColorPalette';

const BrandVisuals = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { 
      backgroundColor: "#161616", 
      scale: 1.05,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      className="group relative w-full h-full bg-zinc-950 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden transition-all duration-700 hover:border-white/20 shadow-2xl flex flex-col justify-between"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* Main Container: Removed lg:flex-row to maintain vertical stack on desktop */}
      <div className="flex flex-col items-center text-center gap-12 relative z-10 h-full">
        
        {/* Content Side */}
        <div className="w-full">
          <h2 className="text-4xl md:text-4xl font-semibold mb-6 tracking-tight text-white leading-tight">
            Brand Visuals
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
            We create brand materials that speak of your values non-verbally 
            and complement your offering to the market.
          </p>
        </div>

        {/* Visual Grid Side */}
        <div className="w-full max-w-[400px] mt-auto">
          <div className="grid grid-cols-10 gap-3">
            
            {/* Row 1 */}
            <motion.div variants={itemVariants} whileHover="hover" className="col-span-4 bg-[#111111] rounded-2xl h-20 flex items-center justify-center gap-2 cursor-pointer border border-white/[0.03]">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 bg-[#737DFE] rounded-tr-lg rounded-bl-lg rotate-12" />
                <div className="w-5 h-5 bg-[#737DFE]/40 rounded-tl-lg rounded-br-lg -rotate-12 backdrop-blur-sm" />
              </div>
              <span className="text-[#737DFE] font-bold text-lg uppercase tracking-tighter italic">Logo</span>
            </motion.div>

            <motion.div variants={itemVariants} whileHover="hover" className="col-span-2 bg-[#111111] rounded-2xl h-20 flex items-center justify-center cursor-pointer border border-white/[0.03]">
              <PenLine className="text-[#64C053] w-7 h-7" strokeWidth={1.5} />
            </motion.div>

            <motion.div variants={itemVariants} whileHover="hover" className="col-span-4 bg-[#111111] rounded-2xl h-20 flex items-center justify-center cursor-pointer border border-white/[0.03]">
              <FontChangeBlock />
            </motion.div>

            {/* Row 2 */}
            <motion.div variants={itemVariants} whileHover="hover" className="col-span-2 bg-[#111111] rounded-2xl h-20 flex items-center justify-center cursor-pointer border border-white/[0.03]">
              <span className="text-3xl">✨</span>
            </motion.div>

            <motion.div variants={itemVariants} whileHover="hover" className="col-span-6 bg-[#111111] rounded-2xl h-20 flex items-center justify-center cursor-pointer border border-white/[0.03]">
              <ColorPalette />
            </motion.div>

            <motion.div variants={itemVariants} whileHover="hover" className="col-span-2 bg-[#111111] rounded-2xl h-20 flex items-center justify-center cursor-pointer border border-white/[0.03]">
              <div className="p-2 border-[1.5px] border-[#E66C55] rounded-xl">
                <Play className="text-[#E66C55] fill-[#E66C55] w-4 h-4" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandVisuals;