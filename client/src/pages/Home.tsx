/* =============================================================
   HOME — Quiet Authority Design
   Single-page layout: Hero → Ticker → Services → Solutions →
   Process → About → WhyUs → Contact → Footer
   ============================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B]">
      <Navbar />
      <HeroSection />
      <TickerSection />
      <ServicesSection />
      <SolutionsSection />
      <ProcessSection />
      <AboutSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
