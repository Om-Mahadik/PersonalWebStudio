"use client";

import BrandingService from "@/components/ui/services/BrandingService";
import DevelopmentService from "@/components/ui/services/DevelopmentService";
import DigitalDesignService from "@/components/ui/services/DigitalDesignService";
import MarketingAssets from "@/components/ui/services/MarketingAsset";
import { motion } from "framer-motion";

const services = [
  BrandingService,
  DigitalDesignService,
  DevelopmentService,
  MarketingAssets,
];

export default function Service() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-0 py-24">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24 text-center" 
        >
          <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tight">
            SERVICES
          </h2>
          {/* Optional: Add a small decorative line for visual balance */}
          
        </motion.div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((Component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Component />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}