"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import MobileNavbar from "@/components/sections/layout/MobileNavbar";
import DesktopNavbar from "@/components/sections/layout/DesktopNavbar";
import Footer from "@/components/sections/layout/Footer";
import ClickSpark from "@/components/ui/layout/ClickSpark";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for the premium feel
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-black`}>
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="global-loader"
              className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
              initial={{ y: 0 }}
              exit={{ 
                y: "-100%", 
                transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] } 
              }}
            >
              <div className="flex flex-col items-center">
                <div className="mb-8">
                  <Image 
                    src="/imgs/pws-logo.png" 
                    alt="Logo" 
                    width={100} 
                    height={100} 
                    className="brightness-0 invert object-contain"
                    priority 
                  />
                </div>
                <div className="relative h-[1px] w-48 bg-zinc-900 overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="h-full w-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={55}
          sparkCount={8}
          duration={700}
        >
          {/* Navbars stay hidden under the loader until it slides up */}
          <MobileNavbar />
          <DesktopNavbar />
          
          <main className={isLoading ? "h-screen overflow-hidden" : ""}>
            {children}
          </main>
          
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}