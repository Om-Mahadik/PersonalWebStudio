"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
  {
    question: "How long does it takes to get started?",
    answer: "Our turnaround is lightning-fast. Just one week from signing off and we&apos;re there with the kick-off meeting to get it rolling."
  },
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
      // "as const" fixes the TypeScript Type error found in build logs
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

                  {/* Plus to X Icon */}
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