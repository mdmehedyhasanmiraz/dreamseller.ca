"use client";

import Marquee from "react-fast-marquee";

const marqueeWords = [
  "Trust", "Quality", "Green Design", "Eco Smart", "AI Driven", "Client First",
  "Secure Deals", "Peaceful Living", "Next-Gen", "Low Emission", "Future Ready"
];

export default function MarqueeSection() {
  const repeated = marqueeWords.map(word => word.toUpperCase()).join(" • ");

  return (
    <section className="relative bg-black py-12 overflow-hidden">
      <div className="space-y-6">
        <Marquee speed={30} gradient={false} className="text-white">
          <h2 className="text-6xl md:text-8xl font-medium opacity-10 hover:opacity-50 transition-opacity duration-800 tracking-wider whitespace-nowrap h-28">
            {repeated.repeat(20)}
          </h2>
        </Marquee>

        <Marquee speed={30} gradient={false} direction="right" className="text-white">
          <h2 className="text-6xl md:text-8xl font-medium opacity-10 hover:opacity-50 transition-opacity duration-800 tracking-wider whitespace-nowrap h-28">
            {repeated.repeat(20)}
          </h2>
        </Marquee>
      </div>
    </section>
  );
}
