"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full">
      {/* Main Navigation - Tall Layout (h-24) */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center">
          
          {/* Logo Container */}
          <Link href="/" className="flex items-center z-50" onClick={closeMenu}>
            <div className="relative flex items-center justify-start py-1">
              <Image 
                src="/logo.webp" 
                alt="Deborah Maid Service LLC Logo" 
                width={240} 
                height={72} 
                priority
                className="object-contain w-auto h-12 sm:h-16"
              />
            </div>
          </Link>

          {/* Desktop Nav Menu */}
          <nav className="hidden md:flex items-center gap-10 font-semibold text-base text-brand-dark">
            <Link href="/about-us" className="hover:text-brand-blue transition-colors">About Us</Link>
            <Link href="/our-services" className="hover:text-brand-blue transition-colors">Our Services</Link>
            <Link href="/faq" className="hover:text-brand-blue transition-colors">FAQ</Link>
            <Link href="/contact-us" className="hover:text-brand-blue transition-colors">Contact Us</Link>
          </nav>

          {/* Desktop Primary Brand CTA */}
          <div className="hidden md:block">
            <Link 
              href="/book-online" 
              className="bg-brand-blue hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-xl text-base transition-all shadow-md hover:shadow-lg duration-200 block text-center"
            >
              Book Online
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 text-brand-dark hover:text-brand-blue transition-colors z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Sliding Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header (Empty space to account for the absolute close button in the navbar) */}
        <div className="h-24 border-b border-gray-100 flex items-center px-6">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Menu</span>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-6 py-8 gap-6 overflow-y-auto flex-grow">
          <Link href="/about-us" onClick={closeMenu} className="text-xl font-bold text-brand-dark hover:text-brand-blue transition-colors">
            About Us
          </Link>
          <Link href="/our-services" onClick={closeMenu} className="text-xl font-bold text-brand-dark hover:text-brand-blue transition-colors">
            Our Services
          </Link>
          <Link href="/faq" onClick={closeMenu} className="text-xl font-bold text-brand-dark hover:text-brand-blue transition-colors">
            FAQ
          </Link>
          <Link href="/contact-us" onClick={closeMenu} className="text-xl font-bold text-brand-dark hover:text-brand-blue transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Drawer Footer CTA - Updated to Brand Blue */}
        <div className="p-6 border-t border-gray-100 mt-auto bg-gray-50">
          <Link 
            href="/book-online" 
            onClick={closeMenu}
            className="w-full bg-brand-blue hover:bg-brand-dark text-white font-bold px-6 py-4 rounded-xl text-lg transition-all shadow-md block text-center"
          >
            Book Online
          </Link>
        </div>
      </div>
    </div>
  );
}