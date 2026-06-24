"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, MapPin, Clock, Loader2, CheckCircle2 } from 'lucide-react';
import { sendContactEmail } from '../actions/contact';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      e.currentTarget.reset(); // Clear the form
    } else {
      setStatus("error");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      
      {/* Top Header Background */}
      <section className="relative h-[350px] lg:h-[400px] w-full overflow-hidden">
        <Image
          src="/header.webp"
          alt="Contact Us Header"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlays for contrast */}
        <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2b4e]/50" />
        
        {/* Optional Page Title Centered in Header */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 -mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Overlapping Contact Card Container */}
      <section className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 -mt-32 lg:-mt-40">
        <div className="w-full bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:p-10 lg:p-12">
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            
            {/* Left Column: Form Area */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <h2 className="text-[28px] sm:text-3xl font-extrabold text-[#0a2b4e] mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                We take great pride in everything that we do, control over products allows us to ensure customers receive the best quality service and highest standards, you need a dedicated team of specialists.
              </p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold text-[#0a2b4e] mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-sm">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-brand-blue font-semibold hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Name" 
                        className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none transition-all placeholder:text-gray-500 font-medium"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Email" 
                        className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none transition-all placeholder:text-gray-500 font-medium"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="Phone" 
                        className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none transition-all placeholder:text-gray-500 font-medium"
                      />
                    </div>
                    {/* Service Dropdown */}
                    <div className="relative">
                      <select 
                        name="service"
                        className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-500 font-medium appearance-none focus:ring-2 focus:ring-brand-blue outline-none transition-all cursor-pointer"
                      >
                        <option value="">Select Your services</option>
                        <option value="Residential Cleaning">Residential Cleaning</option>
                        <option value="Commercial Cleaning">Commercial Cleaning</option>
                        <option value="Apartment Cleaning">Apartment Cleaning</option>
                        <option value="Move In / Move Out">Move In / Move Out</option>
                      </select>
                      {/* Custom Dropdown Arrow */}
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details Textarea */}
                  <div>
                    <textarea 
                      name="details"
                      placeholder="Additional Details" 
                      rows={4}
                      className="w-full bg-[#f4f7f9] border-none rounded-xl px-5 py-4 text-[14px] text-gray-700 focus:ring-2 focus:ring-brand-blue outline-none transition-all placeholder:text-gray-500 font-medium resize-none"
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium">There was an error sending your message. Please try again.</p>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#0a2b4e] hover:bg-brand-blue disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold rounded-xl px-6 py-4 flex items-center justify-between transition-colors duration-300 group mt-2"
                  >
                    <span className="text-[14px]">{isSubmitting ? "Sending..." : "Submit Request"}</span>
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

            {/* Right Column: Inset Blue Info Card */}
            <div className="w-full lg:w-5/12 bg-brand-blue rounded-[2rem] relative overflow-hidden p-8 sm:p-10 flex flex-col justify-center shadow-md">
              
              {/* Abstract Decorative Graphics Inside Blue Card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0a2b4e]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
              
              {/* Outline Leaf/Abstract Graphic */}
              <svg className="absolute -right-8 top-1/4 w-48 h-48 text-white/[0.04] transform rotate-12 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z"/>
              </svg>

              <div className="relative z-10 text-white">
                <span className="block text-white/90 font-bold text-sm tracking-widest uppercase mb-4">
                  Homeowners Like Us!
                </span>
                <h3 className="text-2xl sm:text-[28px] font-bold leading-snug mb-5">
                  Healthy Environment For Your Family
                </h3>
                <p className="text-white/80 leading-relaxed text-[14px] font-medium mb-10">
                  The processes and systems we put in place provide high quality service with a focus on safety.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3.5">
                    <Phone className="w-[18px] h-[18px] text-white" />
                    <span className="font-bold text-[13px] tracking-wide">Emergency Line: 571-394-0338</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <MapPin className="w-[18px] h-[18px] text-white" />
                    <span className="font-bold text-[13px] tracking-wide">Location: Virginia & Surrounding Areas</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <Clock className="w-[18px] h-[18px] text-white" />
                    <span className="font-bold text-[13px] tracking-wide">Mon - Fri: 8:00 am - 6:00 pm</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}