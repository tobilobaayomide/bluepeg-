"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function AboutHero() {
  return (
    <section className="relative w-full bg-[#007BFF] py-10 md:py-16 overflow-hidden border-b border-gray-100">
      <div className="w-full flex flex-col md:flex-row items-center gap-8 px-0 md:px-0">
        <div className="flex-1 flex justify-center items-center order-2 md:order-1 px-4 md:px-12">
          <Image
            src="/workers.jpg"
            alt="Bluepeg workers in action"
            width={600}
            height={384}
            className="rounded-lg shadow-lg object-cover w-full max-w-xl h-72 md:h-96 border border-blue-100"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-center md:items-end items-center text-center md:text-right order-1 md:order-2 px-4 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 text-white">
            Who We Are
          </h1>
          <p className="text-base text-white mb-6 max-w-xl">
            Bluepeg is a people-first industrial operations company, dedicated to
            driving innovation and sustainable growth across Nigeria. We believe in
            smart solutions, strong partnerships, and a relentless commitment to
            excellence.
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Ready to take your operations to the next level?
            </h2>
            <a
              href="/contact"
              className="inline-block bg-white text-[#007BFF] font-bold px-8 py-4 rounded shadow hover:bg-[#f1f5f9] transition text-base"
            >
              Let’s Work Together →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  return (
    <section className="w-full bg-white py-8 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-center mb-8 text-[#007BFF] tracking-tight">
          MISSION, VISION & CORE VALUES
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-3 items-stretch justify-center">
          {/* Mission */}
          <div className="flex-1 bg-gradient-to-b from-[#e3f0ff] to-white rounded-xl shadow p-4 flex flex-col items-center border-t-2 border-[#007BFF] transition-transform hover:-translate-y-0.5">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow ring-2 ring-[#007BFF]/10 mb-2 transition-all hover:ring-[#007BFF]/40">
              <span className="text-2xl md:text-3xl text-[#007BFF]">🎯</span>
            </div>
            <h3 className="text-base font-bold mb-1 text-[#007BFF] tracking-tight">
              Mission
            </h3>
            <div className="w-8 border-b border-[#007BFF] mb-2" />
            <p className="text-gray-700 text-xs text-center font-normal">
              Delivering top-tier services that streamline industrial processes,
              reduce downtime, and drive measurable results for our clients.
            </p>
          </div>
          {/* Vision */}
          <div className="flex-1 bg-gradient-to-b from-[#e3f0ff] to-white rounded-xl shadow p-4 flex flex-col items-center border-t-2 border-[#007BFF] transition-transform hover:-translate-y-0.5">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow ring-2 ring-[#007BFF]/10 mb-2 transition-all hover:ring-[#007BFF]/40">
              <span className="text-2xl md:text-3xl text-[#007BFF]">🔭</span>
            </div>
            <h3 className="text-base font-bold mb-1 text-[#007BFF] tracking-tight">
              Vision
            </h3>
            <div className="w-8 border-b border-[#007BFF] mb-2" />
            <p className="text-gray-700 text-xs text-center font-normal">
              To be Africa’s leading provider of innovative industrial operation
              solutions, empowering businesses through technology and efficiency.
            </p>
          </div>
          {/* Core Values */}
          <div className="flex-1 bg-gradient-to-b from-[#e3f0ff] to-white rounded-xl shadow p-4 flex flex-col items-center border-t-2 border-[#007BFF] transition-transform hover:-translate-y-0.5">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow ring-2 ring-[#007BFF]/10 mb-2 transition-all hover:ring-[#007BFF]/40">
              <span className="text-2xl md:text-3xl text-[#007BFF]">💡</span>
            </div>
            <h3 className="text-base font-bold mb-1 text-[#007BFF] tracking-tight">
              Core Values
            </h3>
            <div className="w-8 border-b border-[#007BFF] mb-2" />
            <p className="text-gray-700 text-xs text-center font-normal">
              Integrity. Innovation. Excellence. Partnership. Sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="w-full relative py-8 bg-blue-50 overflow-hidden">
      {/* Background image with enhanced overlay for depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="/workers.jpg"
          alt="Bluepeg team at work"
          className="w-full h-full object-cover object-center opacity-60 blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-[#e3f0ff]/90 to-[#e3f0ff]/95" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col gap-6">
        {/* Impactful intro quote */}
        <blockquote className="italic text-sm md:text-base text-[#007BFF] font-semibold text-center mb-2 drop-shadow-lg border-l-4 border-[#007BFF] pl-3 md:pl-6 bg-white/60 rounded-lg py-1 mx-auto w-full">
          “Building trust, driving innovation, and delivering results — one
          partnership at a time.”
        </blockquote>
        {/* Responsive layout: column on mobile, row on md+ */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-16 md:items-stretch mb-2">
          {/* Narrative */}
          <div className="flex-1 flex flex-col justify-center bg-white/90 rounded-xl shadow p-4 backdrop-blur-md border border-[#e3f0ff] max-w-full md:max-w-sm mx-auto md:ml-0">
            <h3 className="text-base font-extrabold text-[#007BFF] mb-2 tracking-tight font-serif italic text-center md:text-left">
              A Journey of Growth
            </h3>
            <p className="text-gray-900 text-sm mb-2 leading-relaxed font-medium italic font-serif text-center md:text-left">
              Bluepeg was founded by a team of passionate engineers and business
              leaders who saw an opportunity to raise the bar for industrial
              operations in Nigeria and West Africa. From our first project, we
              set out to combine technical excellence with a people-first
              approach—delivering solutions that empower our clients to thrive.
            </p>
            <p className="text-gray-800 text-sm mb-1 leading-relaxed font-light font-serif text-center md:text-left">
              Today, we’re proud to be a trusted partner to industry leaders
              across multiple sectors. Our story is one of continuous learning,
              bold innovation, and a relentless drive to create value for every
              client.
            </p>
          </div>
          {/* Timeline Highlights */}
          <div className="flex-1 flex flex-col gap-6 md:mt-0 mt-2 md:items-end items-center w-full md:w-auto">
            {/* Timeline item */}
            <div className="flex items-center gap-3 group w-full max-w-xs mx-auto md:mx-0">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#007BFF] to-[#60a5fa] flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">'22</span>
                </div>
                <div className="w-1 h-4 bg-[#60a5fa] rounded-full my-1" />
              </div>
              <div className="text-xs text-gray-800 font-semibold bg-white/80 px-2 py-1 rounded-lg shadow group-hover:bg-[#e3f0ff] transition-colors duration-300">
                Bluepeg is founded with a mission for operational excellence.
              </div>
            </div>
            <div className="flex items-center gap-3 group w-full max-w-xs mx-auto md:mx-0">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#007BFF] to-[#60a5fa] flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">'23</span>
                </div>
                <div className="w-1 h-4 bg-[#60a5fa] rounded-full my-1" />
              </div>
              <div className="text-xs text-gray-800 font-semibold bg-white/80 px-2 py-1 rounded-lg shadow group-hover:bg-[#e3f0ff] transition-colors duration-300">
                First major automation project delivered, earning industry trust.
              </div>
            </div>
            <div className="flex items-center gap-3 group w-full max-w-xs mx-auto md:mx-0">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#007BFF] to-[#60a5fa] flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">'24</span>
                </div>
                <div className="w-1 h-4 bg-[#60a5fa] rounded-full my-1" />
              </div>
              <div className="text-xs text-gray-800 font-semibold bg-white/80 px-2 py-1 rounded-lg shadow group-hover:bg-[#e3f0ff] transition-colors duration-300">
                Expansion into new service lines and strategic partnerships.
              </div>
            </div>
            <div className="flex items-center gap-3 group w-full max-w-xs mx-auto md:mx-0">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#007BFF] to-[#60a5fa] flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">'25</span>
                </div>
              </div>
              <div className="text-xs text-gray-800 font-semibold bg-white/80 px-2 py-1 rounded-lg shadow group-hover:bg-[#e3f0ff] transition-colors duration-300">
                Bluepeg solutions drive growth for partners in 3+ industries.
              </div>
            </div>
          </div>
        </div>
        {/* Call to action or next step */}
        <div className="text-center mt-2">
          <a
            href="/contact"
            className="inline-block bg-[#007BFF] text-white font-semibold px-5 py-2 rounded shadow hover:bg-[#005bb5] transition text-sm"
          >
            READY TO GROW? LET'S TALK
          </a>
        </div>
      </div>
    </section>
  );
}

function MeetTheTeam() {
  // Example staff data; replace with real names/photos if available
  const staff = [
    {
      name: "Adebayo Johnson",
      title: "Operations Lead",
      img: "/workers.jpg", // Replace with real photo if available
      desc: "Oversees all logistics and field operations, ensuring seamless project delivery and on-site excellence.",
    },
    {
      name: "Chinwe Okafor",
      title: "Tech Lead",
      img: "/hero-industrial.jpg", // Replace with real photo if available
      desc: "Drives innovation, leads systems development, and implements cutting-edge technology solutions.",
    },
    {
      name: "Tunde Balogun",
      title: "Client Relations Manager",
      img: "/peugeot.jpg", // Replace with real photo if available
      desc: "Manages client onboarding and long-term support, building strong, lasting partnerships.",
    },
  ];
  return (
    <section className="w-full bg-[#007BFF] py-8">
      <div className="max-w-4xl mx-auto px-2 md:px-0">
        <h2 className="text-2xl font-extrabold text-white mb-8 text-center tracking-tight">
          MEET OUR LEADERSHIP TEAM
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((person, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow p-5">
              <Image
                src={person.img}
                alt={person.name}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-full border-4 border-[#007BFF] mb-3 shadow-md"
                loading="lazy"
              />
              <h3 className="text-lg font-bold mb-1 text-[#007BFF]">{person.name}</h3>
              <span className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">{person.title}</span>
              <p className="text-xs text-[#007BFF] text-center">{person.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  // Use the same image for all solution boxes
  const powerDriveImg = '/hero-industrial.jpg';
  const solutions = [
    {
      title: 'Instrumentation & Control',
      desc: 'Precision solutions for monitoring and controlling industrial processes.',
      img: powerDriveImg,
    },
    {
      title: 'Automation Solutions',
      desc: 'Smart automation to boost efficiency, safety, and productivity.',
      img: powerDriveImg,
    },
    {
      title: 'Panel Solutions',
      desc: 'Custom-built panels for seamless integration and control.',
      img: powerDriveImg,
    },
    {
      title: 'Power & Drive Solutions',
      desc: 'Reliable power and drive systems for uninterrupted operations.',
      img: powerDriveImg,
    },
    {
      title: 'Electrical Solutions',
      desc: 'Comprehensive electrical services for safe, efficient systems.',
      img: powerDriveImg,
    },
    {
      title: 'Manpower Development',
      desc: 'Training and upskilling for a future-ready workforce.',
      img: powerDriveImg,
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
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Instrumentation & Control
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              We provide precision solutions for monitoring and controlling
              industrial processes, ensuring optimal performance, safety, and
              compliance. Our team leverages the latest technology to deliver
              reliable instrumentation and control systems tailored to your unique
              requirements.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Automation Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              Our smart automation services boost efficiency, safety, and
              productivity. We design, implement, and support automation systems
              that streamline operations, reduce downtime, and enable data-driven
              decision-making for your business.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Panel Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              We deliver custom-built panels for seamless integration and control.
              Our solutions are engineered for reliability, scalability, and ease of
              maintenance, supporting a wide range of industrial applications and
              environments.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Power & Drive Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              We provide reliable power and drive systems for uninterrupted
              operations. Our expertise covers design, installation, and maintenance
              of power solutions that ensure efficiency, safety, and long-term value
              for your business.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Electrical Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              Our comprehensive electrical services cover everything from system
              design to installation and support. We help you achieve safe,
              efficient, and compliant electrical infrastructure for all your
              industrial needs.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Manpower Development
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              We offer training and upskilling programs to build a future-ready
              workforce. Our solutions empower your team with the knowledge and
              skills needed to excel in a rapidly evolving industrial landscape.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPartners() {
  // Example partner logos from public/ (duplicated for a fuller grid)
  const partners = [
    { src: '/peugeot.jpg', alt: 'Peugeot' },
    { src: '/totalenergies.jpg', alt: 'TotalEnergies' },
    { src: '/dardanel.jpg', alt: 'Dardanel' },
    { src: '/chefmdjazs.jpg', alt: 'ChefMDJazs' },
    { src: '/window.svg', alt: 'Window' },
    { src: '/file.svg', alt: 'File' },
    { src: '/globe.svg', alt: 'Globe' },
    { src: '/peugeot.jpg', alt: 'Peugeot' },
    { src: '/totalenergies.jpg', alt: 'TotalEnergies' },
    { src: '/dardanel.jpg', alt: 'Dardanel' },
    { src: '/chefmdjazs.jpg', alt: 'ChefMDJazs' },
    { src: '/window.svg', alt: 'Window' },
    { src: '/file.svg', alt: 'File' },
    { src: '/globe.svg', alt: 'Globe' },
  ];
  // Pause animation on hover
  const handleMouseEnter = () => {
    document.documentElement.style.setProperty('--logo-scroll-play', 'paused');
  };
  const handleMouseLeave = () => {
    document.documentElement.style.setProperty('--logo-scroll-play', 'running');
  };
  return (
    <section className="w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#e3f0ff] py-14 border-b border-gray-100 relative overflow-hidden">
      {/* Decorative blurred background shape */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#60a5fa]/10 rounded-full blur-2xl z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#007BFF] text-left mb-2 uppercase tracking-wide px-4 md:px-8">
          Our Partners
        </h2>
        <p className="text-base text-gray-500 text-left mb-6 italic px-4 md:px-8">
          We are proud to collaborate with industry-leading partners to deliver
          exceptional value and innovation.
        </p>
        <div className="w-full border-b border-gray-200 mb-8" />
        {/* Testimonials */}
        <div className="mb-8 px-4 md:px-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <blockquote className="text-[#0a225a] text-sm md:text-base italic font-medium bg-white/80 rounded-lg shadow p-4 border-l-4 border-[#007BFF]">
            “Bluepeg’s expertise and partnership have been instrumental in our
            growth.”
            <span className="block text-xs text-gray-500 mt-2">
              — Industry Leader, Client
            </span>
          </blockquote>
          <blockquote className="text-[#0a225a] text-sm md:text-base italic font-medium bg-white/80 rounded-lg shadow p-4 border-l-4 border-[#007BFF]">
            “Working with Bluepeg has transformed our operations.”
            <span className="block text-xs text-gray-500 mt-2">
              — Operations Manager, Partner
            </span>
          </blockquote>
          <blockquote className="text-[#0a225a] text-sm md:text-base italic font-medium bg-white/80 rounded-lg shadow p-4 border-l-4 border-[#007BFF]">
            “A true partner in every sense. Their support has been invaluable.”
            <span className="block text-xs text-gray-500 mt-2">
              — CEO, Partner Company
            </span>
          </blockquote>
        </div>
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-8 items-center w-max animate-logo-scroll group"
            style={{
              minWidth: '100%',
              whiteSpace: 'nowrap',
              animationPlayState: 'var(--logo-scroll-play, running)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div key={partner.alt + i} className="flex items-center justify-center h-20 w-40 fade-in-logo">
                <div className="bg-white rounded-lg flex items-center justify-center w-full h-full p-2 border border-gray-100 shadow-md hover:shadow-lg transition">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="max-h-12 w-auto object-contain transition-all duration-300 hover:grayscale"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to action */}
        <div className="w-full flex justify-end mt-8 px-4 md:px-8">
          <a
            href="/partners"
            className="inline-block bg-[#007BFF] text-white font-semibold px-5 py-2 rounded shadow hover:bg-[#005bb5] transition text-sm"
          >
            BECOME A PARTNER
          </a>
        </div>
      </div>
    </section>
  );
}

function ResourceCenter() {
  const resources = [
    {
      title: 'Download: Industrial Operations Guide',
      desc: 'Get our comprehensive guide to optimizing your operations for growth and sustainability.',
      type: 'Download',
      link: '/resource-center/operations-guide',
      img: '/file.svg',
      featured: true,
    },
    {
      title: 'Article: Maximizing Plant Uptime',
      desc: 'Best practices and strategies to keep your plant running efficiently and avoid costly downtime.',
      type: 'Article',
      link: '/resource-center/maximizing-plant-uptime',
      img: '/hero-industrial.jpg',
      featured: false,
    },
    {
      title: 'Article: Building a Future-Ready Workforce',
      desc: 'How to upskill your team and prepare for the next wave of industrial innovation.',
      type: 'Article',
      link: '/resource-center/future-ready-workforce',
      img: '/workers.jpg',
      featured: false,
    },
  ];
  return (
    <section className="w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#e3f0ff] py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#007BFF] text-left mb-1 uppercase tracking-wide px-4 md:px-8">
          Resource Center
        </h2>
        <p className="text-base text-gray-500 text-left mb-4 italic px-4 md:px-8">
          Insights, guides, and updates to help you stay ahead in your industry.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4">
          {resources.map((res, idx) => (
            <a
              key={res.title}
              href={res.link}
              className={`group bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col overflow-hidden hover:shadow-lg transition relative ${
                res.featured ? 'scale-105 z-10' : ''
              }`}
            >
              <div className="h-32 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={res.img}
                  alt={res.title}
                  width={400}
                  height={128}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs text-[#007BFF] font-semibold uppercase mb-1">
                  {res.type}
                </span>
                <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-[#007BFF] transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2 flex-1">
                  {res.desc}
                </p>
                <span className="inline-block mt-auto text-xs text-[#007BFF] font-medium group-hover:underline">
                  Learn More →
                </span>
                {res.featured && (
                  <span className="absolute top-3 right-3 bg-[#007BFF] text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow">
                    Featured
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-end px-4 md:px-8">
          <a
            href="/resource-center"
            className="inline-block bg-[#007BFF] text-white font-semibold px-5 py-2 rounded shadow hover:bg-[#005bb5] transition text-sm"
          >
            VIEW ALL RESOURCES
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  // Example FAQ data
  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We aim to respond to all inquiries within 1 business day.",
    },
    {
      question: "Where is your office located?",
      answer: "33 Oyinkan Abayomi Drive, Ikoyi, Lagos, Nigeria.",
    },
    {
      question: "What services do you offer?",
      answer: "We provide industrial automation, control, and engineering solutions tailored to your needs.",
    },
  ];
  return (
    <section
      className="w-full py-6 md:py-8 border-b border-gray-100 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/workers.jpg)' }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-2 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#007BFF] text-left mb-2 uppercase tracking-wide px-4 md:px-8">
          Contact Us
        </h2>
        <p className="text-base text-gray-500 text-left mb-6 italic px-4 md:px-8">
          We’d love to hear from you. Reach out and our team will respond
          promptly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {/* Message Box (Left) */}
          <div className="flex flex-col gap-3 justify-center h-full">
            <form className="bg-gray-50 rounded-xl shadow-md border border-gray-100 p-3 flex flex-col gap-2 h-full text-gray-700">
              <input
                type="text"
                placeholder="Your Name"
                className="px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-xs bg-gray-100 placeholder-gray-400 text-gray-700"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-xs bg-gray-100 placeholder-gray-400 text-gray-700"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="px-2 py-1 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-xs resize-none bg-gray-100 placeholder-gray-400 text-gray-700"
                required
              />
              <button
                type="submit"
                className="bg-[#007BFF] text-white font-semibold px-3 py-1 rounded hover:bg-[#005bb5] transition text-xs"
              >
                Send
              </button>
            </form>
          </div>
          {/* Address & Email (Middle) */}
          <div className="flex flex-col gap-3 justify-center h-full">
            <div className="bg-white/80 rounded-xl shadow border border-gray-100 p-3 flex flex-col justify-center h-full">
              <h4 className="text-xs font-bold text-[#007BFF] mb-1">
                Our Office
              </h4>
              <p className="text-xs text-gray-700 mb-1">
                33 Oyinkan Abayomi Drive,
                <br />
                Ikoyi, Lagos, Nigeria
              </p>
              <h4 className="text-xs font-bold text-[#007BFF] mb-1">Email</h4>
              <a
                href="mailto:info@bluepeg.com"
                className="text-xs text-[#007BFF] hover:underline block mb-1"
              >
                info@bluepeg.com
              </a>
              <h4 className="text-xs font-bold text-[#007BFF] mb-1">Phone</h4>
              <a
                href="tel:+2348000000000"
                className="text-xs text-[#007BFF] hover:underline block"
              >
                +234 800 000 0000
              </a>
            </div>
          </div>
          {/* FAQ Section (Right) */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-base md:text-lg font-bold text-[#007BFF] mb-2">
              FAQ
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <details key={idx} className="bg-white/80 rounded-lg shadow p-2 group">
                  <summary className="font-semibold text-[#007BFF] cursor-pointer outline-none group-open:text-blue-900 transition-all text-xs">
                    {faq.question}
                  </summary>
                  <p className="text-xs text-gray-700 mt-1 pl-2">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
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
              <a
                href="/about"
                className="hover:underline text-blue-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/about#journey"
                className="hover:underline text-blue-200"
              >
                A Journey of Growth
              </a>
            </li>
            <li>
              <a
                href="/partners"
                className="hover:underline text-blue-200"
              >
                Our Partners
              </a>
            </li>
            <li>
              <a
                href="/resource-center"
                className="hover:underline text-blue-200"
              >
                Resource Center
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline text-blue-200"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline text-blue-200"
              >
                FAQ
              </a>
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
              <a
                href="/solutions#instrumentation"
                className="hover:underline text-blue-200"
              >
                Instrumentation & Control
              </a>
            </li>
            <li>
              <a
                href="/solutions#automation"
                className="hover:underline text-blue-200"
              >
                Automation Solutions
              </a>
            </li>
            <li>
              <a
                href="/solutions#panel"
                className="hover:underline text-blue-200"
              >
                Panel Solutions
              </a>
            </li>
            <li>
              <a
                href="/solutions#power"
                className="hover:underline text-blue-200"
              >
                Power and Drive Solutions
              </a>
            </li>
            <li>
              <a
                href="/solutions#electrical"
                className="hover:underline text-blue-200"
              >
                Electrical Solutions
              </a>
            </li>
            <li>
              <a
                href="/solutions#manpower"
                className="hover:underline text-blue-200"
              >
                Manpower Development
              </a>
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
            Phone:{" "}
            <a
              href="tel:+2348000000000"
              className="hover:underline text-blue-200"
            >
              +234 800 000 0000
            </a>
          </p>
          <p className="text-sm text-blue-100">
            Email:{" "}
            <a
              href="mailto:info@bluepeg.com"
              className="hover:underline text-blue-200"
            >
              info@bluepeg.com
            </a>
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="text-white hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M16.5 3A2.5 2.5 0 0 1 19 5.5v9A2.5 2.5 0 0 1 16.5 17h-13A2.5 2.5 0 0 1 1 14.5v-9A2.5 2.5 0 0 1 3.5 3h13zm-9.75 12V8.75H4.25V15h2.5zm-1.25-7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm10 7.25v-3.25c0-1.1-.9-2-2-2s-2 .9-2 2V15h2.5v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V15h2.5z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-blue-300"
              aria-label="Twitter"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.316 6.246c.008.176.008.353.008.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.037.64.053.97.053 1.92 0 3.69-.653 5.1-1.75a4.09 4.09 0 0 1-3.82-2.84c.25.04.5.07.77.07.36 0 .71-.05 1.04-.14a4.09 4.09 0 0 1-3.28-4.01v-.05c.55.3 1.18.48 1.85.5a4.08 4.08 0 0 1-1.82-3.4c0-.75.2-1.45.54-2.05a11.6 11.6 0 0 0 8.42 4.27c-.07-.3-.1-.61-.1-.93a4.09 4.09 0 0 1 7.08-3.73 8.18 8.18 0 0 0 2.59-.99 4.08 4.08 0 0 1-1.8 2.25 8.18 8.18 0 0 0 2.35-.64 8.7 8.7 0 0 1-2.05 2.12z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-blue-300"
              aria-label="YouTube"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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

export default function About() {
  return (
    <main className="min-h-screen w-full bg-[#007BFF] flex flex-col items-stretch">
      <AboutHero />
      <MissionVisionValues />
      <OurStory />
      <MeetTheTeam />
      <WhatWeDo />
      <OurPartners />
      <ResourceCenter />
      <ContactUs />
      <Footer />
    </main>
  );
}

/* Add to globals.css:
@keyframes logo-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-logo-scroll {
  animation: logo-scroll 40s linear infinite;
  animation-play-state: var(--logo-scroll-play, running);
}
.fade-in-logo {
  opacity: 0;
  animation: fadeInLogo 1s ease forwards;
}
@keyframes fadeInLogo {
  to { opacity: 1; }
}
*/
