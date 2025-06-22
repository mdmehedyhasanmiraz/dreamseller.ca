"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Target, CheckCircle, Star } from "lucide-react";
import teamMembersData from "../../../data/team-members.json";
import { useRouter } from "next/navigation";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo_url?: string;
  bio?: string;
  email?: string;
  phone?: string;
  linkedin_url?: string;
  twitter_url?: string;
  order_index: number;
  is_active: boolean;
}

// Function to get short bio excerpt
const getShortBio = (bio: string, maxLength: number = 150) => {
  // Remove JSX tags and get plain text
  const plainText = bio
    .replace(/<[^>]*>/g, '') // Remove all HTML/JSX tags
    .replace(/<>/g, '') // Remove React fragments
    .replace(/<\/>/g, '') // Remove closing React fragments
    .replace(/\n\n/g, ' ') // Replace double line breaks with single space
    .replace(/\n/g, ' ') // Replace single line breaks with space
    .trim();
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  return plainText.substring(0, maxLength).trim() + '...';
};

export default function AboutPage() {
  const router = useRouter();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Filter active team members and sort by order_index
    const activeMembers = teamMembersData
      .filter(member => member.is_active)
      .sort((a, b) => a.order_index - b.order_index);
    
    setTeamMembers(activeMembers);
    setLoading(false);
  }, []);

  const values = [
    {
      icon: CheckCircle,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring exceptional quality and craftsmanship."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Our clients are at the heart of everything we do, with personalized service and attention to detail."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative design solutions to create outstanding results."
    },
    {
      icon: Star,
      title: "Integrity",
      description: "We operate with complete transparency, honesty, and ethical business practices."
    }
  ];

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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the story behind DreamSellers, a leading real estate developer committed to excellence and innovation.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  DreamSellers has been at the forefront of real estate development, transforming visions into exceptional living and working spaces. What started as a small family business has grown into one of the most trusted names in the industry.
                </p>
                <p>
                  Our journey has been marked by innovation, quality craftsmanship, and an unwavering commitment to our clients&apos; satisfaction. We believe that every project is an opportunity to create something extraordinary that will stand the test of time.
                </p>
                <p>
                  Today, we continue to push boundaries with cutting-edge technology, sustainable practices, and designs that inspire. Our portfolio spans residential and commercial projects, each reflecting our dedication to excellence and attention to detail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/demo-1.jpg"
                alt="DreamSellers Office"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

			{/* Team Section */}
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
							Meet Our Team
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							The passionate professionals behind our success
						</p>
					</motion.div>

					{loading ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{[...Array(6)].map((_, i) => (
								<div key={i} className="bg-white rounded-xl p-6 animate-pulse">
									<div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
									<div className="h-4 bg-gray-200 rounded mb-2"></div>
									<div className="h-3 bg-gray-200 rounded mb-4"></div>
									<div className="h-3 bg-gray-200 rounded w-2/3"></div>
								</div>
							))}
						</div>
					) : teamMembers.length === 0 ? (
						<div className="text-center py-12">
							<Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
							<h3 className="text-lg font-medium text-gray-900 mb-2">No team members found</h3>
							<p className="text-gray-600">Our team information will be available soon.</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{teamMembers.map((member, index) => (
								<motion.div
									key={member.id}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
									onClick={() => router.push(`/about/${member.id}`)}
								>
									<div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
										<img
											src={member.photo_url || "/images/demo-1.jpg"}
											alt={member.name}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
											onError={(e) => {
												const target = e.target as HTMLImageElement;
												target.src = "/images/demo-1.jpg";
											}}
										/>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
										{member.name}
									</h3>
									<p className="text-blue-600 font-medium mb-4">
										{member.position}
									</p>
									{member.bio && (
										<div className="text-gray-600 text-sm leading-relaxed mb-4 text-left">
											{getShortBio(member.bio)}
										</div>
									)}
									<div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
										{member.email && (
											<a
												href={`mailto:${member.email}`}
												className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
												onClick={(e) => e.stopPropagation()}
											>
												Email
											</a>
										)}
										{member.linkedin_url && (
											<a
												href={member.linkedin_url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
												onClick={(e) => e.stopPropagation()}
											>
												LinkedIn
											</a>
										)}
										{member.twitter_url && (
											<a
												href={member.twitter_url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
												onClick={(e) => e.stopPropagation()}
											>
												Twitter
											</a>
										)}
									</div>
									<div className="mt-4 pt-4 border-t border-gray-100">
										<button 
											className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors group-hover:underline"
											onClick={(e) => {
												e.stopPropagation();
												router.push(`/about/${member.id}`);
											}}
										>
											Read Full Bio →
										</button>
									</div>
								</motion.div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Mission and Vision Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
					>
						<h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
						<p className="text-gray-700 text-lg leading-relaxed">
							To deliver exceptional real estate solutions that exceed client expectations, foster innovation, and create lasting value for communities.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
					>
						<h2 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h2>
						<p className="text-gray-700 text-lg leading-relaxed">
							To be the most trusted and innovative real estate developer, shaping skylines and enriching lives through sustainable and inspiring spaces.
						</p>
					</motion.div>
				</div>
			</section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 