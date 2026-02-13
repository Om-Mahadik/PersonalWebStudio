"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const strengths = [
  { id: 1, icon: "/icons/about1.svg", title: "A Young Team With Real Passion", color: "from-orange-500/10" },
  { id: 2, icon: "/icons/about2.svg", title: "Skilled People, Not Just Workers", color: "from-blue-500/10" },
  { id: 3, icon: "/icons/about3.svg", title: "Work-From-Home, But Work-From-Heart", color: "from-pink-500/10" },
  { id: 4, icon: "/icons/about4.svg", title: "Three Years of Real Experience", color: "from-emerald-500/10" },
  { id: 5, icon: "/icons/about5.svg", title: "Meaningful Work Over Everything", color: "from-purple-500/10" },
];

const AboutStrengths: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 px-4 overflow-hidden">
      {/* PC: Single Horizontal Line | Mobile: 2-Col Grid */}
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-6">
          
          {/* Mapping the first 4 items */}
          <div className="grid grid-cols-2 lg:flex lg:flex-nowrap gap-4 md:gap-6 w-full lg:w-auto">
            {strengths.slice(0, 4).map((item, index) => (
              <StrengthCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Last item: Centered on mobile below the grid, stays in line on PC */}
          <div className="flex justify-center w-full lg:w-auto">
            <StrengthCard item={strengths[4]} index={4} isLast />
          </div>

        </div>
      </div>
    </section>
  );
};

const StrengthCard = ({ item, index, isLast = false }: { item: any, index: number, isLast?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group relative p-6 md:p-8 rounded-[2rem] bg-[#080808] border border-zinc-900 transition-all duration-500 hover:border-zinc-700 flex-1 min-w-[160px] lg:min-w-[220px] max-w-[400px] ${isLast ? 'col-span-2' : ''}`}
  >
    {/* Soft Glow Background */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b ${item.color} to-transparent rounded-[2rem]`} />

    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
      {/* Icon with Dynamic Pop */}
      <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110">
        <Image 
          src={item.icon} 
          alt={item.title} 
          fill
          className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
        />
      </div>

      {/* Text Hierarchy */}
      <h4 className="text-zinc-400 group-hover:text-white text-sm md:text-base font-semibold leading-tight tracking-tight transition-colors duration-500">
        {item.title}
      </h4>
    </div>
  </motion.div>
);

export default AboutStrengths;