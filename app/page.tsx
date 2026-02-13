import BlogSection from "@/components/sections/blogs/BlogSection";
import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services/ServicesSection";
import HomeServiceSection from "@/components/sections/home/HomeServiceSection";
import { LogoSlider } from "@/components/sections/home/LogoSlider"; 
import ScrollRevealSection from "@/components/sections/home/ScrollRevealSection";
import Features from "@/components/sections/home/Features";
import FaqsSectionHome from "@/components/sections/faqs/FaqsSectionHome";
import ReviewsSection from "@/components/sections/reviews/ReviewsSection";
import AgencyHeroSection from "@/components/sections/home/AgencyHeroSection";
import HomePortfolioSlider from "@/components/sections/portfolio/HomePortfolioSlider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AgencyHeroSection />
      <LogoSlider />


      <ScrollRevealSection />
      <Features />
      <HomePortfolioSlider />
      <HomeServiceSection />
      

      <BlogSection />
      <FaqsSectionHome />
      <ReviewsSection />
      <ServicesSection />
      
    </main>
  );
}
