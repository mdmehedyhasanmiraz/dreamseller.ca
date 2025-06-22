import React from 'react';

export const metadata = {
  title: "Terms of Service - DreamSellers",
  description: "Read the terms of service for using DreamSellers' website and real estate services.",
  keywords: ["dreamsellers", "terms of service", "real estate", "property"],
  metadataBase: new URL("https://dreamseller.ca"),
  alternates: {
    canonical: `/terms`,
  },
};

export default function TermsOfServices() {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl mx-auto py-16 px-3 sm:px-8 space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>

        <p className="">
          Welcome to DreamSellers! These terms of service outline the rules and regulations for the use of DreamSellers&apos; website and real estate services.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p className="">
          By accessing and using this website, you agree to comply with and be bound by these terms of service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">2. Use of Services</h2>
        <p className="">
          You agree to use our website and real estate services only for lawful purposes. You are responsible for ensuring that your use of the website complies with all applicable laws and regulations. Our services are intended for individuals seeking real estate information and services.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">3. Intellectual Property</h2>
        <p className="">
          All content provided on this website, including but not limited to text, images, logos, videos, property listings, and architectural designs, is the property of DreamSellers and protected by copyright laws. You may not use, reproduce, or distribute any of our content without prior written permission.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">4. User Accounts</h2>
        <p className="">
          If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately if you suspect any unauthorized access to your account.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">5. Property Information</h2>
        <p className="">
          While we strive to provide accurate and up-to-date property information, we cannot guarantee the accuracy, completeness, or reliability of any property details, prices, or availability. Property information is subject to change without notice. We recommend verifying all information with our team before making any decisions.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">6. Prohibited Activities</h2>
        <p className="">
          You may not use our website or services for any illegal or prohibited activity. This includes, but is not limited to, the following:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Engaging in any form of fraud or illegal activities.</li>
          <li>Transmitting malicious content such as viruses or malware.</li>
          <li>Interfering with or disrupting the operation of our website.</li>
          <li>Violating any intellectual property rights or third-party rights.</li>
          <li>Attempting to gain unauthorized access to our systems or data.</li>
          <li>Using our services for commercial purposes without authorization.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">7. Limitation of Liability</h2>
        <p className="">
          DreamSellers will not be held liable for any damages arising from your use or inability to use the website, including but not limited to indirect, incidental, or consequential damages. We are not responsible for any decisions made based on information provided on our website.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">8. Third-Party Links</h2>
        <p className="">
          Our website may contain links to third-party websites, including property listings, mortgage calculators, and real estate services. These links are provided for your convenience and do not signify our endorsement of such websites. We have no control over the content or practices of third-party websites and are not responsible for them.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">9. Real Estate Services</h2>
        <p className="">
          Our real estate services are subject to additional terms and conditions that will be provided separately. Property viewings, transactions, and related services are governed by applicable real estate laws and regulations.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">10. Changes to Terms of Service</h2>
        <p className="">
          We reserve the right to update or modify these terms of service at any time. Any changes will be posted on this page with the updated &ldquo;Last updated&rdquo; date.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">11. Governing Law</h2>
        <p className="">
          These terms of service are governed by and construed in accordance with the laws of Bangladesh. Any disputes arising out of these terms will be resolved in the courts of Dhaka, Bangladesh.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">12. Contact Information</h2>
        <p className="">
          If you have any questions regarding these terms of service, please contact us at:
          <br />
          Email: <a href="mailto:info@dreamseller.ca" className="text-blue-500">info@dreamseller.ca</a>
          <br />
          Phone: +88 01842-221872
          <br />
          Address: Holding 287, Road 4, Baridhara DOHS, Dhaka, Bangladesh
        </p>

        <p className="">
          Last updated: December 2024
        </p>
      </div>
    </section>
  );
}
