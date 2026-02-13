import React from 'react';
import { Eye } from 'lucide-react';

interface HomePortfolioSliderCardProps {
  src: string;
  title: string;
  description: string;
  views: number | string;
}

const HomePortfolioSliderCard: React.FC<HomePortfolioSliderCardProps> = ({ src, title, description, views }) => {
  const isVideo = src?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="bg-[#080808] border border-zinc-900 rounded-[1.5rem] overflow-hidden flex flex-col group h-full hover:border-zinc-800 transition-all duration-500">
      
      {/* 1. Media Container with Padding */}
      <div className="p-3">
        <div className="relative w-full aspect-[2/3] max-h-[45vh] md:max-h-[500px] overflow-hidden rounded-[1rem] bg-zinc-900/40">
          {isVideo ? (
            <video 
              src={src} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              autoPlay loop muted playsInline 
            />
          ) : (
            <img 
              src={src} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              loading="lazy" 
            />
          )}
        </div>
      </div>

      {/* 2. Text Content - Blue on Hover */}
      <div className="px-5 pb-5 pt-1 flex flex-col justify-between flex-grow">
        <div>
          {/* Removed italic, added group-hover:text-blue-500 */}
          <h3 className="text-white text-xs md:text-sm font-bold tracking-tight line-clamp-1 transition-colors duration-300 group-hover:text-blue-500">
            {title}
          </h3>
          <div className="pt-2 flex items-center gap-2 text-zinc-600">
            <Eye size={12} className="opacity-50" />
            <span className="text-[10px] font-black uppercase tracking-tighter">
              {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePortfolioSliderCard;