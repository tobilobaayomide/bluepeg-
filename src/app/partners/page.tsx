import Image from "next/image";

function OurPartners() {
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
  return (
    <section className="w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#e3f0ff] py-14 border-b border-gray-100 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#60a5fa]/10 rounded-full blur-2xl z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#007BFF] text-left mb-2 uppercase tracking-wide px-4 md:px-8">
          Our Partners
        </h2>
        <p className="text-base text-gray-500 text-left mb-6 italic px-4 md:px-8">
          We are proud to collaborate with industry-leading partners to deliver exceptional value and innovation.
        </p>
        <div className="w-full border-b border-gray-200 mb-8" />
        <div className="mb-8 px-4 md:px-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <blockquote className="text-[#0a225a] text-sm md:text-base italic font-medium bg-white/80 rounded-lg shadow p-4 border-l-4 border-[#007BFF]">
            “Bluepeg’s expertise and partnership have been instrumental in our growth.”
            <span className="block text-xs text-gray-500 mt-2">— Industry Leader, Client</span>
          </blockquote>
          <blockquote className="text-[#0a225a] text-sm md:text-base italic font-medium bg-white/80 rounded-lg shadow p-4 border-l-4 border-[#007BFF]">
            “Working with Bluepeg has transformed our operations.”
            <span className="block text-xs text-gray-500 mt-2">— Operations Manager, Partner</span>
          </blockquote>
          <blockquote className="text-[#0a225a] text-sm md:text-base italic font-medium bg-white/80 rounded-lg shadow p-4 border-l-4 border-[#007BFF]">
            “A true partner in every sense. Their support has been invaluable.”
            <span className="block text-xs text-gray-500 mt-2">— CEO, Partner Company</span>
          </blockquote>
        </div>
        <div className="overflow-hidden w-full">
          <div className="flex gap-8 items-center w-max animate-logo-scroll group" style={{ minWidth: '100%', whiteSpace: 'nowrap', animationPlayState: 'var(--logo-scroll-play, running)' }}>
            {[...partners, ...partners].map((partner, i) => (
              <div key={partner.alt + i} className="flex items-center justify-center h-20 w-40 fade-in-logo">
                <div className="bg-white rounded-lg flex items-center justify-center w-full h-full p-2 border border-gray-100 shadow-md hover:shadow-lg transition">
                  <img src={partner.src} alt={partner.alt} className="max-h-12 w-auto object-contain transition-all duration-300 hover:grayscale" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end mt-8 px-4 md:px-8">
          <a href="/partners" className="inline-block bg-[#007BFF] text-white font-semibold px-5 py-2 rounded shadow hover:bg-[#005bb5] transition text-sm">
            BECOME A PARTNER
          </a>
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
            Bluepeg is a people-first industrial operations company, dedicated to driving innovation and sustainable growth across Nigeria.
          </p>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/4 flex flex-col gap-2">
          <h4 className="font-bold text-base mb-2 text-white uppercase tracking-wider">Company</h4>
          <ul className="flex flex-col gap-1 text-sm">
            <li><a href="/about" className="hover:underline text-blue-200">About Us</a></li>
            <li><a href="/about#journey" className="hover:underline text-blue-200">A Journey of Growth</a></li>
            <li><a href="/partners" className="hover:underline text-blue-200">Our Partners</a></li>
            <li><a href="/resource-center" className="hover:underline text-blue-200">Resource Center</a></li>
            <li><a href="/contact" className="hover:underline text-blue-200">Contact Us</a></li>
            <li><a href="/contact" className="hover:underline text-blue-200">FAQ</a></li>
          </ul>
        </div>
        {/* What We Do (Services) */}
        <div className="md:w-1/4 flex flex-col gap-2">
          <h4 className="font-bold text-base mb-2 text-white uppercase tracking-wider">What We Do</h4>
          <ul className="flex flex-col gap-1 text-sm">
            <li><a href="/solutions#instrumentation" className="hover:underline text-blue-200">Instrumentation & Control</a></li>
            <li><a href="/solutions#automation" className="hover:underline text-blue-200">Automation Solutions</a></li>
            <li><a href="/solutions#panel" className="hover:underline text-blue-200">Panel Solutions</a></li>
            <li><a href="/solutions#power" className="hover:underline text-blue-200">Power and Drive Solutions</a></li>
            <li><a href="/solutions#electrical" className="hover:underline text-blue-200">Electrical Solutions</a></li>
            <li><a href="/solutions#manpower" className="hover:underline text-blue-200">Manpower Development</a></li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div className="md:w-1/4 flex flex-col gap-3">
          <h4 className="font-bold text-base mb-2 text-white uppercase tracking-wider">Contact Us</h4>
          <p className="text-sm text-blue-100">33 Oyinkan Abayomi Drive, Ikoyi, Lagos, Nigeria</p>
          <p className="text-sm text-blue-100">Phone: <a href="tel:+2348000000000" className="hover:underline text-blue-200">+234 800 000 0000</a></p>
          <p className="text-sm text-blue-100">Email: <a href="mailto:info@bluepeg.com" className="hover:underline text-blue-200">info@bluepeg.com</a></p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-white hover:text-blue-300" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3A2.5 2.5 0 0 1 19 5.5v9A2.5 2.5 0 0 1 16.5 17h-13A2.5 2.5 0 0 1 1 14.5v-9A2.5 2.5 0 0 1 3.5 3h13zm-9.75 12V8.75H4.25V15h2.5zm-1.25-7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm10 7.25v-3.25c0-1.1-.9-2-2-2s-2 .9-2 2V15h2.5v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V15h2.5z" /></svg>
            </a>
            <a href="#" className="hover:text-blue-300" aria-label="Twitter">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path d="M17.316 6.246c.008.176.008.353.008.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.037.64.053.97.053 1.92 0 3.69-.653 5.1-1.75a4.09 4.09 0 0 1-3.82-2.84c.25.04.5.07.77.07.36 0 .71-.05 1.04-.14a4.09 4.09 0 0 1-3.28-4.01v-.05c.55.3 1.18.48 1.85.5a4.08 4.08 0 0 1-1.82-3.4c0-.75.2-1.45.54-2.05a11.6 11.6 0 0 0 8.42 4.27c-.07-.3-.1-.61-.1-.93a4.09 4.09 0 0 1 7.08-3.73 8.18 8.18 0 0 0 2.59-.99 4.08 4.08 0 0 1-1.8 2.25 8.18 8.18 0 0 0 2.35-.64 8.7 8.7 0 0 1-2.05 2.12z" /></svg>
            </a>
            <a href="#" className="hover:text-blue-300" aria-label="YouTube">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.333c-2.667 0-8 .333-8 2.667v7.333c0 2.334 5.333 2.667 8 2.667s8-.333 8-2.667V6c0-2.334-5.333-2.667-8-2.667zm-2 8.334V8.333l5.333 1.667L8 11.667z" /></svg>
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

export default function Partners() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <OurPartners />
      <Footer />
    </main>
  );
}
