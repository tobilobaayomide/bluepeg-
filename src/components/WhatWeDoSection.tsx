"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhatWeDo() {
  const [activeCard, setActiveCard] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const solutions = [
    {
      title: "Instrumentation & Control",
      desc: "Precision solutions for monitoring and controlling industrial processes with 99.5% accuracy.",
      fullDesc: "We provide precision solutions for monitoring and controlling industrial processes, ensuring optimal performance, safety, and compliance. Our team leverages the latest technology to deliver reliable instrumentation and control systems tailored to your unique requirements.",
      img: "/hero-industrial.jpg",
      gradient: "from-blue-600 to-cyan-500",
      metric: "99.5%",
      metricLabel: "Accuracy",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      features: ["Real-time monitoring", "Advanced algorithms", "Safety integration", "Compliance automation"]
    },
    {
      title: "Automation Solutions",
      desc: "Smart automation systems that boost efficiency by 85% and reduce operational downtime.",
      fullDesc: "Our smart automation services boost efficiency, safety, and productivity. We design, implement, and support automation systems that streamline operations, reduce downtime, and enable data-driven decision-making for your business.",
      img: "/hero-industrial.jpg",
      gradient: "from-purple-600 to-indigo-500",
      metric: "85%",
      metricLabel: "Efficiency",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3l3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"/>
          <path d="M19 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6"/>
        </svg>
      ),
      features: ["PLC programming", "SCADA systems", "IoT connectivity", "Data insights"]
    },
    {
      title: "Panel Solutions",
      desc: "Custom-engineered panels with 100% safety compliance for seamless integration.",
      fullDesc: "We deliver custom-built panels for seamless integration and control. Our solutions are engineered for reliability, scalability, and ease of maintenance, supporting a wide range of industrial applications and environments.",
      img: "/hero-industrial.jpg",
      gradient: "from-green-600 to-teal-500",
      metric: "100%",
      metricLabel: "Safety",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
        </svg>
      ),
      features: ["Custom design", "Safety compliance", "Quality materials", "Testing protocols"]
    },
    {
      title: "Power & Drive Solutions",
      desc: "Reliable power systems with 24/7 support ensuring uninterrupted operations.",
      fullDesc: "We provide reliable power and drive systems for uninterrupted operations. Our expertise covers design, installation, and maintenance of power solutions that ensure efficiency, safety, and long-term value.",
      img: "/hero-industrial.jpg",
      gradient: "from-orange-600 to-red-500",
      metric: "24/7",
      metricLabel: "Support",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
        </svg>
      ),
      features: ["Motor control", "Power distribution", "Energy optimization", "Monitoring"]
    },
    {
      title: "Electrical Solutions",
      desc: "ISO-certified electrical services covering design, installation, and maintenance.",
      fullDesc: "Our comprehensive electrical services cover everything from system design to installation and support. We help you achieve safe, efficient, and compliant electrical infrastructure for all your industrial needs.",
      img: "/hero-industrial.jpg",
      gradient: "from-yellow-600 to-orange-500",
      metric: "ISO",
      metricLabel: "Certified",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"/>
        </svg>
      ),
      features: ["System design", "Installation", "Maintenance", "Compliance"]
    },
    {
      title: "Manpower Development",
      desc: "Training programs for 500+ professionals to build future-ready workforce.",
      fullDesc: "We offer training and upskilling programs to build a future-ready workforce. Our solutions empower your team with the knowledge and skills needed to excel in a rapidly evolving industrial landscape.",
      img: "/hero-industrial.jpg",
      gradient: "from-pink-600 to-purple-500",
      metric: "500+",
      metricLabel: "Trained",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,5.9C14.84,5.9 13.9,6.84 13.9,8C13.9,9.16 14.84,10.1 16,10.1C17.16,10.1 18.1,9.16 18.1,8C18.1,6.84 17.16,5.9 16,5.9M16,13C18.67,13 22,14.33 22,17V20H10V17C10,14.33 13.33,13 16,13M16,14.9C14.03,14.9 11.9,15.87 11.9,17V18.1H20.1V17C20.1,15.87 17.97,14.9 16,14.9M8,6A2,2 0 0,1 10,8A2,2 0 0,1 8,10A2,2 0 0,1 6,8A2,2 0 0,1 8,6M8,7C7.45,7 7,7.45 7,8C7,8.55 7.45,9 8,9C8.55,9 9,8.55 9,8C9,7.45 8.55,7 8,7M8,11C9.33,11 12,11.67 12,13V16H2V13C2,11.67 4.67,11 8,11M8,12.1C6.03,12.1 3.9,13.07 3.9,13V14.1H10.1V13C10.1,13.07 7.97,12.1 8,12.1Z"/>
        </svg>
      ),
      features: ["Skill development", "Certifications", "Leadership training", "Best practices"]
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-20 md:pt-24 pb-6 md:pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Our Services</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-black text-white mb-4 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            What We Do
          </h2>

          <p
            className={`text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Comprehensive industrial solutions designed to optimize operations, enhance safety, and drive sustainable growth across Nigeria's industrial landscape.
          </p>
        </div>

        {/* Service Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCard === index
                  ? `bg-gradient-to-r ${solution.gradient} text-white shadow-xl scale-105`
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5">{solution.icon}</span>
                <span>{solution.title}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Active Service Display */}
        <div
          className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden mb-8 transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Image and Metric */}
            <div className="relative p-8">
              <div className="relative group">
                {/* Floating decorative elements */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${solutions[activeCard].gradient} rounded-2xl shadow-xl animate-bounce delay-1000 opacity-80 flex items-center justify-center text-white`}>
                  {solutions[activeCard].icon}
                </div>
                
                <Image
                  src={solutions[activeCard].img}
                  alt={solutions[activeCard].title}
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-2xl object-cover w-full h-64 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solutions[activeCard].gradient} opacity-20 rounded-2xl`}></div>

                {/* Metric Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className={`text-2xl font-black bg-gradient-to-r ${solutions[activeCard].gradient} bg-clip-text text-transparent`}>
                      {solutions[activeCard].metric}
                    </div>
                    <div className="text-xs text-gray-600 font-semibold">
                      {solutions[activeCard].metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {solutions[activeCard].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {solutions[activeCard].fullDesc}
                </p>
              </div>

              {/* Features Grid */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {solutions[activeCard].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${solutions[activeCard].gradient} rounded-full`}></div>
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href="/solutions"
                  className={`group px-6 py-3 bg-gradient-to-r ${solutions[activeCard].gradient} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Service Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className={`group p-4 rounded-2xl border transition-all duration-300 cursor-pointer min-h-[120px] ${
                activeCard === index
                  ? `border-white/30 bg-gradient-to-br ${solution.gradient} shadow-xl transform scale-105`
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <div className="flex flex-col items-center text-center h-full justify-between">
                <div className="flex flex-col items-center">
                  <div className="text-2xl mb-2 flex items-center justify-center w-8 h-8">{solution.icon}</div>
                  <h4 className="font-semibold text-white text-xs mb-2 leading-tight text-center px-1 line-clamp-2">
                    {solution.title}
                  </h4>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`text-lg font-bold ${activeCard === index ? 'text-white' : `bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}`}>
                    {solution.metric}
                  </div>
                  <div className={`text-xs ${activeCard === index ? 'text-white/80' : 'text-gray-400'}`}>
                    {solution.metricLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Let our experts help you optimize efficiency, enhance safety, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started Today
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="/solutions"
                className="px-6 py-3 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
