'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Smart Homes: Technology Meets Luxury Living",
    excerpt: "Discover how cutting-edge technology is revolutionizing the way we live, from automated systems to sustainable energy solutions that enhance both comfort and efficiency.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "/images/demo-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Development: Building Green Communities for Tomorrow",
    excerpt: "Explore our approach to creating eco-friendly developments that prioritize environmental responsibility while delivering exceptional living experiences.",
    author: "Michael Chen",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Sustainability",
    image: "/images/demo-1.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Investment Opportunities in Real Estate: A Strategic Guide",
    excerpt: "Learn about the latest trends in real estate investment and how to identify promising opportunities in today's dynamic market landscape.",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Investment",
    image: "/images/demo-1.jpg",
    featured: false
  }
];

// export const metadata = {
//   title: "Blog - DreamSellers Real Estate Insights",
//   description: "Stay updated with the latest trends, insights, and news in real estate development, smart homes, and sustainable living.",
//   keywords: [
//     "real estate blog",
//     "property development",
//     "smart homes",
//     "sustainable living",
//     "investment insights",
//     "real estate trends"
//   ],
//   metadataBase: new URL("https://dreamseller.ca"),
//   alternates: {
//     canonical: `/blog`,
//   },
// };

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      setLoading(false);
      return;
    }
    const { error } = await supabase.from('newsletter_subscriptions').insert({ email });
    if (error) {
      setMessage({ type: 'error', text: error.message.includes('duplicate') ? 'You are already subscribed.' : 'Subscription failed. Please try again.' });
    } else {
      setMessage({ type: 'success', text: 'Thank you for subscribing!' });
      setEmail('');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
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
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed"
          >
            Insights, trends, and stories from the world of real estate development
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-700 font-semibold">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 lg:p-12 text-white"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated
              </h3>
              <p className="text-slate-200 mb-8 leading-relaxed">
                Subscribe to our newsletter for the latest insights, trends, and updates from the world of real estate development.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  className="bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-500 transition-colors duration-300 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {message && (
                <div className={`mt-4 text-sm font-medium ${message.type === 'success' ? 'text-green-200' : 'text-red-200'}`}>{message.text}</div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 