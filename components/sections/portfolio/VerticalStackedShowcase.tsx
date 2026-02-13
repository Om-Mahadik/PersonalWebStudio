"use client";

import React from 'react';

const VerticalStackedShowcase = () => {
  const images = [
    "/portfolio/port1.jpg",
    "/portfolio/port2.jpg",
    "/portfolio/port3.jpg",
    "/portfolio/port2.jpg",
    "/portfolio/port1.jpg",
  ];

  return (
    <div className="relative w-full flex items-center justify-center overflow-visible">
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. INITIAL ENTRANCE FAN */
        @keyframes entrance {
          0% { 
            opacity: 0; 
            transform: translateY(30px) rotate(var(--r)) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) rotate(var(--r)) scale(1); 
          }
        }

        /* 2. SLOWER ELEGANT LOOP */
        @keyframes verticalLift {
          0%, 30%, 100% { 
            transform: translateY(0) rotate(var(--r)) scale(1);
          }
          10%, 20% { 
            transform: translateY(-30px) rotate(calc(var(--r) * 0.5)) scale(1.1); 
            z-index: 100;
          }
        }

        .stack-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          /* Reduced height to keep the vertical cards compact */
          min-height: 400px; 
        }

        .stack-card {
          position: relative;
          margin-left: -60px; /* Tighter overlap for mobile */
          opacity: 0;
          will-change: transform;
          z-index: var(--z);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 768px) {
          .stack-card { margin-left: -130px; }
        }

        /* Vertical Stack Timing */
        .stack-card:nth-child(1) { --r: -15deg; --z: 10; animation: entrance 0.8s forwards 0.1s, verticalLift 15s infinite 2s; }
        .stack-card:nth-child(2) { --r: -8deg;  --z: 20; animation: entrance 0.8s forwards 0.2s, verticalLift 15s infinite 5s; }
        .stack-card:nth-child(3) { --r: 0deg;   --z: 30; animation: entrance 0.8s forwards 0.3s, verticalLift 15s infinite 8s; }
        .stack-card:nth-child(4) { --r: 8deg;   --z: 40; animation: entrance 0.8s forwards 0.4s, verticalLift 15s infinite 11s; }
        .stack-card:nth-child(5) { --r: 15deg;  --z: 50; animation: entrance 0.8s forwards 0.5s, verticalLift 15s infinite 14s; }

        /* Interaction - Manual Fan out */
        .stack-container:hover .stack-card {
          margin-left: 10px;
          transform: rotate(0deg);
          animation-play-state: paused;
        }
      `}} />

      <div className="stack-container">
        {images.map((src, i) => (
          <div key={i} className="stack-card">
            {/* Aspect 2/3 for Vertical Focus */}
            <div className="w-28 h-44 md:w-52 md:h-80 bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-[15px_0_30px_rgba(0,0,0,0.8)] relative group">
              <img 
                src={src} 
                alt="Studio Work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default VerticalStackedShowcase;