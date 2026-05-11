import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ServicePromise from "@/components/ServicePromise";
import ContactFormSection from "@/components/ContactFormSection";
import ContactFooter from "@/components/ContactFooter";
import ComplianceFAQSection from "@/components/ComplianceFAQSection";
import CareersSection from "@/components/CareersSection";
export default function Home() {
  return (
   <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ServicePromise />
      <CareersSection />
      <ComplianceFAQSection />
      <ContactFormSection />
      <ContactFooter />
    </div>
  );
}
