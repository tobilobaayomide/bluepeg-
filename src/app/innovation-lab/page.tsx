"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { poppins } from "../../fonts";
import Footer from "@/components/Footer";

export default function InnovationLabPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setMounted(true);
    // Check for URL parameter to set active tab
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam && technologies.some(tech => tech.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  const technologies = [
    {
      id: "ai",
      title: "Artificial Intelligence",
      subtitle: "ML & Deep Learning",
      shortDesc: "Advanced AI algorithms that predict failures before they happen",
      fullDesc: "Our AI solutions leverage machine learning and deep learning algorithms to transform industrial operations. We implement predictive maintenance systems that analyze equipment patterns, optimize production workflows, and enable autonomous decision-making processes.",
      impact: "90% Downtime Reduction",
      color: "from-amber-400 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      accentColor: "amber",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
        </svg>
      ),
      image: "/hero-industrial.jpg",
      capabilities: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Process Optimization"],
      features: [
        "Real-time equipment monitoring with 99.9% accuracy",
        "Predictive maintenance reducing unplanned downtime by 90%",
        "Automated quality control with computer vision",
        "Intelligent resource allocation and scheduling"
      ],
      applications: ["Manufacturing", "Oil & Gas", "Power Generation", "Chemical Processing"],
      metrics: { accuracy: "99.9%", reduction: "90%", efficiency: "45%" }
    },
    {
      id: "iot",
      title: "Internet of Things",
      subtitle: "Smart Connectivity",
      shortDesc: "Seamlessly connected devices providing real-time insights",
      fullDesc: "Our IoT ecosystem connects industrial equipment, sensors, and systems to create intelligent, responsive environments. We deploy edge computing solutions that process data locally while maintaining cloud connectivity for comprehensive analytics.",
      impact: "40% Efficiency Boost",
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      accentColor: "emerald",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8M10,9A1,1 0 0,0 9,10A1,1 0 0,0 10,11A1,1 0 0,0 11,10A1,1 0 0,0 10,9M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M8.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,15A1.5,1.5 0 0,0 10,13.5A1.5,1.5 0 0,0 8.5,12Z"/>
        </svg>
      ),
      image: "/workers.jpg",
      capabilities: ["Sensor Networks", "Edge Computing", "Data Streaming", "Remote Control"],
      features: [
        "Wireless sensor networks with 10km range",
        "Edge computing for millisecond response times",
        "Secure data transmission with end-to-end encryption",
        "Remote monitoring and control capabilities"
      ],
      applications: ["Smart Factories", "Supply Chain", "Energy Management", "Environmental Monitoring"],
      metrics: { devices: "10,000+", efficiency: "40%", coverage: "10km" }
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      subtitle: "Scalable Infrastructure",
      shortDesc: "Enterprise-grade cloud solutions with guaranteed uptime",
      fullDesc: "We provide robust cloud infrastructure solutions that scale with your business needs. Our multi-cloud approach ensures maximum reliability, security, and performance while optimizing costs through intelligent resource management.",
      impact: "99.9% Reliability",
      color: "from-sky-400 to-blue-500",
      bgColor: "from-sky-50 to-blue-50",
      accentColor: "sky",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22,15V17H20V15M22,11V13H20V11M14,17H18V15H14M12,17H6L2.57,17C2.25,16.75 2,16.39 2,16C2,15.61 2.25,15.25 2.57,15H6C6,14.65 6.05,14.31 6.14,14H2.57C1.5,14 1,15.5 1,16S1.5,18 2.57,18H6C6,18.35 6.05,18.69 6.14,19H2.57C1.5,19 1,20.5 1,21S1.5,23 2.57,23H22V21H20V19H22V17H14V19H12V17Z"/>
        </svg>
      ),
      image: "/totalenergies.jpg",
      capabilities: ["Auto-scaling", "Multi-cloud", "Security", "Backup & Recovery"],
      features: [
        "Auto-scaling infrastructure that grows with demand",
        "Multi-cloud deployment for maximum reliability",
        "Advanced security with zero-trust architecture",
        "Automated backup and disaster recovery"
      ],
      applications: ["Data Analytics", "Application Hosting", "Disaster Recovery", "DevOps"],
      metrics: { uptime: "99.9%", scaling: "Auto", security: "Zero-trust" }
    },
    {
      id: "robotics",
      title: "Robotics Systems",
      subtitle: "Intelligent Automation",
      shortDesc: "Collaborative robots enhancing human productivity",
      fullDesc: "Our robotics solutions feature collaborative robots (cobots) that work safely alongside human operators. We integrate advanced vision systems, AI-driven decision making, and precise control systems to enhance productivity while maintaining safety.",
      impact: "75% Productivity Gain",
      color: "from-violet-400 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
      accentColor: "violet",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,4A0.5,0.5 0 0,0 11.5,4.5A0.5,0.5 0 0,0 12,5A0.5,0.5 0 0,0 12.5,4.5A0.5,0.5 0 0,0 12,4Z"/>
        </svg>
      ),
      image: "/hero-industrial.jpg",
      capabilities: ["Collaborative Bots", "Vision Systems", "Process Control", "Quality Assurance"],
      features: [
        "Collaborative robots with advanced safety systems",
        "Computer vision for precise object recognition",
        "Adaptive control systems that learn and improve",
        "Integration with existing production lines"
      ],
      applications: ["Assembly Lines", "Quality Control", "Material Handling", "Packaging"],
      metrics: { productivity: "75%", precision: "±0.1mm", safety: "ISO 10218" }
    },
    {
      id: "xr",
      title: "Extended Reality",
      subtitle: "AR/VR Solutions",
      shortDesc: "Immersive training and visualization experiences",
      fullDesc: "We create immersive AR/VR solutions that transform training, maintenance, and operational procedures. Our digital twin technology allows remote visualization and interaction with industrial systems in real-time.",
      impact: "60% Error Reduction",
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      accentColor: "pink",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
        </svg>
      ),
      image: "/workers.jpg",
      capabilities: ["Virtual Training", "Digital Twins", "Remote Assistance", "3D Visualization"],
      features: [
        "Immersive VR training simulations",
        "AR-guided maintenance procedures",
        "Digital twin visualization for complex systems",
        "Remote expert assistance through AR"
      ],
      applications: ["Training Programs", "Maintenance", "Design Review", "Remote Support"],
      metrics: { errorReduction: "60%", training: "80% faster", visualization: "3D" }
    },
    {
      id: "blockchain",
      title: "Blockchain Security",
      subtitle: "Distributed Ledger",
      shortDesc: "Immutable records ensuring complete transparency",
      fullDesc: "Our blockchain solutions provide immutable record-keeping and secure transactions for industrial applications. We implement smart contracts for automated processes and ensure complete traceability across supply chains.",
      impact: "100% Traceability",
      color: "from-indigo-400 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
      accentColor: "indigo",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C10.89,7 10,7.89 10,9V15C10,16.11 10.89,17 12,17C13.11,17 14,16.11 14,15V9C14,7.89 13.11,7 12,7Z"/>
        </svg>
      ),
      image: "/totalenergies.jpg",
      capabilities: ["Smart Contracts", "Supply Chain", "Identity Verification", "Audit Trails"],
      features: [
        "Immutable transaction records",
        "Smart contracts for automated processes",
        "Complete supply chain traceability",
        "Secure identity and access management"
      ],
      applications: ["Supply Chain", "Quality Assurance", "Compliance", "Asset Management"],
      metrics: { traceability: "100%", security: "256-bit", transparency: "Complete" }
    }
  ];

  const getTechById = (id: string) => technologies.find(tech => tech.id === id);

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-teal-300/40 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-br from-sky-200/30 to-blue-300/30 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-gradient-to-br from-violet-200/40 to-purple-300/40 rounded-full blur-lg animate-float"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-pink-200/40 to-rose-300/40 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-200/30 to-blue-300/30 rounded-full blur-xl animate-float-slow"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 md:pt-24 pb-4 md:pb-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-4 py-2 mb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
            </svg>
            <span className="text-sm font-semibold text-amber-700">Innovation Laboratory</span>
          </div>
          
          <h1 className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-clip-text text-transparent mb-4 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Future-Ready
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          
          <p className={`text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Pioneering the next generation of industrial innovation with cutting-edge technologies 
            that redefine possibilities and unlock exponential growth.
          </p>
          
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { metric: "90%", label: "AI Accuracy", color: "from-amber-400 to-orange-500" },
              { metric: "40%", label: "IoT Efficiency", color: "from-emerald-400 to-teal-500" },
              { metric: "99.9%", label: "Cloud Uptime", color: "from-sky-400 to-blue-500" },
              { metric: "75%", label: "Robot Productivity", color: "from-violet-400 to-purple-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.metric}
                </div>
                <div className="text-gray-400 text-xs font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="relative py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === "overview"
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Overview
            </button>
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tech.id
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-xl transform scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="hidden sm:inline">{tech.title}</span>
                <span className="sm:hidden">{tech.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      {activeTab === "overview" ? (
        <section className="relative py-4 md:py-6">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-8">
              <h2 className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4`}>
                Technology Portfolio
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive suite of cutting-edge technologies that redefine possibilities and unlock exponential growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`group relative bg-white rounded-2xl p-6 border transition-all duration-500 cursor-pointer transform hover:border-transparent hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border-gray-100 shadow-lg`}
                  style={{
                    background: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, white 0%, ${
                      tech.accentColor === 'amber' ? '#fef3c7' : 
                      tech.accentColor === 'emerald' ? '#d1fae5' :
                      tech.accentColor === 'sky' ? '#dbeafe' :
                      tech.accentColor === 'violet' ? '#ede9fe' :
                      tech.accentColor === 'pink' ? '#fce7f3' : '#e0e7ff'
                    } 100%)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                  }}
                >
                  {/* Floating Icon */}
                  <div className={`absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-xl shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 text-white`}>
                    {tech.icon}
                  </div>

                  {/* Decorative Corner Element */}
                  <div className={`absolute top-3 right-3 w-6 h-6 bg-gradient-to-br ${tech.color} opacity-20 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-30`}></div>

                  <div className="pt-6">
                    <div className="mb-4">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                        {tech.subtitle}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {tech.shortDesc}
                      </p>
                    </div>

                    {/* Impact Metric */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${tech.color} rounded-full px-3 py-1 mb-4`}>
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white font-bold text-xs">{tech.impact}</span>
                    </div>

                    {/* Capabilities */}
                    <div className="space-y-1.5 mb-4">
                      {tech.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1 h-1 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                          <span className="text-xs text-gray-600">{capability}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className={`w-full py-2 bg-gradient-to-r ${tech.color} text-white font-semibold rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}>
                      Explore Technology
                    </button>
                  </div>

                  {/* Background Image Overlay */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <Image 
                      src={tech.image} 
                      alt={tech.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // Technology Detail Section
        (() => {
          const tech = getTechById(activeTab);
          if (!tech) return null;
          
          return (
            <section className="relative py-4 md:py-6">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Technology Header */}
                <div 
                  className="relative bg-white rounded-2xl p-6 md:p-8 mb-8 border border-gray-100 shadow-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, white 0%, ${
                      tech.accentColor === 'amber' ? '#fef3c7' : 
                      tech.accentColor === 'emerald' ? '#d1fae5' :
                      tech.accentColor === 'sky' ? '#dbeafe' :
                      tech.accentColor === 'violet' ? '#ede9fe' :
                      tech.accentColor === 'pink' ? '#fce7f3' : '#e0e7ff'
                    } 100%)`
                  }}
                >
                  {/* Floating Icon */}
                  <div className={`absolute -top-4 left-6 w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-2xl shadow-xl text-white rotate-12`}>
                    {tech.icon}
                  </div>

                  <div className="pt-6">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                      {tech.subtitle}
                    </div>
                    <h2 className={`text-3xl md:text-4xl font-black text-gray-900 mb-4 ${poppins.variable} font-sans`}>
                      {tech.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-base">{tech.fullDesc}</p>
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${tech.color} rounded-full px-4 py-2`}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-white font-bold">{tech.impact}</span>
                    </div>
                  </div>

                  {/* Background Image Overlay */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-5">
                    <Image 
                      src={tech.image} 
                      alt={tech.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Features */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 ${poppins.variable} font-sans`}>
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className={`text-xl font-bold text-gray-900 mb-4 ${poppins.variable} font-sans`}>
                      Applications
                    </h3>
                    <div className="space-y-3">
                      {tech.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}>
                            {idx + 1}
                          </div>
                          <span className="text-gray-700 font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                  <h3 className={`text-xl font-bold text-gray-900 mb-4 ${poppins.variable} font-sans`}>
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(tech.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                        <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${tech.color} bg-clip-text text-transparent mb-1`}>
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize font-medium">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                        backgroundSize: '50px 50px'
                      }}></div>
                    </div>
                    
                    <div className="relative">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        Ready to Implement {tech.title}?
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm">
                        Get expert consultation on integrating this technology into your operations
                      </p>
                      <a
                        href="/contact"
                        className={`inline-flex items-center gap-3 bg-gradient-to-r ${tech.color} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
                      >
                        <div className="w-5 h-5 text-white">
                          {tech.icon}
                        </div>
                        Schedule Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })()
      )}

      <Footer />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
