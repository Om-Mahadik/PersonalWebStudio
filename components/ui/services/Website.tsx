"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';

const Website = () => {
  const [index, setIndex] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const images = [
    '/services/web1.jpg',
    '/services/web2.png',
    '/services/web3.png',
    '/services/web1.jpg',
    '/services/web2.png',
    '/services/web1.jpg',
    '/services/web2.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

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

      {/* Main Container: Forced vertical stack with items-center */}
      <div className="flex flex-col items-center text-center gap-12 relative z-10 h-full">
        
        {/* Content Side */}
        <div className="w-full">
          <h2 className="text-4xl md:text-4xl font-semibold mb-6 tracking-tight text-white leading-tight">
            Website
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
            We don't just design websites. We build reliable sales & marketing tools that drive predictably good metrics.
          </p>
        </div>

        {/* The "Treadmill" Stack Side */}
        <div className="flex-1 relative h-[250px] md:h-[300px] w-full flex items-center justify-center overflow-visible mt-auto">
          <div className="relative w-full max-w-[280px] h-[180px]">
            <AnimatePresence mode="popLayout">
              {images.map((src, i) => {
                if (i !== index) return null;

                return (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.8, y: 20, zIndex: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0, 
                      zIndex: 30,
                      rotate: 0 
                    }}
                    exit={{ 
                      y: -100, 
                      opacity: 0, 
                      scale: 1.1,
                      zIndex: 40,
                      transition: { duration: 0.5, ease: "easeOut" } 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                    }}
                    className="absolute inset-0 rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-zinc-900"
                  >
                    <img
                      src={src}
                      alt="Project Showcase"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* THE BACKGROUND ZIGZAG */}
            {images.map((src, i) => {
              const isNext = i === (index + 1) % images.length;
              const isLast = i === (index + 2) % images.length;

              if (!isNext && !isLast) return null;

              return (
                <motion.div
                  key={`bg-${src}`}
                  layout
                  animate={{
                    x: isNext ? 25 : -25,
                    y: isNext ? -15 : -30,
                    rotate: isNext ? 6 : -6,
                    scale: isNext ? 0.92 : 0.85,
                    opacity: isNext ? 0.4 : 0.1,
                    zIndex: isNext ? 20 : 10,
                  }}
                  className="absolute inset-0 rounded-2xl border border-white/10 overflow-hidden bg-zinc-900 pointer-events-none"
                >
                  <img src={src} className="w-full h-full object-cover grayscale" alt="" />
                  <div className="absolute inset-0 bg-black/40" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Website;