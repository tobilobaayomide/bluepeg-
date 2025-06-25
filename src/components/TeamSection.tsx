import Image from "next/image";

export default function MeetTheTeam() {
  // Example staff data; replace with real names/photos if available
  const staff = [
    {
      name: "Adebayo Johnson",
      title: "Operations Lead",
      img: "/workers.jpg", // Replace with real photo if available
      desc: "Oversees all logistics and field operations, ensuring seamless project delivery and on-site excellence.",
    },
    {
      name: "Chinwe Okafor",
      title: "Tech Lead",
      img: "/hero-industrial.jpg", // Replace with real photo if available
      desc: "Drives innovation, leads systems development, and implements cutting-edge technology solutions.",
    },
    {
      name: "Tunde Balogun",
      title: "Client Relations Manager",
      img: "/peugeot.jpg", // Replace with real photo if available
      desc: "Manages client onboarding and long-term support, building strong, lasting partnerships.",
    },
  ];
  return (
    <section className="w-full bg-[#007BFF] py-8">
      <div className="max-w-4xl mx-auto px-2 md:px-0">
        <h2 className="text-2xl font-extrabold text-white mb-8 text-center tracking-tight">
          MEET OUR LEADERSHIP TEAM
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((person, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-lg shadow p-5"
            >
              <Image
                src={person.img}
                alt={person.name}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-full border-4 border-[#007BFF] mb-3 shadow-md"
                loading="lazy"
              />
              <h3 className="text-lg font-bold mb-1 text-[#007BFF]">
                {person.name}
              </h3>
              <span className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                {person.title}
              </span>
              <p className="text-xs text-[#007BFF] text-center">
                {person.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
