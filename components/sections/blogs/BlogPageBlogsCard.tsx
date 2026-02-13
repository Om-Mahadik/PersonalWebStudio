"use client";
import { motion } from "framer-motion";
import { Calendar, Eye } from "lucide-react";

interface BlogPost {
  image: string;
  title: string;
  views: number;
  date: string;
}

interface BlogPageBlogsCardProps {
  post: BlogPost;
}

const BlogPageBlogsCard = ({ post }: BlogPageBlogsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col cursor-pointer"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-[#1a1a1a]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-sm md:text-lg font-bold text-white leading-snug line-clamp-2 transition-colors">
          {post.title}
        </h3>

        <div className="mt-2 flex gap-3 text-white/30 text-[9px] md:text-xs font-medium uppercase">
          <div className="flex items-center gap-1">
            <Eye size={12} /> <span>{post.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} /> <span>{post.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPageBlogsCard;
