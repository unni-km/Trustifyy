import React from "react";
import { motion } from "framer-motion";

function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Anadhu Vijayan, Kottarakara",
      text: "I bought health insurance through them, and the process was smooth. Claims were settled without any stress. Highly trustworthy!",
    },
    {
      id: 2,
      name: "Vishnu Gupta, Trivandrum",
      text: "Got my car insurance renewed in minutes. The premium was reasonable, and support team explained all benefits clearly.",
    },
    {
      id: 3,
      name: "Nandana, Calicut",
      text: "I took family health insurance, and they guided me with the best plan. Very transparent and professional service.",
    },
    {
      id: 4,
      name: "Unni Krishnan, Thrissur",
      text: "When my bike met with an accident, the claim process was quick and hassle-free. I am fully satisfied.",
    },
    {
      id: 5,
      name: "Lakshmi Pillai, Kollam",
      text: "I secured my home with their insurance service. They explained every detail patiently and gave me the right coverage.",
    },
    {
      id: 6,
      name: "Vishnu Nair, Alappuzha",
      text: "Their health insurance support is excellent. I got admitted recently and the cashless claim worked perfectly.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-white tracking-tight">
        What Our Customers Say
      </h2>

      <div className="flex gap-10 overflow-x-auto px-6 md:px-20 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, index) => (
          <motion.blockquote
            key={t.id}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 min-w-[280px] max-w-md snap-center flex-shrink-0 border border-gray-700 relative transform transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: "0px 15px 40px rgba(255, 255, 255, 0.2)",
            }}
          >
            {/* Stars */}
            <div className="flex mb-4 text-yellow-400 text-lg">
              {"★★★★★"}
            </div>

            <p className="text-gray-200 text-base leading-relaxed italic">
              “{t.text}”
            </p>

            <footer className="mt-6 text-right text-sm font-semibold text-gray-300">
              – {t.name}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export default TestimonialCarousel;
