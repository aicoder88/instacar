import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PricingCalculator from "@/components/PricingCalculator";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <PricingCalculator />
      <BeforeAfter />
      <Testimonials />
      <Locations />
      <ContactSection />
    </main>
  );
}
