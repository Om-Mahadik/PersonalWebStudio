import React from 'react';
import BrandStrategy from "@/components/ui/services/BrandStrategy";
import BrandVisuals from "@/components/ui/services/BrandVisuals";
import Website from "@/components/ui/services/Website";

const HomeServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Tailored solutions for your digital growth, built with precision.
          </p>
        </div>

        {/* Grid Logic:
            - grid-cols-1: Mobile stack
            - md:grid-cols-2: 2 columns for Tablet and PC 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <BrandStrategy />
          <BrandVisuals />
          <Website />
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;