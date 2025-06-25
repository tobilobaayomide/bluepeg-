export default function WhatWeDo() {
  // Use the same image for all solution boxes
  const powerDriveImg = "/hero-industrial.jpg";
  const solutions = [
    {
      title: "Instrumentation & Control",
      desc: "Precision solutions for monitoring and controlling industrial processes.",
      img: powerDriveImg,
    },
    {
      title: "Automation Solutions",
      desc: "Smart automation to boost efficiency, safety, and productivity.",
      img: powerDriveImg,
    },
    {
      title: "Panel Solutions",
      desc: "Custom-built panels for seamless integration and control.",
      img: powerDriveImg,
    },
    {
      title: "Power & Drive Solutions",
      desc: "Reliable power and drive systems for uninterrupted operations.",
      img: powerDriveImg,
    },
    {
      title: "Electrical Solutions",
      desc: "Comprehensive electrical services for safe, efficient systems.",
      img: powerDriveImg,
    },
    {
      title: "Manpower Development",
      desc: "Training and upskilling for a future-ready workforce.",
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
          solutions tailored to the needs of modern industry. Our expertise
          covers a wide range of services designed to empower your business and
          drive operational excellence.
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
              reliable instrumentation and control systems tailored to your
              unique requirements.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">
                →
              </span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Automation Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              Our smart automation services boost efficiency, safety, and
              productivity. We design, implement, and support automation systems
              that streamline operations, reduce downtime, and enable
              data-driven decision-making for your business.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">
                →
              </span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Panel Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              We deliver custom-built panels for seamless integration and
              control. Our solutions are engineered for reliability,
              scalability, and ease of maintenance, supporting a wide range of
              industrial applications and environments.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">
                →
              </span>
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-6 min-h-[220px] hover:shadow-md transition group">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-[#007BFF]">
              Power & Drive Solutions
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-1">
              We provide reliable power and drive systems for uninterrupted
              operations. Our expertise covers design, installation, and
              maintenance of power solutions that ensure efficiency, safety, and
              long-term value for your business.
            </p>
            <a
              href="/solutions"
              className="text-sm text-[#007BFF] font-medium inline-flex items-center gap-1 hover:underline mt-auto"
            >
              Read More{" "}
              <span aria-hidden className="text-base">
                →
              </span>
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
              <span aria-hidden className="text-base">
                →
              </span>
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
              <span aria-hidden className="text-base">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
