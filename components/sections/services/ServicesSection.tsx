"use client";
import BrandingService from "@/components/ui/services/BrandingService";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ServicesSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Horizontal movement
  const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const x = useSpring(xRaw, { stiffness: 40, damping: 20, restDelta: 0.001 });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        
        {/* Fixed Services Heading */}
        <div className="absolute top-10 left-10 z-30">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Services
          </h2>
        </div>

        {/* --- CONSTANT SCROLL INDICATOR --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-4 shadow-2xl">
            {/* Visual Progress Ring */}
            <div className="relative w-6 h-6">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-white/20"
                />
                <motion.circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  pathLength="1"
                  className="text-white"
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>
            </div>
            
            <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
              Keep Scrolling
            </span>
          </div>
        </div>

        {/* Horizontal Moving Content */}
        <motion.div 
          style={{ x }} 
          className="flex h-full will-change-transform z-10"
        >
          {/* Slides */}
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="w-screen h-screen flex-shrink-0 flex items-center justify-center">
               <BrandingService />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;