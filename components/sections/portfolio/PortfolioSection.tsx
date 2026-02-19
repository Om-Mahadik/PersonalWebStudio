"use client";

import React, { useState, useEffect } from 'react';
import PortfolioItem from '@/components/ui/portfolio/PortfolioItem';
import { Eye, Loader2, Plus } from 'lucide-react';

const ALL_DATA = [
  {
    id: 1,
    src: "/portfolio/port1.jpg",
    title: "DotCircle - Clothing Brand Identity Branding",
    description: "Created a unique and memorable brand identity for DotCircle, a clothing brand, through logo design, typography, and visual elements that reflect the brand's personality and values.",
    views: "10k"
  },
  {
    id: 2,
    src: "https://cdn.dribbble.com/userupload/13522080/file/original-df95f5e113823c9d2b5db50b4d969079.jpg?format=webp&resize=840x630&vertical=center",
    title: "PurLines - Full website UIUX Design & Development",
    description: "Designed and developed a visually stunning and user-friendly website for PurLines, Graphic Design Agency, incorporating intuitive navigation, engaging visuals, and seamless functionality to enhance the online presence and user experience.",
    views: "7.1k"
  },
  {
    id: 3,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/46b56c185750291.6568dcde3408d.jpg",
    title: "Tripist - Travel Agency Website Design",
    description: "Designed a modern and responsive website for Tripist, a travel agency, featuring intuitive navigation, engaging visuals, and seamless user experience.",
    views: "1.5k"
  },
  {
    id: 4,
    src: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/642b05756ac7d1316bf37d46_cardealership128image2.jpeg",
    title: "JP Delaership - Car Dealership Website",
    description: "Designed a modern and responsive website for JP Delaership, a car dealership, featuring all the cars for sale in a visually appealing and user-friendly manner.",
    views: "695k"
  },
  {
    id: 5,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/535f0c133905271.61c98a89dfef2.jpg",
    title: "Foodspa - Food Delivery App UIUX Design",
    description: "Designed a modern and intuitive UI/UX for Foodspa, a food delivery app, with all the food & Menu details with custom user roles and Logins.",
    views: 801
  },
  {
    id: 6,
    src: "https://tse1.mm.bing.net/th/id/OIP.fLejbhR8gB5a_nF1wSaIOgHaHa?pid=ImgDet&w=193&h=193&c=7&dpr=1.3&o=7&rm=3",
    title: "Elephantasy - Logo Design & Branding",
    description: "Created a unique and memorable logo design and branding for Elephantasy, a jungle saving ngo, through visual elements that reflect the nature and values of the organization.",
    views: "8.6k"
  },
  {
    id: 7,
    src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdOMQGD3yq9j32J5AjHauaYvSYmYHcsp997V_7cVZ-RQ0tGgJI6R1Pr_tzu4_cMqQqRgNqOiNPNqn5WYzImP-AykOJHVyq7mqqr5EimlzT6WWrTDcCV0Q7icaCQtCNtKlgkYY2NCg?key=hG0OmMqgsPyeEqoUXkS6Dw",
    title: "ActiveUS - Corporate Branding & Custom products logo placements",
    description: "Designed a comprehensive corporate branding and identity package for ActiveUS, including custom product logo placements.",
    views: 531
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1701101499/catalog/1729168426048888832/d7rm2xochajdjzey1kz0.jpg",
    title: "ColegueTalk - SaaS Product UIUX Design",
    description: "Designed a modern and intuitive UI/UX for ColegueTalk, a SaaS product, with all the features and functionality needed for seamless user experience.",
    views: "5.2k"
  },
  {
    id: 9,
    src: "https://i.pinimg.com/736x/13/a6/73/13a673629355723cefe0e964eaacde26.jpg",
    title: "Horizon Courts - Modern Tennis Court landing page",
    description: "Designed a modern and intuitive UI/UX for Horizon Courts, a tennis court landing page, with all the features and functionality needed",
    views: "4.1k"
  },
  {
    id: 10,
    src: "https://i.pinimg.com/736x/90/75/ee/9075ee982441eef7f2efa1b45fc75f8b.jpg",
    title: "Patastic - Food Ads Creative Post & Brading",
    description: "Designed a modern and intuitive UI/UX for Patastic, a food ads creative post & branding project",
    views: "9.2k"
  },
  {
    id: 11,
    src: "https://i.pinimg.com/736x/45/0c/ef/450cef9e15dcfe0483dcdf1d0b438407.jpg",
    title: "Cryptoflow - Cryptocurrency Exchange Platform UIUX Design",
    description: "Designed a modern and intuitive UI/UX for Cryptoflow, a cryptocurrency exchange platform",
    views: "2.8k"
  },
  // Add more items here...
];
const ITEMS_PER_PAGE = 6;

const PortfolioSection: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initial load
    setItems(ALL_DATA.slice(0, visibleCount));
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Simulating a backend delay for that "professional" loading feel
    setTimeout(() => {
      const nextCount = visibleCount + ITEMS_PER_PAGE;
      setItems(ALL_DATA.slice(0, nextCount));
      setVisibleCount(nextCount);
      setIsLoading(false);
    }, 800);
  };

  const hasMore = visibleCount < ALL_DATA.length;

  return (
    <section className="w-full bg-[#050505] py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        
        {/* The Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-0">
          {items.map((item, index) => (
            <PortfolioItem 
              key={item.id}
              {...item}
              index={index}
            />
          ))}
        </div>

        {/* Load More Button Section */}
{hasMore && (
  <div className="mt-24 pb-20 flex justify-center">
    <button
      onClick={handleLoadMore}
      disabled={isLoading}
      className="group relative flex items-center gap-4 bg-[#0A0A0A] border border-zinc-800 text-zinc-400 px-12 py-5 rounded-full font-medium text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:border-white hover:text-white hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <Loader2 className="animate-spin" size={20} />
      ) : (
        <>
          <span className="relative z-10">View More Projects</span>
          <div className="relative flex items-center justify-center">
            {/* The Plus icon rotates 90 degrees on hover */}
            <Plus 
              size={18} 
              className="group-hover:rotate-90 transition-transform duration-500 ease-in-out" 
            />
          </div>
        </>
      )}
      
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
    </button>
  </div>
)}
      </div>
    </section>
  );
};

export default PortfolioSection;