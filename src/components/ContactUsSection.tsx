"use client";

import React, { useState } from "react";

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 md:pt-24 pb-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-100/15 rounded-full blur-3xl -translate-x-28 translate-y-28" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#007BFF]/10 text-[#007BFF] px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get in Touch
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#007BFF] mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Ready to transform your operations? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#007BFF] mb-2">Send us a Message</h3>
                <p className="text-gray-600 text-sm">Fill out the form and we'll get back to you within 24 hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 focus:border-[#007BFF] transition-all bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 focus:border-[#007BFF] transition-all bg-white text-gray-900 placeholder-gray-500 text-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF]/50 focus:border-[#007BFF] transition-all bg-white text-gray-900 placeholder-gray-500 resize-none text-sm"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#007BFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#005bb5] transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-sm"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-4">
            {/* Contact Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-5">
              <h3 className="text-lg font-bold text-[#007BFF] mb-4">Get in Touch</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#007BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Our Office</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      33 Oyinkan Abayomi Drive,<br />
                      Ikoyi, Lagos, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#007BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Email</h4>
                    <a href="mailto:info@bluepeg.com" className="text-[#007BFF] hover:underline text-xs transition-colors">
                      info@bluepeg.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#007BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Phone</h4>
                    <a href="tel:+2348000000000" className="text-[#007BFF] hover:underline text-xs transition-colors">
                      +234 800 000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact FAQ Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-5">
              <h3 className="text-lg font-bold text-[#007BFF] mb-4">Quick FAQ</h3>
              
              <div className="space-y-2">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-2 rounded-lg bg-[#007BFF]/5 hover:bg-[#007BFF]/10 transition-colors">
                    <span className="font-semibold text-gray-900 text-xs">Response time?</span>
                    <svg className="w-3 h-3 text-[#007BFF] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 text-xs mt-1 px-2">Within 24 hours during business days.</p>
                </details>
                
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-2 rounded-lg bg-[#007BFF]/5 hover:bg-[#007BFF]/10 transition-colors">
                    <span className="font-semibold text-gray-900 text-xs">Free consultation?</span>
                    <svg className="w-3 h-3 text-[#007BFF] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-600 text-xs mt-1 px-2">Yes, we offer free initial consultations.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
