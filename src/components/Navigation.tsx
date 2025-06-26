"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { poppins, montserrat } from '../fonts';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      href: '/', 
      label: 'Home',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      href: '/about', 
      label: 'About',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    { 
      href: '/solutions', 
      label: 'Solutions',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      href: '/innovation-lab', 
      label: 'Innovations',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    { 
      href: '/resource-center', 
      label: 'Resources',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      href: '/contact', 
      label: 'Contact',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl' 
          : 'bg-white/90 backdrop-blur-lg shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className={`flex items-center gap-3 font-bold text-xl text-[#007BFF] ${poppins.variable} font-sans transition-all duration-300 ease-out hover:scale-105 hover:text-blue-700 group transform-gpu`}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#007BFF] via-blue-600 to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-blue-500/30 relative overflow-hidden">
                <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
              </div>
              <span className="transition-all duration-300 group-hover:tracking-wide">Bluepeg</span>
            </Link>

            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center space-x-1 ${montserrat.variable} font-sans`}>
              {menuItems.slice(0, -1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2.5 text-gray-600 font-medium transition-all duration-300 ease-out rounded-lg group hover:text-gray-800 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-200 hover:shadow-md hover:scale-105 transform-gpu"
                >
                  <div className="flex items-center gap-2">
                    <span className="transition-all duration-300 group-hover:scale-110 text-gray-500 group-hover:text-gray-700">
                      {item.icon}
                    </span>
                    <span className="relative transition-all duration-300 group-hover:font-semibold">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Clean hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  
                  {/* Subtle bottom border on hover */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></div>
                </Link>
              ))}
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-[#007BFF] via-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ease-out hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 group overflow-hidden transform-gpu"
              >
                <div className="flex items-center gap-2 relative z-10">
                  <span className="transition-all duration-300 group-hover:scale-110">
                    {menuItems[menuItems.length - 1].icon}
                  </span>
                  <span className="transition-transform duration-300 group-hover:scale-105">Contact Us</span>
                </div>
                
                {/* Simple hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-3 rounded-xl text-gray-700 hover:text-[#007BFF] hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group transform-gpu"
              aria-label="Toggle menu"
            >
              <div className="relative">
                <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-150"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Remove this since we'll use full screen */}

      {/* Mobile Menu Panel - Full Screen */}
      <div className={`md:hidden fixed inset-0 h-full w-full bg-gradient-to-br from-[#007BFF] via-blue-600 to-blue-700 z-50 transform transition-all duration-500 ease-out flex flex-col ${
        menuOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
      }`}>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/5 to-transparent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Mobile Menu Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-white/20 flex-shrink-0 backdrop-blur-sm">
          <div className={`flex items-center gap-3 text-white ${poppins.variable} font-sans transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="font-bold text-xl">Bluepeg</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className={`p-3 text-white hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-90 group transform-gpu ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
          >
            <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex-1 flex flex-col justify-center py-6 px-8 space-y-3">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-8 py-5 text-white text-xl rounded-2xl font-medium text-center transition-all duration-400 ease-out transform hover:scale-105 hover:bg-white/25 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 group relative overflow-hidden ${
                item.href === '/contact' 
                  ? 'bg-gradient-to-r from-white/20 to-white/10 mt-8 text-2xl font-bold border-2 border-white/30 hover:border-white/50' 
                  : 'hover:bg-gradient-to-r hover:from-white/15 hover:to-white/25'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {item.label}
              </span>
              
              {/* Animated background glow for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              {/* Shimmer effect for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 group-hover:translate-x-full"></div>
              
              {/* Special effects for Contact button */}
              {item.href === '/contact' && (
                <>
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-white/40 to-white/30 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-sm animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
