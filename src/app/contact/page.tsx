import Image from "next/image";
import Footer from "@/components/Footer";

function ContactUsSection() {
  return (
    <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center py-8 md:py-10 relative" style={{ backgroundImage: 'url("/workers.jpg")' }}>
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-2 md:px-4">
        <div className="mb-4">
          <h2 className="text-lg md:text-xl font-bold text-[#007BFF] text-left mb-1 uppercase tracking-wide px-2 md:px-4">
            Contact Us
          </h2>
          <p className="text-sm text-gray-500 text-left mb-4 italic px-2 md:px-4">
            We'd love to hear from you. Reach out for inquiries, partnerships, or support.
          </p>
          <div className="w-full border-b border-gray-200 mb-6" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-4">
          {/* Message Box */}
          <div className="flex-1 bg-white rounded-lg shadow p-4 border border-gray-100 flex flex-col justify-between min-w-0 max-w-sm mx-auto md:mx-0">
            <h3 className="text-base font-bold text-[#007BFF] mb-3">Send Us a Message</h3>
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Your Name" className="border border-gray-200 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-gray-700 placeholder-gray-400 text-sm" required />
              <input type="email" placeholder="Your Email" className="border border-gray-200 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-gray-700 placeholder-gray-400 text-sm" required />
              <textarea placeholder="Your Message" rows={3} className="border border-gray-200 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#007BFF] text-gray-700 placeholder-gray-400 text-sm" required />
              <button type="submit" className="bg-[#007BFF] text-white font-semibold px-4 py-1.5 rounded shadow hover:bg-[#005bb5] transition text-xs mt-1">Send Message</button>
            </form>
          </div>
          {/* Our Office Box */}
          <div className="flex-1 bg-white rounded-lg shadow p-4 border border-gray-100 flex flex-col justify-between min-w-0 max-w-sm mx-auto md:mx-0">
            <h3 className="text-base font-bold text-[#007BFF] mb-3">Our Office</h3>
            <div className="text-gray-700 text-sm mb-3">
              <p className="mb-1"><span className="font-semibold">Address:</span> 33 Oyinkan Abayomi Drive, Ikoyi, Lagos, Nigeria</p>
              <p className="mb-1"><span className="font-semibold">Phone:</span> <a href="tel:+2348000000000" className="hover:underline text-[#007BFF]">+234 800 000 0000</a></p>
              <p><span className="font-semibold">Email:</span> <a href="mailto:info@bluepeg.com" className="hover:underline text-[#007BFF]">info@bluepeg.com</a></p>
            </div>
            <div className="flex gap-3 mt-1">
              <a href="#" className="text-[#007BFF] hover:text-blue-700" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M16.5 3A2.5 2.5 0 0 1 19 5.5v9A2.5 2.5 0 0 1 16.5 17h-13A2.5 2.5 0 0 1 1 14.5v-9A2.5 2.5 0 0 1 3.5 3h13zm-9.75 12V8.75H4.25V15h2.5zm-1.25-7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm10 7.25v-3.25c0-1.1-.9-2-2-2s-2 .9-2 2V15h2.5v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V15h2.5z" /></svg>
              </a>
              <a href="#" className="hover:text-blue-700" aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17.316 6.246c.008.176.008.353.008.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.453-.676-6.26-1.84.32.037.64.053.97.053 1.92 0 3.69-.653 5.1-1.75a4.09 4.09 0 0 1-3.82-2.84c.25.04.5.07.77.07.36 0 .71-.05 1.04-.14a4.09 4.09 0 0 1-3.28-4.01v-.05c.55.3 1.18.48 1.85.5a4.08 4.08 0 0 1-1.82-3.4c0-.75.2-1.45.54-2.05a11.6 11.6 0 0 0 8.42 4.27c-.07-.3-.1-.61-.1-.93a4.09 4.09 0 0 1 7.08-3.73 8.18 8.18 0 0 0 2.59-.99 4.08 4.08 0 0 1-1.8 2.25 8.18 8.18 0 0 0 2.35-.64 8.7 8.7 0 0 1-2.05 2.12z" /></svg>
              </a>
              <a href="#" className="hover:text-blue-700" aria-label="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.333c-2.667 0-8 .333-8 2.667v7.333c0 2.334 5.333 2.667 8 2.667s8-.333 8-2.667V6c0-2.334-5.333-2.667-8-2.667zm-2 8.334V8.333l5.333 1.667L8 11.667z" /></svg>
              </a>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mt-8">
          <h3 className="text-base font-bold text-[#007BFF] mb-4 text-left px-2 md:px-4">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <h4 className="font-semibold text-[#0a225a] mb-1 text-sm">How Can I Contact Bluepeg For Support?</h4>
              <p className="text-gray-700 text-sm">You can use the message form above, email us at <a href="mailto:info@bluepeg.com" className="text-[#007BFF] hover:underline">info@bluepeg.com</a>, or call us at +234 800 000 0000.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <h4 className="font-semibold text-[#0a225a] mb-1 text-sm">Where Is Your Office Located?</h4>
              <p className="text-gray-700 text-sm">Our office is at 33 Oyinkan Abayomi Drive, Ikoyi, Lagos, Nigeria. You are welcome to visit during business hours.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <h4 className="font-semibold text-[#0a225a] mb-1 text-sm">What Services Does Bluepeg Offer?</h4>
              <p className="text-gray-700 text-sm">We offer industrial automation, instrumentation & control, panel solutions, power and drive solutions, electrical solutions, and manpower development.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
              <h4 className="font-semibold text-[#0a225a] mb-1 text-sm">How Soon Will I Get A Response?</h4>
              <p className="text-gray-700 text-sm">We aim to respond to all inquiries within 1-2 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <ContactUsSection />
      <Footer />
    </main>
  );
}
