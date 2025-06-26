import MissionVisionValues from "@/components/MissionVisionValuesSection";
import OurStory from "@/components/OurStorySection";
import MeetTheTeam from "@/components/TeamSection";
import WhoWeAre from "@/components/WhoWeAreSection";
import ClientSuccess from "@/components/ClientSuccessSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Bluepeg | Industrial Operations Excellence",
  description: "Learn about Bluepeg's mission, vision, and values. Meet our expert team driving innovation in industrial automation and engineering solutions across Nigeria.",
  keywords: "about bluepeg, industrial team, engineering experts, automation specialists, Nigeria industrial operations",
};

export default function About() {
  return (
    <main className="min-h-screen w-full bg-[#007BFF] flex flex-col items-stretch">
      <WhoWeAre />
      <div id="mission">
        <MissionVisionValues />
      </div>
      <ClientSuccess />
      <div id="story">
        <OurStory />
      </div>
      <div id="team">
        <MeetTheTeam />
      </div>
      <Footer />
    </main>
  );
}

/* Add to globals.css:
@keyframes logo-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-logo-scroll {
  animation: logo-scroll 40s linear infinite;
  animation-play-state: var(--logo-scroll-play, running);
}
.fade-in-logo {
  opacity: 0;
  animation: fadeInLogo 1s ease forwards;
}
@keyframes fadeInLogo {
  to { opacity: 1; }
}
*/
