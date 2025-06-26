"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { poppins } from "../../fonts";
import Footer from "../../components/Footer";

export default function SolutionsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSolution, setSelectedSolution] = useState<any>(null);

  const categories = ["All", "Automation", "Control Systems", "Power Solutions", "Electrical", "Training"];

  const solutions = [
    {
      id: 1,
      title: "Instrumentation & Control",
      category: "Control Systems",
      shortDesc: "Precision solutions for monitoring and controlling industrial processes with 99.5% accuracy",
      fullDesc: "We provide precision solutions for monitoring and controlling industrial processes, ensuring optimal performance, safety, and compliance. Our team leverages the latest technology to deliver reliable instrumentation and control systems tailored to your unique requirements.",
      image: "/hero-industrial.jpg",
      gradient: "from-blue-600 to-cyan-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      features: ["Real-time monitoring", "Advanced algorithms", "Safety integration", "Compliance automation"],
      benefits: ["99.5% accuracy", "24/7 monitoring", "Reduced downtime", "Optimal performance"],
      industries: ["Oil & Gas", "Manufacturing", "Chemical Processing"],
      price: "From ₦5M",
      metric: "99.5%",
      metricLabel: "Accuracy"
    },
    {
      id: 2,
      title: "Automation Solutions",
      category: "Automation",
      shortDesc: "Smart automation systems that boost efficiency by 85% and reduce operational downtime",
      fullDesc: "Our smart automation services boost efficiency, safety, and productivity. We design, implement, and support automation systems that streamline operations, reduce downtime, and enable data-driven decision-making for your business.",
      image: "/hero-industrial.jpg",
      gradient: "from-purple-600 to-indigo-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"/>
          <path d="M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6"/>
        </svg>
      ),
      features: ["PLC programming", "SCADA systems", "IoT connectivity", "Data insights"],
      benefits: ["85% efficiency boost", "Reduced operational costs", "Smart insights", "Data-driven decisions"],
      industries: ["Automotive", "Food & Beverage", "Pharmaceuticals"],
      price: "From ₦8M",
      metric: "85%",
      metricLabel: "Efficiency"
    },
    {
      id: 3,
      title: "Panel Solutions",
      category: "Control Systems",
      shortDesc: "Custom-engineered panels with 100% safety compliance for seamless integration",
      fullDesc: "We deliver custom-built panels for seamless integration and control. Our solutions are engineered for reliability, scalability, and ease of maintenance, supporting a wide range of industrial applications and environments.",
      image: "/hero-industrial.jpg",
      gradient: "from-green-600 to-teal-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      features: ["Custom design", "Safety compliance", "Quality materials", "Testing protocols"],
      benefits: ["100% safety compliance", "Seamless integration", "Quality assurance", "Reliable operation"],
      industries: ["Power Generation", "Water Treatment", "Mining"],
      price: "From ₦3M",
      metric: "100%",
      metricLabel: "Safety"
    },
    {
      id: 4,
      title: "Power & Drive Solutions",
      category: "Power Solutions",
      shortDesc: "Reliable power systems with 24/7 support ensuring uninterrupted operations",
      fullDesc: "We provide reliable power and drive systems for uninterrupted operations. Our expertise covers design, installation, and maintenance of power solutions that ensure efficiency, safety, and long-term value.",
      image: "/hero-industrial.jpg",
      gradient: "from-orange-600 to-red-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      ),
      features: ["Motor control", "Power distribution", "Energy optimization", "Monitoring systems"],
      benefits: ["24/7 support", "Uninterrupted operations", "Energy efficiency", "Long-term value"],
      industries: ["Heavy Industry", "Manufacturing", "Energy Sector"],
      price: "From ₦6M",
      metric: "24/7",
      metricLabel: "Support"
    },
    {
      id: 5,
      title: "Electrical Solutions",
      category: "Electrical",
      shortDesc: "ISO-certified electrical services covering design, installation, and maintenance",
      fullDesc: "Our comprehensive electrical services cover everything from system design to installation and support. We help you achieve safe, efficient, and compliant electrical infrastructure for all your industrial needs.",
      image: "/hero-industrial.jpg",
      gradient: "from-yellow-600 to-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"/>
        </svg>
      ),
      features: ["System design", "Installation services", "Maintenance support", "Compliance assurance"],
      benefits: ["ISO certification", "Safe infrastructure", "Efficient systems", "Regulatory compliance"],
      industries: ["Construction", "Industrial Facilities", "Commercial Buildings"],
      price: "From ₦4M",
      metric: "ISO",
      metricLabel: "Certified"
    },
    {
      id: 6,
      title: "Manpower Development",
      category: "Training",
      shortDesc: "Training programs for 500+ professionals to build future-ready workforce",
      fullDesc: "We offer training and upskilling programs to build a future-ready workforce. Our solutions empower your team with the knowledge and skills needed to excel in a rapidly evolving industrial landscape.",
      image: "/workers.jpg",
      gradient: "from-pink-600 to-purple-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
        </svg>
      ),
      features: ["Professional training", "Skills development", "Certification programs", "Continuous learning"],
      benefits: ["500+ trained professionals", "Future-ready skills", "Career advancement", "Industry expertise"],
      industries: ["All Industries", "Educational Institutions", "Corporate Training"],
      price: "From ₦2M",
      metric: "500+",
      metricLabel: "Trained"
    }
  ];

  const filteredSolutions = activeCategory === "All" 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
          <div className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Industrial Solutions</span>
          </div>

          <h1 className={`text-4xl md:text-5xl font-black text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${poppins.variable} font-sans`}>
            Advanced Industrial
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> Solutions</span>
          </h1>

          <p className={`text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive engineering solutions designed to optimize your industrial operations, 
            enhance safety, and drive sustainable growth across Nigeria's industrial landscape.
          </p>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="text-xl font-bold text-white">6</div>
              <div className="text-blue-200 text-xs">Core Solutions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="text-xl font-bold text-white">99.5%</div>
              <div className="text-blue-200 text-xs">Max Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="text-xl font-bold text-white">500+</div>
              <div className="text-blue-200 text-xs">Professionals Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="text-xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-xs">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Categories */}
      <section id="automation" className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Solution Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of industrial engineering solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:scale-105"
              >
                {/* Header */}
                <div className="relative">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={400}
                    height={200}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-blue-600">{solution.icon}</div>
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {solution.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{solution.shortDesc}</p>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {solution.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {solution.industries.map((industry, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Metric */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-blue-600">{solution.price}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">{solution.metric}</div>
                      <div className="text-xs text-gray-500">{solution.metricLabel}</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedSolution(solution)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm font-semibold"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">{selectedSolution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedSolution.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <Image
                src={selectedSolution.image}
                alt={selectedSolution.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedSolution.fullDesc}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedSolution.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedSolution.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Starting from</span>
                    <div className="text-2xl font-bold text-blue-600">{selectedSolution.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Industries:</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedSolution.industries.map((industry: string, idx: number) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Get Quote
                </a>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Innovation Section */}
      <section id="innovation" className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Innovation Lab</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Leading Industrial Innovation
          </h2>
          
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our innovation lab drives the future of industrial technology, developing cutting-edge solutions 
            that transform how businesses operate across Nigeria's industrial landscape.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">R&D Excellence</h3>
              <p className="text-blue-100 text-sm">Advanced research and development in industrial automation and control systems</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Technology</h3>
              <p className="text-blue-100 text-sm">AI-powered solutions and IoT integration for next-generation industrial operations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Collaborative Innovation</h3>
              <p className="text-blue-100 text-sm">Partnership-driven development with industry leaders and technology experts</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/innovation-lab"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Explore Innovation Lab
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
