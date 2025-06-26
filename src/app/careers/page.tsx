"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { poppins } from "../../fonts";

export default function CareersPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const departments = ["All", "Engineering", "Operations", "Business Development", "Client Relations"];

  const openPositions = [
    {
      id: 1,
      title: "Senior Industrial Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      salary: "₦8M - ₦12M",
      description: "Lead complex industrial automation projects and drive technical excellence across client implementations.",
      requirements: [
        "Bachelor's degree in Industrial/Mechanical Engineering",
        "5+ years experience in industrial automation",
        "Proficiency in PLC programming and SCADA systems",
        "Experience with IoT and Industry 4.0 technologies",
        "Strong project management skills"
      ],
      responsibilities: [
        "Design and implement automation solutions for industrial clients",
        "Lead technical teams on complex engineering projects",
        "Collaborate with clients to understand requirements and deliver solutions",
        "Mentor junior engineers and drive technical best practices"
      ]
    },
    {
      id: 2,
      title: "Project Manager - Industrial Solutions",
      department: "Operations",
      location: "Abuja, Nigeria",
      type: "Full-time",
      experience: "4+ years",
      salary: "₦6M - ₦9M",
      description: "Manage end-to-end delivery of industrial automation projects and ensure client satisfaction.",
      requirements: [
        "Bachelor's degree in Engineering or related field",
        "PMP certification preferred",
        "4+ years in project management",
        "Experience with industrial/manufacturing projects",
        "Excellent communication and leadership skills"
      ],
      responsibilities: [
        "Manage project timelines, budgets, and deliverables",
        "Coordinate cross-functional teams and stakeholders",
        "Ensure quality delivery and client satisfaction",
        "Identify and mitigate project risks"
      ]
    },
    {
      id: 3,
      title: "Business Development Executive",
      department: "Business Development",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      salary: "₦4M - ₦7M",
      description: "Drive business growth by identifying new opportunities and building strategic partnerships.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "3+ years in B2B sales or business development",
        "Understanding of industrial/manufacturing sector",
        "Strong networking and relationship building skills",
        "Excellent presentation and negotiation abilities"
      ],
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain client relationships",
        "Develop proposals and presentations for potential clients",
        "Collaborate with technical teams on solution design"
      ]
    },
    {
      id: 4,
      title: "Automation Systems Specialist",
      department: "Engineering",
      location: "Port Harcourt, Nigeria",
      type: "Full-time",
      experience: "3+ years",
      salary: "₦5M - ₦8M",
      description: "Implement and maintain automation systems for oil & gas and manufacturing clients.",
      requirements: [
        "Bachelor's degree in Electrical/Electronics Engineering",
        "3+ years experience with automation systems",
        "Experience with Siemens, Allen-Bradley, or similar platforms",
        "Knowledge of safety systems and standards",
        "Willingness to travel to client sites"
      ],
      responsibilities: [
        "Install and configure automation systems",
        "Provide technical support and troubleshooting",
        "Conduct system testing and commissioning",
        "Train client personnel on system operation"
      ]
    },
    {
      id: 5,
      title: "Client Success Manager",
      department: "Client Relations",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "2+ years",
      salary: "₦3.5M - ₦6M",
      description: "Ensure client satisfaction and drive long-term partnership success.",
      requirements: [
        "Bachelor's degree in any field",
        "2+ years in client-facing roles",
        "Strong communication and problem-solving skills",
        "Experience in B2B environment preferred",
        "Customer service excellence mindset"
      ],
      responsibilities: [
        "Manage client relationships post-implementation",
        "Ensure client satisfaction and resolve issues",
        "Identify opportunities for account expansion",
        "Coordinate with technical teams for client support"
      ]
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance bonuses"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.247 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Professional Development",
      description: "Continuous learning and certification opportunities"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation Culture",
      description: "Work on cutting-edge industrial technologies"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaborative Environment",
      description: "Join a diverse team of passionate professionals"
    }
  ];

  const companyValues = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative problem-solving",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and shared success",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const filteredJobs = selectedDepartment === "All" 
    ? openPositions 
    : openPositions.filter(job => job.department === selectedDepartment);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-24 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">Join Our Team</span>
            </div>

            <h1 className={`text-4xl md:text-5xl font-black text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${poppins.variable} font-sans`}>
              Shape Nigeria's
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"> Industrial Future</span>
            </h1>

            <p className={`text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Join passionate engineers driving industrial transformation. Build your career while making real impact.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a
                href="#open-positions"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Open Positions
              </a>
              <a
                href="#why-bluepeg"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Why Bluepeg?
              </a>
            </div>

            {/* Compact Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="text-xl font-bold text-white">{openPositions.length}</div>
                <div className="text-blue-200 text-xs">Open Roles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-xs">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="text-xl font-bold text-white">8+</div>
                <div className="text-blue-200 text-xs">Years Growth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="text-xl font-bold text-white">100+</div>
                <div className="text-blue-200 text-xs">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bluepeg Section */}
      <section id="why-bluepeg" className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bluepeg?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a company building the future of Nigerian industry
            </p>
          </div>

          {/* Company Values - Compact */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {companyValues.map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.color} p-4 rounded-xl text-white transform hover:scale-105 transition-all duration-300 text-center`}
              >
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-blue-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Grid - More Compact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-4"
              >
                <div className="text-blue-600 flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover opportunities to grow your career and make an impact
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Jobs Grid - More Compact */}
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  {/* Left - Job Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {job.department}
                      </span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {job.type}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{job.description}</p>

                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                        </svg>
                        <span className="text-gray-600">{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span className="font-semibold text-gray-900">{job.salary}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle - Requirements */}
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Requirements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 text-xs">•</span>
                          <span className="line-clamp-2">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right - Action */}
                  <div className="lg:col-span-1 flex flex-col gap-2">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
                    >
                      Apply Now
                    </button>
                    <div className="text-center">
                      <span className="text-xs text-gray-500">Quick Apply</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">Try selecting a different department or check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                step: "1", 
                title: "Apply Online", 
                desc: "Submit your application",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              { 
                step: "2", 
                title: "Initial Review", 
                desc: "HR reviews qualifications",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )
              },
              { 
                step: "3", 
                title: "Interview", 
                desc: "Technical & cultural fit assessment",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                step: "4", 
                title: "Welcome", 
                desc: "Join our team!",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {process.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{process.title}</h3>
                  <p className="text-blue-100 text-sm">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Don't see the perfect role? Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a
              href="#open-positions"
              className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View All Positions
            </a>
          </div>
        </div>
      </section>

      {/* Simple Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Apply for {selectedJob?.title}</h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              To apply for this position, please send your resume and cover letter to our HR team.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:careers@bluepeg.com?subject=Application for ${selectedJob?.title}&body=Dear Bluepeg Team,%0D%0A%0D%0AI am interested in applying for the ${selectedJob?.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Send Application Email
              </a>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
