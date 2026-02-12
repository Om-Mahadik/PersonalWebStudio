"use client";

import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const SmileyBlock = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking for "look at" effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics-based springs for smoothness
  const springConfig = { stiffness: 150, damping: 15 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // Map mouse movement to face rotation and eye movement
  const faceRotateX = useTransform(dy, [-100, 100], [15, -15]);
  const faceRotateY = useTransform(dx, [-100, 100], [-15, 15]);
  const eyeX = useTransform(dx, [-100, 100], [-5, 5]);
  const eyeY = useTransform(dy, [-100, 100], [-3, 3]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center cursor-none group"
    >
      <motion.div
        style={{
          rotateX: faceRotateX,
          rotateY: faceRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-20 h-20 bg-yellow-400 rounded-full shadow-[0_10px_30px_rgba(250,204,21,0.4)] flex flex-col items-center justify-center gap-2"
      >
        {/* Eyes Container */}
        <div className="flex gap-4">
          {[0, 1].map((i) => (
            <div key={i} className="w-3 h-4 bg-[#121212] rounded-full relative overflow-hidden">
              {/* Pupil / Reflection */}
              <motion.div 
                style={{ x: eyeX, y: eyeY }}
                className="absolute inset-1 bg-white w-1 h-1 rounded-full opacity-40" 
              />
            </div>
          ))}
        </div>

        {/* Mouth */}
        <motion.div 
          animate={{ 
            height: [4, 8, 4],
            borderRadius: ["20px", "40px", "20px"]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="w-8 h-2 border-b-4 border-[#121212] rounded-full" 
        />

        {/* 3D Depth Highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/10 via-transparent to-white/40 pointer-events-none" />
      </motion.div>

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-yellow-400/5 blur-2xl group-hover:bg-yellow-400/10 transition-colors duration-500" />
    </div>
  );
};

export default SmileyBlock;