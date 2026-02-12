import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Personal Web Studio",
  description: "Design & Brand Acceleration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={55}
          sparkCount={8}
          duration={700}
        >
        {/* We place Navbars here so they stay fixed globally */}
        <MobileNavbar />
        <DesktopNavbar />
        {/* <DesktopNavbar /> */}
        
        <main>
          {children}
        </main>
        <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}