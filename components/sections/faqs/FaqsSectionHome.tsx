"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does LocusHQ do?",
    answer:
      "LocusHQ builds AI-powered lead generation systems for businesses that need more customers — combining paid media on Meta and Google with GHL and ManyChat automation to create a full lead journey from first click to booked call. We work across hospitality, real estate, med spas, immigration consulting, home services, and B2B in India, Canada, Australia, and USA.",
  },
  {
    question: "How is LocusHQ different from a regular ads agency?",
    answer:
      "Unlike traditional agencies that just focus on clicks, we focus on the entire conversion funnel. We integrate automation tools like ManyChat and GoHighLevel to ensure leads are nurtured immediately, significantly increasing the booked call rate compared to standard 'set and forget' ad campaigns.",
  },
  {
    question: "Do you work with businesses in Canada and Australia?",
    answer:
      "Yes, we have a global presence and specifically serve clients in India, Canada, Australia, and the USA, tailoring our strategies to local market nuances in each region.",
  },
  {
    question: "How long before I see results from Meta Ads?",
    answer:
      "While initial data starts coming in within the first 48-72 hours, we typically see the system fully optimized and generating consistent, high-quality booked calls within the first 14 to 30 days.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-20 px-4 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">FAQs</h2>

      <div className="w-full max-w-3xl bg-[#111111] rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl">
        <div className="divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6 first:pt-0 last:pb-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-medium text-white/90 group-hover:text-white transition-colors pr-8">
                  {faq.question}
                </span>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <X className="w-6 h-6 text-white/60" />
                  ) : (
                    <Plus className="w-6 h-6 text-white/60" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-white/50 leading-relaxed text-base md:text-lg max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}