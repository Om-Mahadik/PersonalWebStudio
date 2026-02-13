"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const budgets = [
  "₹10,000 - ₹50,000",
  "₹50,000 - ₹1,50,000",
  "₹1,50,000 - ₹5,00,000",
  "₹5,00,000+",
  "Budget not Defined yet",
];

// Explicitly typed as Variants to remove the red underlines
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

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");

  const inputStyles = "w-full bg-transparent border border-zinc-800 rounded-2xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-all duration-300";

  return (
    <motion.form 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full max-w-md flex flex-col gap-4"
    >
      <motion.input 
        variants={itemVariants} 
        name="full_name" 
        type="text" 
        placeholder="Your Name" 
        className={inputStyles} 
        required 
      />
      <motion.input 
        variants={itemVariants} 
        name="email" 
        type="email" 
        placeholder="Email" 
        className={inputStyles} 
        required 
      />
      <motion.input 
        variants={itemVariants} 
        name="phone" 
        type="tel" 
        placeholder="Phone" 
        className={inputStyles} 
      />
      
      <motion.div variants={itemVariants} className="relative">
        {/* Hidden input to ensure the selected budget is sent with the form data */}
        <input type="hidden" name="budget" value={selectedBudget} />
        
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`${inputStyles} flex justify-between items-center text-left ${
            !selectedBudget ? "text-zinc-500" : "text-white"
          }`}
        >
          {selectedBudget || "Select Budget"}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown size={20} />
          </motion.div>
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
                  onClick={() => {
                    setSelectedBudget(budget);
                    setIsOpen(false);
                  }}
                  className="px-4 py-3 cursor-pointer text-zinc-300 hover:text-white transition-colors border-b border-zinc-800/50 last:border-none"
                >
                  {budget}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.textarea 
        variants={itemVariants}
        name="message"
        placeholder="Message" 
        rows={5} 
        className={`${inputStyles} resize-none`}
      />

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
  );
}