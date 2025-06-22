"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin, Twitter, Phone } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import teamMembersData from "@/data/team-members.json";

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

// Function to render JSX content from string
const renderJSXContent = (jsxString: string) => {
  try {
    const htmlContent = jsxString
      .replace(/<>/g, '<div>')
      .replace(/<\/>/g, '</div>')
      .replace(/className=/g, 'class=')
      .replace(/target='_blank'/g, 'target="_blank"')
      .replace(/rel="noopener noreferrer"/g, 'rel="noopener noreferrer"');
    
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  } catch (error) {
    console.error('Error rendering JSX content:', error);
    return <p className="text-gray-600 leading-relaxed">{jsxString}</p>;
  }
};

export default function TeamMemberPage() {
  const params = useParams();
  const router = useRouter();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      const foundMember = teamMembersData.find(m => 
        m.is_active && 
        (m.id === slug || 
         m.name.toLowerCase().replace(/\s+/g, '-') === slug ||
         m.name.toLowerCase().replace(/\s+/g, '_') === slug)
      );
      
      if (foundMember) {
        setMember(foundMember);
      } else {
        router.push('/about');
      }
    }
    setLoading(false);
  }, [params.slug, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
          <Link href="/about" className="text-blue-600 hover:text-blue-700">
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('/images/slide-1.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-6"
            >
              <Link 
                href="/about"
                className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Team
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center md:items-end gap-8"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden bg-white shadow-2xl">
                <img
                  src={member.photo_url || "/images/demo-1.jpg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/demo-1.jpg";
                  }}
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {member.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-6">
                  {member.position}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  )}
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  {member.twitter_url && (
                    <a
                      href={member.twitter_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {member.name.split(' ')[0]}</h2>
              {member.bio && (
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {renderJSXContent(member.bio)}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 pt-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.email && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                )}
                {member.phone && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a 
                        href={`tel:${member.phone}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                )}
                {member.linkedin_url && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <a 
                        href={member.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                )}
                {member.twitter_url && (
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Twitter className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Twitter</p>
                      <a 
                        href={member.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        Follow
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Rest of Our Team</h2>
            <p className="text-xl text-gray-600">Discover other talented professionals at DreamSellers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembersData
              .filter(m => m.is_active && m.id !== member.id)
              .slice(0, 3)
              .map((otherMember, index) => (
                <motion.div
                  key={otherMember.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => router.push(`/about/${otherMember.id}`)}
                >
                  <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:bg-white">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={otherMember.photo_url || "/images/demo-1.jpg"}
                        alt={otherMember.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/images/demo-1.jpg";
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {otherMember.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">
                      {otherMember.position}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              View All Team Members
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 