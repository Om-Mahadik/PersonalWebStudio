"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HomePortfolioSliderCard from './HomePortfolioSliderCard';
import VerticalStackedShowcase from './VerticalStackedShowcase'; 

const RECENT_PROJECTS = [
  { id: 1, src: "/portfolio/port1.jpg", title: "Project Alpha", views: "1.2k" },
  { id: 2, src: "/portfolio/port2.jpg", title: "Brand System", views: "842" },
  { id: 3, src: "/portfolio/port3.jpg", title: "Studio Motion", views: 931 },
];

const HomePortfolioSlider = () => {
  return (
    <section className="bg-black py-12 md:py-20 overflow-hidden">
      {/* Centered Minimal Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-[14vw] md:text-[8vw] font-black text-white leading-none tracking-tighter uppercase italic opacity-90">
          Portfolio
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        className="flex items-center overflow-x-auto snap-x snap-mandatory px-8 md:px-[15vw] gap-6 md:gap-10 no-scrollbar" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* 1. THE VERTICAL STACKED SHOWCASE (Left-most Hook) */}
        <div className="min-w-[85vw] md:min-w-[550px] snap-center shrink-0 flex flex-col items-center justify-center relative">
          <div className="scale-90 md:scale-100 w-full">
             <VerticalStackedShowcase />
          </div>
          <div className="mt-4 md:absolute md:bottom-[-20px] animate-pulse text-white/20 font-mono text-[8px] uppercase tracking-[0.4em]">
            Swipe to explore →
          </div>
        </div>

        {/* 2. INDIVIDUAL VERTICAL CARDS */}
        {RECENT_PROJECTS.map((item) => (
          <div 
            key={item.id} 
            /* 60vw on mobile ensures the full card is seen + a hint of the next one */
            className="min-w-[60vw] md:min-w-[320px] snap-center shrink-0"
          >
            <HomePortfolioSliderCard {...item} />
          </div>
        ))}

        {/* 3. VIEW ALL REDIRECT */}
        <div className="min-w-[50vw] md:min-w-[200px] snap-center flex items-center justify-center shrink-0 pt-20 md:pt-0">
          <Link href="/portfolio" className="group flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white transition-all duration-500">
              <ArrowRight className="text-white group-hover:text-black" size={20} />
            </div>
            <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.4em]">Full Archive</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolioSlider;