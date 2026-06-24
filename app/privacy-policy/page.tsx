import React from 'react';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-16 lg:pb-24">
      
      {/* Top Header Background */}
      <section className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <Image
          src="/header.webp"
          alt="Privacy Policy Header"
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
            Privacy Policy
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
                At Deborah Maid Service LLC, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">1. Information We Collect</h2>
              <p className="mb-3">We may collect personal information from you when you visit our website, request a quote, book a service, or contact us. This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address.</li>
                <li><strong>Property Details:</strong> Information about your home or office, such as square footage, number of rooms, and presence of pets.</li>
                <li><strong>Payment Information:</strong> Credit card details or other financial information required to process transactions.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">2. How We Use Your Information</h2>
              <p className="mb-3">The information we collect is used in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, schedule, and personalize our cleaning services.</li>
                <li>To process payments and send billing communications.</li>
                <li>To respond to your inquiries, provide customer support, and send service updates.</li>
                <li>To improve our website functionality, user experience, and overall service offerings.</li>
                <li>To send promotional emails or special offers (you may opt out at any time).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">4. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">5. Cookies</h2>
              <p>
                Our website may use "cookies" to enhance user experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. If you turn cookies off, some features that make your site experience more efficient may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">6. Third-Party Links</h2>
              <p>
                Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0a2b4e] mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>

            <div className="bg-[#f4f7f9] rounded-2xl p-8 mt-10">
              <h2 className="text-xl font-bold text-[#0a2b4e] mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If there are any questions regarding this privacy policy, you may contact us using the information below:
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