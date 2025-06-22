"use client";

import { motion } from "framer-motion";

export default function ProjectsHeader() {
  return (
    <section className="relative h-[40vh] w-full overflow-hidden bg-black">
      {/* Background image */}
      <img
        src="/images/slide-3.jpg"
        alt="Header Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dotted overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

      {/* Heading Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white space-y-4 max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-medium leading-tight">
            Explore Our Finest Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Where innovation meets architecture — curated with technology, trust, and timeless design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
