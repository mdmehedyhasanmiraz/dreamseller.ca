"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type VideoSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  videoSrc: string;
  reverse?: boolean;
};

export default function VideoSection({
  title,
  description,
  buttonText,
  buttonLink,
  videoSrc,
  reverse = false,
}: VideoSectionProps) {
  return (
    <section className="max-w-7xl mx-auto w-full py-20 x-6">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-12`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-medium leading-tight">{title}</h2>
          <p className="text-lg md:text-xl text-gray-600">{description}</p>
          <Link href={buttonLink} className="mt-4 border border-black px-6 py-3 rounded-full hover:bg-black/10 transition">
            {buttonText}
          </Link>
        </motion.div>

        {/* Video Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl"
        >
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
