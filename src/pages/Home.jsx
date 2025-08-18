import React, { useState } from "react";
import PosterCarousel from "../components/PosterCarousel";
import TestimonialCarousel from "../components/Testmon";
import InsuranceTypeIcon from "../components/InsuranceIcon";
import { motion } from "framer-motion";
import EnquireNow from "../components/Enquery";
import LeadForm from "../components/LeadForm";

function Home() {
  const [leadOpen, setLeadOpen] = useState(false);
  const types = ["car", "health", "bike", "home"];

  const handleIconClick = (type) => {
    if (type === "health") {
      setLeadOpen(true);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black relative min-h-screen">
      {/* Poster Carousel */}
      <section className="pt-8">
        <PosterCarousel />
      </section>

      {/* Services Section */}
      <section className="my-16 px-4">
        <motion.h2
          className="text-center text-4xl font-extrabold tracking-widest text-orange-500 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          SERVICES
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {types.map((type, index) => (
            <div key={index} onClick={() => handleIconClick(type)}>
              <InsuranceTypeIcon type={type} index={index} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <TestimonialCarousel />
      </section>

      {/* Floating Enquire Now Button */}
      <EnquireNow />

      {/* Lead Form Modal */}
      <LeadForm isOpen={leadOpen} onClose={() => setLeadOpen(false)} />
    </div>
  );
}

export default Home;
