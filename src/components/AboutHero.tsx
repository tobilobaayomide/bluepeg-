function AboutHero() {
  return (
    <section className="relative w-full bg-[#007BFF] py-20 md:py-28 overflow-hidden border-b border-gray-100">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 px-0 md:px-0">
        <div className="flex-1 flex flex-col justify-center md:items-start items-center text-center md:text-left px-4 md:px-16">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 text-white">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-xl">
            Bluepeg is a people-first industrial operations company, dedicated to
            driving innovation and sustainable growth across Nigeria. We believe in
            smart solutions, strong partnerships, and a relentless commitment to
            excellence.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#fff' }}>Ready to take your operations to the next level?</h2>
            <a href="/contact" className="inline-block bg-white text-[#007BFF] font-bold px-8 py-4 rounded shadow hover:bg-[#f1f5f9] transition text-lg">Let’s Work Together →</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center px-4 md:px-16">
          <img
            src="/about-hero.jpg"
            alt="Bluepeg team in action"
            className="rounded-lg shadow-lg object-cover w-full max-w-md h-64 md:h-80 border border-blue-100"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
