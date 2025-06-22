"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const partners = [
  { name: "DreamSellers", logo: "/logos/logo-dreamsellers-b.png" },
  { name: "DreamSellers", logo: "/logos/logo-dreamsellers-b.png" },
  { name: "DreamSellers", logo: "/logos/logo-dreamsellers-b.png" },
  { name: "DreamSellers", logo: "/logos/logo-dreamsellers-b.png" },
  { name: "DreamSellers", logo: "/logos/logo-dreamsellers-b.png" },
];

export default function PartnersSection() {
  return (
    <section 
      className="py-20 md:py-26 bg-gray-100"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgb(255, 255, 255) 1.5px, transparent 1px)",
        backgroundSize: "15px 15px",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Our Sister Concerns
        </h2>
        <p className="text-base text-gray-600 mb-16">
          Our strategic sister concerns from around the world.
        </p>

        {/* Marquee */}
        <Marquee
          gradient={true}
          gradientColor="oklch(96.7% 0.003 264.542)"
          speed={40}
          pauseOnHover={false}
          className="overflow-hidden"
          autoFill={true}
        >
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 flex grayscale transition-all duration-300 brightness-0 hover:grayscale-0 hover:brightness-100 items-center justify-center h-16">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={20}
                className="object-contain h-7 w-auto transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
