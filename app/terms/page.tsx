import React from 'react';
import Image from 'next/image';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-16 lg:pb-24">
      
      {/* Top Header Background */}
      <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <Image
          src="/header.webp"
          alt="Terms of Service Header"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlays for contrast */}
        <div className="absolute inset-0 bg-brand-blue/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a2b4e]/60" />
        
        {/* Page Title Centered in Header */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 lg:-mt-24">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 sm:p-12 lg:p-16">
          
          <div className="space-y-8 text-gray-600 leading-relaxed text-[15px]">
            <div>
              <p className="font-bold text-gray-900 mb-2">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              <p>
                Welcome to Deborah Maid Cleaning Services LLC. By accessing our website, booking our services, or interacting with our company, you agree to be bound by the following Terms of Service. Please read these terms carefully before scheduling any cleaning service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">1. Acceptance of Terms</h2>
              <p>
                By booking a cleaning appointment with Deborah Maid Cleaning Services LLC, you confirm that you have read, understood, and agreed to these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">2. Services Provided</h2>
              <p className="mb-3">
                Deborah Maid Cleaning Services LLC provides residential and commercial cleaning services. The specific tasks to be performed will be agreed upon at the time of booking. We reserve the right to refuse service to anyone for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Environments that are deemed hazardous or unsafe for our staff.</li>
                <li>Homes with severe mold, hoarding situations, or biohazards.</li>
                <li>Properties requiring specialized equipment beyond standard professional cleaning supplies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">3. Booking and Cancellations</h2>
              <p className="mb-3">
                We understand that schedules can change. To provide the best service to all of our clients, we enforce the following cancellation policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Notice:</strong> We require at least 24 hours&apos; notice for any cancellations or rescheduling requests.</li>
                <li><strong>Late Cancellations:</strong> Cancellations made less than 24 hours before the scheduled service may be subject to a cancellation fee.</li>
                <li><strong>Lockouts:</strong> If our cleaning professionals are unable to access the property at the scheduled time, a lockout fee may apply.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">4. Payment Terms</h2>
              <p>
                Payment is due at the time of service unless a prior agreement has been made. We accept major credit cards and other approved digital payment methods. For recurring services, we may require a credit card on file to automatically bill for services rendered. In the event of a declined payment, services may be suspended until the balance is resolved.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">5. Liability and Damages</h2>
              <p className="mb-3">
                Our team takes the utmost care when cleaning your property. However, accidents can occasionally happen. 
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Please secure or put away any highly fragile, irreplaceable, or highly valuable items prior to our arrival.</li>
                <li>If a breakage or damage occurs, it must be reported to us within 24 hours of the completed service.</li>
                <li>Deborah Maid Cleaning Services LLC is fully insured, and we will work with you to repair or replace items damaged directly due to our negligence. We are not liable for pre-existing damage, improper installation, or wear and tear.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">6. Pets and Safety</h2>
              <p>
                We love pets! However, for the safety of our staff and your animals, we ask that aggressive or highly anxious pets be secured during the cleaning process. We are not responsible for pets that escape while our staff is entering or exiting the home, though we take great care to ensure doors are closed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">7. Satisfaction Guarantee</h2>
              <p>
                Your satisfaction is our priority. If you are not completely satisfied with a specific area that we cleaned, please contact us within 24 hours. We will gladly return to re-clean the area in question at no additional charge. We do not offer cash refunds for completed services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">8. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Virginia, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="bg-[#f4f7f9] rounded-2xl p-8 mt-10">
              <h2 className="text-xl font-bold text-[#0a2b4e] mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about these Terms of Service, please reach out to us:
              </p>
              <ul className="space-y-2">
                <li><strong>Deborah Maid Cleaning Services LLC</strong></li>
                <li><strong>Phone:</strong> <a href="tel:5713940338" className="text-brand-blue hover:underline">571-394-0338</a></li>
                <li><strong>Email:</strong> <a href="mailto:info@deborahmaidservice.com" className="text-brand-blue hover:underline">info@deborahmaidservice.com</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}