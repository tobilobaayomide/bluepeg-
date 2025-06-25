import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative w-full bg-[#007BFF] py-10 md:py-16 overflow-hidden border-b border-gray-100">
      <div className="w-full flex flex-col md:flex-row items-center gap-8 px-0 md:px-0">
        <div className="flex-1 flex justify-center items-center order-2 md:order-1 px-4 md:px-12">
          <Image
            src="/workers.jpg"
            alt="Bluepeg workers in action"
            width={600}
            height={384}
            className="rounded-lg shadow-lg object-cover w-full max-w-xl h-72 md:h-96 border border-blue-100"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-center md:items-end items-center text-center md:text-right order-1 md:order-2 px-4 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 text-white">
            Who We Are
          </h1>
          <p className="text-base text-white mb-6 max-w-xl">
            Bluepeg is a people-first industrial operations company, dedicated
            to driving innovation and sustainable growth across Nigeria. We
            believe in smart solutions, strong partnerships, and a relentless
            commitment to excellence.
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Ready to take your operations to the next level?
            </h2>
            <a
              href="/contact"
              className="inline-block bg-white text-[#007BFF] font-bold px-8 py-4 rounded shadow hover:bg-[#f1f5f9] transition text-base"
            >
              Let’s Work Together →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
