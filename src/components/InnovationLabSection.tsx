"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function InnovationLabSection() {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const technologies = [
    {
      title: "Artificial Intelligence",
      subtitle: "ML & Deep Learning",
      desc: "Advanced AI algorithms that predict failures before they happen",
      impact: "90% Downtime Reduction",
      color: "from-amber-400 to-orange-500",
      accentColor: "amber",
      tabId: "ai",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
        </svg>
      ),
      image: "/hero-industrial.jpg",
      capabilities: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Optimization"]
    },
    {
      title: "Internet of Things",
      subtitle: "Smart Connectivity",
      desc: "Seamlessly connected devices providing real-time insights",
      impact: "40% Efficiency Boost",
      color: "from-emerald-400 to-teal-500",
      accentColor: "emerald",
      tabId: "iot",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8M10,9A1,1 0 0,0 9,10A1,1 0 0,0 10,11A1,1 0 0,0 11,10A1,1 0 0,0 10,9M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M8.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,15A1.5,1.5 0 0,0 10,13.5A1.5,1.5 0 0,0 8.5,12Z"/>
        </svg>
      ),
      image: "/workers.jpg",
      capabilities: ["Sensor Networks", "Edge Computing", "Data Streaming", "Remote Control"]
    },
    {
      title: "Cloud Computing",
      subtitle: "Scalable Infrastructure",
      desc: "Enterprise-grade cloud solutions with guaranteed uptime",
      impact: "99.9% Reliability",
      color: "from-sky-400 to-blue-500",
      accentColor: "sky",
      tabId: "cloud",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22,15V17H20V15M22,11V13H20V11M14,17H18V15H14M12,17H6L2.57,17C2.25,16.75 2,16.39 2,16C2,15.61 2.25,15.25 2.57,15H6C6,14.65 6.05,14.31 6.14,14H2.57C1.5,14 1,15.5 1,16S1.5,18 2.57,18H6C6,18.35 6.05,18.69 6.14,19H2.57C1.5,19 1,20.5 1,21S1.5,23 2.57,23H22V21H20V19H22V17H14V19H12V17Z"/>
        </svg>
      ),
      image: "/totalenergies.jpg",
      capabilities: ["Auto-scaling", "Multi-cloud", "Security", "Backup & Recovery"]
    },
    {
      title: "Robotics Systems",
      subtitle: "Intelligent Automation",
      desc: "Collaborative robots enhancing human productivity",
      impact: "75% Productivity Gain",
      color: "from-violet-400 to-purple-500",
      accentColor: "violet",
      tabId: "robotics",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,4A0.5,0.5 0 0,0 11.5,4.5A0.5,0.5 0 0,0 12,5A0.5,0.5 0 0,0 12.5,4.5A0.5,0.5 0 0,0 12,4Z"/>
        </svg>
      ),
      image: "/hero-industrial.jpg",
      capabilities: ["Collaborative Bots", "Vision Systems", "Process Control", "Quality Assurance"]
    },
    {
      title: "Extended Reality",
      subtitle: "AR/VR Solutions",
      desc: "Immersive training and visualization experiences",
      impact: "60% Error Reduction",
      color: "from-pink-400 to-rose-500",
      accentColor: "pink",
      tabId: "xr",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
        </svg>
      ),
      image: "/workers.jpg",
      capabilities: ["Virtual Training", "Digital Twins", "Remote Assistance", "3D Visualization"]
    },
    {
      title: "Blockchain Security",
      subtitle: "Distributed Ledger",
      desc: "Immutable records ensuring complete transparency",
      impact: "100% Traceability",
      color: "from-indigo-400 to-blue-500",
      accentColor: "indigo",
      tabId: "blockchain",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C10.89,7 10,7.89 10,9V15C10,16.11 10.89,17 12,17C13.11,17 14,16.11 14,15V9C14,7.89 13.11,7 12,7Z"/>
        </svg>
      ),
      image: "/totalenergies.jpg",
      capabilities: ["Smart Contracts", "Supply Chain", "Identity Verification", "Audit Trails"]
    }
  ];

  return (
    <section className="relative w-full bg-white py-4 md:py-6 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-200/40 to-teal-300/40 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-br from-sky-200/30 to-blue-300/30 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-gradient-to-br from-violet-200/40 to-purple-300/40 rounded-full blur-lg animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-4 py-2 mb-4 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
            </svg>
            <span className="text-sm font-semibold text-amber-700">Innovation Laboratory</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Future-Ready
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p
            className={`text-base text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Pioneering the next generation of industrial innovation with cutting-edge technologies 
            that redefine possibilities and unlock exponential growth.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`group relative bg-white rounded-2xl p-6 border transition-all duration-500 cursor-pointer transform ${
                hoveredTech === index 
                  ? 'border-transparent shadow-2xl scale-105 -translate-y-2' 
                  : 'border-gray-100 shadow-lg hover:shadow-xl'
              }`}
              style={{
                background: hoveredTech === index 
                  ? `linear-gradient(135deg, white 0%, ${tech.accentColor === 'amber' ? '#fef3c7' : 
                      tech.accentColor === 'emerald' ? '#d1fae5' :
                      tech.accentColor === 'sky' ? '#dbeafe' :
                      tech.accentColor === 'violet' ? '#ede9fe' :
                      tech.accentColor === 'pink' ? '#fce7f3' : '#e0e7ff'} 100%)`
                  : 'white'
              }}
            >
              {/* Floating Icon */}
              <div className={`absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-xl shadow-xl transition-all duration-500 ${
                hoveredTech === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
              }`}>
                {tech.icon}
              </div>

              {/* Decorative Corner Element */}
              <div className={`absolute top-3 right-3 w-6 h-6 bg-gradient-to-br ${tech.color} opacity-20 rounded-full transition-all duration-500 ${
                hoveredTech === index ? 'scale-150 opacity-30' : 'scale-100 opacity-20'
              }`}></div>

              <div className="pt-6">
                <div className="mb-4">
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {tech.desc}
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
                <a 
                  href={`/innovation-lab?tab=${tech.tabId}`}
                  className={`block w-full py-2 bg-gradient-to-r ${tech.color} text-white font-semibold rounded-lg text-sm transition-all duration-300 transform text-center opacity-100 cursor-pointer hover:scale-105 relative z-50`}
                  style={{ pointerEvents: 'auto' }}
                >
                  Explore Technology
                </a>
              </div>

              {/* Background Image Overlay */}
              {hoveredTech === index && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-5">
                  <Image 
                    src={tech.image} 
                    alt={tech.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Innovation by the Numbers
              </h3>
              <p className="text-gray-300 text-sm">
                Measurable impact across all technology implementations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>
      </div>

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
    </section>
  );
}
