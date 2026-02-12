"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fonts = [
  'font-serif',
  'font-mono',
  'font-sans font-black',
  'italic font-serif font-light',
  'font-mono tracking-widest',
  'font-sans font-thin uppercase',
];

const FontChangeBlock = () => {
  const word = "Font".split("");
  // Each letter gets its own font index state
  const [indices, setIndices] = useState([0, 0, 0, 0]);

  useEffect(() => {
    // This interval triggers the "ripple"
    const timer = setInterval(() => {
      word.forEach((_, i) => {
        // Stagger the change for each letter
        setTimeout(() => {
          setIndices(prev => {
            const newIndices = [...prev];
            newIndices[i] = (newIndices[i] + 1) % fonts.length;
            return newIndices;
          });
        }, i * 100); // 100ms delay between each letter's change
      });
    }, 1500); // Wait 1.5s between full word cycles

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full bg-white/[0.02] rounded-3xl overflow-hidden">
      <div className="flex">
        {word.map((char, i) => (
          <motion.span
            key={`${i}-${indices[i]}`}
            initial={{ opacity: 0.3, scale: 0.8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`text-3xl text-white inline-block w-[1.2ch] text-center transition-all duration-200 ${fonts[indices[i]]}`}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default FontChangeBlock;