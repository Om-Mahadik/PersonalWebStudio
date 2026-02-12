"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Live digital clock logic
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    // Prevent background scrolling
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => clearInterval(timer);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about' },
  ];

  const menuVariants = {
    initial: { clipPath: 'circle(0% at 92% 5%)' },
    animate: { 
      clipPath: 'circle(150% at 92% 5%)', 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      clipPath: 'circle(0% at 92% 5%)', 
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.08, duration: 0.6, ease: "easeOut" }
    }),
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
  };

  return (
    <nav className="md:hidden">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-4 py-6 mix-blend-difference">
        <Link href="/" className="relative w-8 h-8">
          <Image 
            src="/imgs/pws-logo.png" 
            alt="PWS Logo" 
            fill 
            className="object-contain" // Ensures logo is white on dark/mixed backgrounds
            priority 
          />
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="relative z-[110] flex flex-col items-end gap-1.5 p-2"
          aria-label="Toggle Menu"
        >
          <span className={`h-[1px] bg-white transition-all duration-500 ${isOpen ? 'w-7 rotate-45 translate-y-[3.5px]' : 'w-7'}`} />
          <span className={`h-[1px] bg-white transition-all duration-500 ${isOpen ? 'w-7 -rotate-45 -translate-y-[3.5px]' : 'w-4'}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#080808] z-[90] flex flex-col justify-between px-10 py-20"
          >
            {/* Top Row: Navigation Label & Live Clock */}
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">Navigation</span>
              <span className="text-white/40 font-mono text-xs">{time} IST</span>
            </div>

            {/* Links Section */}
            <div className="flex flex-col space-y-4 mt-10">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-5xl font-bold tracking-tighter hover:text-[#1a4bd3] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-auto space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="group relative w-full py-5 bg-[#1a4bd3] hover:bg-[#2563eb] text-white font-bold transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 rounded-sm shadow-xl shadow-blue-900/20">
                    <span className="uppercase tracking-[0.2em] text-xs">Start a Project</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </motion.div>

              {/* Socials & Studio Mark */}
              <div className="flex justify-between items-end pt-6">
                <div className="flex gap-6">
                  {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                    <span 
                      key={social} 
                      className="text-white/30 text-[10px] font-bold hover:text-white transition-colors cursor-pointer tracking-widest uppercase"
                    >
                      {social.slice(0, 2)} {/* This keeps it as IG, LI, BE */}
                    </span>
                  ))}
                </div>
                <p className="text-white/10 text-[9px] uppercase tracking-widest font-medium">
                  © 2026 Personal Web Studio
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;