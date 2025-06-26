"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ResourceCenter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resources = [
    {
      title: "Industrial Operations Guide",
      type: "Guide",
      category: "Operations",
      desc: "Comprehensive guide to optimizing your operations for growth and sustainability.",
      readTime: "15 min read",
      downloads: "2.5k",
      link: "/resource-center/operations-guide",
      img: "/hero-industrial.jpg",
      gradient: "from-blue-600 to-indigo-600",
      featured: true,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      )
    },
    {
      title: "Maximizing Plant Uptime",
      type: "Article",
      category: "Maintenance",
      desc: "Best practices and strategies to keep your plant running efficiently.",
      readTime: "8 min read",
      downloads: "1.8k",
      link: "/resource-center/maximizing-plant-uptime",
      img: "/workers.jpg",
      gradient: "from-emerald-600 to-teal-600",
      featured: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16.24,7.76A1,1 0 0,1 16.24,9.17L13.41,12L16.24,14.83A1,1 0 0,1 14.83,16.24L12,13.41L9.17,16.24A1,1 0 0,1 7.76,14.83L10.59,12L7.76,9.17A1,1 0 0,1 9.17,7.76L12,10.59L14.83,7.76A1,1 0 0,1 16.24,7.76Z"/>
        </svg>
      )
    },
    {
      title: "Future-Ready Workforce",
      type: "Whitepaper", 
      category: "Training",
      desc: "How to upskill your team for the next wave of industrial innovation.",
      readTime: "12 min read",
      downloads: "3.1k",
      link: "/resource-center/future-ready-workforce",
      img: "/totalenergies.jpg",
      gradient: "from-purple-600 to-pink-600",
      featured: false,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,5.9C14.84,5.9 13.9,6.84 13.9,8C13.9,9.16 14.84,10.1 16,10.1C17.16,10.1 18.1,9.16 18.1,8C18.1,6.84 17.16,5.9 16,5.9M16,13C18.67,13 22,14.33 22,17V20H10V17C10,14.33 13.33,13 16,13Z"/>
        </svg>
      )
    }
  ];

  const categories = ["All", "Operations", "Maintenance", "Training"];

  const filteredResources = activeFilter === "All" 
    ? resources 
    : resources.filter(resource => resource.category === activeFilter);

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 md:pt-24 pb-6 md:pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-4 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
            </svg>
            <span className="text-sm font-medium text-blue-700">Knowledge Hub</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-black text-gray-900 mb-4 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Resource Center
          </h2>

          <p
            className={`text-base text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Expert insights, practical guides, and cutting-edge tools to accelerate your industrial transformation journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white/70 text-gray-600 hover:bg-white hover:text-blue-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/60 hover:border-white/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {resource.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  Featured
                </div>
              )}

              {/* Header with Icon and Type */}
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${resource.gradient} rounded-full`}>
                  <span className="text-white">{resource.icon}</span>
                  <span className="text-white text-xs font-semibold">{resource.type}</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {resource.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-40 rounded-xl overflow-hidden mb-4 group">
                <Image
                  src={resource.img}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${resource.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {resource.desc}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                    </svg>
                    <span>{resource.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
                    </svg>
                    <span>{resource.downloads}</span>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={resource.link}
                  className={`group/btn w-full bg-gradient-to-r ${resource.gradient} text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                >
                  <span>Access Resource</span>
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
