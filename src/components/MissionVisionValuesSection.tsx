export default function MissionVisionValues() {
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
              solutions, empowering businesses through technology and
              efficiency.
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
