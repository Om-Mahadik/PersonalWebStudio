"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import StackedShowcase from './StackedShowcase';

const PortfolioHeader: React.FC = () => {
  return (
    <section className="w-full bg-black pt-16 pb-4 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Minimal Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-6xl font-bold tracking-tight text-center"
        >
          Portfolio
        </motion.h1>

        {/* Highlight Reel / Image Trail - No extra gap */}
        <div className="w-full">
          <StackedShowcase />
        </div>

        {/* Simple Privacy Block - Sitting tight below the showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl w-full"
        >
          <div className="p-6 rounded-[2rem] border border-zinc-900 bg-[#080808] flex flex-col items-center gap-2">
            <div className="text-zinc-600">
              <Lock size={14} strokeWidth={2} />
            </div>
            
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-normal text-center">
              A significant portion of our work is governed by 
              <span className="text-zinc-300"> Non-Disclosure Agreements (NDAs)</span>. 
              To protect client confidentiality, these projects are not displayed publicly.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioHeader;