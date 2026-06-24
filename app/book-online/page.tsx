"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, Download, Loader2, CheckCircle2 } from 'lucide-react';
import { submitBooking } from '../actions/book';

export default function BookOnlinePage() {
  // Loading & Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Pricing State Logic
  const [hasSupplies, setHasSupplies] = useState<boolean>(true);
  const [selectedRate, setSelectedRate] = useState<number>(50); 
  const [selectedExtras, setSelectedExtras] = useState({
    windows: true, 
    cabinets: false,
    deepCleaning: false,
    disinfection: false
  });

  const calculateTotal = () => {
    let currentTotal = selectedRate;
    if (!hasSupplies) currentTotal += 25;
    if (selectedExtras.windows) currentTotal += 20;
    if (selectedExtras.cabinets) currentTotal += 65;
    if (selectedExtras.deepCleaning) currentTotal += 70;
    if (selectedExtras.disinfection) currentTotal += 170;
    return currentTotal;
  };

  const total = calculateTotal();

  const toggleExtra = (key: keyof typeof selectedExtras) => {
    setSelectedExtras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const result = await submitBooking(formData);

    if (result.success) {
      setStatus("success");
      e.currentTarget.reset(); // Clear the form
    } else {
      setStatus("error");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-16 lg:pb-24">
      
      {/* Top Header Background */}
      <section className="relative h-[350px] lg:h-[400px] w-full overflow-hidden">
        <Image src="/header-book.webp" alt="Book Online Header" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2b4e]/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 -mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">Book Online</h1>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-24 lg:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-brand-blue rounded-3xl p-8 sm:p-10 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <span className="block text-white/90 font-bold text-sm tracking-widest uppercase mb-4 relative z-10">Homeowners Like Us!</span>
              <h3 className="text-3xl font-bold leading-tight mb-5 relative z-10">Healthy Environment For Your Family</h3>
              <p className="text-white/80 text-[15px] leading-relaxed mb-10 relative z-10">The processes and systems we put in place provide high quality service with a focus on safety.</p>
              
              <a href="tel:5713940338" className="w-full bg-[#ffc107] hover:bg-[#e0a800] text-[#0a2b4e] font-extrabold rounded-xl px-6 py-4 flex items-center justify-between transition-colors duration-300 mb-8 relative z-10">
                <span className="text-[15px]">Call Us Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <div className="flex items-center gap-3 font-bold text-xl relative z-10">
                <Phone className="w-6 h-6" />
                <a href="tel:5713940338" className="hover:text-[#ffc107] transition-colors">571-394-0338</a>
              </div>
            </div>

            {/* Download Brochure Card */}
<div className="bg-[#eff4f8] rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
  <h3 className="text-xl font-extrabold text-[#0a2b4e] mb-6">
    Download Brochure
  </h3>
  <div className="space-y-4">
    
    {/* Changed from <button> to <a> tag for downloading */}
    <a 
      href="/company-brochure.pdf" 
      download="Deborah_Maid_Service_Brochure.pdf"
      className="w-full bg-brand-blue hover:bg-[#0a2b4e] text-white font-bold rounded-xl px-6 py-4 flex items-center gap-4 transition-colors duration-300 cursor-pointer"
    >
      <Download className="w-5 h-5" />
      <span className="text-[14px]">Company Brochure</span>
    </a>

  </div>
</div>
          </div>

          {/* RIGHT COLUMN: MAIN FORM */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 lg:p-12">
            
            <h2 className="text-[28px] sm:text-3xl font-extrabold text-[#0a2b4e] mb-3">Book Online</h2>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-10">For a cleaning that meets your highest standards, you need a dedicated team of trained specialists with all supplies needed to thoroughly clean your home.</p>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-brand-green mb-6" />
                <h3 className="text-2xl font-bold text-[#0a2b4e] mb-3">Booking Request Sent!</h3>
                <p className="text-gray-600 text-[15px] max-w-md mx-auto mb-8">Thank you for booking with us. We have received your request and will contact you shortly to confirm your appointment.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="bg-[#0a2b4e] text-white font-bold px-8 py-3 rounded-xl hover:bg-brand-blue transition-colors"
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                
                {/* Hidden input to pass the dynamically calculated total securely to the backend */}
                <input type="hidden" name="total" value={total.toFixed(2)} />

                {/* --- SECTION 1: Service Details --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Choose your service</label>
                    <div className="relative">
                      <select name="service" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none appearance-none cursor-pointer">
                        <option>Residential Cleaning</option>
                        <option>Apartment Cleaning</option>
                        <option>Commercial Cleaning</option>
                        <option>Deep Cleaning</option>
                        <option>Move In / Move Out Cleaning</option>
                        <option>Carpet Cleaning</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Indicate frequency</label>
                    <div className="relative">
                      <select name="frequency" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none appearance-none cursor-pointer">
                        <option>Daily</option>
                        <option>Weekly Regular (Twice a week)</option>
                        <option>Once a Week</option>
                        <option>Monthly Regular (Twice a month)</option>
                        <option>Once a Month</option>
                        <option>One-Time Cleaning</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Facility type</label>
                    <div className="relative">
                      <select name="facilityType" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none appearance-none cursor-pointer">
                        <option>House</option>
                        <option>Apartment</option>
                        <option>Office</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Facility name</label>
                    <input type="text" name="facilityName" placeholder="e.g. My Home" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400" />
                  </div>
                </div>

                {/* Room Counters */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Room(s)?', name: 'rooms', defaultValue: 5 },
                    { label: 'Hallway(s)?', name: 'hallways', defaultValue: 2 },
                    { label: 'Staircase(s)?', name: 'staircases', defaultValue: 1 },
                    { label: 'Bedroom(s)?', name: 'bedrooms', defaultValue: 2 },
                    { label: 'Bathroom(s)?', name: 'bathrooms', defaultValue: 2 },
                    { label: 'Window(s)?', name: 'windows', defaultValue: 4 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">{item.label}</label>
                      <input type="number" name={item.name} min="0" defaultValue={item.defaultValue} className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none" />
                    </div>
                  ))}
                </div>

                {/* Radio / Checkboxes Section */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-[13px] font-bold text-[#0a2b4e] mb-3">Do you have all the necessary cleaning supplies? (+$25 if No)</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer text-[14px] text-gray-600 font-medium">
                        <input type="radio" name="supplies" value="Yes" checked={hasSupplies === true} onChange={() => setHasSupplies(true)} className="w-4 h-4 accent-brand-blue" /> Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-[14px] text-gray-600 font-medium">
                        <input type="radio" name="supplies" value="No" checked={hasSupplies === false} onChange={() => setHasSupplies(false)} className="w-4 h-4 accent-brand-blue" /> No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#0a2b4e] mb-3">Hourly Rate</label>
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      {[
                        { label: '1 Hour ($50)', value: 50 },
                        { label: '2 Hours ($90)', value: 90 },
                        { label: '3 Hours ($135)', value: 135 },
                        { label: '4 Hours ($170)', value: 170 },
                      ].map((rate, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer text-[13px] text-gray-600 font-medium">
                          <input type="radio" name="rate" value={rate.value} checked={selectedRate === rate.value} onChange={() => setSelectedRate(rate.value)} className="w-4 h-4 accent-brand-blue" /> {rate.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#0a2b4e] mb-3">Select Extras</label>
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      {[
                        { id: 'windows', label: 'Inside Windows (+$20)' },
                        { id: 'cabinets', label: 'Inside Cabinets (+$65)' },
                        { id: 'deepCleaning', label: 'Deep Cleaning (+$70)' },
                        { id: 'disinfection', label: 'Disinfection Services (+$170)' },
                      ].map((extra) => (
                        <label key={extra.id} className="flex items-center gap-2 cursor-pointer text-[13px] text-gray-600 font-medium">
                          <input type="checkbox" name="extras" value={extra.label} checked={selectedExtras[extra.id as keyof typeof selectedExtras]} onChange={() => toggleExtra(extra.id as keyof typeof selectedExtras)} className="w-4 h-4 accent-brand-blue rounded" /> {extra.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Total Block */}
                <div>
                  <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Total</label>
                  <div className="w-full bg-brand-blue rounded-xl px-6 py-4 text-white text-xl font-bold flex items-center justify-between">
                    <span>Estimated Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <hr className="border-gray-100 my-8" />

                {/* --- SECTION 2: Personal Information --- */}
                <div>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-6">Kindly provide your personal informations below:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Name *</label>
                      <input type="text" name="name" required placeholder="John Doe" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Phone *</label>
                      <input type="tel" name="phone" required placeholder="(555) 000-0000" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Email *</label>
                      <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">How many pets live in the home?</label>
                      <div className="relative">
                        <select name="pets" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none appearance-none cursor-pointer">
                          <option>None</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3+</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Street Address *</label>
                      <input type="text" name="address" required placeholder="123 Main St" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">City *</label>
                        <input type="text" name="city" required placeholder="Your City" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Zip *</label>
                        <input type="text" name="zip" required placeholder="12345" className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[13px] font-bold text-[#0a2b4e] mb-2">Additional Details</label>
                      <textarea name="details" rows={4} placeholder="Any specific instructions..." className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none placeholder:text-gray-400 resize-none"></textarea>
                    </div>
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-[14px] font-bold">There was an error submitting your request. Please try again.</p>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#0a2b4e] hover:bg-brand-blue disabled:opacity-75 text-white font-bold rounded-xl px-6 py-4 flex items-center justify-between transition-colors duration-300 group mt-4"
                >
                  <span className="text-[15px]">{isSubmitting ? "Processing..." : "Submit Request"}</span>
                  <div className="w-6 h-6 rounded-full border-[1.5px] border-white flex items-center justify-center">
                    {isSubmitting ? (
                      <Loader2 className="w-3 h-3 text-white animate-spin" />
                    ) : (
                      <ArrowRight className="w-3 h-3 text-white transform group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </div>
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}