"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { poppins } from "../../fonts";

export default function CaseStudiesPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const categories = ["All", "Manufacturing", "Energy", "Technology"];

  const detailedCaseStudies = [
    {
      id: 1,
      title: "Manufacturing Optimization Revolution",
      client: "Automotive Industry Leader",
      clientLogo: "/peugeot.jpg",
      impact: "₦2.5B",
      category: "Manufacturing",
      duration: "6 months",
      challenge: "A leading automotive manufacturer was experiencing significant production downtime, resulting in delayed deliveries and increased operational costs. Their legacy systems were inefficient and prone to frequent breakdowns.",
      solution: "Bluepeg implemented a comprehensive automation solution including predictive maintenance systems, real-time monitoring dashboards, and optimized production workflows. We integrated IoT sensors across the production line and deployed AI-powered analytics.",
      results: [
        { metric: "85%", description: "Reduction in unplanned downtime" },
        { metric: "40%", description: "Increase in overall productivity" },
        { metric: "₦2.5B", description: "Annual cost savings achieved" },
        { metric: "99.2%", description: "Equipment uptime maintained" }
      ],
      image: "/hero-industrial.jpg",
      technologies: ["IoT Sensors", "AI Analytics", "Predictive Maintenance", "Real-time Dashboards"],
      testimonial: {
        quote: "Bluepeg transformed our entire production process. The results exceeded our expectations, and their team's expertise was evident throughout the project.",
        author: "Chief Operations Officer",
        company: "Leading Automotive Manufacturer"
      }
    },
    {
      id: 2,
      title: "Supply Chain Revolution",
      client: "Energy Sector Pioneer",
      clientLogo: "/totalenergies.jpg",
      impact: "₦1.8B",
      category: "Energy",
      duration: "8 months",
      challenge: "The energy company faced complex supply chain inefficiencies, resulting in delayed deliveries, high inventory costs, and poor visibility across their distribution network spanning multiple African countries.",
      solution: "We developed an integrated supply chain management system with real-time tracking, automated inventory management, and predictive demand forecasting. The solution included blockchain technology for transparency and mobile apps for field teams.",
      results: [
        { metric: "99.8%", description: "Delivery accuracy achieved" },
        { metric: "50%", description: "Reduction in supply chain costs" },
        { metric: "₦1.8B", description: "Annual savings generated" },
        { metric: "75%", description: "Improvement in inventory turnover" }
      ],
      image: "/totalenergies.jpg",
      technologies: ["Blockchain", "Predictive Analytics", "Mobile Apps", "Real-time Tracking"],
      testimonial: {
        quote: "The supply chain transformation delivered by Bluepeg has been game-changing for our operations across Africa. Their innovative approach solved complex logistics challenges.",
        author: "Supply Chain Director",
        company: "Energy Sector Leader"
      }
    },
    {
      id: 3,
      title: "Digital Infrastructure Transformation",
      client: "Technology Innovation Hub",
      clientLogo: "/workers.jpg",
      impact: "₦3.2B",
      category: "Technology",
      duration: "4 months",
      challenge: "A rapidly growing tech company needed scalable digital infrastructure to support their expansion plans. Their existing systems couldn't handle increased traffic and were causing frequent service interruptions.",
      solution: "Bluepeg designed and implemented a cloud-native infrastructure with auto-scaling capabilities, implemented DevOps practices, and established comprehensive monitoring and security protocols. We also provided 24/7 support services.",
      results: [
        { metric: "300%", description: "Business growth facilitated" },
        { metric: "99.9%", description: "System uptime achieved" },
        { metric: "₦3.2B", description: "Revenue growth enabled" },
        { metric: "90%", description: "Faster deployment cycles" }
      ],
      image: "/workers.jpg",
      technologies: ["Cloud Infrastructure", "DevOps", "Auto-scaling", "Security Monitoring"],
      testimonial: {
        quote: "Bluepeg's infrastructure solutions enabled us to scale rapidly without compromising on reliability. Their expertise in cloud technologies is unmatched.",
        author: "Chief Technology Officer",
        company: "Tech Innovation Company"
      }
    }
  ];

  const filteredCaseStudies = selectedCategory === "All" 
    ? detailedCaseStudies 
    : detailedCaseStudies.filter(study => study.category === selectedCategory);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Success Stories</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${poppins.variable} font-sans`}>
            Detailed Case Studies
          </h1>

          <p className={`text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Explore in-depth success stories showcasing how Bluepeg delivers transformational results 
            for industry leaders across Nigeria and beyond.
          </p>

          {/* Summary Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white">₦7.5B+</div>
              <div className="text-blue-200 text-sm">Total Value Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
              <div className="text-blue-200 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white">99.8%</div>
              <div className="text-blue-200 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
              <div className="text-blue-200 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-20">
            {filteredCaseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Case Study Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <span className="text-sm font-semibold">{caseStudy.category}</span>
                        </div>
                        <div className="text-sm opacity-80">{caseStudy.duration}</div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{caseStudy.title}</h2>
                      <p className="text-blue-100 text-lg">{caseStudy.client}</p>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{caseStudy.impact}</span>
                        <span className="text-blue-200 ml-2">Total Impact</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={caseStudy.clientLogo}
                        alt={caseStudy.client}
                        width={300}
                        height={200}
                        className="rounded-xl shadow-xl object-cover w-full h-48"
                      />
                    </div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          </div>
                          The Challenge
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          Our Solution
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Main Image */}
                      <div className="relative">
                        <Image
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          width={500}
                          height={300}
                          className="rounded-xl shadow-lg object-cover w-full h-64"
                        />
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          Results Achieved
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                              <div className="text-2xl font-bold text-blue-600 mb-1">{result.metric}</div>
                              <div className="text-sm text-gray-600">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                            </svg>
                          </div>
                          <div>
                            <p className="text-gray-700 italic mb-3">"{caseStudy.testimonial.quote}"</p>
                            <div>
                              <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                              <div className="text-sm text-gray-600">{caseStudy.testimonial.company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join the industry leaders who trust Bluepeg to deliver transformational results. 
            Let's discuss how we can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
