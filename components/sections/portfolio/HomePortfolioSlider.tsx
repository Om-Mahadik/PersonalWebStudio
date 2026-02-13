"use client";

import { ArrowRight, MoveLeft } from 'lucide-react';
import Link from 'next/link';
import HomePortfolioSliderCard from './HomePortfolioSliderCard';
import VerticalStackedShowcase from './VerticalStackedShowcase';

// 1. Define the interface to match exactly what HomePortfolioSliderCard expects
interface Project {
  id: number;
  src: string;
  title: string;
  views: string;
  description: string; // Added because the error says it's required
}

const RECENT_PROJECTS: Project[] = [
  { 
    id: 1, 
    src: "/portfolio/port1.jpg", 
    title: "Brand Identity", 
    views: "1.2k",
    description: "Visual identity for modern startups." 
  },
  { 
    id: 2, 
    src: "/portfolio/port2.jpg", 
    title: "UI Experience", 
    views: "842",
    description: "High-fidelity digital interfaces."
  },
  { 
    id: 3, 
    src: "/portfolio/port3.jpg", 
    title: "Motion Studio", 
    views: "931", // Changed from number to string
    description: "Dynamic motion graphics and 3D."
  },
];

const HomePortfolioSlider = () => {
  return (
    <section className="bg-black py-12 md:py-24 overflow-hidden">
      <style jsx global>{`
        @keyframes slideRightToLeft {
          0% { transform: translateX(10px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(-10px); opacity: 0; }
        }
        .animate-swipe-hint {
          animation: slideRightToLeft 2s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-[14vw] md:text-[8vw] font-black text-white leading-none tracking-tighter opacity-90">
          Portfolio
        </h2>
      </div>

      <div 
        className="flex items-center overflow-x-auto snap-x snap-mandatory px-6 md:px-[15vw] gap-4 md:gap-6 no-scrollbar outline-none" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        <div className="min-w-[85vw] md:min-w-[500px] snap-center shrink-0 flex flex-col items-center">
          <VerticalStackedShowcase />
          
          <div className="mt-10 md:mt-14 group cursor-pointer select-none">
            <div className="flex items-center gap-4 px-4 py-2">
              <div className="animate-swipe-hint">
                <MoveLeft 
                  size={18} 
                  strokeWidth={1.5} 
                  className="text-zinc-500 group-hover:text-[#C0FF00] transition-colors duration-500" 
                />
              </div>

              <span className="text-zinc-500 group-hover:text-white transition-colors duration-500 font-mono text-[10px] uppercase tracking-[0.4em] font-light">
                Swipe Left
              </span>
            </div>
          </div>
        </div>

        {RECENT_PROJECTS.map((item) => (
          <div 
            key={item.id} 
            className="min-w-[75vw] md:min-w-[320px] snap-center shrink-0"
          >
            <HomePortfolioSliderCard {...item} />
          </div>
        ))}

        <div className="min-w-[50vw] md:min-w-[200px] snap-center flex items-center justify-center shrink-0">
          <Link href="/portfolio" className="group flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C0FF00] transition-all duration-500">
              <ArrowRight className="text-white group-hover:text-black" size={20} />
            </div>
            <p className="text-zinc-500 font-mono text-[8px] uppercase tracking-[0.4em]">Archive</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolioSlider;