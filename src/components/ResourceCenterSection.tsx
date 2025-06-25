import Image from "next/image";
export default function ResourceCenter() {
  const resources = [
    {
      title: "Download: Industrial Operations Guide",
      desc: "Get our comprehensive guide to optimizing your operations for growth and sustainability.",
      type: "Download",
      link: "/resource-center/operations-guide",
      img: "/file.svg",
      featured: true,
    },
    {
      title: "Article: Maximizing Plant Uptime",
      desc: "Best practices and strategies to keep your plant running efficiently and avoid costly downtime.",
      type: "Article",
      link: "/resource-center/maximizing-plant-uptime",
      img: "/hero-industrial.jpg",
      featured: false,
    },
    {
      title: "Article: Building a Future-Ready Workforce",
      desc: "How to upskill your team and prepare for the next wave of industrial innovation.",
      type: "Article",
      link: "/resource-center/future-ready-workforce",
      img: "/workers.jpg",
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
                res.featured ? "scale-105 z-10" : ""
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
                <p className="text-xs text-gray-500 mb-2 flex-1">{res.desc}</p>
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
