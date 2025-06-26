"use client";

import Image from "next/image";
import { poppins } from "../fonts";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "Projects Completed", value: "500+", suffix: "" },
    { label: "Happy Clients", value: "150+", suffix: "" },
    { label: "Years of Experience", value: "10+", suffix: "" },
    { label: "Uptime Achieved", value: "99.9", suffix: "%" },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6 shadow-lg transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-900">Trusted Industrial Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${poppins.variable} font-sans`}>
              <span className="text-gray-900">Engineering</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Excellence</span>
              <br />
              <span className="text-gray-700 text-xl md:text-2xl lg:text-3xl">for Industry 4.0</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-sm md:text-base mb-4 max-w-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Transform your industrial operations with our cutting-edge automation solutions, 
              expert system integration, and 24/7 support — designed to maximize efficiency 
              and minimize downtime.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 mb-6 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="/solutions"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Solutions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="/contact"
                className="group px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-700 font-bold rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Schedule Consultation
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Animated Stats */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-xl transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-2 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/80 ${
                    currentStat === index ? 'ring-2 ring-blue-400 shadow-lg' : ''
                  }`}
                >
                  <div className="text-lg md:text-xl font-black text-blue-600 mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center items-center max-w-md lg:max-w-lg">
            <div className={`relative transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-xl animate-bounce delay-1000 opacity-80"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl animate-bounce delay-2000 opacity-60"></div>
              
              {/* Main Image */}
              <div className="relative group">
                <Image
                  src="/hero-industrial.jpg"
                  alt="Advanced Industrial Engineering Solutions"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-xl object-cover w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Badge on Image */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs">Real-time Monitoring</div>
                      <div className="text-xs text-gray-600">24/7 System Health</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
