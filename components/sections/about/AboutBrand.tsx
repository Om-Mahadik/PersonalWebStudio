"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutBrand: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 px-6 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full space-y-10">
        
        {/* Centered Logo Only Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image 
              src="/imgs/pws-logo.png" 
              alt="PWS Logo" 
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Narrative Section - Simple & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-zinc-200 text-xl md:text-[2.5rem] font-medium leading-[1.1] tracking-tight">
            We collaborate closely with founders and teams to understand their goals, 
            design meaningful user experiences, and develop fast, scalable websites. 
            From strategy and UI/UX to development and launch, we focus on building 
            digital assets that add long-term value.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutBrand;