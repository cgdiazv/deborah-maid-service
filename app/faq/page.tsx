import React from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: "Do I need to be home when you clean?",
    answer: "No, you do not need to be home. Many of our clients provide us with a spare key or a garage code. Our professionals are vetted and background-checked for your peace of mind."
  },
  {
    question: "Are your cleaning supplies included?",
    answer: "Yes, we bring all the necessary high-quality cleaning supplies and equipment. However, if you have specific products you prefer us to use, please let us know in advance."
  },
  {
    question: "How do I book a cleaning?",
    answer: "You can easily book online through our website's 'Book Online' page, or by calling our office directly at 571-394-0338."
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "We understand plans change. We request at least 24 hours' notice for any cancellations or rescheduling to avoid potential fees."
  },
  {
    question: "Are you insured and bonded?",
    answer: "Yes, Deborah Maid Service LLC is fully insured and bonded to ensure your property and our staff are protected."
  },
  {
    question: "Can I request the same cleaner every time?",
    answer: "Absolutely! We aim to provide consistency and will do our best to ensure the same cleaner visits your home for every scheduled appointment."
  },
  {
    question: "What happens if I am not satisfied with the cleaning?",
    answer: "Your satisfaction is our priority. If you are not happy with a specific area, please contact us within 24 hours, and we will return to re-clean that area at no extra cost."
  },
  {
    question: "How do I make a payment?",
    answer: "Payment is due upon completion of the service. We accept all major credit cards and other secure digital payment methods."
  },
  {
    question: "Are your employees background-checked?",
    answer: "Yes, every member of our cleaning team undergoes a rigorous background check and vetting process before joining our staff."
  },
  {
    question: "Do you provide cleaning services for pets?",
    answer: "We are pet-friendly! We ask that you secure any anxious or aggressive pets to ensure the safety of both your pet and our cleaning professionals."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      
      {/* Top Header Background */}
      <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <Image
          src="/header-faq.webp"
          alt="Frequently Asked Questions"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-brand-blue/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2b4e]/50" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Content Area */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12">
          <div className="space-y-10">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                <h3 className="text-lg font-extrabold text-[#0a2b4e] mb-3 flex items-start gap-3">
                  <span className="text-brand-green">Q.</span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] pl-7">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Still have questions?</p>
          <a href="/contact-us" className="inline-block bg-[#0a2b4e] text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-blue transition-colors">
            Contact Us Today
          </a>
        </div>
      </section>

    </div>
  );
}