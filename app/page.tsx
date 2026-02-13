import BlogSection from "@/components/sections/blogs/BlogSection";

import { LogoSlider } from "@/components/sections/home/LogoSlider"; 
import ScrollRevealSection from "@/components/sections/home/ScrollRevealSection";
import Features from "@/components/sections/home/Features";
import FaqsSectionHome from "@/components/sections/faqs/FaqsSectionHome";
import ReviewsSection from "@/components/sections/reviews/ReviewsSection";

import HomePortfolioSlider from "@/components/sections/portfolio/HomePortfolioSlider";
import HeroText from "@/components/sections/home/HeroText";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroText />

      <LogoSlider />


      <ScrollRevealSection />
      <Features />
      <HomePortfolioSlider />
  
      

      <BlogSection />
      <FaqsSectionHome />
      <ReviewsSection />

      
    </main>
  );
}
