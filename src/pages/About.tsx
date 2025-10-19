import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const About: React.FC = () => {
  const testimonials = [
    {
      title: 'Consulting',
      quote:
        'Finnitt\'s consulting team embedded seamlessly into our operations. They brought innovative solutions, challenged assumptions, and helped us move faster with confidence.',
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
    <div className="min-h-screen bg-white pt-16 md:pt-36">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 pb-16 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-finnitt-light-cyan/20 via-white to-finnitt-cyan/10"></div>
        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8 md:mb-12"
            >
              <img
                src="/finnitt_trans.png"
                alt="Finnitt"
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
            >
              We're a team of AI enthusiasts, technology innovators, and business strategists
              passionate about helping companies thrive in the digital age.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We transform businesses through AI-powered solutions while staying committed to ethics, transparency, and human values. Every solution we build prioritizes data privacy and accountability, ensuring AI empowers teams and drives meaningful innovation.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="/mission.png"
                alt="Our Mission"
                className="w-full sm:w-4/5 h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-12 md:py-20 pb-16 md:pb-32 bg-gray-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <img
                src="/customers.png"
                alt="Our Work"
                className="w-full sm:w-4/5 h-auto rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Work
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                We've partnered with businesses across industries—from fintech startups to established enterprises—helping them unlock new opportunities through intelligent automation. Our clients have seen measurable improvements in efficiency, customer satisfaction, and competitive advantage.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-finnitt-teal to-finnitt-cyan text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Client Success Stories
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0CC0DF' }}>
        <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mt-3 md:mt-4 max-w-3xl mx-auto px-4"
            >
              The principles that guide everything we build and deliver.
            </motion.p>
          </div>

          {/* 2x3 Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[320px] md:min-h-[360px]">
              <div className="mb-4 md:mb-6 flex items-center justify-center min-h-[100px] md:min-h-[140px]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src="/1.png"
                    alt="Impact over Hype"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3 md:mb-4">Impact over Hype</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We ship measurable business results, not flashy demos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[320px] md:min-h-[360px]">
              <div className="mb-4 md:mb-6 flex items-center justify-center min-h-[100px] md:min-h-[140px]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src="/2.png"
                    alt="Secure by Default"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3 md:mb-4">Secure by Default</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Your data stays yours—private, encrypted, and compliant.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[320px] md:min-h-[360px]">
              <div className="mb-4 md:mb-6 flex items-center justify-center min-h-[100px] md:min-h-[140px]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src="/3.png"
                    alt="Responsible AI"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3 md:mb-4">Responsible AI</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Humans stay in control; we design for safety and oversight.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[320px] md:min-h-[360px]">
              <div className="mb-4 md:mb-6 flex items-center justify-center min-h-[100px] md:min-h-[140px]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src="/4.png"
                    alt="Production-Ready, Not Prototype"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3 md:mb-4">Production-Ready, Not Prototype</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Everything we build can be monitored, rolled back, and supported.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[320px] md:min-h-[360px]">
              <div className="mb-4 md:mb-6 flex items-center justify-center min-h-[100px] md:min-h-[140px]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src="/5.png"
                    alt="Open & Portable"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3 md:mb-4">Open & Portable</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                No lock-in: clear exports, open standards, and choice of stack.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[320px] md:min-h-[360px]">
              <div className="mb-4 md:mb-6 flex items-center justify-center min-h-[100px] md:min-h-[140px]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                  <img
                    src="/6.png"
                    alt="Candor & Partnership"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-3 md:mb-4">Candor & Partnership</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We tell you what will work—and what won't—early and clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pt-24 md:pt-48 pb-24 md:pb-48" style={{ backgroundColor: '#F3FAFD' }}>
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center">
            <div className="mb-3 md:mb-4">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500">TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              What Customers Are Saying
            </h2>
          </div>

          {/* Centered carousel with preview cards */}
          <div className="relative max-w-7xl mx-auto mt-8 md:mt-16 h-[24rem] md:h-[30rem] overflow-hidden">
            {/* Left preview (previous) - hidden on mobile */}
            <motion.div
              key={`left-${prevTestimonialIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: -40 }}
              animate={{ opacity: 0.6, scale: 0.92, x: 0 }}
              transition={{ duration: 0.45 }}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-[54%] -translate-x-[55%] w-[32rem] h-[18rem] bg-white rounded-2xl shadow-xl p-6 flex-col justify-center text-center z-10 pointer-events-none"
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
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4 md:px-0">
              <motion.div
                key={`center-${activeTestimonial}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="w-full sm:w-[90%] md:w-[46rem] h-auto md:h-[20rem] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-center text-center"
              >
                <div className="mx-auto mb-4 md:mb-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h.01M15 12h.01M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="mt-3 md:mt-4 text-sm font-semibold text-gray-600">
                  {testimonials[activeTestimonial].author}
                </div>
              </motion.div>
            </div>

            {/* Right preview (next) - hidden on mobile */}
            <motion.div
              key={`right-${nextTestimonialIndex}`}
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 0.6, scale: 0.92, x: 0 }}
              transition={{ duration: 0.45 }}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-[54%] translate-x-[55%] w-[32rem] h-[18rem] bg-white rounded-2xl shadow-xl p-6 flex-col justify-center text-center z-10 pointer-events-none"
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
            <div className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl"
                style={{ backgroundColor: '#0097B2' }}
              >
                <ChevronLeft className="text-white" />
              </motion.button>
            </div>
            <div className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl"
                style={{ backgroundColor: '#0097B2' }}
              >
                <ChevronRight className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="pt-16 md:pt-32 pb-16 md:pb-32 bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                Careers
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                We're looking for talented individuals who think outside the box and are passionate about using AI to solve real-world problems. Join a team that values creativity, collaboration, and continuous learning while working on cutting-edge projects.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-finnitt-teal to-finnitt-cyan text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Open Positions
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="/careers.png"
                alt="Careers"
                className="w-full sm:w-4/5 h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
