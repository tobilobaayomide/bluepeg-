export default function OurStory() {
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
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">
                    '22
                  </span>
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
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">
                    '23
                  </span>
                </div>
                <div className="w-1 h-4 bg-[#60a5fa] rounded-full my-1" />
              </div>
              <div className="text-xs text-gray-800 font-semibold bg-white/80 px-2 py-1 rounded-lg shadow group-hover:bg-[#e3f0ff] transition-colors duration-300">
                First major automation project delivered, earning industry
                trust.
              </div>
            </div>
            <div className="flex items-center gap-3 group w-full max-w-xs mx-auto md:mx-0">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#007BFF] to-[#60a5fa] flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">
                    '24
                  </span>
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
                  <span className="text-white text-base font-extrabold tracking-widest drop-shadow-md">
                    '25
                  </span>
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
