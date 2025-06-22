import React from 'react';

export const metadata = {
  title: "Refund Policy - DreamSellers",
  description: "This page outlines the refund policy of DreamSellers, detailing how we handle refunds for our real estate services.",
  keywords: ["dreamsellers", "refund policy", "real estate", "property"],
  metadataBase: new URL("https://dreamseller.ca"),
  alternates: {
    canonical: `/refund-policy`,
  },
};

export default function RefundPolicy() {
  return (    
    <section className="space-y-6">
      <div className="max-w-3xl mx-auto py-16 px-3 sm:px-8 space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>

        <p className="">
          DreamSellers (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to providing transparent and fair refund policies for our real estate services. This Refund Policy explains our procedures for handling refunds and cancellations. Please read this policy carefully to understand our practices.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">1. Who We Are</h2>
        <p className="">
          Our website address is: <a href="https://dreamseller.ca" className="text-blue-500">https://dreamseller.ca</a>.
          <br />
          Our office address is: Holding 287, Road 4, Baridhara DOHS, Dhaka, Bangladesh.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">2. Service Fees and Deposits</h2>
        <p className="">Our refund policy applies to the following types of payments:</p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>
            <strong>a. Consultation Fees:</strong> Fees paid for property consultation and advisory services.
          </li>
          <li>
            <strong>b. Booking Deposits:</strong> Deposits made to reserve properties or secure viewing appointments.
          </li>
          <li>
            <strong>c. Service Charges:</strong> Administrative fees for property management or transaction services.
          </li>
          <li>
            <strong>d. Marketing Fees:</strong> Fees for property listing and marketing services.
          </li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">3. Refund Eligibility</h2>
        <p className="">
          Refunds may be available under the following circumstances:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Cancellation of services before work has commenced</li>
          <li>Failure to deliver promised services within agreed timeframe</li>
          <li>Property information found to be significantly inaccurate</li>
          <li>Force majeure events preventing service delivery</li>
          <li>Mutual agreement between parties</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">4. Non-Refundable Services</h2>
        <p className="">
          The following services are generally non-refundable:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Completed property viewings and consultations</li>
          <li>Marketing materials already produced and distributed</li>
          <li>Legal and documentation fees already incurred</li>
          <li>Third-party service fees (bank charges, government fees)</li>
          <li>Services where work has already commenced</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">5. Refund Process</h2>
        <p className="">
          To request a refund:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Contact us within 30 days of payment</li>
          <li>Provide detailed reason for refund request</li>
          <li>Include relevant documentation and transaction details</li>
          <li>Allow 5-10 business days for review and processing</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">6. Refund Timeline</h2>
        <p className="">
          Approved refunds will be processed within 5-10 business days and may take additional time to appear in your account depending on your payment method and financial institution.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">7. Partial Refunds</h2>
        <p className="">
          In cases where services have been partially completed, we may offer partial refunds based on the work completed and costs incurred. Each case will be evaluated individually.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">8. Cancellation Policy</h2>
        <p className="">
          For property viewings and consultations:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>Cancellations made 24+ hours in advance: Full refund</li>
          <li>Cancellations made 2-24 hours in advance: 50% refund</li>
          <li>Cancellations made less than 2 hours in advance: No refund</li>
          <li>No-shows: No refund</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold">9. Dispute Resolution</h2>
        <p className="">
          If you disagree with our refund decision, you may request a review by our management team. We are committed to resolving disputes fairly and promptly.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">10. Changes to This Refund Policy</h2>
        <p className="">
          We may update this Refund Policy from time to time. Any changes will be posted on this page with the updated &ldquo;Last updated&rdquo; date.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold">11. Contact Information</h2>
        <p className="">
          If you have any questions about this Refund Policy or need to request a refund, please contact us at:
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
