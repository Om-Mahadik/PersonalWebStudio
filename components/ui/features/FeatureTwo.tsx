"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, animate } from 'framer-motion';
import { Globe } from 'lucide-react';

const FeatureTwo = () => {
  const containerRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile for different trigger logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Effect Trigger Logic
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Mobile logic: Toggle based on vertical center (approx 0.35 to 0.65)
      if (isMobile) {
        setIsActive(latest > 0.35 && latest < 0.65);
      }
      
      // Number trigger: Starts earlier (as soon as card is ~25% up the screen)
      if (latest > 0.25 && !hasAnimated.current) {
        startCount();
      }
    });
  }, [scrollYProgress, isMobile]);

  const hasAnimated = useRef(false);
  const startCount = () => {
    hasAnimated.current = true;
    animate(0, 60, {
      duration: 5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    });
  };

  return (
    <motion.div 
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      whileTap={{ scale: 0.97 }}
      className="group relative bg-[#070707] border border-white/[0.05] rounded-[32px] p-8 h-full flex flex-col justify-between min-h-[260px] overflow-hidden transition-all duration-700 cursor-default"
    >
      
      {/* BOLD BACKGROUND: Scroll-triggered on mobile, Hover-triggered on PC */}
      <div 
        className={`absolute inset-0 bg-[#1E40AF] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
          ${isActive ? 'translate-y-0' : 'translate-y-full'}`} 
      />

      {/* Top Section: Globe Icon */}
      <div className="flex justify-end relative z-10">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              stroke="#60A5FA"
              strokeWidth="1.5"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isActive ? { 
                pathLength: [0, 0.7, 0.7, 0],
                pathOffset: [0, 0, 0.3, 1],
                opacity: [0, 1, 1, 0]
              } : { opacity: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>

          <div className={`w-[60px] h-[60px] rounded-full border transition-all duration-500
            ${isActive ? 'bg-black border-transparent' : 'bg-[#151515] border-white/10'}`}>
            <div className="flex items-center justify-center h-full">
              <Globe 
                size={28} 
                className={`text-white transition-all duration-700 ${isActive ? 'scale-110 opacity-100' : 'opacity-70'}`} 
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Typography */}
      <div className="relative z-10 w-full">
        <h2 className="text-[80px] font-bold tracking-tighter leading-none mb-4 text-white">
          {displayValue}+
        </h2>
        
        <p className={`text-[#666666] text-lg leading-snug font-medium w-full transition-colors duration-500
          ${isActive ? 'text-white' : ''}`}>
          Professional websites deployed globally <br className="hidden md:block" />
          <span className={`${isActive ? 'opacity-90' : 'opacity-100'}`}>
            since the start of the last two years.
          </span>
        </p>
      </div>

    </motion.div>
  );
};

export default FeatureTwo;