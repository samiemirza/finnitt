import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Home: React.FC = () => {
  const testimonials = [
    {
      title: 'Consulting',
      quote:
        'Finnitt’s consulting team embedded seamlessly into our operations. They brought innovative solutions, challenged assumptions, and helped us move faster with confidence.',
      author: 'Alex Carter | COO, Northwind Industries',
    },
    {
      title: 'AI Agents – Lead Generation',
      quote:
        'The AI agents consistently qualified inbound interest and booked meetings while we slept. Conversion rates improved and our pipeline became more predictable.',
      author: 'Jordan Lee | VP Growth, Meridian Systems',
    },
    {
      title: 'GenAI Solutions',
      quote:
        'Their GenAI capabilities let our teams prototype in hours instead of weeks. We now ship features faster with higher quality and clearer customer insights.',
      author: 'Priya Nair | Head of Product, Aurora Finance',
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = React.useState<number>(0);
  const prevTestimonialIndex = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
  const nextTestimonialIndex = (activeTestimonial + 1) % testimonials.length;
  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative flex items-center pt-20 bg-gray-50">
        {/* Image Wrapper */}
        <div className="relative w-full">
          {/* Image */}
          <img
            src="/home.svg"
            alt="Hero background"
            className="w-full h-auto rounded-2xl hidden md:block"
          />
          {/* Content */}
          <div className="md:absolute md:inset-0">
            <div className="max-w-9xl mx-auto h-full px-4 sm:px-6 lg:px-16 flex items-center justify-start">
              <div className="max-w-3xl py-8 md:py-16 md:-mt-24">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
              >
                Building AI-first Businesses
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
              >
                Transform your business with cutting-edge AI solutions. We help companies leverage
                artificial intelligence to drive innovation, optimize operations, and create competitive advantages.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-finnitt-teal to-finnitt-cyan text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span>Get to know Finnitt</span>
                    <div className="group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight size={20} />
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      

      {/* Services Section */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-20 bg-gray-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
            >
              Services We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
            >
              Comprehensive solutions to transform your business with cutting-edge technology and strategic innovation.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group perspective"
            >
              <div className="relative w-full h-80 cursor-pointer transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-finnitt-teal to-finnitt-cyan rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">Digital Transformation</h3>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full bg-[#0097B2] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white">
                  <h3 className="text-xl font-semibold mb-3 text-center">Digital Transformation</h3>
                  <p className="text-center text-sm leading-relaxed">
                    Modernize your business operations with digital-first strategies, cloud solutions, and process optimization.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* AI Integration and Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group perspective"
            >
              <div className="relative w-full h-80 cursor-pointer transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-finnitt-teal to-finnitt-cyan rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">AI Integration & Strategy</h3>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full bg-[#0097B2] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white">
                  <h3 className="text-xl font-semibold mb-3 text-center">AI Integration & Strategy</h3>
                  <p className="text-center text-sm leading-relaxed">
                    Develop comprehensive AI strategies and seamlessly integrate intelligent solutions into your existing workflows.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* UI/UX Design Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group perspective"
            >
              <div className="relative w-full h-80 cursor-pointer transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-finnitt-teal to-finnitt-cyan rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">UI/UX Design Consulting</h3>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full bg-[#0097B2] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white">
                  <h3 className="text-xl font-semibold mb-3 text-center">UI/UX Design Consulting</h3>
                  <p className="text-center text-sm leading-relaxed">
                    Create intuitive, engaging user experiences with expert design consultation and user-centered design principles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Intelligent Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group perspective"
            >
              <div className="relative w-full h-80 cursor-pointer transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-finnitt-teal to-finnitt-cyan rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">Intelligent Automation</h3>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full bg-[#0097B2] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white">
                  <h3 className="text-xl font-semibold mb-3 text-center">Intelligent Automation</h3>
                  <p className="text-center text-sm leading-relaxed">
                    Streamline operations with smart automation solutions that learn, adapt, and optimize your business processes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Software Engineering and Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="group perspective"
            >
              <div className="relative w-full h-80 cursor-pointer transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden">
                  <div className="w-16 h-16 bg-gradient-to-br from-finnitt-teal to-finnitt-cyan rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">Software Engineering & Design</h3>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full bg-[#0097B2] rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 text-white">
                  <h3 className="text-xl font-semibold mb-3 text-center">Software Engineering & Design</h3>
                  <p className="text-center text-sm leading-relaxed">
                    Build robust, scalable software solutions with modern engineering practices and innovative design patterns.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sixth Tile - Explore All Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="group"
            >
              <Link to="/services">
                <div className="relative w-full h-80 cursor-pointer bg-gradient-to-r from-finnitt-teal to-finnitt-cyan rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">Explore All Services</h3>
                  <p className="text-center text-sm text-white/90 mb-4">
                    Discover our complete portfolio of solutions
                  </p>
                  <div className="flex items-center space-x-2 text-white group-hover:translate-x-1 transition-transform duration-200">
                    <span className="text-sm font-medium">View More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section – single large carousel */}
      <section className="pt-16 md:pt-32 pb-12 md:pb-20" style={{ backgroundColor: '#0097B2' }}>
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16 relative">
          {/* Section eyebrow above carousel */}
          <div className="mb-6">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
              FEATURED SOLUTIONS
            </span>
          </div>
          {/* Carousel track */}
          <div
            id="solutions-carousel"
            className="flex space-x-4 sm:space-x-8 overflow-x-auto pt-8 md:pt-16 pb-16 md:pb-24 scrollbar-hide touch-pan-x"
          >
            {/* Card 0: Transparent intro card holding the title and text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 w-[85vw] sm:w-[28rem] md:w-[36rem] lg:w-[42rem] h-auto min-h-[24rem] md:h-[28rem] rounded-2xl p-6 sm:p-8 md:p-10 bg-transparent backdrop-blur-sm flex flex-col justify-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Accelerate your Performance with our solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Discover cutting-edge solutions that drive innovation and transform your business operations. From AI-powered fintech to smart HR systems, we deliver the tools you need to stay ahead.
              </p>
            </motion.div>

            {/* Card 1: AI Powered Fintech Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[28rem] md:w-[36rem] lg:w-[42rem] h-auto min-h-[24rem] md:h-[28rem] bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                AI Powered Fintech Solutions
              </h3>
              <Link
                to="/products"
                onClick={() => window.scrollTo(0, 0)}
                className="text-finnitt-teal font-semibold hover:text-finnitt-cyan transition-colors duration-200"
              >
                Read more
              </Link>
              <div className="mt-6 flex-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <img src="/1.svg" alt="AI Powered Fintech" className="w-full h-auto max-w-[588px] max-h-[280px] object-contain" />
              </div>
            </motion.div>

            {/* Card 2: GenAI Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-shrink-0 w-[85vw] sm:w-[28rem] md:w-[36rem] lg:w-[42rem] h-auto min-h-[24rem] md:h-[28rem] bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                GenAI Solutions
              </h3>
              <Link
                to="/products"
                onClick={() => window.scrollTo(0, 0)}
                className="text-finnitt-teal font-semibold hover:text-finnitt-cyan transition-colors duration-200"
              >
                Read more
              </Link>
              <div className="mt-6 flex-1 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <img src="/2.svg" alt="GenAI Solutions" className="w-full h-auto max-w-[588px] max-h-[280px] object-contain" />
              </div>
            </motion.div>

            {/* Card 3: Agent Based Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-shrink-0 w-[85vw] sm:w-[28rem] md:w-[36rem] lg:w-[42rem] h-auto min-h-[24rem] md:h-[28rem] bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                Agent Based Solutions
              </h3>
              <Link
                to="/products"
                onClick={() => window.scrollTo(0, 0)}
                className="text-finnitt-teal font-semibold hover:text-finnitt-cyan transition-colors duration-200"
              >
                Read more
              </Link>
              <div className="mt-6 flex-1 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <img src="/3.svg" alt="Agent Based Solutions" className="w-full h-auto max-w-[588px] max-h-[280px] object-contain" />
              </div>
            </motion.div>

            {/* Card 4: Smart HR Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-shrink-0 w-[85vw] sm:w-[28rem] md:w-[36rem] lg:w-[42rem] h-auto min-h-[24rem] md:h-[28rem] bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                Smart HR Solutions
              </h3>
              <Link
                to="/products"
                onClick={() => window.scrollTo(0, 0)}
                className="text-finnitt-teal font-semibold hover:text-finnitt-cyan transition-colors duration-200"
              >
                Read more
              </Link>
              <div className="mt-6 flex-1 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <img src="/4.svg" alt="Smart HR Solutions" className="w-full h-auto max-w-[588px] max-h-[280px] object-contain" />
              </div>
            </motion.div>

            {/* Card 5: Explore More */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex-shrink-0 w-[85vw] sm:w-[28rem] md:w-[36rem] lg:w-[42rem] h-auto min-h-[24rem] md:h-[28rem] bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-6 leading-tight text-center">
                Explore More
              </h3>
              <Link
                to="/products"
                onClick={() => window.scrollTo(0, 0)}
                className="text-finnitt-teal text-xl font-semibold hover:text-finnitt-cyan transition-colors duration-200"
              >
                Discover all solutions
              </Link>
            </motion.div>
          </div>

          {/* Navigation arrows on either side (MUI icons) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const container = document.getElementById('solutions-carousel');
                if (container) {
                  container.scrollBy({ left: -(42 * 16 + 32), behavior: 'smooth' });
                }
              }}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <ChevronLeft className="text-gray-800" />
            </motion.button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const container = document.getElementById('solutions-carousel');
                if (container) {
                  container.scrollBy({ left: 42 * 16 + 32, behavior: 'smooth' });
                }
              }}
              className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <ChevronRight className="text-gray-800" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="pt-24 md:pt-48 pb-24 md:pb-48" style={{ backgroundColor: '#F3FAFD' }}>
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500">TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4">
              What Customers Are Saying
            </h2>
          </div>

          {/* Centered carousel with preview cards */}
          <div className="relative max-w-7xl mx-auto mt-12 md:mt-16 h-[22rem] sm:h-[26rem] md:h-[30rem] overflow-hidden">
            {/* Left preview (previous) */}
            <motion.div
              key={`left-${prevTestimonialIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: -40 }}
              animate={{ opacity: 0.6, scale: 0.92, x: 0 }}
              transition={{ duration: 0.45 }}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-[54%] -translate-x-[55%] w-[32rem] h-[18rem] bg-white rounded-2xl shadow-xl p-6 flex-col justify-center text-center z-10 pointer-events-none"
            >
              <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17a4 4 0 110-8 4 4 0 010 8zm10 0a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">{testimonials[prevTestimonialIndex].quote}</p>
              <div className="mt-3 text-xs font-semibold text-gray-500">
                {testimonials[prevTestimonialIndex].author}
              </div>
            </motion.div>

            {/* Center card (active) */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4">
              <motion.div
                key={`center-${activeTestimonial}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="w-full max-w-[46rem] h-auto min-h-[18rem] sm:h-[20rem] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-center text-center"
              >
                <div className="mx-auto mb-4 md:mb-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h.01M15 12h.01M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="mt-3 md:mt-4 text-xs sm:text-sm font-semibold text-gray-600">
                  {testimonials[activeTestimonial].author}
                </div>
              </motion.div>
            </div>

            {/* Right preview (next) */}
            <motion.div
              key={`right-${nextTestimonialIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 0.6, scale: 0.92, x: 0 }}
              transition={{ duration: 0.45 }}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-[54%] translate-x-[55%] w-[32rem] h-[18rem] bg-white rounded-2xl shadow-xl p-6 flex-col justify-center text-center z-10 pointer-events-none"
            >
              <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17a4 4 0 110-8 4 4 0 010 8zm10 0a4 4 0 110-8 4 4 0 010 8z" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">{testimonials[nextTestimonialIndex].quote}</p>
              <div className="mt-3 text-xs font-semibold text-gray-500">
                {testimonials[nextTestimonialIndex].author}
              </div>
            </motion.div>

            {/* Nav arrows */}
            <div className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl"
                style={{ backgroundColor: '#0097B2' }}
              >
                <ChevronLeft className="text-white" fontSize="small" />
              </motion.button>
            </div>
            <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl"
                style={{ backgroundColor: '#0097B2' }}
              >
                <ChevronRight className="text-white" fontSize="small" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      {/* Section 5: See how we can help you (below testimonials) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left: Title and CTA */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight"
              >
                See how we can help you
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                We support both businesses and individuals with ready-to-use, customizable solutions. We're more than happy to discuss your goals and tailor the right approach for you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center lg:justify-start"
              >
                <button
                  type="button"
                  className="bg-gradient-to-r from-finnitt-teal to-finnitt-cyan text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span>Contact us</span>
                  <div className="group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Right: Finnitt logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <img
                src="/finnitt_transparent.png"
                alt="Finnitt transparent logo"
                className="w-full max-w-xs sm:max-w-md h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
