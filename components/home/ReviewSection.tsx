"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Luxury Home Buyer",
    rating: 5,
    text: "DreamSellers exceeded every expectation. Their attention to detail and commitment to quality is unmatched. Our new home is absolutely perfect.",
    avatar: "/images/member-1.webp",
    project: "Oceanview Residences",
    location: "Vancouver, BC"
  },
  {
    id: 2,
    name: "Alexander Thompson",
    role: "Commercial Investor",
    rating: 5,
    text: "The ROI on our investment with DreamSellers has been phenomenal. Their market insights and execution capabilities are world-class.",
    avatar: "/images/member-1.webp",
    project: "Downtown Business Center",
    location: "Toronto, ON"
  },
  {
    id: 3,
    name: "Chris Smith",
    role: "Property Developer",
    rating: 5,
    text: "Working with DreamSellers was a game-changer for our portfolio. Their innovative approach and sustainable practices set new industry standards.",
    avatar: "/images/member-1.webp",
    project: "Green Valley Estates",
    location: "Calgary, AB"
  }
];

export default function ReviewSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Award-Winning Service</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover why thousands of satisfied clients choose DreamSellers for their premium real estate needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Main Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="xl:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 sticky top-8 overflow-y-auto">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8">
                <Quote className="w-12 h-12 text-slate-200" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-xl font-light text-gray-800 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 ring-4 ring-white shadow-lg">
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/demo-1.jpg";
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                      <div className="text-sm text-slate-500">{testimonials[currentTestimonial].location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-600">Project</div>
                    <div className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].project}</div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center group"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-slate-800" />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial 
                          ? 'bg-slate-600 w-8' 
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center group"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-800" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-slate-300 text-sm">Projects Ongoing</div>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏗️</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-slate-300 text-sm">Happy Clients</div>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-xl">😊</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-slate-300 text-sm">Years Experience</div>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">99.5%</div>
                    <div className="text-slate-300 text-sm">Satisfaction Rate</div>
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
