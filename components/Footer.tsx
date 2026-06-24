import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';

// Custom SVG Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.22-6.36V7.5a8.44 8.44 0 0 0 4.19 1.13v-3.4a4.8 4.8 0 0 1-2.09-.54z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a2b4e] text-gray-300 py-16 lg:py-20 border-t-[6px] border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* 1. Brand & About */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo.webp" 
                alt="Deborah Maid Service LLC" 
                width={180} 
                height={54} 
                className="object-contain w-auto h-12 brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              Delivering the highest standards of clean and a guarantee to treat your home and office with the utmost care and professionalism.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/deborahmaidservices" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green hover:text-[#0a2b4e] flex items-center justify-center transition-colors duration-300">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/deborahmaidservices" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green hover:text-[#0a2b4e] flex items-center justify-center transition-colors duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@deborahmaidservices" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green hover:text-[#0a2b4e] flex items-center justify-center transition-colors duration-300">
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-green rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-3.5">
              <li><Link href="/" className="hover:text-brand-green transition-colors text-[15px]">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-green transition-colors text-[15px]">About Us</Link></li>
              <li><Link href="/our-services" className="hover:text-brand-green transition-colors text-[15px]">Our Services</Link></li>
              <li><Link href="/faq" className="hover:text-brand-green transition-colors text-[15px]">FAQ</Link></li>
              <li><Link href="/contact-us" className="hover:text-brand-green transition-colors text-[15px]">Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-green rounded-full"></span> Services
            </h4>
            <ul className="space-y-3.5">
              <li><Link href="/our-services" className="hover:text-brand-green transition-colors text-[15px]">Residential Cleaning</Link></li>
              <li><Link href="/our-services" className="hover:text-brand-green transition-colors text-[15px]">Apartment Cleaning</Link></li>
              <li><Link href="/our-services" className="hover:text-brand-green transition-colors text-[15px]">Commercial Cleaning</Link></li>
              <li><Link href="/our-services" className="hover:text-brand-green transition-colors text-[15px]">Move In / Move Out</Link></li>
              <li><Link href="/our-services" className="hover:text-brand-green transition-colors text-[15px]">Occasional & One Time</Link></li>
            </ul>
          </div>

          {/* 4. Contact Information */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-green rounded-full"></span> Contact Info
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2.5 bg-white/5 rounded-lg text-brand-green flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="mt-0.5">
                  <p className="text-[13px] text-gray-400 uppercase tracking-wider font-bold mb-1">Phone Number</p>
                  <a href="tel:5713940338" className="text-white hover:text-brand-green font-medium transition-colors text-[15px]">
                    571-394-0338
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="p-2.5 bg-white/5 rounded-lg text-brand-green flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="mt-0.5">
                  <p className="text-[13px] text-gray-400 uppercase tracking-wider font-bold mb-1">Email Address</p>
                  <a href="mailto:info@deborahmaidservices.com" className="text-white hover:text-brand-green font-medium transition-colors text-[15px] break-all">
                    info@deborahmaidservices.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2.5 bg-white/5 rounded-lg text-brand-green flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="mt-0.5">
                  <p className="text-[13px] text-gray-400 uppercase tracking-wider font-bold mb-1">Working Hours</p>
                  <p className="text-white font-medium text-[15px]">
                    8:00am - 6:00pm<br/>Mon - Fri
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-sm text-gray-400">
          {/* Added text-center md:text-left here */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Deborah Maid Cleaning Services LLC. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            
            {/* Desktop separator dot */}
            <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-500"></span>
            
            {/* Powered By Link */}
            <span>
              Powered by <a href="https://indevasa.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green font-medium transition-colors">Indeva Websites</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}