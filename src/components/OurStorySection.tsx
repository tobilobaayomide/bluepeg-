"use client";

import { useState, useEffect } from "react";

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById("our-story-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: "2022",
      title: "Foundation & Vision",
      description: "Bluepeg founded with mission for operational excellence",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      year: "2023",
      title: "First Major Success",
      description: "Delivered breakthrough automation project, earning industry trust",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      year: "2024",
      title: "Strategic Growth",
      description: "Expanded service lines and forged key strategic partnerships",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      year: "2025",
      title: "Industry Leadership",
      description: "Driving growth for partners across 3+ major industries",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="our-story-section"
      className="w-full bg-gradient-to-br from-white via-blue-50 to-[#e3f0ff] py-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#007BFF]/5 rounded-full blur-3xl -translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header with Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#007BFF]/10 border border-[#007BFF]/20 rounded-full px-4 py-2 mb-3">
            <div className="w-2 h-2 bg-[#007BFF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#007BFF]">
              Company Timeline
            </span>
          </div>
          
          <h2 className="text-2xl font-extrabold text-[#007BFF] mb-2 tracking-tight">
            OUR JOURNEY
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            From vision to industry leadership – discover the milestones that shaped our commitment to excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Story Content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/50">
            {/* Quote */}
            <blockquote className="text-[#007BFF] text-base font-semibold italic mb-4 relative">
              <span className="text-2xl text-[#007BFF]/30 absolute -top-1 -left-1">"</span>
              Building trust, driving innovation, and delivering results — one partnership at a time.
              <span className="text-2xl text-[#007BFF]/30 absolute -bottom-2 -right-1">"</span>
            </blockquote>

            {/* Story Text */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#007BFF] mb-2">A Journey of Growth</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Bluepeg was founded by passionate engineers and business leaders who saw an opportunity to 
                raise the bar for industrial operations in Nigeria and West Africa.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                From our first project, we set out to combine technical excellence with a people-first 
                approach—delivering solutions that empower our clients to thrive.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Today, we're proud to be a trusted partner to industry leaders across multiple sectors. 
                Our story is one of continuous learning, bold innovation, and relentless value creation.
              </p>
            </div>
          </div>

          {/* Interactive Timeline */}
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                onClick={() => setActiveYear(index)}
                className={`bg-white/60 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 border hover:shadow-lg group ${
                  activeYear === index 
                    ? "bg-[#007BFF]/10 border-[#007BFF]/30 shadow-lg scale-105" 
                    : "border-white/50 hover:bg-white/80"
                } ${isVisible ? "animate-slideInRight" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  {/* Year Badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    activeYear === index 
                      ? "bg-[#007BFF] text-white scale-110" 
                      : "bg-[#007BFF]/20 text-[#007BFF] group-hover:bg-[#007BFF]/30"
                  }`}>
                    {milestone.year.slice(-2)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`transition-colors duration-300 ${
                        activeYear === index ? "text-[#007BFF]" : "text-gray-400 group-hover:text-[#007BFF]"
                      }`}>
                        {milestone.icon}
                      </div>
                      <h4 className="font-bold text-[#007BFF] text-sm">{milestone.title}</h4>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Active Indicator */}
                  <div className={`w-2 h-8 rounded-full transition-all duration-300 ${
                    activeYear === index ? "bg-[#007BFF]" : "bg-transparent"
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
