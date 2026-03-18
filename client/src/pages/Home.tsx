/* =============================================================
   HOME PAGE — Infinity Bloom Co.
   Design: Deep Ocean Tech — dark navy, teal/cyan accents, Syne + DM Sans
   Sections: Navbar, Hero, Services, Solutions, About, WhyUs, Contact, Footer
   ============================================================= */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TickerSection from "@/components/TickerSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050E1F]">
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
