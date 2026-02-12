"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const DesktopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsScrolled(currentScrollY > lastScrollY.current);
      } else {
        setIsScrolled(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About Us', href: '/about' },
  ];

  // Ultra-smooth spring config
  const smoothSpring = {
    type: "spring",
    stiffness: 40,   // Very low stiffness for slow movement
    damping: 14,     // Controlled oscillation
    mass: 1.8,       // Heavier mass for cinematic inertia
  };

  return (
    <div className="hidden md:flex fixed top-6 left-0 w-full z-[100] justify-center px-2 pointer-events-none">
      <motion.nav
        layout
        transition={smoothSpring}
        className={`
          pointer-events-auto flex items-center justify-between overflow-hidden
          backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]
          ${isScrolled 
            ? 'bg-black/90 px-5 py-1.5 rounded-full w-[420px]' 
            : 'bg-black/30 px-8 py-3 rounded-full w-[1000px]' 
          }
        `}
      >
        {/* LOGO */}
        <motion.div layout transition={smoothSpring} className="flex-shrink-0">
          <Link href="/" className="relative block w-7 h-7 group">
            <Image 
              src="/imgs/pws-logo.png" 
              alt="Logo" 
              fill 
              className="object-contain transition-transform duration-1000 group-hover:rotate-[360deg]" 
              priority 
            />
          </Link>
        </motion.div>

        {/* CENTER NAV LINKS - Animated Stagger */}
        <div className="flex items-center justify-center flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {!isScrolled && (
              <motion.ul
                key="nav-list"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.05, delayChildren: 0.2 } 
                  },
                  hidden: { 
                    opacity: 0, 
                    transition: { staggerChildren: 0.03, staggerDirection: -1 } 
                  }
                }}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                      hidden: { opacity: 0, y: 15, filter: "blur(4px)" }
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link 
                      href={link.href}
                      className="text-white/50 text-[12px] tracking-[0.2em] hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* ACTION BUTTON */}
        <motion.div layout transition={smoothSpring} className="flex-shrink-0">
          <Link href="/contact">
            <motion.button 
              layout
              transition={smoothSpring}
              className={`
                bg-[#1a4bd3] hover:bg-[#2563eb] text-white font-black uppercase tracking-[0.15em]
                rounded-full flex items-center justify-center transition-colors duration-500
                ${isScrolled ? 'px-5 py-2 text-[9px]' : 'px-8 py-3 text-[10px]'}
              `}
            >
              Start a Project
            </motion.button>
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default DesktopNavbar;