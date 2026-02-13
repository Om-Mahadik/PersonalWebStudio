"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const avatars = [
  { id: 1, src: "https://i.pravatar.cc/150?u=9" },
  { id: 2, src: "https://i.pravatar.cc/150?u=12" },
  { id: 3, src: "https://i.pravatar.cc/150?u=24" },
  { id: 4, src: "https://i.pravatar.cc/150?u=35" },
];

const AboutSocialProof: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16"
    >
      {/* Avatar Stack */}
      <div className="flex -space-x-5 items-center">
        {avatars.map((avatar, index) => (
          <motion.div
            key={avatar.id}
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.5 + (index * 0.1),
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-black overflow-hidden bg-zinc-800 shadow-xl"
          >
            <img 
              src={avatar.src} 
              alt="Client" 
              className="w-full h-full object-cover" // Removed grayscale
            />
          </motion.div>
        ))}
        
        {/* 100+ Circle - Fixed for PC visibility */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-black bg-zinc-900 flex items-center justify-center shadow-2xl"
        >
          <span className="text-white text-sm md:text-base font-bold">
            100+
          </span>
        </motion.div>
      </div>

      {/* Rating & Text Section */}
      <div className="flex flex-col items-center md:items-start gap-1">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -45, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
          >
            <Star size={28} className="fill-yellow-400 text-yellow-400" />
          </motion.div>
          
          <span className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            4.8 <span className="text-zinc-600 font-medium">/ 5.0</span>
          </span>
        </div>
        
        <p className="text-zinc-400 text-sm md:text-base font-medium">
          Trusted by global businesses
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSocialProof;