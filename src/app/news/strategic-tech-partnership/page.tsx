"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function StrategicTechPartnershipPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-green-600 to-emerald-600 text-white pt-20 md:pt-32 pb-16">
        <div className="absolute inset-0">
          <Image
            src="/totalenergies.jpg"
            alt="Strategic Partnership"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 text-green-200 text-sm mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-white transition-colors">News</Link>
            <span>/</span>
            <span className="text-white">Strategic Tech Partnership</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl">
            <div
              className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium">Partnership</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Strategic Tech Partnership
            </h1>

            <p
              className={`text-xl text-green-100 leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              BluePeg Technologies announces a groundbreaking strategic partnership with leading global 
              technology companies to accelerate innovation in industrial automation and digital transformation.
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
                <span>November 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                </svg>
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4Z"/>
                </svg>
                <span>Business Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Partnership Overview */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">5</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Partners</h3>
                <p className="text-sm text-gray-600">Leading technology companies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">$50M</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Investment</h3>
                <p className="text-sm text-gray-600">Joint technology development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Years</h3>
                <p className="text-sm text-gray-600">Strategic collaboration period</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Industrial Innovation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                BluePeg Technologies is proud to announce a strategic partnership alliance with five leading 
                global technology companies, marking a significant milestone in our mission to revolutionize 
                industrial automation and digital transformation. This collaborative initiative represents 
                a combined investment of $50 million over three years.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The partnership brings together complementary expertise in artificial intelligence, IoT infrastructure, 
                cloud computing, cybersecurity, and advanced manufacturing technologies. Together, we will develop 
                next-generation solutions that address the most pressing challenges facing modern industrial operations.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Partnership Objectives</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Accelerate development of AI-powered industrial solutions</li>
                  <li>• Expand global market reach and distribution capabilities</li>
                  <li>• Enhance cybersecurity and data protection frameworks</li>
                  <li>• Develop industry-specific automation platforms</li>
                  <li>• Create comprehensive workforce training programs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Partners</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">AI</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900">TechFlow AI Solutions</h3>
                      <p className="text-blue-700 text-sm">Artificial Intelligence & Machine Learning</p>
                    </div>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Global leader in industrial AI providing advanced machine learning algorithms, 
                    predictive analytics, and computer vision technologies for manufacturing optimization.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">IoT</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-900">ConnectEdge Systems</h3>
                      <p className="text-purple-700 text-sm">IoT Infrastructure & Edge Computing</p>
                    </div>
                  </div>
                  <p className="text-purple-800 text-sm">
                    Specialized in industrial IoT infrastructure, edge computing solutions, and 
                    real-time data processing for smart factory implementations.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">CS</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-900">SecureFlow Technologies</h3>
                      <p className="text-orange-700 text-sm">Cybersecurity & Data Protection</p>
                    </div>
                  </div>
                  <p className="text-orange-800 text-sm">
                    Industry-leading cybersecurity firm specializing in operational technology (OT) security, 
                    threat detection, and compliance frameworks for industrial environments.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">CC</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-900">CloudScale Infrastructure</h3>
                      <p className="text-green-700 text-sm">Cloud Computing & Platform Services</p>
                    </div>
                  </div>
                  <p className="text-green-800 text-sm">
                    Premier cloud infrastructure provider offering scalable computing resources, 
                    data analytics platforms, and integration services for industrial applications.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">AM</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-900">Advanced Manufacturing Co.</h3>
                      <p className="text-indigo-700 text-sm">Robotics & Advanced Manufacturing</p>
                    </div>
                  </div>
                  <p className="text-indigo-800 text-sm">
                    Leading robotics and automation company providing cutting-edge manufacturing systems, 
                    collaborative robots, and flexible production line solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovation Roadmap</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Q1 2025: Platform Integration</h3>
                    <p className="text-gray-700 mb-3">
                      Integrate partner technologies into unified industrial automation platform with enhanced AI capabilities.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-gray-900 mb-1">Key Deliverables:</div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Unified API framework</li>
                        <li>• Enhanced predictive analytics</li>
                        <li>• Improved cybersecurity protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Q2 2025: Market Expansion</h3>
                    <p className="text-gray-700 mb-3">
                      Launch joint solutions in key global markets with expanded distribution channels and local support.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-gray-900 mb-1">Target Markets:</div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• European manufacturing hubs</li>
                        <li>• Asia-Pacific industrial centers</li>
                        <li>• North American energy sector</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Q3-Q4 2025: Advanced Solutions</h3>
                    <p className="text-gray-700 mb-3">
                      Deploy next-generation autonomous systems and industry-specific solutions across multiple sectors.
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-gray-900 mb-1">Innovation Focus:</div>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Autonomous quality control systems</li>
                        <li>• Predictive supply chain optimization</li>
                        <li>• Advanced human-machine interfaces</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expected Impact</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">300%</div>
                  <div className="text-sm text-gray-600">R&D Acceleration</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">New Markets</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-600">New Jobs Created</div>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600">$1B</div>
                  <div className="text-sm text-gray-600">Revenue Potential</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This strategic partnership positions BluePeg Technologies and our partners at the forefront 
                of industrial innovation. By combining our expertise, we expect to accelerate technology 
                development by 300%, enter over 50 new global markets, and create more than 1,000 new jobs 
                across our partner network.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Customer Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-green-900 mb-2">Enhanced Solutions:</div>
                    <ul className="text-green-800 space-y-1">
                      <li>• More comprehensive automation platforms</li>
                      <li>• Improved system integration capabilities</li>
                      <li>• Enhanced security and reliability</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-green-900 mb-2">Better Support:</div>
                    <ul className="text-green-800 space-y-1">
                      <li>• 24/7 global technical support</li>
                      <li>• Localized implementation services</li>
                      <li>• Expanded training programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Perspectives</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 border-l-4 border-green-500 p-6">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "This partnership represents a paradigm shift in how industrial technology companies collaborate. 
                    By working together, we can solve complex challenges that no single company could address alone, 
                    ultimately delivering unprecedented value to our customers."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">JA</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">James Amoo</div>
                      <div className="text-sm text-gray-600">CEO, BluePeg Technologies</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-l-4 border-blue-500 p-6">
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "The future of industrial automation lies in seamless integration of AI, IoT, and advanced 
                    manufacturing technologies. This partnership gives us the combined expertise to make that 
                    future a reality for manufacturers worldwide."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">TA</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Tobiloba Ayomide</div>
                      <div className="text-sm text-gray-600">CTO, BluePeg Technologies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-green-100 mb-6">
              Learn how our enhanced partnership capabilities can transform your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-xl hover:bg-green-50 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-colors">
                Download Partnership Brief
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
