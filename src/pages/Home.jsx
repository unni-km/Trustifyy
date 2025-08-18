import React from 'react';
import PosterCarousel from "../components/PosterCarousel";
import TestimonialCarousel from '../components/Testmon';
import InsuranceTypeIcon from '../components/InsuranceIcon';
import { motion } from 'framer-motion';
import EnquireNow from '../components/Enquery';

function Home() {
  const types = ['car', 'health', 'bike', 'home'];

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
          animate={{
            textShadow: [
              "0 0 5px #f97316",
              "0 0 15px #f97316",
              "0 0 5px #f97316"
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          viewport={{ once: true }}
        >
          SERVICES
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {types.map((type, index) => (
            <InsuranceTypeIcon key={index} type={type} index={index} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <TestimonialCarousel />
      </section>

      {/* Floating Enquire Now Button */}
      <EnquireNow />
    </div>
  );
}

export default Home;
