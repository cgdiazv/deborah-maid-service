import React from 'react';
import Image from 'next/image';

export default function OurServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      
      {/* Top Header Background */}
      <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <Image
          src="/header-services.webp"
          alt="Our Services"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlays for contrast */}
        <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2b4e]/50" />
        
        {/* Page Title Centered in Header */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      {/* Coming Soon Content Area */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-12 lg:p-20 max-w-3xl mx-auto">
          <div className="w-16 h-1 bg-brand-green mx-auto mb-8 rounded-full"></div>
          <h2 className="text-3xl font-extrabold text-[#0a2b4e] mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We are currently updating our services page to provide you with detailed information about all of our cleaning packages. Please check back shortly!
          </p>
        </div>
      </section>

    </div>
  );
}