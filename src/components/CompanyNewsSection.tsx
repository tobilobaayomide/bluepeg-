"use client";

import { useState } from "react";
import Link from "next/link";

export default function CompanyNewsSection() {
  const [activeNews, setActiveNews] = useState(0);

  const newsUpdates = [
    {
      type: "achievement",
      title: "Industry Excellence Award 2024",
      summary: "Recognized for outstanding innovation in industrial automation",
      date: "Dec 2024",
      category: "Awards",
      image: "/hero-industrial.jpg",
      link: "/news/industry-excellence-award-2024",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      type: "partnership",
      title: "Strategic Tech Partnership",
      summary: "Expanding capabilities through global technology collaboration",
      date: "Nov 2024",
      category: "Partnerships",
      image: "/totalenergies.jpg",
      link: "/news/strategic-tech-partnership",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      type: "innovation",
      title: "AI Analytics Platform Launch",
      summary: "Revolutionary AI-powered platform for operational insights",
      date: "Oct 2024",
      category: "Product Launch",
      image: "/workers.jpg",
      link: "/news/ai-analytics-platform-launch",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Awards": "from-yellow-400 to-orange-500",
      "Partnerships": "from-green-400 to-emerald-500",
      "Product Launch": "from-blue-400 to-indigo-500"
    };
    return colors[category as keyof typeof colors] || "from-gray-400 to-gray-500";
  };

  return (
    <section id="news" className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-100/15 rounded-full blur-3xl -translate-x-28 translate-y-28" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#007BFF]/10 text-[#007BFF] px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
            <div className="w-1.5 h-1.5 bg-[#007BFF] rounded-full animate-pulse" />
            Latest News
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#007BFF] mb-3">
            Company Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Stay updated with our achievements and innovations
          </p>
        </div>

        {/* Main Featured Card with Arrow Navigation */}
        <div className="mb-8">
          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 hover:shadow-2xl transition-all duration-500">
            {/* Previous Button */}
            <button
              onClick={() => setActiveNews((prev) => (prev - 1 + newsUpdates.length) % newsUpdates.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() => setActiveNews((prev) => (prev + 1) % newsUpdates.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-48 lg:h-64">
                <img
                  src={newsUpdates[activeNews].image}
                  alt={newsUpdates[activeNews].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`bg-gradient-to-r ${getCategoryColor(newsUpdates[activeNews].category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {newsUpdates[activeNews].category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-3 left-3 text-white bg-black/30 backdrop-blur-sm rounded-lg p-2">
                  {newsUpdates[activeNews].icon}
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-gray-500">{newsUpdates[activeNews].date}</div>
                    <div className="text-xs text-gray-400">
                      {activeNews + 1} / {newsUpdates.length}
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#007BFF] mb-3 leading-tight">
                    {newsUpdates[activeNews].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {newsUpdates[activeNews].summary}
                  </p>
                </div>

                <Link href={newsUpdates[activeNews].link} className="bg-[#007BFF] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#005bb5] transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 w-fit text-sm">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* News Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {newsUpdates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveNews(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeNews === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Compact Newsletter Signup */}
        <div className="relative bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-xl p-4 text-white overflow-hidden">
          {/* Minimal background decorations */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl translate-x-8 -translate-y-8" />
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full blur-lg -translate-x-6 translate-y-6" />
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            {/* Compact Icon & Text */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold leading-tight">Stay Updated</h3>
                <p className="text-blue-100 text-xs">Get our latest news & insights</p>
              </div>
            </div>
            
            {/* Full Width Form */}
            <div className="flex gap-2 flex-1 w-full sm:w-auto sm:max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm bg-white/95 min-w-0"
              />
              <button className="bg-white text-[#007BFF] px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
