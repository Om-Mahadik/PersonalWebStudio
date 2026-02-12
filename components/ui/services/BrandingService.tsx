import React from 'react';

const BrandingService = () => {
  const strategyItems = [
    "Brand Naming",
    "Mission & Values",
    "Positioning",
    "Vision",
    "Personas",
  ];

  const visualItems = [
    "Moodboard",
    "Creative concept",
    "Graphic charter",
    "Logotype",
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-5xl md:text-7xl font-semibold mb-6">Branding</h1>
        <p className="text-zinc-400 text-lg md:text-xl leading-snug">
          A powerful instrument to set the company's positioning and establish a 
          visual language to follow across the whole path
        </p>
      </div>

      {/* Main Container: Column on mobile, Row on PC */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Video */}
        <div className="w-full aspect-video lg:aspect-square rounded-[40px] overflow-hidden bg-zinc-800">
          <video
            className="w-full h-full object-cover"
            src="/videos/branding.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Right Side: Bullet Points in 2 columns */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 self-center">
          {/* Brand Strategy Column */}
          <div>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Brand Strategy
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {strategyItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Visual Column */}
          <div>
            <h3 className="text-zinc-500 text-sm md:text-lg mb-4 md:mb-6 uppercase tracking-wider">
              Brand Visual
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {visualItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-3 text-[13px] sm:text-base font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF620A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandingService;