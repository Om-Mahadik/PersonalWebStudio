"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Eye, Calendar } from 'lucide-react';

const FeaturedBlogCard = ({ post }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group w-full cursor-pointer"
    >
      <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-[#1a1a1a]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-6 flex justify-between items-start gap-4">
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-bold text-white leading-tight max-w-2xl">
            {post.title}
          </h2>
          
          <div className="mt-3 flex flex-wrap gap-4 text-white/40 font-medium text-[10px] md:text-xs uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <Clock size={14} /> <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye size={14} /> <span>{post.views}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} /> <span>{post.date}</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedBlogCard;