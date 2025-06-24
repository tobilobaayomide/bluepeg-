import Image from "next/image";
import { poppins } from "../fonts";

export default function Hero() {
  return (
    <section className="bg-white text-[#121212] py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col justify-start md:items-start items-center text-left md:text-left text-center md:mt-4 mt-0">
          <h1
            className={`text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-gray-700 md:text-left text-center ${poppins.variable} font-sans`}
          >
            End-to-End Engineering Solutions for Critical Industrial Operations
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-xl text-[#121212] md:text-left text-center">
            We deliver mission-critical engineering services, from sourcing
            industrial components to full system integration — all tailored to
            minimize downtime and maximize plant performance.
          </p>
          <a
            href="/solutions"
            className="inline-block bg-[#007BFF] text-white font-bold px-8 py-4 rounded shadow hover:bg-[#0056b3] transition md:self-start self-center"
          >
            Learn About Our Services
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/hero-industrial.jpg"
            alt="Industrial engineering"
            width={480}
            height={360}
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
