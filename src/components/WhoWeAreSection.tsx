"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function WhoWeAre() {
  const [mounted, setMounted] = useState(false);

  const highlights = [
    {
      title: "Industrial Expertise",
      desc: "Deep understanding of Nigerian industrial landscape and challenges",
    },
    {
      title: "People-First Approach",
      desc: "Building lasting partnerships through trust and excellence",
    },
    {
      title: "Technical Excellence",
      desc: "Delivering precision engineering solutions that drive results",
    },
    {
      title: "Sustainable Impact",
      desc: "Contributing to Nigeria's industrial growth and development",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-20 md:pt-24 pb-6 md:pb-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-6">
          <div
            className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-3 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">
              About Bluepeg
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-black text-white mb-3 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Who We Are
          </h2>

          <p
            className={`text-sm md:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Your trusted partner in industrial operations across Nigeria. We combine engineering expertise
            with deep local knowledge to deliver solutions that drive real business results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Enhanced Image */}
          <div
            className={`relative transition-all duration-1000 delay-600 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative group">
              {/* Floating decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl animate-bounce delay-1000 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl shadow-xl animate-bounce delay-2000 opacity-70"></div>

              <Image
                src="/workers.jpg"
                alt="Bluepeg team driving industrial excellence"
                width={500}
                height={350}
                className="rounded-2xl shadow-2xl object-cover w-full h-64 md:h-80 transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Image overlay with company tagline */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-bold text-gray-900 text-xs">
                      Excellence in Action
                    </div>
                    <div className="text-xs text-gray-600">
                      Industrial Innovation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Content */}
          <div
            className={`space-y-5 transition-all duration-1000 delay-800 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="font-bold text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-2">
                Partner With Industrial Experts
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Ready to optimize your operations? Let's discuss how our expertise can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="group px-5 py-2 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg text-center text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    Let's Work Together
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="/innovation-lab"
                  className="px-5 py-2 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 text-center text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
