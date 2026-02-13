"use client";

import { motion } from "framer-motion";

const techStack = ["Webflow", "React", "WordPress", "API", "Shopify", "Next.js"];

export default function DevelopmentService() {
  return (
    // overflow-x-hidden is the safety net
    <div className="w-full overflow-x-hidden px-2">
      
      {/* Title Section - Using clamp for fluid text size */}
      <div className="text-center mb-10">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[12vw] sm:text-7xl md:text-8xl font-medium tracking-tighter leading-none"
        >
          Development
        </motion.h3>
        <p className="text-zinc-500 text-[9px] sm:text-xs uppercase tracking-[0.2em] mt-2">
          Engineering Digital Excellence
        </p>
      </div>

      {/* Main Container: Stack on mobile, Side-by-side on Laptop */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        
        {/* Left Side: Mockup & Tags */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          
          {/* Tags: flex-wrap ensures they never go off-screen */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full border border-zinc-800 text-[10px] bg-zinc-900 text-zinc-400 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Visual Mockup: w-full and aspect-video keeps it perfectly sized */}
          <div className="w-full relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-video shadow-xl">
             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 h-full w-full flex flex-col items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-white text-base sm:text-2xl font-bold italic uppercase">
                    Podcast Hosting
                  </p>
                </div>
                
                {/* Simplified Code Overlay: Hidden on mobile to prevent clutter/overflow */}
                <div className="absolute bottom-2 right-2 bg-black/80 p-2 rounded border border-zinc-700 font-mono text-[8px] hidden md:block">
                    <p className="text-pink-400">const <span className="text-blue-300">Dev</span> = ()</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-6 sm:gap-10">
            <div className="min-w-0"> {/* min-w-0 prevents flex items from overflowing */}
              <h4 className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-4">Full Stack</h4>
              <ul className="space-y-3">
                {["Integration", "Front-end", "Back-end"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-4">CMS</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                  <span className="truncate">Webflow</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Button: Adapts to container width */}
          <div className="mt-8">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              View details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}