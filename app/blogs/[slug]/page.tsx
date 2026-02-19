import BlogPostSection from "@/components/sections/blogs/BlogPostSection";
import RelatedBlogs from "@/components/sections/blogs/RelatedBlogs";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blogData = {
    title: "We deliver exactly what you need to grow your business 10x",
    subtitle: "A deep dive into how modern systems are scaling enterprises.",
    image: "/blogs/blog1.jpg", 
    readTime: "5 mins",
    views: "5k+",
    date: "3 days ago",
    content: "Your long blog content goes here..."
  };

  return (
    <main className="min-h-screen bg-[#060606] text-white pt-10 md:pt-20">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">
          
          {/* Left Column: Blog Content */}
          <div className="lg:col-span-8">
            <BlogPostSection data={blogData} />
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              <RelatedBlogs />
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}