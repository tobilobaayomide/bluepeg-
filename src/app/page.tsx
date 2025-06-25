import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Image from "next/image";
import WhoWeAre from "@/components/WhoWeAreSection";
import MissionVisionValues from "@/components/MissionVisionValuesSection";
import OurStory from "@/components/OurStorySection";

function ClientTrustSection() {
  return null;
}

function WhyChooseUsStatsBar() {
  return null;
}

function ServicesSection() {
  return null;
}

function PartnersSection() {
  return null;
}

function FeaturedSection() {
  return null;
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MissionVisionValues />
      <OurStory />
      <ClientTrustSection />
      <WhyChooseUsStatsBar />
      <ServicesSection />
      <PartnersSection />
      <FeaturedSection />
    </>
  );
}
