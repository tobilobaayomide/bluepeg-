"use client";

import Image from "next/image";

function WhatWeDo() {
  const powerDriveImg = '/hero-industrial.jpg';
  const solutions = [
    {
      title: 'Instrumentation & Control',
      desc: 'We provide precision solutions for monitoring and controlling industrial processes, ensuring optimal performance, safety, and compliance. Our team leverages the latest technology to deliver reliable instrumentation and control systems tailored to your unique requirements.',
      img: powerDriveImg,
      link: '/solutions#instrumentation',
    },
    {
      title: 'Automation Solutions',
      desc: 'Our smart automation services boost efficiency, safety, and productivity. We design, implement, and support automation systems that streamline operations, reduce downtime, and enable data-driven decision-making for your business.',
      img: powerDriveImg,
      link: '/solutions#automation',
    },
    {
      title: 'Panel Solutions',
      desc: 'We deliver custom-built panels for seamless integration and control. Our solutions are engineered for reliability, scalability, and ease of maintenance, supporting a wide range of industrial applications and environments.',
      img: powerDriveImg,
      link: '/solutions#panel',
    },
    {
      title: 'Power & Drive Solutions',
      desc: 'We provide reliable power and drive systems for uninterrupted operations. Our expertise covers design, installation, and maintenance of power solutions that ensure efficiency, safety, and long-term value for your business.',
      img: powerDriveImg,
      link: '/solutions#power',
    },
    {
      title: 'Electrical Solutions',
      desc: 'Our comprehensive electrical services cover everything from system design to installation and support. We help you achieve safe, efficient, and compliant electrical infrastructure for all your industrial needs.',
      img: powerDriveImg,
      link: '/solutions#electrical',
    },
    {
      title: 'Manpower Development',
      desc: 'We offer training and upskilling programs to build a future-ready workforce. Our solutions empower your team with the knowledge and skills needed to excel in a rapidly evolving industrial landscape.',
      img: powerDriveImg,
      link: '/solutions#manpower',
    },
  ];
  return (
    <section className="relative w-full bg-white py-8 border-b border-gray-100">
      <div className="relative z-10 w-full px-0">
        <h2 className="text-xl md:text-2xl font-bold text-[#007BFF] text-left mb-3 uppercase tracking-wide px-4 md:px-8">
          What We Do
        </h2>
        <p className="text-base text-gray-500 text-left mb-8 max-w-full italic px-4 md:px-8">
          We partner with you to deliver innovative, reliable, and sustainable
          solutions tailored to the needs of modern industry. Our expertise covers
          a wide range of services designed to empower your business and drive
          operational excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
              <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
                {solution.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                {solution.desc}
              </p>
              <a
                href={solution.link}
                className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
              >
                Read More <span aria-hidden className="text-base">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#181c32] text-white pt-12 pb-6 px-4 border-t border-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Company Info */}
        <div className="md:w-1/4 flex flex-col gap-3 mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-extrabold text-2xl tracking-tight">Bluepeg</span>
          </div>
          <p className="text-sm text-blue-100 max-w-xs leading-relaxed">
            Bluepeg is a people-first industrial operations company, dedicated to
            driving innovation and sustainable growth across Nigeria.
          </p>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/4 flex flex-col gap-2">
          <h4 className="font-bold text-base mb-2 text-white uppercase tracking-wider">
            Company
          </h4>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <a href="/about" className="hover:underline text-blue-200">About Us</a>
            </li>
            <li>
              <a href="/about#journey" className="hover:underline text-blue-200">A Journey of Growth</a>
            </li>
            <li>
              <a href="/partners" className="hover:underline text-blue-200">Our Partners</a>
            </li>
            <li>
              <a href="/resource-center" className="hover:underline text-blue-200">Resource Center</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline text-blue-200">Contact Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline text-blue-200">FAQ</a>
            </li>
          </ul>
        </div>
        {/* What We Do (Services) */}
        <div className="md:w-1/4 flex flex-col gap-2">
          <h4 className="font-bold text-base mb-2 text-white uppercase tracking-wider">
            What We Do
          </h4>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <a href="/solutions#instrumentation" className="hover:underline text-blue-200">Instrumentation & Control</a>
            </li>
            <li>
              <a href="/solutions#automation" className="hover:underline text-blue-200">Automation Solutions</a>
            </li>
            <li>
              <a href="/solutions#panel" className="hover:underline text-blue-200">Panel Solutions</a>
            </li>
            <li>
              <a href="/solutions#power" className="hover:underline text-blue-200">Power and Drive Solutions</a>
            </li>
            <li>
              <a href="/solutions#electrical" className="hover:underline text-blue-200">Electrical Solutions</a>
            </li>
            <li>
              <a href="/solutions#manpower" className="hover:underline text-blue-200">Manpower Development</a>
            </li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div className="md:w-1/4 flex flex-col gap-3">
          <h4 className="font-bold text-base mb-2 text-white uppercase tracking-wider">
            Contact Us
          </h4>
          <p className="text-sm text-blue-100">
            33 Oyinkan Abayomi Drive, Ikoyi, Lagos, Nigeria
          </p>
          <p className="text-sm text-blue-100">
            Phone: <a href="tel:+2348000000000" className="hover:underline text-blue-200">+234 800 000 0000</a>
          </p>
          <p className="text-sm text-blue-100">
            Email: <a href="mailto:info@bluepeg.com" className="hover:underline text-blue-200">info@bluepeg.com</a>
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-white hover:text-blue-300" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 20 20">
                <path fill="currentColor" d="M16.5 3A2.5 2.5 0 0 1 19 5.5v9A2.5 2.5 0 0 1 16.5 17h-13A2.5 2.5 0 0 1 1 14.5v-9A2.5 2.5 0 0 1 3.5 3h13zm-9.75 12V8.75H4.25V15h2.5zm-1.25-7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm10 7.25v-3.25c0-1.1-.9-2-2-2s-2 .9-2 2V15h2.5v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V15h2.5z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-300" aria-label="Twitter">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.316 6.246c.008.176.008.353.008.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.037.64.053.97.053 1.92 0 3.69-.653 5.1-1.75a4.09 4.09 0 0 1-3.82-2.84c.25.04.5.07.77.07.36 0 .71-.05 1.04-.14a4.09 4.09 0 0 1-3.28-4.01v-.05c.55.3 1.18.48 1.85.5a4.08 4.08 0 0 1-1.82-3.4c0-.75.2-1.45.54-2.05a11.6 11.6 0 0 0 8.42 4.27c-.07-.3-.1-.61-.1-.93a4.09 4.09 0 0 1 7.08-3.73 8.18 8.18 0 0 0 2.59-.99 4.08 4.08 0 0 1-1.8 2.25 8.18 8.18 0 0 0 2.35-.64 8.7 8.7 0 0 1-2.05 2.12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-300" aria-label="YouTube">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.333c-2.667 0-8 .333-8 2.667v7.333c0 2.334 5.333 2.667 8 2.667s8-.333 8-2.667V6c0-2.334-5.333-2.667-8-2.667zm-2 8.334V8.333l5.333 1.667L8 11.667z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-blue-900 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
        <span>&copy; {new Date().getFullYear()} Bluepeg. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Powered by Bluepeg Digital</span>
      </div>
    </footer>
  );
}

export default function Solutions() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <WhatWeDo />
      <Footer />
    </main>
  );
}
