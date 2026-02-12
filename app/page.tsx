import BlogSection from "@/components/sections/blogs/BlogSection";
import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services/ServicesSection";
import HomeServiceSection from "@/components/sections/home/HomeServiceSection";
import { LogoSlider } from "@/components/sections/home/LogoSlider"; 
import ScrollRevealSection from "@/components/sections/home/ScrollRevealSection";
import Features from "@/components/sections/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LogoSlider />

      <ScrollRevealSection />
      <Features />
      <HomeServiceSection />
      

      <BlogSection />
      <ServicesSection />
      
    </main>
  );
}
