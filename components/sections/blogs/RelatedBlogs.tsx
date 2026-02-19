import BlogPageBlogsCard from "./BlogPageBlogsCard";
import BlogSocialMedia from "./BlogSocialMedia";
import { motion } from "framer-motion";

export default function RelatedBlogs() {
  return (
    <section>
      <BlogSocialMedia />
      <h2 className="text-xs font-bold text-white/20 uppercase tracking-[0.3em] mb-6">Related</h2>
      
      {/* 2 cols on mobile, 1 col on desktop sidebar */}
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
        {/* You would map your real data here */}
        {[1, 2, 3].map((_, i) => (
          <BlogPageBlogsCard 
            key={i} 
            post={{
              image: `/blogs/blog${i+2}.jpg`,
              title: "The Art of Scalable Minimalist Design",
              views: 1200,
              date: "Feb 2026"
            }} 
          />
        ))}
      </div>
    </section>
  );
}