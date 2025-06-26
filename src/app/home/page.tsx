import Hero from "../../components/Hero";
import ContactUsSection from "../../components/ContactUsSection";
import Footer from "../../components/Footer";
import WhoWeAre from "@/components/WhoWeAreSection";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <Hero />
      <WhoWeAre />
      <ContactUsSection />
      <Footer />
    </main>
  );
}
