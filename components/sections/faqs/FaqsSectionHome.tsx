"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services does PersonalWebStudio offer?",
    answer: "We provide complete digital solutions including Website Design & Development, UI/UX Design, Branding & Identity Design, Digital Marketing, and Social Media Management. We help businesses build a strong and professional online presence."
  },
  {
    question: "Do you build custom websites?",
    answer: "Yes! Every website we create is fully custom-designed based on your business goals, audience, and brand identity. We do not rely on generic templates unless specifically requested."
  },
  {
    question: "Which technologies do you use for website development?",
    answer: "We work with modern technologies like HTML, CSS, JavaScript, React.js, Django, MySQL, and MongoDB. The tech stack is selected based on your project requirements."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Project timelines depend on complexity. A basic website takes 7–10 days, a business website takes 2–3 weeks, and advanced or e-commerce platforms may take 3–5 weeks."
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes, we can redesign your existing website to improve its design, performance, responsiveness, and user experience."
  },
  {
    question: "What is included in UI/UX design services?",
    answer: "Our UI/UX services include user research, wireframing, prototyping, mobile and web interface design, and user experience optimization to ensure intuitive and user-friendly designs."
  },
  {
    question: "Do you provide branding services?",
    answer: "Yes. We help businesses create a strong brand identity including logo design, color palettes, typography, brand guidelines, and social media branding assets."
  },
  {
    question: "What digital marketing services do you offer?",
    answer: "We offer SEO, social media marketing, content marketing, paid advertising (Google & Meta ads), and performance marketing strategies to grow traffic and conversions."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer: "Yes, we offer ongoing maintenance and support packages to keep your website secure, updated, and running smoothly."
  }
];

// Animation Variants for the staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.45, 0.32, 0.9] as const 
    } 
  },
};

export default function FaqsSectionHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-24 px-6 font-sans overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-2xl"
      >
        <motion.h1 
          variants={itemVariants}
          className="mb-20 text-center text-5xl font-medium tracking-tight text-white"
        >
          FAQs
        </motion.h1>

        <motion.div className="flex flex-col border-t border-zinc-800/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="border-b border-zinc-800/60"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between py-7 text-left outline-none"
                >
                  <span className="text-[19px] font-normal text-white transition-opacity group-hover:opacity-70">
                    {faq.question}
                  </span>

                  <div className="relative flex h-5 w-5 items-center justify-center">
                    <motion.div 
                      className="absolute h-[1.5px] w-4 bg-white" 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                    />
                    <motion.div 
                      className="absolute h-4 w-[1.5px] bg-white" 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] as const }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-10 text-[16px] leading-relaxed text-zinc-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
