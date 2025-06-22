"use client";

import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
    question: "Where can I find your projects?",
    answer: (
      <>
        You can find our projects by visiting our <Link href="/projects" className="text-purple-600 hover:underline">projects page</Link>.
      </>
    ),
  },
  {
    question: "How do I consult for any project?",
    answer: (
      <>
        You can consult for any project by visiting our <Link href="/contact" className="text-purple-600 hover:underline">contact page</Link>.
      </>
    ),
  },
  {
    question: "What is the support schedule?",
    answer: "Our support is available 7 days a week, from 10am to 10pm.",
  },
  {
    question: "Where is your office located?",
    answer: (
      <>
        Our office is located in <Link href="https://goo.gl/maps/1234567890" className="text-purple-600 hover:underline">1234567890</Link>.
      </>
    ),
  },
  {
    question: "If I have any problem, who can I contact?",
    answer: (
      <>
        If you have any problem, you can contact us by visiting our <Link href="/contact" className="text-purple-600 hover:underline">contact page</Link>.
      </>
    ),
  },
  {
    question: "Is your contact limited to only Bangladesh?",
    answer: "No, our services are available in any country in the world.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center max-w-6xl mx-auto py-16 px-3 gap-8 mb-12">
      {/* Heading and Description */}
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-gray-600 mb-6">
            Here are some common questions and answers about our services and projects.
        </p>
      </div>

      {/* FAQ List */}
      <div className="w-full md:max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left font-semibold text-gray-800 py-4 cursor-pointer transition-colors hover:text-blue-600"
            >
              {faq.question}
              <span className="text-slate-700 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div className={`text-gray-700 mb-4 transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
