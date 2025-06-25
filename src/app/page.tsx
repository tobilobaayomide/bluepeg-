import Hero from "../components/Hero";

import Image from "next/image";
import WhoWeAre from "@/components/WhoWeAreSection";
import MissionVisionValues from "@/components/MissionVisionValuesSection";
import OurStory from "@/components/OurStorySection";
import MeetTheTeam from "@/components/TeamSection";
import WhatWeDo from "@/components/WhatWeDoSection";
import OurPartners from "@/components/OurPartnersSection";
import ResourceCenter from "@/components/ResourceCenterSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MissionVisionValues />
      <OurStory />
      <MeetTheTeam />
      <WhatWeDo />
      <OurPartners />
      <ResourceCenter />
      <ContactUsSection />
      <Footer />
    </>
  );
}
