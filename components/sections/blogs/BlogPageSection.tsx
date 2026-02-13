"use client";

import { motion, Variants } from "framer-motion";
import BlogPageBlogsCard from "./BlogPageBlogsCard";
import FeaturedBlogCard from "./FeaturedBlogCard";

interface BlogPost {
  id: number;
  title: string;
  readTime?: string;
  views: number; // ✅ changed to number
  date: string;
  image: string;
  featured: boolean;
}

const BlogPageSection = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "We deliver exactly what you need to grow your business 10x",
      readTime: "5 mins",
      views: 5000, // ✅ number
      date: "3 days ago",
      image: "/blogs/blog3.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "We deliver exactly what you need to grow your business 10x",
      views: 5000,
      date: "3 days ago",
      image: "/blogs/blog1.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Operators must understanding before operating your service",
      views: 5000,
      date: "3 days ago",
      image: "/blogs/blog2.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Meet Designer Mr. Ser Den Mark from Austin",
      views: 5000,
      date: "3 days ago",
      image: "/blogs/blog4.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "We deliver exactly what you need to grow your business 10x",
      views: 5000,
      date: "3 days ago",
      image: "/blogs/blog5.jpg",
      featured: false,
    },
  ];

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1.0] as const,
      },
    },
  };

  return (
    <section className="bg-black py-16 px-4 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {featuredPost && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
            className="mb-16"
          >
            <FeaturedBlogCard post={featuredPost} />
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12"
        >
          {regularPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogPageBlogsCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPageSection;
