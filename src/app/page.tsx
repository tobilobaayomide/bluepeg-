import Hero from "../components/Hero";
import WhoWeAre from "@/components/WhoWeAreSection";
import MissionVisionValues from "@/components/MissionVisionValuesSection";
import ClientSuccess from "@/components/ClientSuccessSection";
import OurStory from "@/components/OurStorySection";
import MeetTheTeam from "@/components/TeamSection";
import WhatWeDo from "@/components/WhatWeDoSection";
import InnovationLab from "@/components/InnovationLabSection";
import ResourceCenter from "@/components/ResourceCenterSection";
import CompanyNews from "@/components/CompanyNewsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <MissionVisionValues />
      <ClientSuccess />
      <OurStory />
      <MeetTheTeam />
      <WhatWeDo />
      <InnovationLab />
      <ResourceCenter />
      <div id="company-news">
        <CompanyNews />
      </div>
      <ContactUsSection />
      <Footer />
    </>
  );
}
