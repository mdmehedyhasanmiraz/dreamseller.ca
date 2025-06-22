"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Home,
  Calculator,
  Target,
  Shield,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Real Estate Development",
    description: "Comprehensive real estate development services from concept to completion, delivering exceptional properties that exceed expectations.",
    icon: Building2,
    features: [
      "Residential & Commercial Projects",
      "Luxury Property Development",
      "Smart Home Integration",
      "Sustainable Building Practices",
      "Quality Assurance & Testing",
      "Post-Construction Support"
    ],
    color: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Consultation Services",
    description: "Expert consultation services providing strategic guidance and market insights to help you make informed real estate decisions.",
    icon: Users,
    features: [
      "Market Analysis & Research",
      "Property Valuation",
      "Investment Strategy",
      "Legal & Regulatory Guidance",
      "Risk Assessment",
      "Portfolio Optimization"
    ],
    color: "from-green-600 to-teal-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    id: 3,
    title: "Project Planning",
    description: "Comprehensive project planning and management services ensuring successful delivery of complex real estate developments.",
    icon: BarChart3,
    features: [
      "Feasibility Studies",
      "Project Scheduling",
      "Budget Planning",
      "Resource Management",
      "Risk Mitigation",
      "Stakeholder Coordination"
    ],
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    id: 4,
    title: "Investment Services",
    description: "Strategic investment services helping clients maximize returns and build wealth through smart real estate investments.",
    icon: TrendingUp,
    features: [
      "Investment Analysis",
      "ROI Optimization",
      "Portfolio Diversification",
      "Market Timing",
      "Exit Strategy Planning",
      "Wealth Management"
    ],
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: Home },
  { number: "$2B+", label: "Total Investment", icon: Calculator },
  { number: "98%", label: "Client Satisfaction", icon: Award },
  { number: "15+", label: "Years Experience", icon: Clock }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We begin by understanding your goals, analyzing market conditions, and identifying opportunities.",
    icon: Target
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "Develop comprehensive strategies and detailed project plans tailored to your specific needs.",
    icon: BarChart3
  },
  {
    step: "03",
    title: "Execution & Management",
    description: "Implement the plan with precision, managing every detail to ensure successful delivery.",
    icon: Shield
  },
  {
    step: "04",
    title: "Monitoring & Optimization",
    description: "Continuously monitor performance and optimize strategies for maximum returns.",
    icon: TrendingUp
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative h-[40vh] bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden flex items-center justify-center">
				<div className="absolute inset-0 bg-[url('/images/demo-1.jpg')] bg-cover bg-center opacity-20" />
				<div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80" />
				
				<div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
					>
						Our Services
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed"
					>
						Comprehensive real estate solutions designed to turn your vision into reality
					</motion.p>
				</div>
			</section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide end-to-end real estate solutions 
              that deliver exceptional value and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`p-8 ${service.bgColor}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum returns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-4" />
                  )}
                </div>
                
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how our services can help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 