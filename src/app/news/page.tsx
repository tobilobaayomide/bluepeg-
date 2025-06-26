import CompanyNews from "@/components/CompanyNewsSection";
import Footer from "@/components/Footer";

export default function NewsPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <div className="pt-16">
        <CompanyNews />
      </div>
      <Footer />
    </main>
  );
}
