"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function MaximizingPlantUptimePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white pt-20 md:pt-32 pb-16">
        <div className="absolute inset-0">
          <Image
            src="/workers.jpg"
            alt="Plant Operations"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-teal-600/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 text-emerald-200 text-sm mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-white transition-colors">Resource Center</Link>
            <span>/</span>
            <span className="text-white">Maximizing Plant Uptime</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl">
            <div
              className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16.24,7.76A1,1 0 0,1 16.24,9.17L13.41,12L16.24,14.83A1,1 0 0,1 14.83,16.24L12,13.41L9.17,16.24A1,1 0 0,1 7.76,14.83L10.59,12L7.76,9.17A1,1 0 0,1 9.17,7.76L12,10.59L14.83,7.76A1,1 0 0,1 16.24,7.76Z"/>
              </svg>
              <span className="text-sm font-medium">Article</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Maximizing Plant Uptime
            </h1>

            <p
              className={`text-xl text-emerald-100 leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Best practices and strategies to keep your plant running efficiently. 
              Learn how industry leaders achieve 99%+ uptime through predictive maintenance and smart operations.
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
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
                </svg>
                <span>1.8k downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                <span>Updated Jan 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Key Insights */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">99%</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Uptime Target</h3>
                <p className="text-sm text-gray-600">Industry-leading facilities achieve</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">30%</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                <p className="text-sm text-gray-600">Through predictive maintenance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">24/7</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
                <p className="text-sm text-gray-600">Real-time system oversight</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Plant Downtime Costs</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unplanned downtime can cost manufacturers anywhere from $50,000 to $500,000 per hour, 
                depending on the industry and facility size. Beyond immediate financial losses, downtime 
                impacts customer satisfaction, supply chain reliability, and long-term competitiveness.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Common Causes of Downtime</h3>
                <ul className="text-red-800 space-y-1">
                  <li>• Equipment failures (42%)</li>
                  <li>• Planned maintenance overruns (17%)</li>
                  <li>• Material shortages (15%)</li>
                  <li>• Human error (13%)</li>
                  <li>• Quality issues (8%)</li>
                  <li>• External factors (5%)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Predictive Maintenance Strategies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-3">Condition Monitoring</h3>
                  <p className="text-emerald-800 text-sm mb-4">
                    Continuous monitoring of equipment health through sensors and IoT devices.
                  </p>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Vibration analysis</li>
                    <li>• Temperature monitoring</li>
                    <li>• Oil analysis</li>
                    <li>• Electrical signature analysis</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Data Analytics</h3>
                  <p className="text-blue-800 text-sm mb-4">
                    Advanced analytics to predict failures before they occur.
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Machine learning algorithms</li>
                    <li>• Pattern recognition</li>
                    <li>• Anomaly detection</li>
                    <li>• Failure prediction models</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Roadmap</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
                    <p className="text-gray-700">
                      Conduct a comprehensive audit of current maintenance practices and identify critical equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Implementation</h3>
                    <p className="text-gray-700">
                      Install sensors, monitoring systems, and analytics platforms for real-time data collection.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Adoption</h3>
                    <p className="text-gray-700">
                      Train maintenance teams on new tools and establish data-driven decision-making processes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Optimization</h3>
                    <p className="text-gray-700">
                      Regularly review and refine maintenance strategies based on performance data and insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Case Study: Manufacturing Excellence</h2>
              
              <div className="bg-emerald-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold text-emerald-900 mb-3">Challenge</h3>
                <p className="text-emerald-800">
                  A major automotive manufacturer was experiencing 15% unplanned downtime, 
                  costing $2M annually in lost production and emergency repairs.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Solution</h3>
                <p className="text-blue-800">
                  Implemented comprehensive predictive maintenance program with IoT sensors, 
                  AI-powered analytics, and integrated maintenance management system.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-green-700">Downtime Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">$1.7M</div>
                    <div className="text-sm text-green-700">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">99.2%</div>
                    <div className="text-sm text-green-700">Uptime Achieved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">6 Mo</div>
                    <div className="text-sm text-green-700">ROI Payback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Start Your Uptime Journey Today</h3>
            <p className="text-emerald-100 mb-6">
              Get our comprehensive toolkit with checklists, templates, and implementation guides.
            </p>
            <button className="bg-white text-emerald-600 font-semibold py-3 px-8 rounded-xl hover:bg-emerald-50 transition-colors inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
              Download Toolkit
            </button>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/resource-center/operations-guide" className="group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Guide</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Industrial Operations Guide
                </h3>
                <p className="text-gray-600">
                  Comprehensive guide to optimizing your operations for growth and sustainability.
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
