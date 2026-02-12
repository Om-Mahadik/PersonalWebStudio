"use client";
import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const BrandStrategy = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const p = {
    prod: { x: 80, y: 120 },
    cust: { x: 320, y: 120 },
    story: { x: 200, y: 300 }
  };

  const loopPath = `M ${p.prod.x} ${p.prod.y} L ${p.story.x} ${p.story.y} L ${p.cust.x} ${p.cust.y} Z`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      className="group relative w-full h-full bg-zinc-950 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden transition-all duration-700 hover:border-white/20 shadow-2xl flex flex-col justify-between"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* Main Container: Removed lg:flex-row to force vertical stack. 
          Changed items-center to ensure centering on all screens.
      */}
      <div className="flex flex-col items-center text-center gap-12 relative z-10 h-full">
        
        {/* Content Side */}
        <div className="w-full">
          <h2 className="text-4xl md:text-4xl font-semibold mb-6 tracking-tight text-white leading-tight">
            Brand Strategy
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-sm mx-auto leading-relaxed">
            We establish comprehensive product-market fit hypotheses, validate them, and visualize in the most creative ways.
          </p>
        </div>

        {/* Diagram Side */}
        <div className="relative w-full aspect-square max-w-[320px] md:max-w-[350px] overflow-visible mt-auto">
          <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
            <defs>
              <filter id="neon">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path d={loopPath} stroke="#18181b" strokeWidth="2" fill="none" />

            <motion.path 
              d={loopPath} 
              stroke="#EAB308" 
              strokeWidth="1.5" 
              fill="none" 
              className="opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {[0, 2, 4].map((delay) => (
              <motion.g key={delay}>
                <motion.circle
                  r="3"
                  fill={delay === 2 ? "#22C55E" : "#EAB308"}
                  filter="url(#neon)"
                  style={{ offsetPath: `path("${loopPath}")` }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "linear", 
                    delay 
                  }}
                />
              </motion.g>
            ))}

            {[
              { pos: p.prod, label: "Product", color: "#fff", icon: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z M3.3 7 l8.7 5 8.7-5 M12 22V12" },
              { pos: p.cust, label: "Customers", color: "#22C55E", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 0 1 0 8 M22 21v-2a4 4 0 0 0-3-3.87" },
              { pos: p.story, label: "Story", color: "#EAB308", icon: "M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" }
            ].map((node, i) => (
              <motion.g 
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <circle cx={node.pos.x} cy={node.pos.y} r="32" fill="#000" stroke="#27272a" strokeWidth="1" />
                <foreignObject x={node.pos.x - 12} y={node.pos.y - 12} width="24" height="24">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke={node.color} strokeWidth="1.5" strokeLinecap="round">
                      <path d={node.icon} fill={node.label === "Story" ? node.color : "none"} />
                    </svg>
                  </div>
                </foreignObject>
                <text x={node.pos.x} y={node.pos.y + 50} textAnchor="middle" fill="#71717a" fontSize="8" fontWeight="bold" className="uppercase tracking-[0.2em]">{node.label}</text>
              </motion.g>
            ))}
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandStrategy;