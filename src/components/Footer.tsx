import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { LinkedIn as LinkedInIcon, Twitter as TwitterIcon } from '@mui/icons-material';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'Our Company', path: '/about' },
      { name: 'Newsroom', path: '/newsroom' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
      { name: 'Blog', path: '/blog' },
    ],
    services: [
      { name: 'Digital Transformation', path: '/services' },
      { name: 'AI Integration & Strategy', path: '/services' },
      { name: 'UI/UX Design Consulting', path: '/services' },
      { name: 'Intelligent Automation', path: '/services' },
      { name: 'Software Engineering & Design', path: '/services' },
    ],
    industries: [],
    support: [
      { name: 'Help Center', path: '/support' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com/company/finnitt' },
    { name: 'Twitter', icon: <TwitterIcon fontSize="small" />, href: 'https://twitter.com/finnitt' },
  ];

  const validPaths = new Set<string>(['/', '/about', '/newsroom', '/services', '/products']);

  return (
    <footer className="bg-[#032F49] text-white">
              <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/finnitt_trans.png" 
                alt="Finnitt" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              We help businesses leverage artificial intelligence to drive innovation, 
              optimize operations, and create competitive advantages in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center text-white hover:text-[#0097B2] hover:border-[#0097B2] transition-all duration-300 shadow-sm hover:shadow-md text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {validPaths.has(link.path) ? (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#0097B2] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-gray-300 cursor-default">{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {validPaths.has(link.path) ? (
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#0097B2] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-gray-300 cursor-default">{link.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links - removed */}
        </div>

        {/* Contact Section */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0097B2]/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#0097B2]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-sm text-gray-300">hello@finnitt.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0097B2]/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#0097B2]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Phone</p>
                <p className="text-sm text-gray-300">+92 335 1025322</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0097B2]/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#0097B2]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Locations</p>
                <p className="text-sm text-gray-300">Karachi, Pakistan · Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            © 2024 Finnitt. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-300 cursor-default">Privacy Policy</span>
            <span className="text-sm text-gray-300 cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#0097B2] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
