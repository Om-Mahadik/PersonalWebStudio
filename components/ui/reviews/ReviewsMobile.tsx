"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const REVIEWS_DATA = [
  { id: 1, user: "Arjun Mehta", country: "🇮🇳", text: "PersonalWebStudio built our e-commerce platform from scratch. The UI is world-class! 🚀", time: "Just now" },
  { id: 2, user: "Sarah Jenkins", country: "🇺🇸", text: "The branding overhaul exceeded our expectations. Truly a global design standard. ✨", time: "5m ago" },
  { id: 3, user: "Rohan Sharma", country: "🇮🇳", text: "Best UI/UX agency in India. They understood our vision perfectly for the fintech app. 💎", time: "12m ago" },
  { id: 4, user: "Liam O'Connor", country: "🇬🇧", text: "Their digital marketing strategy scaled our leads by 300% in London. Brilliant work. 📈", time: "22m ago" },
  { id: 5, user: "Priya Das", country: "🇮🇳", text: "Exceptional logo design. Minimalist, meaningful, and professional. 🎨", time: "35m ago" },
  { id: 6, user: "Zaid Al-Sayed", country: "🇦🇪", text: "Fast delivery and incredible web development. Our real estate portal looks amazing. 🏗️", time: "1h ago" },
  { id: 7, user: "Ananya Iyer", country: "🇮🇳", text: "The WebGL animations they added to our landing page are mind-blowing. 🪄", time: "2h ago" },
];

export default function ReviewsMobile() {
  const [index, setIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(() => [{ ...REVIEWS_DATA[0], uniqueKey: "initial" }]);
  const [currentTime, setCurrentTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof navigator !== "undefined" && "getBattery" in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryLevel(Math.round(battery.level * 100));
        battery.addEventListener("levelchange", () => setBatteryLevel(Math.round(battery.level * 100)));
      });
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 40, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % REVIEWS_DATA.length), 4800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const generateId = () => Math.random().toString(36).slice(2, 9);
    setVisibleReviews((prev) => [{ ...REVIEWS_DATA[index], uniqueKey: `pws-${generateId()}` }, ...prev].slice(0, 4));
  }, [index]);

  return (
    <div 
      className="relative flex items-center justify-center select-none overflow-visible py-10"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative">
        <div className="relative w-[310px] h-[640px] rounded-[3.5rem] bg-[#1a1a1a] shadow-[0_0_100px_-20px_rgba(255,255,255,0.1)] p-[2.5px] border border-white/10">
          <div className="w-full h-full bg-black rounded-[3.3rem] p-[5px] relative">
            <div className="relative w-full h-full bg-[#070707] rounded-[3rem] overflow-hidden">
              
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6.5 bg-black rounded-full z-50 border border-white/5 flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-blue-500/40 blur-[1px]" />
              </div>

              <div className="absolute top-5.5 inset-x-9 flex justify-between items-center z-40">
                <span className="text-white text-[12px] font-bold">{currentTime || "16:20"}</span>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-[1px] items-end h-[9px]">
                    {[0.5, 0.7, 0.9, 1].map((op, i) => (
                      <div key={i} className="w-[2px] bg-white rounded-full h-full" style={{ opacity: op }} />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white text-[10px] font-medium opacity-70">{batteryLevel ?? 88}%</span>
                    <div className="w-[20px] h-[10px] border border-white/30 rounded-[2px] p-[1px] relative">
                      <div style={{ width: `${batteryLevel ?? 88}%` }} className="h-full bg-white rounded-[0.5px]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative pt-18 px-4 h-full">
                <div className="flex justify-between items-center px-2 mb-6">
                  <h4 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">Recent Feedbacks</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                    <span className="text-zinc-700 text-[9px] font-bold uppercase">Online</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {visibleReviews.map((review) => (
                      <motion.div
                        key={review.uniqueKey}
                        layout
                        initial={{ opacity: 0, y: -30, scale: 0.95, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }}
                        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 1 }}
                        className="bg-[#141414] p-4 rounded-[1.4rem] border border-white/[0.05] shadow-xl origin-top"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[9px] font-black">PW</div>
                            <span className="text-white text-[13px] font-bold tracking-tight">
                              {review.user} <span className="ml-0.5">{review.country}</span>
                            </span>
                          </div>
                          <span className="text-zinc-600 text-[9px] font-medium">{review.time}</span>
                        </div>
                        <p className="text-zinc-400 text-[12.5px] leading-[1.5] font-normal antialiased">
                          {review.text}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-[4px] bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}