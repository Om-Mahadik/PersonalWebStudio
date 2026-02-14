"use client";
import { motion, Variants } from "framer-motion";

const techStack = ["Webflow", "React", "WordPress", "API", "Shopify", "Next.js"];

export default function DevelopmentService() {
  // Animation Variants to match Branding/Digital Design consistency
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      
      {/* Header Section - Matches Branding font sizes exactly */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-semibold mb-6">
          Development
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl leading-snug">
          Engineering digital excellence through modern frameworks and 
          scalable architectures tailored to your business needs.
        </p>
      </motion.div>

      {/* Main Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Visuals & Tech Tags */}
        <div className="flex flex-col gap-8">
          {/* Tech Tags: Interactive Staggered Entry */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech) => (
              <motion.span 
                key={tech}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, borderColor: "#EF620A", color: "#fff" }}
                className="px-4 py-1.5 rounded-full border border-zinc-800 text-[11px] bg-zinc-900/50 text-zinc-400 whitespace-nowrap cursor-default transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Visual Mockup: Matching the [40px] radius and aspect-square of other sections */}
          <motion.div 
             whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
             transition={{ type: "spring", stiffness: 300 }}
             className="w-full relative rounded-[40px] overflow-hidden bg-zinc-900 border border-zinc-800 aspect-video lg:aspect-square shadow-2xl group"
          >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-900 h-full w-full flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-white text-2xl md:text-4xl font-bold italic uppercase tracking-tighter">
                    Podcast Hosting
                  </p>
                  <div className="mt-4 h-1 w-12 bg-[#EF620A] mx-auto" />
                </div>
                
                {/* Floating Code Snippet */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-zinc-700 font-mono text-[10px] hidden md:block"
                >
                    <p className="text-pink-400">const <span className="text-blue-300">Engine</span> = () =&gt; &#123;</p>
                    <p className="text-zinc-400 ml-4">optimize: <span className="text-orange-400">true</span></p>
                    <p className="text-pink-400">&#125;</p>
                </motion.div>
              </div>
          </motion.div>
        </div>

        {/* Right Side: Lists - Matches Branding & Digital Design sizes */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 self-center">
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Full Stack
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {["Integration", "Front-end", "Back-end"].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              CMS
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {["Webflow", "Shopify", "Headless"].map((item) => (
                <motion.li key={item} variants={fadeInUp} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium text-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Button: Matches the flow but keeps the CTA clear */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-2 mt-8"
          >
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}