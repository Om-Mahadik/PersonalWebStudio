import Link from 'next/link';
import Image from 'next/image';
// Note: You can use Lucide-React or any icon library for these
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-[#a1a1a1] border-t border-white/10 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Social Section - 6 Columns */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <Link href="/" className="mb-6 block">
                <Image 
                  src="/imgs/pws-logo.png" 
                  alt="Studio Logo" 
                  width={60} 
                  height={40} 
                  className="brightness-0 invert" // Ensures logo is white on dark bg
                />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed mb-8">
                Crafting high-performance digital experiences and modern web solutions 
                with a focus on minimalist design and technical excellence.
              </p>
              
              {/* Social Links with Icons */}
              <div className="flex gap-5 text-white/60">
                <a href="#" className="hover:text-blue-500 transition-all"><Github size={20} /></a>
                <a href="#" className="hover:text-blue-500 transition-all"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-blue-500 transition-all"><Twitter size={20} /></a>
                <a href="#" className="hover:text-blue-500 transition-all"><Dribbble size={20} /></a>
              </div>
            </div>
          </div>

          {/* Navigation - 3 Columns */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/work" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Studio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Legal - 3 Columns */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-xs uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] uppercase tracking-widest text-zinc-500">
            © {currentYear} Personal Web Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-[11px] uppercase tracking-widest text-zinc-500">System Stable</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;