"use client";

import { motion } from "framer-motion";

const assets = [
  { color: "bg-blue-600", rotate: -5, z: 30 },
  { color: "bg-emerald-500", rotate: -15, z: 20 },
  { color: "bg-yellow-400", rotate: -25, z: 10 },
];

export default function MarketingAssets() {
  return (
    <div className="w-full overflow-hidden px-4">
      {/* Title Section */}
      <div className="text-center mb-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[12vw] sm:text-7xl md:text-8xl font-medium tracking-tighter leading-tight"
        >
          Marketing <br className="sm:hidden" /> Assets
        </motion.h3>
        <p className="text-zinc-500 text-[10px] sm:text-sm max-w-xl mx-auto mt-6 leading-relaxed">
          Marketing strategy is proudly responsible for the half of a campaign's success, 
          another half relies solely on its implementation.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start max-w-5xl mx-auto">
        
        {/* Left Side: Stacked Cards Visual */}
        <div className="relative w-full max-w-[300px] aspect-[4/5] lg:w-1/2 flex items-center justify-center">
          {assets.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: card.rotate }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              style={{ zIndex: card.z }}
              className={`absolute w-full h-full rounded-2xl shadow-2xl border border-white/10 ${card.color}`}
            >
              {/* Optional inner content for the top card */}
              {i === 0 && (
                 <div className="p-6 flex flex-col justify-end h-full">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md mb-4" />
                    <div className="h-4 w-3/4 bg-white/20 rounded" />
                 </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Side: Lists */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <h4 className="text-zinc-500 uppercase tracking-widest text-[11px] font-bold mb-6">Motion videos</h4>
            <ul className="space-y-4">
              {["Animated logos", "Product illustrations", "Launch videos", "Illustrations", "Visual effects"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-500 uppercase tracking-widest text-[11px] font-bold mb-6">Illustrations</h4>
            <ul className="space-y-4">
              {["Illustration 2D", "Illustration 3D"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}