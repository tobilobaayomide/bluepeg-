import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
// import OurPartners from "../../components/OurPartners";
// import ResourceCenter from "../../components/ResourceCenter";
import ContactUsSection from "../../components/ContactUsSection";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <Hero />
      <AboutSection />
      {/* <OurPartners />
      <ResourceCenter /> */}
      <ContactUsSection />
      <Footer />
    </main>
  );
}
