"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function FutureReadyWorkforcePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-purple-600 to-pink-600 text-white pt-20 md:pt-32 pb-16">
        <div className="absolute inset-0">
          <Image
            src="/totalenergies.jpg"
            alt="Future Workforce"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 text-purple-200 text-sm mb-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resource-center" className="hover:text-white transition-colors">Resource Center</Link>
            <span>/</span>
            <span className="text-white">Future-Ready Workforce</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl">
            <div
              className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,5.9C14.84,5.9 13.9,6.84 13.9,8C13.9,9.16 14.84,10.1 16,10.1C17.16,10.1 18.1,9.16 18.1,8C18.1,6.84 17.16,5.9 16,5.9M16,13C18.67,13 22,14.33 22,17V20H10V17C10,14.33 13.33,13 16,13Z"/>
              </svg>
              <span className="text-sm font-medium">Whitepaper</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-black mb-6 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Future-Ready Workforce
            </h1>

            <p
              className={`text-xl text-purple-100 leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              How to upskill your team for the next wave of industrial innovation. 
              Discover strategies to build a workforce that thrives in the digital age.
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
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
                </svg>
                <span>3.1k downloads</span>
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

      {/* Executive Summary */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <p className="text-purple-900 font-medium mb-4">
                The industrial workforce is at a critical inflection point. By 2030, 70% of manufacturing jobs will require new skills as digital transformation accelerates.
              </p>
              <p className="text-purple-800">
                This whitepaper explores proven strategies for upskilling teams, building digital literacy, and creating a culture of continuous learning that drives innovation and competitiveness.
              </p>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Skills Gap Reality</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2.4M</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Unfilled Jobs</h3>
                <p className="text-sm text-gray-600">Manufacturing positions by 2028</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">$2.5T</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Economic Impact</h3>
                <p className="text-sm text-gray-600">Lost GDP due to skills shortage</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">54%</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Skill Mismatch</h3>
                <p className="text-sm text-gray-600">Workers need reskilling</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3x</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">ROI Potential</h3>
                <p className="text-sm text-gray-600">Return on training investment</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Digital Transformation Impact</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Industry 4.0 technologies are fundamentally changing how work gets done. From AI-powered 
                predictive maintenance to IoT-enabled smart factories, the modern industrial workforce 
                must adapt to an increasingly digital environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Traditional Skills</h3>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• Manual operations</li>
                    <li>• Basic troubleshooting</li>
                    <li>• Paper-based processes</li>
                    <li>• Reactive maintenance</li>
                    <li>• Individual work</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">Future-Ready Skills</h3>
                  <ul className="text-purple-800 space-y-2 text-sm">
                    <li>• Digital system operation</li>
                    <li>• Data-driven problem solving</li>
                    <li>• Digital workflow management</li>
                    <li>• Predictive analytics</li>
                    <li>• Cross-functional collaboration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Competency Framework</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Literacy</h3>
                  <p className="text-gray-700 mb-3">
                    Foundation skills for working with digital tools and systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">Basic Digital Skills</div>
                      <div className="text-gray-600">Software navigation, data entry, digital communication</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">Data Interpretation</div>
                      <div className="text-gray-600">Reading dashboards, understanding metrics, trend analysis</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">System Thinking</div>
                      <div className="text-gray-600">Understanding interconnected processes and workflows</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Proficiency</h3>
                  <p className="text-gray-700 mb-3">
                    Specialized technical skills for modern industrial operations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">Automation Systems</div>
                      <div className="text-gray-600">PLC programming, HMI operation, robotics interface</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">IoT & Sensors</div>
                      <div className="text-gray-600">Sensor calibration, data collection, connectivity</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">Analytics Tools</div>
                      <div className="text-gray-600">Statistical analysis, visualization, reporting</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Adaptive Capabilities</h3>
                  <p className="text-gray-700 mb-3">
                    Soft skills essential for thriving in a changing environment.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">Continuous Learning</div>
                      <div className="text-gray-600">Self-directed learning, skill development, adaptation</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">Collaboration</div>
                      <div className="text-gray-600">Cross-functional teamwork, communication, knowledge sharing</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">Problem Solving</div>
                      <div className="text-gray-600">Critical thinking, creative solutions, decision making</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Strategy</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills Assessment</h3>
                    <p className="text-gray-700 mb-4">
                      Conduct comprehensive evaluation of current workforce capabilities and identify skill gaps.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Key Activities:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Individual skill assessments</li>
                        <li>• Role requirement analysis</li>
                        <li>• Future skill demand forecasting</li>
                        <li>• Gap analysis and prioritization</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Pathways</h3>
                    <p className="text-gray-700 mb-4">
                      Design personalized learning journeys based on individual needs and career goals.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Digital Foundations</h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Computer literacy basics</li>
                          <li>• Digital communication</li>
                          <li>• Basic data analysis</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-2">Advanced Technical</h4>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>• Automation programming</li>
                          <li>• Predictive analytics</li>
                          <li>• System integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Delivery</h3>
                    <p className="text-gray-700 mb-4">
                      Implement flexible, multi-modal training approaches that fit operational schedules.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Classroom Training</h4>
                          <p className="text-gray-600">Structured learning, group interaction, instructor-led</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">On-the-Job Learning</h4>
                          <p className="text-gray-600">Practical application, mentoring, real-world experience</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Digital Platforms</h4>
                          <p className="text-gray-600">Self-paced learning, mobile access, micro-learning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Measurement</h3>
                    <p className="text-gray-700 mb-4">
                      Track progress and measure impact through comprehensive metrics and feedback systems.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">85%</div>
                        <div className="text-sm text-purple-700">Completion Rate Target</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">90%</div>
                        <div className="text-sm text-blue-700">Knowledge Retention</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">15%</div>
                        <div className="text-sm text-green-700">Productivity Increase</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">95%</div>
                        <div className="text-sm text-orange-700">Employee Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story: Global Manufacturing Leader</h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">The Challenge</h3>
                  <p className="text-red-800">
                    A Fortune 500 manufacturer faced a critical skills shortage as they implemented 
                    Industry 4.0 technologies across 15 facilities. 60% of their workforce lacked 
                    digital skills needed for new automated systems.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">The Solution</h3>
                  <p className="text-blue-800 mb-4">
                    Implemented comprehensive workforce transformation program with personalized 
                    learning paths, digital training platforms, and continuous skill development.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Program Components:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Digital literacy bootcamps</li>
                        <li>• Technical certification tracks</li>
                        <li>• Mentorship programs</li>
                        <li>• Innovation workshops</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Technology Platforms:</h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• LMS with mobile access</li>
                        <li>• VR training simulations</li>
                        <li>• AI-powered skill assessments</li>
                        <li>• Peer learning networks</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">The Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-sm text-green-700">Workforce Upskilled</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">25%</div>
                      <div className="text-sm text-green-700">Productivity Gain</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$50M</div>
                      <div className="text-sm text-green-700">Annual Value Created</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">18 Mo</div>
                      <div className="text-sm text-green-700">Full ROI Achieved</div>
                    </div>
                  </div>
                  <p className="text-green-800 text-sm">
                    The program not only closed the skills gap but also improved employee engagement 
                    and retention while accelerating digital transformation timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Transform Your Workforce Today</h3>
            <p className="text-purple-100 mb-6">
              Get the complete whitepaper with detailed frameworks, implementation guides, and best practices.
            </p>
            <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-xl hover:bg-purple-50 transition-colors inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
              </svg>
              Download Whitepaper
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
