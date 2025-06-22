'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: "Home", route: "/" },
  { label: "Projects", route: "/projects" },
  { label: "Services", route: "/services" },
  { label: "About", route: "/about" },
  { label: "Blog", route: "/blog" },
  { label: "Contact", route: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  

  const handleMobileNavClick = (route: string) => {
    setMenuOpen(false);
    router.push(route);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+88 01711-317531</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@dreamseller.ca</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-200">Leading Real Estate Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/">
                <Image
                  src="/logos/logo-dreamsellers-b.png"
                  alt="DreamSellers Logo"
                  width={180}
                  height={48}
                  className="transition-all duration-300"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <Link
                    href={link.route}
                    className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      pathname === link.route
                        ? 'text-slate-700 bg-slate-100'
                        : 'text-gray-700 hover:text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {pathname === link.route && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-slate-100 rounded-xl -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-3 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 hover:shadow-lg hover:shadow-slate-500/25 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
            >
              <nav className="px-4 py-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.route}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleMobileNavClick(link.route)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                          pathname === link.route
                            ? 'text-slate-700 bg-slate-100'
                            : 'text-gray-700 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="pt-4"
                  >
                    <Link
                      href="/contact"
                      className="block w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white px-4 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
