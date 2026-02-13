"use client";

import { motion } from "framer-motion";
import ReviewsMobile from "@/components/ui/reviews/ReviewsMobile";

export default function ReviewsSection() {
  // We define the Social Proof here so we can reuse it in two places
  const SocialProof = ({ className }: { className?: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`flex flex-col items-center lg:items-start gap-5 ${className}`}
    >
      <div className="flex -space-x-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#030303] bg-zinc-800 shadow-xl" 
            style={{ 
              backgroundImage: `url('https://i.pravatar.cc/100?u=studio${i}')`, 
              backgroundSize: 'cover' 
            }}
          />
        ))}
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#030303] bg-white flex items-center justify-center text-[10px] text-black font-black">
          +1k
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-1">
        <div className="flex items-center gap-2.5">
          <div className="flex text-yellow-500 text-sm tracking-widest">★★★★★</div>
          <span className="text-white font-semibold text-base md:text-lg">4.9 Star rated team</span>
        </div>
        <p className="text-zinc-500 text-sm font-medium">
          Driving <span className="text-zinc-300 font-bold">over 300k+ views</span> to our client websites.
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="relative bg-[#030303] py-16 md:py-24 px-6 md:px-12 lg:px-24 min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center relative z-10">
        
        {/* LEFT SIDE (PC) / TOP SIDE (MOBILE) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 leading-[1.1]">
              Client feedbacks
            </h3>
            <p className="text-zinc-500 text-lg md:text-xl font-medium">
              Global partners, world-class results.
            </p>
          </motion.div>

          {/* Social Proof: Visible ONLY on PC here */}
          <SocialProof className="hidden lg:flex" />
        </div>

        {/* RIGHT SIDE (PC) / MIDDLE SIDE (MOBILE) */}
        <div className="flex flex-col items-center gap-10">
          <ReviewsMobile />
          
          {/* Social Proof: Visible ONLY on MOBILE here (placed below phone) */}
          <SocialProof className="flex lg:hidden" />
        </div>

      </div>
    </section>
  );
}