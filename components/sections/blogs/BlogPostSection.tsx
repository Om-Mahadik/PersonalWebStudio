// components/BlogPostSection.tsx
import React from 'react';
import Image from 'next/image';
import { Clock, Eye, Calendar, Share2 } from 'lucide-react'; // Using lucide-react for icons

interface BlogData {
  title: string;
  subtitle: string;
  image: string;
  readTime: string;
  views: string;
  date: string;
  content: string;
}

export default function BlogPostSection({ data }: { data: BlogData }) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-white bg-black">
      {/* Header Section */}
      <header className="space-y-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {data.title}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
          {data.subtitle}
        </p>
      </header>

      {/* Main Image */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
        <Image 
          src={data.image} 
          alt={data.title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Metadata Bar */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
        <div className="flex items-center gap-6 text-gray-400 text-sm">
          <span className="flex items-center gap-2">
            <Clock size={18} /> {data.readTime}
          </span>
          <span className="flex items-center gap-2">
            <Eye size={18} /> {data.views}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={18} /> {data.date}
          </span>
        </div>
        
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors border border-gray-700">
          <Share2 size={20} />
        </button>
      </div>

      {/* Blog Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="leading-relaxed text-gray-300">
          {data.content}
        </p>
      </div>
    </article>
  );
}