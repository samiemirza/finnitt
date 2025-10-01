import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, FileText, Video, Users, TrendingUp } from 'lucide-react';

const Newsroom: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Finnitt Announces Strategic Partnership with Global Tech Leader",
      excerpt: "Leading AI consulting firm partners with multinational technology company to accelerate digital transformation initiatives across enterprise clients.",
      date: "December 15, 2024",
      category: "Press Release",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Finnitt Named Top AI Consulting Firm by Industry Report",
      excerpt: "Annual industry analysis recognizes Finnitt for excellence in AI strategy, implementation, and measurable business outcomes.",
      date: "December 10, 2024",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "New Research: AI Adoption Trends in Healthcare 2024",
      excerpt: "Comprehensive study reveals key insights into how healthcare organizations are leveraging artificial intelligence for improved patient outcomes.",
      date: "December 5, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Finnitt CEO Featured in Forbes Technology Leadership Series",
      excerpt: "Company leader discusses the future of AI in business and shares insights on building successful AI-first organizations.",
      date: "November 28, 2024",
      category: "Media Coverage",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      id: 5,
      title: "Major Retail Client Achieves 40% Efficiency Gains with AI Implementation",
      excerpt: "Case study demonstrates how Finnitt's AI solutions transformed operations and customer experience for leading retail chain.",
      date: "November 20, 2024",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      id: 6,
      title: "Finnitt Expands European Operations with New London Office",
      excerpt: "Strategic expansion strengthens company's presence in key European markets and enhances service delivery capabilities.",
      date: "November 15, 2024",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    }
  ];

  const stats = [
    { icon: FileText, label: "Press Releases", value: "24+" },
    { icon: Video, label: "Media Mentions", value: "150+" },
    { icon: Users, label: "Industry Awards", value: "12+" },
    { icon: TrendingUp, label: "Client Success Stories", value: "85+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Newsroom
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and insights from Finnitt. 
              Discover how we're shaping the future of AI-powered business transformation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0097B2] py-16">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0097B2] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-[#0097B2] font-medium hover:text-[#032F49] transition-colors duration-300"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Media Contact Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Media Inquiries
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              For press inquiries, interview requests, or media partnerships, 
              our communications team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Press Contact</h3>
                <p className="text-gray-600 mb-2">Sarah Johnson</p>
                <p className="text-gray-600 mb-2">Director of Communications</p>
                <p className="text-[#0097B2]">press@finnitt.com</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">General Inquiries</h3>
                <p className="text-gray-600 mb-2">Media Relations Team</p>
                <p className="text-gray-600 mb-2">Available 24/7 for urgent matters</p>
                <p className="text-[#0097B2]">media@finnitt.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
