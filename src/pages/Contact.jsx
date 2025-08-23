import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      {/* Glassmorphism Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl w-full px-8 py-12 rounded-2xl shadow-2xl 
                   bg-white/10 backdrop-blur-md border border-white/20"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-white tracking-wide mb-6"
        >
          Contact Us
        </motion.h1>

        {/* Company Name */}
        <h2  className="text-5xl font-bold text-center text-white tracking-wide">
          TRUSTIFFY INSURANCE SOLUTIONS
        </h2>

        {/* Tagline */}
        <p className="text-center text-lg text-gray-300 italic mb-3">
          Smart Coverage • Real Assurance
        </p>

        {/* Insurance Types */}
        <p className="text-center text-md text-gray-400 mb-8">
          General Insurance • Life Insurance
        </p>

        {/* Divider */}
        <div className="w-24 h-1 mx-auto mb-10 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full"></div>

        {/* Contact Info */}
        <div className="text-center space-y-2">
          <p className="text-xl font-semibold text-white">📍 KAIMANOM</p>
          <p className="text-lg text-gray-300">📞 7012768369</p>
          <p className="text-md text-gray-400">
            ✉️ trustiffy.info@gmail.com
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
