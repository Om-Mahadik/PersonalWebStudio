"use client";

import { motion } from 'framer-motion';

const MinimalBlogHeader = () => {
  return (
    <section className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* pt-20: Space for your menu bar 
          pb-4: Minimal space below to transition into the Featured card
      */}
      <div className="text-center px-6 pt-20 pb-4">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          /* Reduced font size: 14vw -> 10vw on mobile, 10vw -> 8vw on desktop */
          className="text-[12vw] md:text-[8vw] font-black text-white leading-none tracking-tighter"
        >
          Blogs
        </motion.h1>
      </div>

    </section>
  );
};

export default MinimalBlogHeader;