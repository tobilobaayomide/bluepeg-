"use client";

import { useState } from "react";

export default function ClientSuccessSection() {
  const [activeCase, setActiveCase] = useState(0);

  const successStories = [
    {
      id: 1,
      title: "Manufacturing Optimization",
      client: "Automotive Leader",
      impact: "₦2.5B",
      result: "85% downtime reduction, 40% productivity increase",
      image: "/hero-industrial.jpg",
      category: "Manufacturing",
      metrics: ["85%", "40%", "6 months"]
    },
    {
      id: 2,
      title: "Supply Chain Revolution",
      client: "Energy Sector",
      impact: "₦1.8B",
      result: "99.8% delivery accuracy, 50% cost reduction",
      image: "/totalenergies.jpg",
      category: "Energy",
      metrics: ["99.8%", "50%", "8 months"]
    },
    {
      id: 3,
      title: "Digital Infrastructure",
      client: "Tech Innovator",
      impact: "₦3.2B",
      result: "300% business growth, 99.9% uptime",
      image: "/workers.jpg",
      category: "Technology",
      metrics: ["300%", "99.9%", "4 months"]
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#007BFF] via-[#0056b3] to-[#004085] py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header with Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">
              Proven Results
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Client Success Stories
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-base">
            Real success stories from industry leaders who trust Bluepeg to deliver transformational results
          </p>
        </div>

        {/* Enhanced Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setActiveCase(index)}
              className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 cursor-pointer transition-all duration-300 group hover:bg-white/20 overflow-hidden ${
                activeCase === index ? "bg-white/25 scale-105 shadow-2xl ring-2 ring-white/50" : ""
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                  <defs>
                    <pattern id={`pattern-${story.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#pattern-${story.id})`} />
                </svg>
              </div>

              {/* Header with category and impact */}
              <div className="relative z-10 flex items-start justify-between mb-4">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                  <span className="text-white text-xs font-semibold">{story.category}</span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white">{story.impact}</div>
                  <div className="text-xs text-blue-200">Total Impact</div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 mb-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                  {story.title}
                </h3>
                <p className="text-blue-200 text-sm mb-3 font-medium">{story.client}</p>
                <p className="text-blue-100 text-sm leading-relaxed">{story.result}</p>
              </div>

              {/* Quick Metrics */}
              <div className="relative z-10 grid grid-cols-3 gap-2 mb-4">
                {story.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-sm font-bold text-white">{metric}</div>
                  </div>
                ))}
              </div>

              {/* Active indicator with pulse effect */}
              <div className={`relative z-10 w-full h-1 bg-white/30 rounded-full overflow-hidden ${
                activeCase === index ? "bg-white/50" : ""
              }`}>
                <div className={`h-full bg-white rounded-full transition-all duration-500 ${
                  activeCase === index ? "w-full animate-pulse" : "w-0"
                }`} />
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Enhanced Stats Summary */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
          
          <div className="relative z-10">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-white">Our Track Record</h3>
              <p className="text-blue-200 text-sm">Delivering measurable results across industries</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">100+</div>
                <div className="text-blue-200 text-sm">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">₦7.5B+</div>
                <div className="text-blue-200 text-sm">Value Generated</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">99.8%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">24/7</div>
                <div className="text-blue-200 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-6">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-white text-[#007BFF] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Detailed Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
