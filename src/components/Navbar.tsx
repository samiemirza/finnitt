import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/products' },
    { name: 'Our Company', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Accent Bar */}
      <div className="h-3 bg-[#0097B2] fixed top-0 left-0 right-0 z-50"></div>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-3 left-0 right-0 z-40 transition-all duration-300 bg-white shadow-lg border-b border-gray-100`}
      >
        <div className="max-w-9xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/finnitt_trans.png" 
                alt="Finnitt" 
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-2 py-2 text-base font-bold transition-all duration-300 group ${
                    isActive(item.path) 
                      ? 'text-[#0097B2]' 
                      : 'text-gray-700 hover:text-[#0097B2]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0097B2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#0097B2] transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white border-t border-gray-100"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                        isActive(item.path)
                          ? 'text-[#0097B2] bg-[#0097B2]/10'
                          : 'text-gray-700 hover:text-[#0097B2] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
