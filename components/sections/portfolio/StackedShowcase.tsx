"use client";

import React from 'react';

const StackedShowcase = () => {
const images = [
  "/portfolio/port1.jpg",
  "/portfolio/port2.jpg",
  "/portfolio/port3.jpg",
  "/portfolio/port2.jpg",
  "/portfolio/port1.jpg",
  
];

  return (
    <section className="relative w-full bg-black flex items-center justify-center overflow-hidden py-0 md:py-24">
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. INITIAL ENTRANCE FAN */
        @keyframes entrance {
          0% { 
            opacity: 0; 
            transform: translateY(40px) rotate(var(--r)) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) rotate(var(--r)) scale(1); 
          }
        }

        /* 2. AUTONOMOUS LOOP (Active by default) */
        @keyframes sequentialLift {
          0%, 25%, 100% { 
            transform: translateY(0) rotate(var(--r)) scale(1);
          }
          8%, 18% { 
            transform: translateY(-40px) rotate(calc(var(--r) * 0.3)) scale(1.3); 
          }
        }

        .stack-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 300px;
        }

        .stack-card {
          position: relative;
          margin-left: -45px;
          opacity: 0;
          will-change: transform;
          z-index: var(--z);
          filter: saturate(1.2) brightness(1);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), margin 0.6s ease;
        }

        @media (min-width: 768px) {
          .stack-container { min-height: 500px; }
          .stack-card { margin-left: -110px; }
        }

        /* STACK CONFIG: Right-most is Front */
        .stack-card:nth-child(1) { --r: -12deg; --z: 10; animation: entrance 0.6s forwards 0.1s, sequentialLift 20s infinite 2s; }
        .stack-card:nth-child(2) { --r: -6deg;  --z: 20; animation: entrance 0.6s forwards 0.2s, sequentialLift 20s infinite 6s; }
        .stack-card:nth-child(3) { --r: 0deg;   --z: 30; animation: entrance 0.6s forwards 0.3s, sequentialLift 20s infinite 10s; }
        .stack-card:nth-child(4) { --r: 6deg;   --z: 40; animation: entrance 0.6s forwards 0.4s, sequentialLift 20s infinite 14s; }
        .stack-card:nth-child(5) { --r: 12deg;  --z: 50; animation: entrance 0.6s forwards 0.5s, sequentialLift 20s infinite 18s; }

        /* PC INTERACTION: Manual Hover Override */
        @media (min-hover: hover) {
          .stack-container:hover .stack-card {
            animation-play-state: paused;
          }
          
          .stack-card:hover {
            transform: translateY(-90px) rotate(0deg) scale(1.45) !important;
            z-index: 100 !important;
            margin: 0 40px !important;
            filter: saturate(1.6) brightness(1.1) !important;
          }
        }
      `}} />

      <div className="stack-container">
        {images.map((src, i) => (
          <div key={i} className="stack-card">
            <div className="w-24 h-36 md:w-52 md:h-72 bg-zinc-900 rounded-xl md:rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[20px_0_40px_rgba(0,0,0,0.9)] relative group">
              <img 
                src={src} 
                alt="Project Work" 
                className="w-full h-full object-cover"
              />
              {/* Internal Glass Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default StackedShowcase;