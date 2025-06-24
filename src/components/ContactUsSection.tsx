import React from "react";

const ContactUsSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f8fafc] via-white to-[#e3f0ff] py-14 border-b border-gray-100 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#60a5fa]/10 rounded-full blur-2xl z-0" />
      <div className="relative z-10 max-w-3xl mx-auto px-2 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#007BFF] text-left mb-2 uppercase tracking-wide px-4 md:px-8">
          Contact Us
        </h2>
        <p className="text-base text-gray-500 text-left mb-6 italic px-4 md:px-8">
          Reach out to Bluepeg for inquiries, partnerships, or support. We look forward to connecting with you.
        </p>
        <div className="w-full border-b border-gray-200 mb-8" />
        <form className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 border border-gray-100 max-w-xl mx-auto">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-sm text-[#0a225a]">Name</label>
            <input type="text" id="name" name="name" className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-sm text-[#0a225a]">Email</label>
            <input type="email" id="email" name="email" className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold text-sm text-[#0a225a]">Message</label>
            <textarea id="message" name="message" rows={4} className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007BFF]" required />
          </div>
          <button type="submit" className="bg-[#007BFF] text-white font-semibold px-5 py-2 rounded shadow hover:bg-[#005bb5] transition text-sm mt-2">
            Send Message
          </button>
        </form>
        <div className="mt-10 px-4 md:px-8 text-sm text-gray-600">
          <p><span className="font-semibold text-[#0a225a]">Address:</span> 33 Oyinkan Abayomi Drive, Ikoyi, Lagos, Nigeria</p>
          <p><span className="font-semibold text-[#0a225a]">Phone:</span> <a href="tel:+2348000000000" className="hover:underline text-[#007BFF]">+234 800 000 0000</a></p>
          <p><span className="font-semibold text-[#0a225a]">Email:</span> <a href="mailto:info@bluepeg.com" className="hover:underline text-[#007BFF]">info@bluepeg.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
