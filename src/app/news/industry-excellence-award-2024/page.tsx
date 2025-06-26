"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function IndustryExcellenceAwardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-yellow-500 to-orange-600 text-white pt-20 md:pt-32 pb-16">
        <div className="absolute inset-0">
          <Image
            src="/hero-industrial.jpg"
            alt="Industry Excellence Award"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-orange-600/90"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 text-yellow-200 text-sm mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <span>/</span>
            <span className="text-white">Industry Excellence Award 2024</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl">
            <div
              className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-sm font-medium">Awards</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Industry Excellence Award 2024
            </h1>

            <p
              className={`text-xl text-yellow-100 leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              BluePeg Technologies has been recognized with the prestigious Industry Excellence Award 2024 
              for our groundbreaking innovations in industrial automation and operational excellence.
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
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4Z"/>
                </svg>
                <span>Press Release</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Award Highlight */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 mb-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Excellence Award 2024</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Presented by the International Manufacturing Excellence Council for 
              "Outstanding Innovation in Industrial Automation and Operational Excellence"
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recognition of Excellence</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                BluePeg Technologies is proud to announce that we have been honored with the Industry Excellence Award 2024 
                by the International Manufacturing Excellence Council (IMEC). This prestigious recognition celebrates our 
                commitment to innovation, operational excellence, and transformative solutions in industrial automation.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The award recognizes our groundbreaking work in developing AI-powered predictive maintenance systems, 
                IoT-enabled smart factory solutions, and workforce development programs that have revolutionized 
                manufacturing operations across multiple industries.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Award Criteria</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Innovation in technology and processes</li>
                  <li>• Demonstrated impact on operational efficiency</li>
                  <li>• Sustainability and environmental responsibility</li>
                  <li>• Workforce development and safety improvements</li>
                  <li>• Customer satisfaction and industry leadership</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Winning Innovations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Smart Predictive Maintenance</h3>
                  <p className="text-blue-800 text-sm mb-4">
                    AI-powered system that reduces unplanned downtime by 85% and maintenance costs by 40%.
                  </p>
                  <div className="text-blue-700 text-sm">
                    <div className="font-medium">Key Features:</div>
                    <ul className="mt-1 space-y-1">
                      <li>• Real-time equipment monitoring</li>
                      <li>• Failure prediction algorithms</li>
                      <li>• Automated work order generation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">IoT Factory Ecosystem</h3>
                  <p className="text-green-800 text-sm mb-4">
                    Comprehensive IoT platform connecting all factory systems for real-time insights.
                  </p>
                  <div className="text-green-700 text-sm">
                    <div className="font-medium">Key Features:</div>
                    <ul className="mt-1 space-y-1">
                      <li>• Unified data dashboard</li>
                      <li>• Energy optimization</li>
                      <li>• Quality control automation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Workforce Excellence Program</h3>
                <p className="text-purple-800 mb-4">
                  Comprehensive training and development program that has upskilled over 5,000 workers 
                  across our client facilities, improving safety scores by 60% and productivity by 35%.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5,000+</div>
                    <div className="text-purple-700">Workers Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">60%</div>
                    <div className="text-purple-700">Safety Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">35%</div>
                    <div className="text-purple-700">Productivity Gain</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Impact & Results</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Facilities Transformed</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">$500M</div>
                  <div className="text-sm text-gray-600">Cost Savings Generated</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">40%</div>
                  <div className="text-sm text-gray-600">Average Efficiency Gain</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600">25%</div>
                  <div className="text-sm text-gray-600">Carbon Footprint Reduction</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Our innovative solutions have transformed manufacturing operations across automotive, aerospace, 
                energy, and consumer goods industries. The award recognizes not just our technological achievements, 
                but our commitment to sustainable manufacturing practices and workforce development.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Statement</h2>
              
              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-6">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "This award is a testament to our team's dedication to pushing the boundaries of what's possible 
                  in industrial automation. More importantly, it recognizes our commitment to creating solutions 
                  that not only improve efficiency but also enhance worker safety and environmental sustainability."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">JA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">James Amoo</div>
                    <div className="text-sm text-gray-600">CEO, BluePeg Technologies</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-green-500 p-6">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Innovation without purpose is just technology. At BluePeg, we innovate with the purpose of 
                  creating a more efficient, sustainable, and human-centered industrial future. This award 
                  validates that vision and motivates us to continue our mission."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">TA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Tobiloba Ayomide</div>
                    <div className="text-sm text-gray-600">CTO, BluePeg Technologies</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Forward</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This recognition reinforces our commitment to continuous innovation and excellence. As we look 
                toward 2025, we're excited to announce several new initiatives that will further advance 
                industrial automation and operational excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-2">Upcoming Innovations</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Next-gen AI analytics platform</li>
                    <li>• Expanded IoT sensor capabilities</li>
                    <li>• Advanced safety monitoring systems</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-green-900 mb-2">Expansion Plans</h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• New regional offices in Europe and Asia</li>
                    <li>• Partnership with leading universities</li>
                    <li>• Sustainability certification programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Award Gallery */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Celebrating Excellence</h3>
            <p className="text-yellow-100 mb-6">
              Join us in celebrating this milestone achievement as we continue to shape the future of industrial automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-600 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-50 transition-colors">
                View Award Gallery
              </button>
              <button className="border border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors">
                Download Press Kit
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

            <Link href="/news/ai-analytics-platform-launch" className="group">
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Product Launch</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Analytics Platform Launch
                </h3>
                <p className="text-gray-600">
                  Revolutionary AI-powered platform for operational insights.
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
