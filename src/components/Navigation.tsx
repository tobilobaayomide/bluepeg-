"use client";

import Link from 'next/link';
import { useState } from 'react';
import { poppins, montserrat } from '../fonts';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className={`font-extrabold text-2xl text-white tracking-tight ${poppins.variable} font-sans`}>Bluepeg</Link>
        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 text-base font-medium text-white ${montserrat.variable} font-sans`}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/solutions">What We Do</Link>
          <Link href="/partners">Our Partners</Link>
          <Link href="/resource-center">Resource Center</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            // X icon
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Fullscreen Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-700/95 flex flex-col items-center justify-center space-y-8 text-2xl font-bold text-white animate-fade-in md:hidden">
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/" onClick={() => setMenuOpen(false)} className="transition-transform duration-200 ease-out hover:scale-110 focus:scale-110">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="transition-transform duration-200 ease-out hover:scale-110 focus:scale-110">About Us</Link>
          <Link href="/solutions" onClick={() => setMenuOpen(false)} className="transition-transform duration-200 ease-out hover:scale-110 focus:scale-110">What We Do</Link>
          <Link href="/partners" onClick={() => setMenuOpen(false)} className="transition-transform duration-200 ease-out hover:scale-110 focus:scale-110">Our Partners</Link>
          <Link href="/resource-center" onClick={() => setMenuOpen(false)} className="transition-transform duration-200 ease-out hover:scale-110 focus:scale-110">Resource Center</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="transition-transform duration-200 ease-out hover:scale-110 focus:scale-110">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

// The fade-in animation is already in globals.css
