import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicePackages from "./ServicePackages";
import BeforeAfterGallery from "./BeforeAfterGallery";
import BookingSystem from "./BookingSystem";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-16">
          <HeroSection
            onCtaClick={() => {
              const bookingSection = document.getElementById("booking");
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
        </section>

        {/* Service Packages */}
        <section id="services" className="py-10">
          <ServicePackages />
        </section>

        {/* Before/After Gallery */}
        <section id="gallery" className="py-10">
          <BeforeAfterGallery />
        </section>

        {/* Booking System */}
        <section
          id="booking"
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                Book Your Detailing Service
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Schedule your car detailing appointment in just a few simple
                steps. We'll come to your building's parking garage at your
                convenience.
              </p>
            </div>
            <BookingSystem
              onBookingComplete={(formData) => {
                console.log("Booking completed:", formData);
                // Here you would typically send the data to your backend
              }}
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-500">
                About Insta Car Spa
              </h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Founded in 2018, Insta Car Spa has revolutionized the car
                  detailing experience in Montreal by bringing professional
                  services directly to your building's parking garage.
                </p>
                <p>
                  Our team of certified detailing experts uses only premium,
                  eco-friendly products to ensure your vehicle receives the best
                  care possible while minimizing environmental impact.
                </p>
                <p>
                  We currently service over 50 residential buildings across
                  Montreal, saving our clients valuable time while delivering
                  exceptional results that make their vehicles look
                  showroom-new.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-black/40 rounded-lg border border-orange-500/20">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      5000+
                    </div>
                    <div className="text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center p-4 bg-black/40 rounded-lg border border-orange-500/20">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      50+
                    </div>
                    <div className="text-sm">Buildings Serviced</div>
                  </div>
                  <div className="text-center p-4 bg-black/40 rounded-lg border border-orange-500/20">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      4.9
                    </div>
                    <div className="text-sm">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
