"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function OperationsGuidePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white pt-20 md:pt-32 pb-16">
        <div className="absolute inset-0">
          <Image
            src="/hero-industrial.jpg"
            alt="Industrial Operations"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 text-blue-200 text-sm mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-white transition-colors">Resource Center</Link>
            <span>/</span>
            <span className="text-white">Operations Guide</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl">
            <div
              className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <span className="text-sm font-medium">Guide</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Industrial Operations Guide
            </h1>

            <p
              className={`text-xl text-blue-100 leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Comprehensive guide to optimizing your operations for growth and sustainability. 
              Learn proven strategies and best practices from industry leaders.
            </p>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-6 text-sm transition-all duration-1000 delay-800 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
                </svg>
                <span>2.5k downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                <span>Updated Dec 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <div className="space-y-3">
              {[
                "1. Introduction to Industrial Operations",
                "2. Operational Excellence Framework",
                "3. Process Optimization Strategies",
                "4. Technology Integration",
                "5. Performance Metrics & KPIs",
                "6. Continuous Improvement",
                "7. Case Studies & Examples",
                "8. Implementation Roadmap"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction to Industrial Operations</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Industrial operations form the backbone of modern manufacturing and production facilities. 
                In today's competitive landscape, optimizing these operations is crucial for maintaining 
                profitability, ensuring quality, and driving sustainable growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This comprehensive guide will walk you through proven methodologies, cutting-edge technologies, 
                and best practices that industry leaders use to transform their operations and achieve 
                operational excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Operational Excellence Framework</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">People</h3>
                  <p className="text-blue-800 text-sm">
                    Skilled workforce, training programs, and performance management systems.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Process</h3>
                  <p className="text-green-800 text-sm">
                    Standardized procedures, workflow optimization, and quality control.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Technology</h3>
                  <p className="text-purple-800 text-sm">
                    Automation, IoT sensors, data analytics, and digital transformation.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">Performance</h3>
                  <p className="text-orange-800 text-sm">
                    KPI tracking, continuous monitoring, and improvement initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Process Optimization Strategies</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lean Manufacturing</h3>
                  <p className="text-gray-700">
                    Eliminate waste, reduce cycle times, and improve overall efficiency through 
                    systematic identification and removal of non-value-added activities.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Six Sigma</h3>
                  <p className="text-gray-700">
                    Data-driven approach to improve quality by identifying and removing causes 
                    of defects and minimizing variability in manufacturing processes.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Total Productive Maintenance</h3>
                  <p className="text-gray-700">
                    Proactive maintenance strategy that aims to maximize equipment effectiveness 
                    through predictive and preventive maintenance practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-blue-100 mb-6">
              Download the complete guide with detailed implementation strategies, case studies, and actionable insights.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
              Download Complete Guide
            </button>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/resource-center/maximizing-plant-uptime" className="group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">Article</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Maximizing Plant Uptime
                </h3>
                <p className="text-gray-600">
                  Best practices and strategies to keep your plant running efficiently.
                </p>
              </div>
            </Link>

            <Link href="/resource-center/future-ready-workforce" className="group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,5.9C14.84,5.9 13.9,6.84 13.9,8C13.9,9.16 14.84,10.1 16,10.1C17.16,10.1 18.1,9.16 18.1,8C18.1,6.84 17.16,5.9 16,5.9M16,13C18.67,13 22,14.33 22,17V20H10V17C10,14.33 13.33,13 16,13Z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Whitepaper</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Future-Ready Workforce
                </h3>
                <p className="text-gray-600">
                  How to upskill your team for the next wave of industrial innovation.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
