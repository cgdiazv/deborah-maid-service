import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Building, Briefcase, ArrowRight, Check, Star, ClipboardList, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/header.webp" 
            alt="Deborah Maid Service Professional Cleaning"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-blue/70 to-brand-blue/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-dark/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl text-left">
            <span className="inline-block text-brand-green font-bold text-sm tracking-widest uppercase mb-4 bg-brand-green/20 backdrop-blur-xs border border-brand-green/30 px-3 py-1 rounded-full">
              So Fresh, So Clean
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Professional Cleaning Services For Your Home & Office
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl leading-relaxed opacity-95">
              Let us use our years of experience, skilled employees, and advanced procedures to ensure a clean and healthy environment for you, your family, and your guests.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/book-online" className="w-full sm:w-auto bg-brand-blue hover:bg-white hover:text-brand-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg text-center duration-200">
                Book Online
              </Link>
              <Link href="/our-services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-xs border border-white/25 transition-all text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
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

              {/* Floating Card - Fixed Mobile Layout! */}
              {/* Uses normal flow with negative top margin on mobile, absolute on desktop */}
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

      {/* SERVICES SECTION */}
      <section className="py-16 lg:py-24 bg-[#f8fafc] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Our Cleaning Services
            </h2>
            <div className="w-16 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* 1. Residential */}
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex flex-col group border border-gray-100">
              <div className="absolute top-0 right-0 w-48 h-48 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}>
                <Image src="/residential-cleaning.webp" alt="Residential Cleaning" fill className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
              </div>

              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <Image src="/residential-cleaning.webp" alt="Hover Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-brand-blue/85"></div>
              </div>

              <div className="p-8 relative z-10 flex flex-col flex-grow">
                <div className="relative mb-8 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#eff4f8] group-hover:bg-white/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] -z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"></div>
                  <Home className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-[22px] font-bold text-[#0a2b4e] group-hover:text-white mb-4 pr-12 leading-tight transition-colors duration-500">
                  Residential Cleaning Service
                </h3>

                <p className="text-gray-500 group-hover:text-white/90 text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-500">
                  We have a custom residential cleaning service designed to help you clean when you need it. Covering bedrooms, bathrooms, and living areas so your house will always sparkle clean.
                </p>

                <Link href="/our-services" className="flex items-center justify-between w-full bg-[#0a2b4e] group-hover:bg-brand-green text-white group-hover:text-[#0a2b4e] px-6 py-4 rounded-xl font-bold transition-all duration-500">
                  <span className="text-[15px]">Read More</span>
                  <div className="w-7 h-7 rounded-full border-[1.5px] border-white group-hover:border-[#0a2b4e] flex items-center justify-center transition-colors duration-500">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0a2b4e] transform group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                </Link>
              </div>
            </div>

            {/* 2. Apartment */}
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex flex-col group border border-gray-100">
              <div className="absolute top-0 right-0 w-48 h-48 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}>
                <Image src="/apartment-cleaning.webp" alt="Apartment Cleaning" fill className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
              </div>

              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <Image src="/apartment-cleaning.webp" alt="Hover Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-brand-blue/85"></div>
              </div>

              <div className="p-8 relative z-10 flex flex-col flex-grow">
                <div className="relative mb-8 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#eff4f8] group-hover:bg-white/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] -z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"></div>
                  <Building className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-[22px] font-bold text-[#0a2b4e] group-hover:text-white mb-4 pr-12 leading-tight transition-colors duration-500">
                  Apartment Cleaning Service
                </h3>

                <p className="text-gray-500 group-hover:text-white/90 text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-500">
                  Our specialized apartment cleaning includes vacuuming, mopping floors, dusting furniture, and upholstery care, ensuring your living space is always fresh and welcoming.
                </p>

                <Link href="/our-services" className="flex items-center justify-between w-full bg-[#0a2b4e] group-hover:bg-brand-green text-white group-hover:text-[#0a2b4e] px-6 py-4 rounded-xl font-bold transition-all duration-500">
                  <span className="text-[15px]">Read More</span>
                  <div className="w-7 h-7 rounded-full border-[1.5px] border-white group-hover:border-[#0a2b4e] flex items-center justify-center transition-colors duration-500">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0a2b4e] transform group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                </Link>
              </div>
            </div>

            {/* 3. Commercial */}
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex flex-col group border border-gray-100">
              <div className="absolute top-0 right-0 w-48 h-48 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}>
                <Image src="/commercial-cleaning.webp" alt="Commercial Cleaning" fill className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
              </div>

              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <Image src="/commercial-cleaning.webp" alt="Hover Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-brand-blue/85"></div>
              </div>

              <div className="p-8 relative z-10 flex flex-col flex-grow">
                <div className="relative mb-8 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#eff4f8] group-hover:bg-white/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] -z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"></div>
                  <Briefcase className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-[22px] font-bold text-[#0a2b4e] group-hover:text-white mb-4 pr-12 leading-tight transition-colors duration-500">
                  Commercial Cleaning Service
                </h3>

                <p className="text-gray-500 group-hover:text-white/90 text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-500">
                  Delivering the highest standards of clean for your workspace. We expertly handle hard surface cleaning, deep dusting, and common areas to treat your office right.
                </p>

                <Link href="/our-services" className="flex items-center justify-between w-full bg-[#0a2b4e] group-hover:bg-brand-green text-white group-hover:text-[#0a2b4e] px-6 py-4 rounded-xl font-bold transition-all duration-500">
                  <span className="text-[15px]">Read More</span>
                  <div className="w-7 h-7 rounded-full border-[1.5px] border-white group-hover:border-[#0a2b4e] flex items-center justify-center transition-colors duration-500">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0a2b4e] transform group-hover:translate-x-0.5 transition-all duration-500" />
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* REASONS TO CHOOSE US SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Image */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-sm bg-gray-100 border border-gray-100 order-2 lg:order-1">
              <Image 
                src="/header.webp" 
                alt="Reasons To Choose Us" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Right Column: Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-[#0a2b4e] sm:text-4xl mb-6">
                Reasons To Choose Us
              </h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Behind our commitment to excellence are few key attributes that define who we are and what makes us different from any other.
              </p>

              <div className="space-y-10">
                {/* Top Rated */}
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Star className="w-7 h-7 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2b4e] mb-2">Top Rated</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      We hold a successful track record of satisfying our customers and getting back their bond money.
                    </p>
                  </div>
                </div>

                {/* Superior Quality */}
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Sparkles className="w-7 h-7 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2b4e] mb-2">Superior Quality</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      We use the most excellent quality tools and equipment to get all the dust and dirt out of your premises.
                    </p>
                  </div>
                </div>

                {/* Eco-Friendly */}
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-7 h-7 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0a2b4e] mb-2">Eco-Friendly Products</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      We use biodegradable products which do not harm the environment, pets or humans in any way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}