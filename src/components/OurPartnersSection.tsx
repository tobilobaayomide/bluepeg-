"use client";

export default function OurPartners() {
  // Example partner logos from public/ (duplicated for a fuller grid)
  const partners = [
    { src: "/peugeot.jpg", alt: "Peugeot" },
    { src: "/totalenergies.jpg", alt: "TotalEnergies" },
    { src: "/dardanel.jpg", alt: "Dardanel" },
    { src: "/chefmdjazs.jpg", alt: "ChefMDJazs" },
    { src: "/window.svg", alt: "Window" },
    { src: "/file.svg", alt: "File" },
    { src: "/globe.svg", alt: "Globe" },
    { src: "/peugeot.jpg", alt: "Peugeot" },
    { src: "/totalenergies.jpg", alt: "TotalEnergies" },
    { src: "/dardanel.jpg", alt: "Dardanel" },
    { src: "/chefmdjazs.jpg", alt: "ChefMDJazs" },
    { src: "/window.svg", alt: "Window" },
    { src: "/file.svg", alt: "File" },
    { src: "/globe.svg", alt: "Globe" },
  ];
  // Pause animation on hover
  const handleMouseEnter = () => {
    document.documentElement.style.setProperty("--logo-scroll-play", "paused");
  };
  const handleMouseLeave = () => {
    document.documentElement.style.setProperty("--logo-scroll-play", "running");
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
              minWidth: "100%",
              whiteSpace: "nowrap",
              animationPlayState: "var(--logo-scroll-play, running)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={partner.alt + i}
                className="flex items-center justify-center h-20 w-40 fade-in-logo"
              >
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
