"use client";
import { sendContactForm } from "@/services/contactService";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const budgets = [
  "₹10,000 - ₹50,000",
  "₹50,000 - ₹1,50,000",
  "₹1,50,000 - ₹5,00,000",
  "₹5,00,000+",
  "Budget not Defined yet",
];

// --- MISSING VARIANTS ADDED BACK BELOW ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
// ------------------------------------------

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const inputStyles =
    "w-full bg-transparent border border-zinc-800 rounded-2xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all duration-300";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Instant UI switch
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("full_name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      budget: selectedBudget,
      message: formData.get("message") as string,
    };

    try {
      await sendContactForm(data);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="w-full max-w-md min-h-[450px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="w-full flex flex-col gap-4"
          >
            <motion.input variants={itemVariants} name="full_name" type="text" placeholder="Your Name" className={inputStyles} required />
            <motion.input variants={itemVariants} name="email" type="email" placeholder="Email" className={inputStyles} required />
            <motion.input variants={itemVariants} name="phone" type="tel" placeholder="Phone" className={inputStyles} required />

            <motion.div variants={itemVariants} className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`${inputStyles} flex justify-between items-center text-left ${!selectedBudget ? "text-zinc-500" : "text-white"}`}
              >
                {selectedBudget || "Select Budget"}
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={20} /></motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute z-50 w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl list-none p-0"
                  >
                    {budgets.map((budget) => (
                      <motion.li
                        key={budget}
                        whileHover={{ backgroundColor: "#27272a", x: 5 }}
                        onClick={() => { setSelectedBudget(budget); setIsOpen(false); }}
                        className="px-4 py-3 cursor-pointer text-zinc-300 hover:text-white transition-colors border-b border-zinc-800/50 last:border-none"
                      >
                        {budget}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.textarea variants={itemVariants} name="message" placeholder="Message" rows={5} className={`${inputStyles} resize-none`} required />

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#B4B4B4] hover:bg-white text-black font-semibold py-4 rounded-2xl transition-all duration-300 mt-2"
            >
              Submit
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <CheckCircle2 size={90} className="text-[#EF620A]" strokeWidth={1} />
            </motion.div>
            
            <div className="space-y-2">
              <h3 className="text-3xl font-semibold text-white">Message Sent!</h3>
              <p className="text-zinc-400 text-lg">Our team will reach out to you soon.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}