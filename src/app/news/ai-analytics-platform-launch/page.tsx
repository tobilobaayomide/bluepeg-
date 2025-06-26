"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function AIAnalyticsPlatformLaunchPage() {
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
            src="/workers.jpg"
            alt="AI Analytics Platform"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90"></div>
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
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <span>/</span>
            <span className="text-white">AI Analytics Platform Launch</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl">
            <div
              className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-medium">Product Launch</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              AI Analytics Platform Launch
            </h1>

            <p
              className={`text-xl text-blue-100 leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Introducing BluePeg Analytics Pro: Our revolutionary AI-powered platform that transforms 
              operational data into actionable insights, enabling smarter decision-making and unprecedented efficiency gains.
            </p>

            {/* Meta Info */}
            <div
              className={`flex flex-wrap gap-6 text-sm transition-all duration-1000 delay-800 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                <span>October 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4Z"/>
                </svg>
                <span>Product Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Platform Highlights */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Processing</h3>
                <p className="text-sm text-gray-600">Process millions of data points in milliseconds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-sm text-gray-600">Forecast trends and prevent issues before they occur</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Intelligent Automation</h3>
                <p className="text-sm text-gray-600">Automate complex decisions and optimize workflows</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing Industrial Analytics</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Today marks a significant milestone in industrial technology as BluePeg Technologies officially 
                launches BluePeg Analytics Pro, our most advanced AI-powered analytics platform to date. 
                This revolutionary solution represents three years of intensive research and development, 
                combining cutting-edge artificial intelligence with deep industrial domain expertise.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                BluePeg Analytics Pro transforms the way manufacturers understand and optimize their operations. 
                By processing vast amounts of operational data in real-time, the platform delivers actionable 
                insights that enable proactive decision-making, predictive maintenance, and continuous optimization 
                across all aspects of industrial operations.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Platform Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="text-blue-800 space-y-2">
                      <li>• 75% reduction in unplanned downtime</li>
                      <li>• 40% improvement in energy efficiency</li>
                      <li>• 60% faster problem resolution</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-800 space-y-2">
                      <li>• 90% accuracy in failure prediction</li>
                      <li>• 50% reduction in maintenance costs</li>
                      <li>• 35% increase in overall productivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features & Capabilities</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Advanced Analytics Engine
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Powered by machine learning algorithms that continuously learn from your operational data.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-blue-900 mb-2">Predictive Capabilities:</div>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Equipment failure prediction</li>
                        <li>• Quality anomaly detection</li>
                        <li>• Demand forecasting</li>
                        <li>• Maintenance scheduling optimization</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-blue-900 mb-2">Real-time Monitoring:</div>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Live performance dashboards</li>
                        <li>• Instant alert notifications</li>
                        <li>• Trend analysis and reporting</li>
                        <li>• Custom KPI tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                    Intelligent Automation Suite
                  </h3>
                  <p className="text-purple-800 mb-4">
                    Automate complex decisions and optimize workflows based on AI-driven recommendations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-purple-900 mb-2">Process Optimization:</div>
                      <ul className="text-purple-700 space-y-1">
                        <li>• Automated workflow adjustments</li>
                        <li>• Resource allocation optimization</li>
                        <li>• Energy consumption management</li>
                        <li>• Quality control automation</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-purple-900 mb-2">Decision Support:</div>
                      <ul className="text-purple-700 space-y-1">
                        <li>• AI-powered recommendations</li>
                        <li>• Risk assessment and mitigation</li>
                        <li>• Scenario modeling and simulation</li>
                        <li>• Performance benchmarking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    Universal Integration Framework
                  </h3>
                  <p className="text-green-800 mb-4">
                    Seamlessly connects with existing systems and third-party applications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-green-900 mb-2">System Compatibility:</div>
                      <ul className="text-green-700 space-y-1">
                        <li>• ERP system integration</li>
                        <li>• SCADA/HMI connectivity</li>
                        <li>• IoT sensor networks</li>
                        <li>• Cloud and on-premise deployment</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-900 mb-2">Data Management:</div>
                      <ul className="text-green-700 space-y-1">
                        <li>• Multi-format data ingestion</li>
                        <li>• Real-time data synchronization</li>
                        <li>• Secure data encryption</li>
                        <li>• Automated backup and recovery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Applications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-blue-900 mb-2">Manufacturing</h3>
                    <p className="text-blue-800 text-sm mb-2">
                      Optimize production lines, predict equipment failures, and improve quality control.
                    </p>
                    <div className="text-blue-700 text-xs">
                      <strong>Results:</strong> 45% increase in OEE, 60% reduction in defects
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-green-900 mb-2">Energy & Utilities</h3>
                    <p className="text-green-800 text-sm mb-2">
                      Monitor grid performance, predict maintenance needs, and optimize energy distribution.
                    </p>
                    <div className="text-green-700 text-xs">
                      <strong>Results:</strong> 30% improvement in grid reliability, 25% cost savings
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-purple-900 mb-2">Oil & Gas</h3>
                    <p className="text-purple-800 text-sm mb-2">
                      Enhance safety monitoring, optimize drilling operations, and predict pipeline issues.
                    </p>
                    <div className="text-purple-700 text-xs">
                      <strong>Results:</strong> 50% reduction in safety incidents, 35% operational efficiency gain
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-xl">
                    <h3 className="font-semibold text-orange-900 mb-2">Automotive</h3>
                    <p className="text-orange-800 text-sm mb-2">
                      Streamline assembly lines, improve supplier coordination, and enhance quality assurance.
                    </p>
                    <div className="text-orange-700 text-xs">
                      <strong>Results:</strong> 40% faster time-to-market, 55% quality improvement
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Success Story</h2>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MG</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">MegaCorp Manufacturing</h3>
                    <p className="text-gray-600">Global automotive parts manufacturer</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$2.3M</div>
                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">78%</div>
                    <div className="text-sm text-gray-600">Downtime Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">6 Mo</div>
                    <div className="text-sm text-gray-600">ROI Payback Period</div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "BluePeg Analytics Pro has transformed how we operate. The predictive capabilities have 
                  virtually eliminated unplanned downtime, and the real-time insights help us make better 
                  decisions faster than ever before. It's not just analytics—it's operational intelligence."
                </blockquote>
                
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-600">Director of Operations, MegaCorp Manufacturing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data Processing Speed:</span>
                      <span className="font-medium">1M+ records/second</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prediction Accuracy:</span>
                      <span className="font-medium">Up to 95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Real-time Latency:</span>
                      <span className="font-medium">&lt; 100ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Concurrent Users:</span>
                      <span className="font-medium">10,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data Storage:</span>
                      <span className="font-medium">Unlimited scalability</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Compliance</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>ISO 27001 certified security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>SOC 2 Type II compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>GDPR and CCPA compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>Multi-factor authentication</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Availability & Pricing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$2,500</div>
                  <div className="text-sm text-gray-600 mb-4">per month</div>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Up to 100 data sources</li>
                    <li>• Basic analytics dashboard</li>
                    <li>• Email support</li>
                    <li>• 5 concurrent users</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl text-center border-2 border-blue-200">
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">POPULAR</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$7,500</div>
                  <div className="text-sm text-gray-600 mb-4">per month</div>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Up to 500 data sources</li>
                    <li>• Advanced AI analytics</li>
                    <li>• 24/7 phone support</li>
                    <li>• 25 concurrent users</li>
                    <li>• Custom integrations</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Custom</div>
                  <div className="text-sm text-gray-600 mb-4">pricing</div>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Unlimited data sources</li>
                    <li>• Full AI suite</li>
                    <li>• Dedicated support team</li>
                    <li>• Unlimited users</li>
                    <li>• On-premise deployment</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Available immediately with 30-day free trial for all plans
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors">
                    Start Free Trial
                  </button>
                  <button className="border border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Launch CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-blue-100 mb-6">
              Join the AI revolution with BluePeg Analytics Pro and unlock the full potential of your industrial data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
              <button className="border border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors">
                Watch Product Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related News */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/industry-excellence-award-2024" className="group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">Awards</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  Industry Excellence Award 2024
                </h3>
                <p className="text-gray-600">
                  Recognized for outstanding innovation in industrial automation.
                </p>
              </div>
            </Link>

            <Link href="/news/strategic-tech-partnership" className="group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">Partnership</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Strategic Tech Partnership
                </h3>
                <p className="text-gray-600">
                  Expanding capabilities through global technology collaboration.
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
