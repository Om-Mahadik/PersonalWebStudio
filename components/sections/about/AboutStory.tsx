"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const founders = [
  { 
    name: "Sahil", 
    image: "/imgs/found1.jpg", 
    speech: "We were building for friends late at night...", 
    side: "left" 
  },
  { 
    name: "Om", 
    image: "/imgs/found2.jpg", 
    speech: "...and realized functional sites often lacked soul.", 
    side: "top" 
  },
  { 
    name: "Prachi", 
    image: "/imgs/found3.jpg", 
    speech: "So we bridged the gap between design & code.", 
    side: "right" 
  },
];

const AboutStory: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 px-4 flex flex-col items-center overflow-hidden">
      <div className="max-w-5xl w-full text-center space-y-24">
        
        {/* Main Story Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
            Our Story
          </h2>
          <p className="text-white text-xl md:text-3xl leading-snug font-medium tracking-tight max-w-4xl mx-auto">
            Personal Web Studio started as a small experiment by engineering students who noticed a gap — 
            beautiful designs were being sold without solid development.
          </p>
        </motion.div>

        {/* Meet Founders Section with Speech Bubbles */}
        <div className="space-y-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-xs font-bold tracking-[0.4em] uppercase"
          >
            Meet Founders
          </motion.h2>

          <div className="flex flex-row justify-center items-center gap-4 md:gap-20">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group flex flex-col items-center gap-4"
              >
                {/* Speech Bubble - Professional Minimal Style */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + (index * 0.3), duration: 0.5 }}
                  className={`absolute z-20 -top-16 md:-top-20 w-32 md:w-48 p-3 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl pointer-events-none
                    ${founder.side === 'left' ? '-translate-x-4 md:-translate-x-8' : ''}
                    ${founder.side === 'right' ? 'translate-x-4 md:translate-x-8' : ''}
                  `}
                >
                  <p className="text-zinc-300 text-[10px] md:text-xs leading-tight font-medium italic">
                    "{founder.speech}"
                  </p>
                  {/* Bubble Tail */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-800 rotate-45" />
                </motion.div>

                {/* Profile Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full p-[2px] border border-zinc-800 group-hover:border-white transition-all duration-500 shadow-xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src={founder.image} 
                      alt={founder.name} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <span className="text-zinc-400 group-hover:text-white text-sm md:text-xl font-semibold transition-colors duration-300">
                  {founder.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;