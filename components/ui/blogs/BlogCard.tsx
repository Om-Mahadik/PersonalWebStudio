import Image from 'next/image';
import { ArrowUpRight, Clock, Eye } from 'lucide-react';

interface BlogCardProps {
  image: string;
  title: string;
  readTime: string;
  views: string;
}

export const BlogCard = ({ image, title, readTime, views }: BlogCardProps) => {
  return (
    <div className="group cursor-pointer w-full">
      {/* Image Container */}
      <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Area */}
      <div className="flex justify-between items-start gap-6 px-1">
        <div className="flex-1 space-y-4">
          <h3 className="text-white text-1xl font-medium leading-[1.3] transition-colors group-hover:text-zinc-300">
            {title}
          </h3>
          
          {/* Metadata */}
          <div className="flex items-center gap-6 text-zinc-500 font-medium">
            <div className="flex items-center gap-2">
              <Clock size={18} strokeWidth={1.5} />
              <span className="text-[15px]">{readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={18} strokeWidth={1.5} />
              <span className="text-[15px]">{views}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full border border-zinc-800 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
          <ArrowUpRight size={22} />
        </div>
      </div>
    </div>
  );
};