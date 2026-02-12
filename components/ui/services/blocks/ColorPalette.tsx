"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Curated professional palettes
const palettes = [
  ['#E5E5E5', '#E66C55', '#737DFE', '#5B8C51'], // Original
  ['#F3F4F6', '#10B981', '#3B82F6', '#6366F1'], // Fresh Tech
  ['#FFD700', '#FF8C00', '#FF4500', '#8B0000'], // Sunset Warmth
  ['#000000', '#333333', '#666666', '#999999'], // Monochrome Pro
  ['#A78BFA', '#F472B6', '#FB7185', '#FFA4D4'], // Playful Pastel
];

const ColorPalette = () => {
  const [paletteIndex, setPaletteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPaletteIndex((prev) => (prev + 1) % palettes.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentColors = palettes[paletteIndex];

  return (
    <div className="relative flex items-center justify-center w-full h-full group overflow-hidden">
      <div className="flex -space-x-3 group-hover:space-x-2 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
        {currentColors.map((color, i) => (
          <motion.div
            key={`${paletteIndex}-${i}`} // Key change triggers the "morph" animation
            initial={{ y: 20, opacity: 0, scale: 0.5 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: 1,
              transition: { 
                type: "spring", 
                stiffness: 260, 
                damping: 20, 
                delay: i * 0.1 
              }
            }}
            whileHover={{ 
              y: -12,
              scale: 1.15,
              zIndex: 50,
              boxShadow: `0 10px 20px -5px ${color}66` // Glow matches the color
            }}
            className="relative w-11 h-11 rounded-2xl border-[3px] border-[#121212] cursor-pointer"
            style={{ backgroundColor: color }}
          >
            {/* Glossy Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl" />
            
            {/* Tooltip */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-[9px] font-black text-black px-2 py-1 rounded-md pointer-events-none shadow-xl border border-black/5 uppercase tracking-wider"
            >
              {color}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Ambient Glow */}
      <AnimatePresence>
        <motion.div 
          key={paletteIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 blur-[60px] -z-10"
          style={{ 
            background: `radial-gradient(circle, ${currentColors[1]} 0%, ${currentColors[2]} 100%)` 
          }}
        />
      </AnimatePresence>


    </div>
  );
};

export default ColorPalette;