import React, { useState } from "react";
import HeroSection from "../components/HeroSection";   
import ServicesSection from "../components/ServicesSection"; 
import PosterCarousel from "../components/PosterCarousel";
import TestimonialCarousel from "../components/Testmon";
import EnquireNow from "../components/Enquery";
import LeadForm from "../components/LeadForm";
import WhyChoose from "../components/WhyChoose";
import VehicleLeadForm from "../components/VehicleLeadForm"; // ✅ renamed

function Home() {
  const [healthLeadOpen, setHealthLeadOpen] = useState(false);
  const [vehicleLeadOpen, setVehicleLeadOpen] = useState(false);
  const [vehicleType, setVehicleType] = useState(""); // optional if you want "car" or "bike" in the form

  const types = ["car", "health", "bike", "home"];

  const handleIconClick = (type) => {
    if (type === "health") {
      setHealthLeadOpen(true); // health shows popup
    } else if (type === "bike" || type === "car") {
      setVehicleType(type); // optional: you can display "Car" or "Bike" in the form heading
      setVehicleLeadOpen(true);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black relative min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection types={types} handleIconClick={handleIconClick} />

      {/* Poster Carousel */}
      <section className="py-12">
        <PosterCarousel />
      </section>

      {/* Why Choose Section */}
      <section className="py-12">
        <WhyChoose />
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <TestimonialCarousel />
      </section>

      {/* Floating Enquire Now Button */}
      <EnquireNow />

      {/* Health Lead Form Popup */}
      <LeadForm 
        isOpen={healthLeadOpen} 
        onClose={() => setHealthLeadOpen(false)} 
      />

      {/* Vehicle Lead Form Popup */}
      <VehicleLeadForm 
        isOpen={vehicleLeadOpen} 
        onClose={() => setVehicleLeadOpen(false)}
        vehicleType={vehicleType} // optional, you can show "Car" or "Bike" in form
      />
    </div>
  );
}

export default Home;
