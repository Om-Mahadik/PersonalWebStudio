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
    <div className="bg-[#080808] border border-zinc-900 rounded-[1.5rem] overflow-hidden flex flex-col group h-full">
      <div className="p-1.5">
        {/* Aspect 2/3 with a max-height to keep it small on all screens */}
        <div className="rounded-[1.1rem] overflow-hidden bg-zinc-900/40 aspect-[2/3] max-h-[45vh] md:max-h-[500px]">
          {isVideo ? (
            <video src={src} className="w-full h-full object-cover" autoPlay loop muted playsInline />
          ) : (
            <img src={src} alt={title} className="w-full h-full object-cover" loading="lazy" />
          )}
        </div>
      </div>

      <div className="px-4 pb-4 pt-1">
        <h3 className="text-white text-xs md:text-sm font-bold tracking-tight line-clamp-1 uppercase italic">
          {title}
        </h3>
        <div className="pt-1.5 flex items-center gap-2 text-zinc-600">
          <Eye size={10} />
          <span className="text-[9px] font-black uppercase tracking-tighter">{views}</span>
        </div>
      </div>
    </div>
  );
};

export default HomePortfolioSliderCard;