"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const principles = [
  "Design with purpose, not decoration",
  "Performance over bloated features",
  "Clear communication, always",
  "Build for growth, not just launch",
  "Quality > quantity"
];

const AboutPhilosophy: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Wait for 3 seconds per item
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % principles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black py-16 px-6 flex flex-col items-center">
      <div className="max-w-3xl w-full flex flex-col gap-4"> {/* Reduced gap from 8 to 4 */}
        {principles.map((text, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={index} className="relative py-1"> {/* Tightened vertical padding */}
              <motion.div
                initial={false}
                animate={{
                  x: isActive ? 20 : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex items-center gap-5"
              >
                {/* Icons are no longer greyed out, staying orange/zinc-300 */}
                <div 
                  className={`transition-colors duration-500 ${
                    isActive ? 'text-orange-500' : 'text-orange-900/40'
                  }`}
                >
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>

                {/* Principle Text - High Contrast and tight spacing */}
                <h3 
                  className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-500 ${
                    isActive ? 'text-white' : 'text-zinc-500'
                  }`}
                >
                  {text}
                </h3>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutPhilosophy;