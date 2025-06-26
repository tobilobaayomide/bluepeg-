"use client";

import ResourceCenter from "@/components/ResourceCenterSection";
import CompanyNews from "@/components/CompanyNewsSection";
import Footer from "@/components/Footer";

export default function ResourceCenterPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <ResourceCenter />
      <div id="case-studies" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Case Studies</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore real-world success stories and learn how our solutions have transformed businesses across Nigeria's industrial sector.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing Efficiency</h3>
              <p className="text-gray-600 text-sm mb-4">85% efficiency improvement in Lagos manufacturing plant through automation solutions.</p>
              <a href="/case-studies" className="text-blue-600 font-semibold text-sm hover:underline">Read Case Study →</a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Power Optimization</h3>
              <p className="text-gray-600 text-sm mb-4">40% energy cost reduction for industrial facility through smart power solutions.</p>
              <a href="/case-studies" className="text-blue-600 font-semibold text-sm hover:underline">Read Case Study →</a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Workforce Development</h3>
              <p className="text-gray-600 text-sm mb-4">500+ professionals trained in advanced industrial automation technologies.</p>
              <a href="/case-studies" className="text-blue-600 font-semibold text-sm hover:underline">Read Case Study →</a>
            </div>
          </div>
        </div>
      </div>
      
      <div id="whitepapers" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">White Papers</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            In-depth technical papers and research insights from our industry experts and engineering teams.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industrial IoT Implementation</h3>
              <p className="text-gray-600 text-sm mb-4">Best practices for implementing IoT solutions in Nigerian industrial environments.</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>25 pages</span>
                <span>PDF Download</span>
              </div>
              <a href="/resource-center/iot-whitepaper" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Download PDF</a>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Efficiency Strategies</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive guide to reducing energy consumption in industrial operations.</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>32 pages</span>
                <span>PDF Download</span>
              </div>
              <a href="/resource-center/energy-whitepaper" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Download PDF</a>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Future of Industrial Automation</h3>
              <p className="text-gray-600 text-sm mb-4">Emerging trends and technologies shaping the future of Nigerian industry.</p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>28 pages</span>
                <span>PDF Download</span>
              </div>
              <a href="/resource-center/automation-future-whitepaper" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Download PDF</a>
            </div>
          </div>
        </div>
      </div>
      
      <div id="company-news">
        <CompanyNews />
      </div>
      <Footer />
    </main>
  );
}
