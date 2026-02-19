"use client";

import React, { useEffect, useRef, useState } from 'react';

const VerticalStackedShowcase = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    "/portfolio/port1.jpg", 
    "/portfolio/port2.jpg", 
    "/portfolio/port3.jpg", 
    "https://i.pinimg.com/1200x/3a/2e/13/3a2e136d51cd303ddb57a5474dabd2de.jpg",
    "https://i.pinimg.com/1200x/48/8f/5a/488f5afafe01617b218a3f4371d54bc0.jpg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when the component is 40% visible in the viewport
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.4 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full flex items-center justify-center min-h-[450px] md:min-h-[600px]">
      {/* We only inject the animation styles if isInView is true.
          This prevents the animation from running 'in the dark'.
      */}
      {isInView && (
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes orbitEntrance {
            0% { 
              opacity: 0; 
              transform: translateY(100px) rotate(0deg) scale(0.5); 
            }
            30% { 
              opacity: 1; 
              transform: translateY(0) rotate(0deg) scale(1); 
            }
            60% { 
              transform: rotate(var(--angle)) translateY(var(--radius)) rotate(calc(var(--angle) * -1));
            }
            100% { 
              transform: rotate(var(--angle)) translateY(var(--radius)) rotate(calc(var(--angle) * -1));
            }
          }

          @keyframes mainRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes counterRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }

          .orbit-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: mainRotate 25s linear infinite 3.5s;
          }

          .stack-card {
            position: absolute;
            will-change: transform;
            animation: orbitEntrance 2.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
          }

          .card-inner {
            animation: counterRotate 25s linear infinite 3.5s;
          }

          /* Configuration for 5 images in a circle */
          .stack-card:nth-child(1) { --angle: 0deg;   --radius: -150px; animation-delay: 0.1s; }
          .stack-card:nth-child(2) { --angle: 72deg;  --radius: -150px; animation-delay: 0.2s; }
          .stack-card:nth-child(3) { --angle: 144deg; --radius: -150px; animation-delay: 0.3s; }
          .stack-card:nth-child(4) { --angle: 216deg; --radius: -150px; animation-delay: 0.4s; }
          .stack-card:nth-child(5) { --angle: 288deg; --radius: -150px; animation-delay: 0.5s; }

          @media (max-width: 768px) {
            .stack-card:nth-child(n) { --radius: -110px; }
          }
        `}} />
      )}

      <div className={`orbit-container ${!isInView ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}>
        {images.map((src, i) => (
          <div key={i} className="stack-card">
            <div className="card-inner w-28 h-40 md:w-44 md:h-64 bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <img 
                src={src} 
                alt="Studio Portfolio" 
                className="w-full h-full object-cover block" 
              />
            </div>
          </div>
        ))}
        
        {/* Central Core */}
        <div className="absolute w-12 h-12 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 flex items-center justify-center backdrop-blur-sm z-0">
           <div className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-ping" />
        </div>
      </div>
    </div>
  );
};

export default VerticalStackedShowcase;