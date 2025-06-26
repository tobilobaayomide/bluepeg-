"use client";

import { useState, useEffect } from "react";

export default function MissionVisionValues() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [countersStarted, setCountersStarted] = useState(false);

  const values = [
    {
      id: 1,
      title: "Mission",
      subtitle: "Our Purpose",
      content: "Delivering top-tier services that streamline industrial processes, reduce downtime, and drive measurable results for our clients.",
      detailedContent: "We are committed to excellence in every project, ensuring our solutions not only meet but exceed expectations. Our focus on continuous improvement and innovation drives us to deliver sustainable value.",
      metric: { value: 99, label: "Client Satisfaction", suffix: "%" },
      badge: "ISO 9001 Certified",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Vision",
      subtitle: "Our Future",
      content: "To be Africa's leading provider of innovative industrial operation solutions, empowering businesses through technology and efficiency.",
      detailedContent: "We envision a future where African industries lead globally through advanced automation and sustainable practices. Our vision drives us to constantly innovate and expand our capabilities.",
      metric: { value: 85, label: "Market Growth", suffix: "%" },
      badge: "Industry Leader",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      id: 3,
      title: "Core Values",
      subtitle: "Our Foundation",
      content: "Integrity. Innovation. Excellence. Partnership. Sustainability.",
      detailedContent: "These five pillars guide every decision we make and every solution we deliver. They form the foundation of our company culture and our commitment to stakeholders.",
      metric: { value: 100, label: "Ethical Standards", suffix: "%" },
      badge: "Values-Driven",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  // Animated counter hook
  const useAnimatedCounter = (target: number, started: boolean) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!started) return;
      
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = target / steps;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(stepValue * currentStep), target));
        
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }, [target, started]);
    
    return count;
  };

  useEffect(() => {
    setMounted(true);
    // Start counters after initial animations
    const timer = setTimeout(() => setCountersStarted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-6 border-b border-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-3 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Company Foundation</span>
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-black text-gray-900 mb-3 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Mission, Vision & Core Values
          </h2>
          
          <p className={`text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The guiding principles that drive our commitment to excellence and shape our approach to industrial innovation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white rounded-2xl shadow-lg border-2 ${item.borderColor} overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
              
              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                  <div className={`text-blue-600 transition-all duration-300 ${hoveredCard === item.id ? 'scale-110' : ''}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-4">
                  {item.subtitle}
                </p>

                {/* Divider */}
                <div className={`w-12 h-1 bg-gradient-to-r ${item.gradient} rounded-full mb-4 transition-all duration-300 ${hoveredCard === item.id ? 'w-20' : ''}`}></div>

                {/* Content */}
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.content}
                  </p>
                  
                  {/* Expandable detailed content */}
                  <div className={`overflow-hidden transition-all duration-500 ${hoveredCard === item.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 text-xs leading-relaxed italic">
                        {item.detailedContent}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className={`mt-4 flex items-center text-blue-600 text-sm font-medium transition-all duration-300 ${hoveredCard === item.id ? 'opacity-100 translate-x-1' : 'opacity-0'}`}>
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Background decoration */}
              <div className={`absolute top-4 right-4 w-24 h-24 ${item.bgColor} rounded-full opacity-20 transition-all duration-500 ${hoveredCard === item.id ? 'scale-150 opacity-30' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom connecting line */}
        <div className={`mt-8 flex items-center justify-center transition-all duration-1000 delay-1200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
