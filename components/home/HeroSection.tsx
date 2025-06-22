"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Play, Star, Award, TrendingUp, Link } from "lucide-react";

type Slide = {
  title: React.ReactNode;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
};

const slides: Slide[] = [
  {
    title: (
      <>
        We Don&apos;t Just Sell Dreams. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
          We Build Them.
        </span>
      </>
    ),
    description: "Transform your vision into reality with our cutting-edge real estate solutions that combine luxury, sustainability, and smart technology.",
    image: "/images/slide-1.jpg",
    stats: [
      { label: "Projects Completed", value: "50+" },
      { label: "Happy Clients", value: "500+" },
      { label: "Years Experience", value: "15+" }
    ]
  },
  {
    title: (
      <>
        Smart Homes, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
          Smarter Living
        </span>
      </>
    ),
    description: "Experience the future of living with our eco-friendly smart homes that adapt to your lifestyle while preserving our planet.",
    image: "/images/slide-3.jpg",
    stats: [
      { label: "Smart Features", value: "100+" },
      { label: "Energy Savings", value: "40%" },
      { label: "Green Certifications", value: "LEED" }
    ]
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[92vh] bg-black w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-600/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background image with parallax effect */}
          <motion.img
            src={slides[current].image}
            alt="Slide"
            className="w-full h-full object-cover"
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-20 right-20 hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">Live Project</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-40 right-20 hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-sm font-medium">Award Winning</span>
              </div>
            </div>
          </motion.div>

          {/* Hero content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
            <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
                  className="text-white space-y-8"
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="flex items-center gap-3 text-slate-300 font-medium"
                    >
                      <TrendingUp className="w-5 h-5" />
                      <span>Leading Real Estate Developer</span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                {slides[current].title}
              </h1>
                    
                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                      {slides[current].description}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 pt-6"
                  >
                <Link href="/projects" className="group bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                      Explore Projects
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                    
                <Link href="/contact" className="group bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                      Consult Now
                      <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Right Content - Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="hidden lg:block relative"
                >
                  <div className="relative h-96">
                    {/* Floating Card 1 */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-0 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">5-Star Rated</div>
                          <div className="text-gray-300 text-sm">Premium Quality</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
                    >
                      <div className="text-2xl font-bold text-white mb-1">5+</div>
                      <div className="text-gray-300 text-sm">Projects Ongoing</div>
                    </motion.div>

                    {/* Floating Card 3 */}
                    <motion.div
                      animate={{ y: [-5, 15, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">Smart Investment</div>
                          <div className="text-gray-300 text-sm">High Returns</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === current
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </section>
  );
}
