import React from 'react';
import Image from 'next/image';
// Import the image directly
import glassPill from '../../public/glass/glass-pill.jpg'; 

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center text-center px-4">
      <div className="flex flex-col items-center max-w-6xl">
        
        {/* TOP PILL */}
        <div className="relative w-80 h-[55px]  flex items-center justify-center mb-10 overflow-hidden">
          {/* Changed object-cover to object-contain to show the full image */}
          <Image 
            src={glassPill} 
            alt="Background texture"
            fill
            className="object-contain rounded-[300px]" 
            priority
          />
          <span className="relative z-10 text-white text-base font-light tracking-wide">
            Digital brand design agency
          </span>
        </div>

        {/* MAIN TEXT */}
        <h1 className="text-white text-5xl md:text-[90px] font-medium leading-[1.05] tracking-tight mb-16">
          Design & Brand <br />
          <span className="text-gray-400">Acceleration Studio</span>
        </h1>

        {/* BOTTOM PILL */}
        <button className="group relative flex items-center pl-10 pr-2 py-2 rounded-[100px] bg-[#0a0a0a] border border-white/10 transition-transform hover:scale-105 overflow-hidden">
          {/* Background image for the button - showing full image */}
          <div className="absolute inset-0 opacity-100">
            <Image 
              src={glassPill} 
              alt="Button texture"
              fill
              className="object-contain"
            />
          </div>
          
          <span className="relative z-10 text-white text-2xl mr-8 font-normal">
            Schedule a Call
          </span>

          <div className="relative z-10 bg-[#1a46ff] w-[70px] h-[70px] rounded-full flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-white transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </button>

      </div>
    </section>
  );
};

export default Hero;