"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FloatingMessage = ({ x, y, delay, duration, text, lang, color, img }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0, 1, 1, 0], 
      y: [y, y - 40, y],
      x: [x, x + 20, x] 
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    className="absolute flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-2xl"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <img src={img} alt="avatar" className="w-8 h-8 rounded-full object-cover border border-white/30" />
    <div>
      <p className="text-white text-sm font-medium">{text}</p>
      <span className="text-[10px] text-white/50 uppercase tracking-widest">{lang}</span>
    </div>
  </motion.div>
);

const AgencyHeroSection = () => {
  const messages = [
    { x: 10, y: 20, text: "Ciao!", lang: "Italian", delay: 0, dur: 8, img: "https://i.pravatar.cc/150?u=1" },
    { x: 75, y: 15, text: "Hallo! Wie geht es dir?", lang: "German", delay: 2, dur: 10, img: "https://i.pravatar.cc/150?u=2" },
    { x: 80, y: 70, text: "¡Hola! ¿Cómo estás?", lang: "Spanish", delay: 4, dur: 9, img: "https://i.pravatar.cc/150?u=3" },
    { x: 15, y: 75, text: "Hello, how are you?", lang: "English", delay: 1, dur: 11, img: "https://i.pravatar.cc/150?u=4" },
    { x: 5, y: 45, text: "Merhaba!", lang: "Turkish", delay: 5, dur: 7, img: "https://i.pravatar.cc/150?u=5" },
    { x: 85, y: 40, text: "Bongu!", lang: "Maltese", delay: 3, dur: 12, img: "https://i.pravatar.cc/150?u=6" },
  ];

  return (
    <section className="relative w-full h-[600px] bg-[#0a0a0a] overflow-hidden flex items-center justify-center px-6">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {messages.map((msg, i) => (
          <FloatingMessage 
            key={i}
            x={msg.x} 
            y={msg.y} 
            text={msg.text} 
            lang={msg.lang} 
            delay={msg.delay} 
            duration={msg.dur}
            img={msg.img}
          />
        ))}
      </div>

      {/* Main Text Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-semibold text-white leading-tight"
        >
          With seamless communication and strategy, <br />
          <span className="text-blue-400">we bridge the gap</span> between your brand and the people who matter most, anywhere in the world.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg text-gray-400"
        >
          Your personal studio for high-end web experiences.
        </motion.p>
      </div>

      {/* Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
    </section>
  );
};

export default AgencyHeroSection;