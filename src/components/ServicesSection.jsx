import React from "react";
import { motion } from "framer-motion";
import InsuranceTypeIcon from "./InsuranceIcon";

function ServicesSection({ types, handleIconClick }) {
  return (
    <section className="my-20 px-6">
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl font-extrabold tracking-widest text-orange-500 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {types.map((type, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, scale: 1.05 }}
            onClick={() => handleIconClick(type)}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg cursor-pointer w-full max-w-xs text-center transition hover:shadow-orange-500/40"
          >
            {/* Icon with pulse effect */}
            <InsuranceTypeIcon type={type} index={index} />

            {/* Title */}
            <p className="mt-4 text-lg font-semibold capitalize text-white">
              {type} Insurance
            </p>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-2">
              Get affordable and reliable {type} insurance plans at the best prices.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
