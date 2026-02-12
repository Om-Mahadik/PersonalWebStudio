"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import BrandStrategy from "@/components/ui/services/BrandStrategy";
import BrandVisuals from "@/components/ui/services/BrandVisuals";
import Website from "@/components/ui/services/Website";

const HomeServiceSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Snappier Spring: Stiffness 200 makes it move much faster
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250, 
    damping: 40,
    mass: 0.5 // Lower mass = faster acceleration
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-66%"]);

  return (
    // Reduced to 250vh for faster horizontal travel per scroll
    <section ref={targetRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Optimized Desktop Slider */}
        <div className="hidden lg:block w-full">
           <div className="max-w-5xl mx-auto px-10">
              <motion.div 
                style={{ x }} 
                className="flex gap-12 will-change-transform"
              >
                <div className="w-[450px] shrink-0">
                  <BrandStrategy />
                </div>
                <div className="w-[450px] shrink-0">
                  <BrandVisuals />
                </div>
                <div className="w-[450px] shrink-0">
                  <Website />
                </div>
              </motion.div>
           </div>
        </div>

        {/* Mobile Horizontal Slider */}
        <motion.div 
          style={{ x }} 
          className="flex lg:hidden gap-6 px-6 will-change-transform"
        >
          <div className="w-[85vw] shrink-0">
            <BrandStrategy />
          </div>
          <div className="w-[85vw] shrink-0">
            <BrandVisuals />
          </div>
          <div className="w-[85vw] shrink-0">
            <Website />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServiceSection;