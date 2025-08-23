import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const phoneNumber = "7012768369"; // WhatsApp Business number
  const message = "Hello, I would like to know more about your insurance services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold text-orange-500 drop-shadow-lg">
        Trustiffy Insurance Solutions
      </h1>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300">
        Smart Coverage, Real Assurance – Compare and choose your trusted insurance partner today.
      </p>

      {/* ✅ Open WhatsApp directly */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
      >
        Connect with Us
      </motion.a>
    </section>
  );
}

export default HeroSection;
