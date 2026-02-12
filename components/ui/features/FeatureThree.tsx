"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, animate } from 'framer-motion';

const FeatureThree = () => {
  const containerRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const avatars = [
    "https://i.pravatar.cc/100?u=1",
    "https://i.pravatar.cc/100?u=2",
    "https://i.pravatar.cc/100?u=3",
    "https://i.pravatar.cc/100?u=4"
  ];

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

  const hasAnimated = useRef(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (isMobile) {
        setIsActive(latest > 0.35 && latest < 0.65);
      }
      
      if (latest > 0.20 && !hasAnimated.current) {
        hasAnimated.current = true;
        animate(0, 8000, {
          duration: 5,
          ease: [0.16, 1, 0.3, 1], 
          onUpdate: (value) => setDisplayValue(Math.round(value)),
        });
      }
    });
  }, [scrollYProgress, isMobile]);

  return (
    <motion.div 
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsActive(true)}
      onMouseLeave={() => !isMobile && setIsActive(false)}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-[#070707] border border-white/[0.05] rounded-[32px] p-8 h-full flex flex-col justify-between min-h-[260px] overflow-hidden transition-all duration-500 cursor-default"
    >
      
      {/* UP-AND-OUT YELLOW BACKGROUND */}
      <div 
        className={`absolute inset-0 bg-[#FACC15] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] 
          ${isActive 
            ? 'translate-y-0' 
            : hasAnimated.current && !isActive && scrollYProgress.get() > 0.65 
              ? '-translate-y-full' 
              : 'translate-y-full'}`} 
      />

      {/* Top Section: Avatars on the Right */}
      <div className="flex justify-end relative z-10">
        <div className="flex -space-x-3 items-center">
          {avatars.map((url, i) => (
            <motion.img
              key={i}
              src={url}
              animate={isActive ? { y: [0, -4, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              className={`w-10 h-10 rounded-full border-2 transition-colors duration-500 
                ${isActive ? 'border-[#FACC15]' : 'border-[#070707]'} object-cover`}
              alt="user"
            />
          ))}
          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all duration-500
            ${isActive 
              ? 'bg-black text-white border-black' 
              : 'bg-zinc-900 text-zinc-400 border-[#070707]'}`}>
            +2k
          </div>
        </div>
      </div>

      {/* Bottom Section: Typography */}
      <div className="relative z-10 w-full">
        <h2 className={`text-[80px] font-bold tracking-tighter leading-none mb-4 mt-14 transition-colors duration-500
          ${isActive ? 'text-black' : 'text-white'}`}>
          {displayValue.toLocaleString()}+
        </h2>
        
        <p className={`text-lg leading-snug font-medium w-full transition-colors duration-500
          ${isActive ? 'text-black' : 'text-[#666666]'}`}>
          Active users experiencing <br className="hidden md:block" />
          <span className={`${isActive ? 'text-black/70' : 'text-white'} transition-colors`}>
             joyful & refined interfaces built by our studio.
          </span>
        </p>
      </div>

    </motion.div>
  );
};

export default FeatureThree;