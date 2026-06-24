import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Residential Cleaning",
    description: "Our standard house cleaning service covers all the essentials to keep your home fresh, clean, and organized on a regular basis.",
    image: "/residential-cleaning.webp"
  },
  {
    title: "Apartment Cleaning",
    description: "Designed specifically for apartment living, we focus on efficient, thorough cleaning that maximizes your living space.",
    image: "/apartment-cleaning.webp"
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning solutions for offices and workspaces, ensuring a healthy and productive environment for your staff and clients.",
    image: "/commercial-cleaning.webp"
  },
  {
    title: "Deep Cleaning",
    description: "A comprehensive, top-to-bottom scrub of your property, perfect for seasonal refreshers or when your home needs extra attention.",
    image: "/header-services.webp"
  },
  {
    title: "Move In / Move Out Cleaning",
    description: "Make your transition stress-free. We deep clean your old or new property so it’s ready for the next chapter.",
    image: "/header-move.webp"
  },
  {
    title: "Carpet Cleaning",
    description: "Revitalize your floors with our specialized carpet cleaning service, removing deep-set dirt and stains to refresh your rooms.",
    image: "/header-carpet.webp"
  }
];

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
        <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2b4e]/50" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
              <div className="relative h-60 w-full">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-extrabold text-[#0a2b4e] mb-4">{service.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link 
                  href="/book-online" 
                  className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-[#0a2b4e] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Sparkles className="w-12 h-12 text-brand-green mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold mb-4">Ready to start?</h2>
          <p className="text-gray-300 mb-8">We provide a 100% satisfaction guarantee on all of our cleaning services.</p>
          <Link 
            href="/book-online" 
            className="inline-block bg-[#ffc107] text-[#0a2b4e] font-extrabold px-8 py-4 rounded-xl hover:bg-[#e0a800] transition-colors"
          >
            Book Online Today
          </Link>
        </div>
      </section>

    </div>
  );
}