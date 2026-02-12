import { BlogCard } from '@/components/ui/blogs/BlogCard';

const BLOG_DATA = [
  {
    id: 1,
    image: '/blogs/blog1.jpg', // Replace with your local path
    title: 'We deliver exactly what you need to grow your business 10x',
    readTime: '5 mins',
    views: '5k+',
  },
  {
    id: 2,
    image: '/blogs/blog2.jpg', // Replace with your local path
    title: 'We deliver exactly what you need to grow your business 10x',
    readTime: '5 mins',
    views: '5k+',
  },
  {
    id: 3,
    image: '/blogs/blog3.jpg', // Replace with your local path
    title: 'We deliver exactly what you need to grow your business 10x',
    readTime: '5 mins',
    views: '5k+',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-white text-6xl md:text-8xl font-semibold tracking-tight">
            Our News
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {BLOG_DATA.map((post) => (
            <BlogCard 
              key={post.id} 
              image={post.image}
              title={post.title}
              readTime={post.readTime}
              views={post.views}
            />
          ))}
        </div>
      </div>
    </section>
  );
}