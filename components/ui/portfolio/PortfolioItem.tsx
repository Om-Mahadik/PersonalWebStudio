import React from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  src: string;
  title: string;
  description: string;
  views: number | string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ src, title, description, views, index }) => {
  const isVideo = src.match(/\.(mp4|webm|ogg)$/i);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="break-inside-avoid mb-6 px-2"
    >
      {/* The Card Container */}
      <div className="bg-[#080808] border border-zinc-900 rounded-[2.5rem] overflow-hidden flex flex-col group transition-all duration-500 hover:border-zinc-800 shadow-2xl">
        
        {/* Media Container - Matches the Pepsi reference padding/radius */}
        <div className="p-3">
          <div className="rounded-[1.8rem] overflow-hidden bg-zinc-900/40">
            {isVideo ? (
              <video
                src={src}
                className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                autoPlay loop muted playsInline controls={false}
              />
            ) : (
              <img 
                src={src} 
                alt={title} 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            )}
          </div>
        </div>

        {/* Text Content - Professional Spacing */}
        <div className="px-8 pb-10 pt-4 space-y-3">
          <h3 className="text-white text-[20px] font-bold tracking-tight">
            {title}
          </h3>
          <p className="text-zinc-500 text-[15px] leading-relaxed font-medium">
            {description}
          </p>
          
          {/* Views Section - Exact layout from image */}
          <div className="pt-2 flex items-center gap-3 text-zinc-600">
            <Eye size={18} strokeWidth={1.5} />
            <span className="text-sm font-medium">{views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;