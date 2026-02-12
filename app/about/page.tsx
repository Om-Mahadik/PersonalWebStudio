import BlogSection from "@/components/sections/blogs/BlogSection";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BlogSection />
    </main>
  );
}
