import React from 'react';
import Image from 'next/image';
import { Sparkles, Check, Star, ClipboardList } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Top Header Background */}
      <section className="relative h-[350px] lg:h-[400px] w-full overflow-hidden">
        <Image
          src="/header-about.webp"
          alt="About Us Header"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlays for contrast */}
        <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2b4e]/50" />
        
        {/* Page Title Centered in Header */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 -mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* ABOUT US SECTION (From Homepage) */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column: Content */}
            <div className="max-w-xl">
              <span className="block text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">
                The Most Reliable Name In Cleaning Business
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a2b4e] leading-tight mb-8">
                Trusted Cleaning Professionals
              </h2>
              
              <div className="flex gap-5 items-start mb-6">
                <div className="flex-shrink-0 mt-1 opacity-60">
                  <Sparkles className="w-12 h-12 text-brand-blue stroke-[1.5]" />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                    Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry.
                  </p>
                  <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
                    It’s not enough to have trust in the cleaning crew that you let into your home… you also have to trust that they will perform a first-class cleaning job for you.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 my-10"></div>

              <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  'One-off, weekly or fortnightly visits',
                  'Vetted & background-checked cleaners',
                  'Online booking and payment',
                  'Keep the same cleaner for every visit',
                  'All cleaning materials and equipment',
                  '100% satisfaction guarantee'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center">
                      <Check className="w-3 h-3 text-white stroke-[3]" />
                    </div>
                    <span className="text-gray-500 font-bold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image with Overlays */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-none mt-12 lg:mt-0 mb-12 lg:mb-0">
              
              {/* Main Image Container */}
              <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-sm bg-gray-100 border border-gray-100">
                <Image 
                  src="/header.webp" 
                  alt="Professional Cleaner" 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Top Left Ribbon Overlay */}
              <div className="absolute -top-4 -left-2 sm:left-6 flex flex-col items-center drop-shadow-xl z-10 w-[72px]">
                <div className="bg-brand-blue w-full h-8 flex justify-center items-center rounded-t-lg text-white gap-[2px]">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current mb-1" />
                  <Star className="w-2.5 h-2.5 fill-current" />
                </div>
                <div className="bg-[#ffc107] w-full pb-8 pt-3 px-2 text-center text-[#0a2b4e] font-black leading-tight" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}>
                  <span className="text-lg">97%</span><br/>
                  <span className="text-[9px] uppercase font-bold tracking-wider">Customer<br/>Rating</span>
                </div>
              </div>

              {/* Floating Card */}
              <div className="relative -mt-16 z-20 mx-4 sm:mx-0 sm:absolute sm:mt-0 sm:-bottom-10 sm:-right-10 bg-white p-6 sm:p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-50 sm:w-[280px]">
                <ClipboardList className="w-10 h-10 text-brand-blue mb-4 sm:mb-6" strokeWidth={1.5} />
                <p className="text-gray-500 font-bold text-sm leading-relaxed">
                  Our housekeepers will always arrive with your customized cleaning plan in hand to help.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}