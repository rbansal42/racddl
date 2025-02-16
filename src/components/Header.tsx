'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Team', path: '/team' },
  { name: 'Legacy', path: '/legacy' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link href="/" className="text-2xl font-semibold text-amber-600">
              Rotaract Club
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.span
                  className={`relative inline-block px-2 py-1 text-[15px] ${
                    pathname === item.path
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ y: -0.5 }}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                      layoutId="underline"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            <motion.div
              whileHover={{ y: -0.5 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="/join"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-[15px] font-medium hover:bg-blue-700 transition-colors"
              >
                Join Us
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 