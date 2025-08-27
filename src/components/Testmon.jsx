import React from "react";
import { motion } from "framer-motion";

function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Anadhu Vijayan",
      location: "Kottarakara",
      text: "I bought health insurance through them, and the process was smooth. Claims were settled without any stress. Highly trustworthy!",
      avatar: "https://ui-avatars.com/api/?name=Anadhu+Vijayan&background=random"
    },
    {
      id: 2,
      name: "Vishnu Gupta",
      location: "Trivandrum",
      text: "Got my car insurance renewed in minutes. The premium was reasonable, and support team explained all benefits clearly.",
      avatar: "https://ui-avatars.com/api/?name=Vishnu+Gupta&background=random"
    },
    {
      id: 3,
      name: "Soorya",
      location: "Kollam",
      text: "I took family health insurance, and they guided me with the best plan. Very transparent and professional service.",
      avatar: "https://ui-avatars.com/api/?name=Soorya&background=random"
    },
    {
      id: 4,
      name: "Anjali Nair",
      location: "Thrissur",
      text: "When my bike met with an accident, the claim process was quick and hassle-free. I am fully satisfied.",
      avatar: "https://ui-avatars.com/api/?name=Anjali+Nair&background=random"
    },
    {
      id: 5,
      name: "Lakshmi Pillai",
      location: "Kollam",
      text: "I secured my home with their insurance service. They explained every detail patiently and gave me the right coverage.",
      avatar: "https://ui-avatars.com/api/?name=Lakshmi+Pillai&background=random"
    },
    {
      id: 6,
      name: "Vishnu R",
      location: "Alappuzha",
      text: "Their health insurance support is excellent. I got admitted recently and the cashless claim worked perfectly.",
      avatar: "https://ui-avatars.com/api/?name=Vishnu+R&background=random"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-white tracking-tight">
        What Our Customers Say
      </h2>

      <div className="flex gap-6 overflow-x-auto px-4 md:px-12 snap-x snap-mandatory scrollbar-hide scroll-smooth">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="bg-white rounded-xl shadow-lg p-5 sm:p-6 min-w-[85%] sm:min-w-[320px] max-w-sm snap-center flex-shrink-0 border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
            }}
          >
            {/* Top section: avatar + name */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{t.name}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{t.location}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mb-3 text-yellow-400 text-base sm:text-lg">
              {"★★★★★"}
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {t.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialCarousel;
