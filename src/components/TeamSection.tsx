"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function MeetTheTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById("team-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const staff = [
    {
      name: "James Amoo",
      title: "CEO",
      img: "/JamesAmoo.jpg",
      desc: "Leads the company's strategic vision and operations, driving growth and innovation across all business areas.",
      expertise: ["Strategic Leadership", "Business Development", "Operations Excellence"],
      experience: "8+ Years"
    },
    {
      name: "Tobiloba Ayomide",
      title: "Tech Lead",
      img: "/TobilobaAyomide.jpg",
      desc: "Drives innovation, leads systems development, and implements cutting-edge technology solutions.",
      expertise: ["System Architecture", "Innovation", "Technical Strategy"],
      experience: "10+ Years"
    },
    {
      name: "Tunde Balogun",
      title: "Client Relations Manager",
      img: "/peugeot.jpg",
      desc: "Manages client onboarding and long-term support, building strong, lasting partnerships.",
      expertise: ["Client Success", "Business Development", "Relationship Management"],
      experience: "6+ Years"
    },
  ];

  return (
    <section 
      id="team-section"
      className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#007BFF]/5 rounded-full blur-3xl translate-x-40 -translate-y-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -translate-x-48 translate-y-48" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header with Badge */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center gap-2 bg-[#007BFF]/10 border border-[#007BFF]/20 rounded-full px-4 py-2 mb-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-[#007BFF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#007BFF]">
              Leadership Excellence
            </span>
          </div>
          
          <h2 className={`text-2xl font-extrabold text-[#007BFF] mb-2 tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            MEET OUR LEADERSHIP TEAM
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Experienced professionals driving innovation and excellence in industrial solutions
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((person, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveCard(idx)}
              className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeCard === idx ? "scale-105 bg-white/90" : ""
              } ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#007BFF]">
                  <defs>
                    <pattern id={`team-pattern-${idx}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="2" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#team-pattern-${idx})`} />
                </svg>
              </div>

              {/* Profile Section */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#007BFF]/20 group-hover:border-[#007BFF] transition-colors duration-300 shadow-lg">
                    <Image
                      src={person.img}
                      alt={person.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  {/* Experience badge */}
                  <div className="absolute -bottom-1 -right-1 bg-[#007BFF] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {person.experience}
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-lg font-bold text-[#007BFF] mb-1 text-center group-hover:text-[#005bb5] transition-colors">
                  {person.name}
                </h3>
                <span className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide text-center">
                  {person.title}
                </span>

                {/* Description */}
                <p className="text-xs text-gray-600 text-center leading-relaxed mb-4">
                  {person.desc}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {person.expertise.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="bg-[#007BFF]/10 text-[#007BFF] px-2 py-1 rounded-full text-xs font-medium group-hover:bg-[#007BFF]/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Connect Button */}
                <button className="w-full bg-gradient-to-r from-[#007BFF] to-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:from-[#005bb5] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mb-3">
                  <span className="flex items-center justify-center gap-1">
                    Connect
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                {/* Hover indicator */}
                <div className={`w-full h-1 bg-[#007BFF]/20 rounded-full overflow-hidden transition-all duration-300 ${
                  activeCard === idx ? "bg-[#007BFF]/40" : ""
                }`}>
                  <div className={`h-full bg-[#007BFF] rounded-full transition-all duration-500 ${
                    activeCard === idx ? "w-full" : "w-0"
                  }`} />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-8 text-center bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-2xl p-6 text-white">
          <h3 className="text-lg font-bold mb-2">Join Our Growing Team</h3>
          <p className="text-blue-100 mb-4 text-sm">
            We're always looking for talented individuals who share our passion for excellence
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-white text-[#007BFF] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-sm"
          >
            Join Our Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
