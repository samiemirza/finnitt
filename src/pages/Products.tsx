import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Calendar, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('fintech');

  const categories = {
    fintech: {
      name: 'Fintech Solutions',
      solutions: [
        {
          title: 'Anti Money Laundering Software',
          image: '/digital.png',
          description: 'AI-based fraud and money laundering detection system that monitors transactions in real-time, identifies suspicious patterns, and generates automated compliance reports. Protect your institution with intelligent risk scoring and behavioral analysis.'
        },
        {
          title: 'Risk Assessment & Analytics',
          image: '/ai.png',
          description: 'Leverage advanced AI algorithms to assess credit risk, detect anomalies, and predict market trends. Make data-driven decisions with comprehensive analytics and real-time risk scoring capabilities.'
        },
        {
          title: 'Regulatory Compliance Automation',
          image: '/ui.png',
          description: 'Stay compliant effortlessly with automated regulatory reporting, KYC/AML screening, and audit trail management. Our solution adapts to changing regulations and reduces compliance overhead.'
        }
      ]
    },
    marketing: {
      name: 'Marketing',
      solutions: [
        {
          title: 'AI Lead Generation System',
          image: '/digital.png',
          description: 'End-to-end AI agent system that automates your entire lead generation pipeline. Our intelligent agents research and identify ideal prospects, enrich contact data with verified information, qualify leads based on your criteria, and execute personalized outreach campaigns across multiple channels. From discovery to first contact, let AI handle the heavy lifting while your team focuses on closing deals.'
        },
        {
          title: 'Social Media Marketing Automation',
          image: '/ai.png',
          description: 'Complete AI-powered social media solution that handles content creation, scheduling, and posting across all platforms. Our system generates engaging posts, graphics, and captions tailored to your brand voice, optimizes posting times for maximum reach, and monitors performance metrics. Transform your social presence with consistent, high-quality content that resonates with your audience—all automated from start to finish.'
        }
      ]
    },
    support: {
      name: 'Customer Support',
      solutions: [
        {
          title: 'AI Chatbot Platform',
          image: '/digital.png',
          description: 'Deliver exceptional 24/7 customer support with our intelligent chatbot platform. Powered by advanced natural language processing, our AI understands customer intent, provides accurate solutions, and maintains conversational context across interactions. The system handles everything from simple FAQs to complex troubleshooting, and intelligently escalates to human agents when needed—complete with full conversation history and sentiment analysis for seamless handoffs.'
        },
        {
          title: 'Ticket Management Automation',
          image: '/ai.png',
          description: 'Transform your support operations with intelligent ticket automation that eliminates manual triage and routing. Our AI automatically categorizes incoming requests, assigns priority levels based on urgency and impact, and routes tickets to the most qualified team members. The system learns from resolution patterns to suggest solutions, tracks SLA compliance, and provides real-time insights into team performance and bottlenecks—reducing response times by up to 70%.'
        },
        {
          title: 'Knowledge Base AI Assistant',
          image: '/ui.png',
          description: 'Turn your documentation into an intelligent, self-learning support system that grows smarter with every interaction. Our AI assistant understands natural language queries, provides contextually relevant answers with source citations, and identifies knowledge gaps in your documentation. It integrates seamlessly with your existing help center, learns from customer feedback, and automatically suggests article updates based on common questions—empowering customers to find solutions instantly while reducing support volume.'
        }
      ]
    },
    hr: {
      name: 'HR Management',
      solutions: [
        {
          title: 'Employee Training System',
          image: '/digital.png',
          description: 'Comprehensive AI-powered training platform that revolutionizes employee development through personalized learning paths. Our system features modular course structures with interactive lessons, AI-generated explanations tailored to individual learning styles, and adaptive assessments that adjust difficulty based on performance. The platform includes automated grading, detailed progress tracking, certification management, and intelligent recommendations for skill development. Whether onboarding new hires or upskilling your team, our AI ensures every employee gets the training they need, when they need it.'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (single image with title and description) */}
      <section className="relative flex items-center pt-20 bg-gray-50">
        {/* Image Wrapper */}
        <div className="relative w-full">
          {/* Image */}
          <img
            src="/solutions.png"
            alt="Solutions"
            className="w-full h-auto rounded-2xl"
          />
          {/* Content */}
          <div className="absolute inset-0">
            <div className="max-w-9xl mx-auto h-full px-16 flex items-center justify-start">
              <div className="max-w-3xl py-16 -mt-56">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  AI-Powered Solutions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-[40rem]"
                >
                  Purpose-built, production-ready solutions that help you move faster—
                  from automation and intelligent agents to analytics and risk systems.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                    className="bg-gradient-to-r from-finnitt-teal to-finnitt-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Explore</span>
                    <div className="group-hover:translate-y-1 transition-transform duration-200">
                      <ArrowDown size={20} />
                    </div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      // Add your demo request logic here
                      console.log('Request demo clicked');
                    }}
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group border-2 border-gray-200 hover:border-gray-300"
                  >
                    <Calendar size={20} />
                    <span>Request Demo</span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Industries Section */}
      <section className="pt-24 pb-36 bg-white">
        <div className="max-w-9xl mx-auto px-16">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Our Offerings
            </motion.h2>
          </div>

          {/* Category Tabs */}
          <div className="relative mb-16">
            <div className="flex justify-center gap-8">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className="relative pb-3 transition-all duration-300 group"
                >
                  <span className={`text-lg transition-all duration-300 ${
                    activeCategory === key
                      ? 'font-bold text-gray-900'
                      : 'font-normal text-gray-400 group-hover:text-gray-600'
                  }`}>
                    {category.name}
                  </span>
                  <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                    activeCategory === key
                      ? 'h-1 bg-gradient-to-r from-finnitt-teal to-finnitt-cyan'
                      : 'h-0.5 bg-transparent'
                  }`}></div>
                </button>
              ))}
            </div>
            {/* Base line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200"></div>
          </div>

          {/* Solutions Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {categories[activeCategory as keyof typeof categories].solutions.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
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
          </motion.div>
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
                Ready to accelerate with AI?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl"
              >
                Discover how our AI-powered solutions can transform your operations, reduce costs, and drive growth. Request a demo to see our platforms in action.
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
                  <span>Request a Demo</span>
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

export default Products;