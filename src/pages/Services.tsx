import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const serviceItems = [
    {
      title: 'Digital Transformation',
      image: '/digital.png',
      description:
        'We help businesses take their first big step into the digital world. If your company is still relying on outdated websites, minimal social media, or even paper-based processes, we guide you in building a modern, digital-first foundation. From creating a professional online presence and setting up user-friendly websites to moving documents and data into secure digital platforms, we make the transition simple and practical. Our consultation services are designed to meet you where you are and help you confidently embrace technology so your business can compete, grow, and stay relevant in today\'s fast-changing market.'
    },
    {
      title: 'AI Integration & Strategy',
      image: '/ai.png',
      description:
        'AI can be a game-changer, but it isn\'t always clear where to start—or even if it makes sense for your business. That\'s where we step in. We help you cut through the noise and figure out if AI is the right fit for your goals, and if so, how to use it effectively. Whether it\'s choosing between custom models, ready-made services, or intelligent agents, we guide you through the options and design a strategy that delivers real value. And once the plan is in place, we don\'t just advise—we build and integrate the solutions so you can see AI in action driving measurable results for your business.'
    },
    {
      title: 'UI/UX Design Consulting',
      image: '/ui.png',
      description:
        'Your brand\'s first impression is its design—and getting it right makes all the difference. We help businesses shape their digital identity through thoughtful UI and UX consulting that goes beyond looks, focusing on clarity, usability, and consistency. From defining your branding to designing websites and apps that feel seamless to use, we apply proven design principles to create experiences that truly connect with your audience. Whether you\'re starting fresh or rethinking your current design, our process ensures your digital presence not only looks great but works beautifully.'
    },
    {
      title: 'Agents & Automation',
      image: '/automation.png',
      description:
        'Repetitive tasks and manual processes slow businesses down—we help you eliminate them. Through intelligent automation and AI-driven agents, we design systems that take work off your plate and keep operations running smoothly. Whether it\'s workflow automation with tools like n8n, or building custom AI agents powered by platforms like OpenAI and Claude, we tailor solutions to fit the unique needs of your business. From handling routine tasks to enabling complex decision-making, our automations free up your team\'s time so they can focus on growth, innovation, and what matters most.'
    },
    {
      title: 'Software Engineering & Design',
      image: '/software.png',
      description:
        'Every business is different—and sometimes, off-the-shelf tools just don\'t cut it. We build custom software solutions designed around your specific needs, following proven software engineering principles to ensure scalability, security, and reliability. From internal business tools to full-scale web and mobile applications, we handle everything from system design and architecture to development and deployment. Our focus is not only on writing clean, maintainable code, but also on creating software that grows with your business and delivers long-term value.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section replicated from Home with adjustments */}
      <section className="relative flex items-center pt-20 bg-gray-50">
        {/* Image Wrapper */}
        <div className="relative w-full">
          {/* Image */}
          <img
            src="/services.png"
            alt="Services"
            className="w-full h-auto rounded-2xl"
          />
          {/* Content */}
          <div className="absolute inset-0">
            <div className="max-w-9xl mx-auto h-full px-16 flex items-center justify-start">
              <div className="max-w-3xl py-16 -mt-44">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Transform Your Business
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-[40rem]"
                >
                  Partner with us to accelerate innovation and growth through digital transformation, AI integration, design, automation, and engineering.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                    className="bg-gradient-to-r from-finnitt-teal to-finnitt-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span>Explore</span>
                    <div className="group-hover:translate-y-1 transition-transform duration-200">
                      <ArrowDown size={20} />
                    </div>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="pt-24 pb-28 bg-white">
        <div className="max-w-9xl mx-auto px-16">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
            >
              Practical, high‑impact services designed to move your business forward.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {serviceItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-200 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-contain"
                    width={1920}
                    height={1080}
                  />
                </div>

                {/* Floating content card */}
                <div className="relative -mt-12 md:-mt-16 px-6 pb-6">
                  <div className={"bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/60"}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Finnitt Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0097B2' }}>
        <div className="relative max-w-9xl mx-auto px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Why Finnitt
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-lg md:text-xl text-white/90 mt-4 max-w-3xl mx-auto"
            >
              Discover what makes us different and how we can transform your business.
            </motion.p>
          </div>

          {/* 2x3 Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[360px]">
              <div className="mb-6 flex items-center justify-center min-h-[140px]">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src="/1.png"
                    alt="Specialized for Fintech"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Specialized for Fintech & Growth Businesses</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We know the pain points—regulations, security, scaling, and customer trust. Our services are built around solving the challenges that matter most to financial innovators.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6 flex items-center justify-center min-h-[140px]">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src="/2.png"
                    alt="Strategic Advisors"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Strategic Advisors, Not Just Developers</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We don't just deliver code or designs. We help you make the right technology decisions—when to adopt AI, where to automate, and how to modernize—so you invest wisely.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[360px]">
              <div className="mb-6 flex items-center justify-center min-h-[140px]">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src="/3.png"
                    alt="End-to-End Capability"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">End-to-End Capability</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                From branding and UX to custom systems, AI integration, and compliance-ready automation—we bring every layer of expertise under one roof, saving you the hassle of managing multiple vendors.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[360px]">
              <div className="mb-6 flex items-center justify-center min-h-[140px]">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src="/4.png"
                    alt="Proven Balance of Speed & Quality"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Proven Balance of Speed & Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Our off-the-shelf solutions give you immediate wins, while our consultancy ensures long-term scalability and future-proof growth. You get results now without compromising tomorrow.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[360px]">
              <div className="mb-6 flex items-center justify-center min-h-[140px]">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src="/5.png"
                    alt="Human-Centered, Tech-Driven"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Human-Centered, Tech-Driven</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We design around people—your customers, your employees, and your regulators—so every solution is intuitive, secure, and built for real-world adoption.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[360px]">
              <div className="mb-6 flex items-center justify-center min-h-[140px]">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src="/6.png"
                    alt="Committed to Measurable Impact"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Committed to Measurable Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                For us, success means efficiency gained, risks reduced, and growth enabled. If it doesn't move the needle for your business, we don't count it as done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-white">
        <div className="max-w-9xl mx-auto px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Title and CTA */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              >
                Ready to transform your business?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl"
              >
                Let's discuss how our services can accelerate your digital transformation and drive measurable growth for your business.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <button
                  type="button"
                  className="bg-gradient-to-r from-finnitt-teal to-finnitt-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span>Get Started Today</span>
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
              className="flex-1 w-full flex items-center justify-center lg:justify-end"
            >
              <img
                src="/finnitt_transparent.png"
                alt="Finnitt transparent logo"
                className="w-full max-w-md h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
