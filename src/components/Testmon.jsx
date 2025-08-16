import React from 'react';
import { motion } from 'framer-motion';

function TestimonialCarousel() {
  const testimonials = [
    { id: 1, name: 'Alice', text: 'Amazing experience!' },
    { id: 2, name: 'Bob', text: 'Easy and fast quotes!' },
    { id: 3, name: 'Charlie', text: 'Saved me a lot of money!' },
    { id: 4, name: 'Diana', text: 'Highly recommend this service.' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-yellow-500/10">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Customers Say
      </h2>
      <div className="flex gap-8 overflow-x-auto px-4 md:px-16 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, index) => (
          <motion.blockquote
            key={t.id}
            className="bg-white rounded-2xl shadow-lg p-6 min-w-[260px] max-w-sm snap-center flex-shrink-0 border border-orange-200/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: '0px 10px 25px rgba(249, 115, 22, 0.3)',
            }}
            animate={{
              y: [0, -3, 0, 3, 0], // floating
            }}
            animateTransition={{
              repeat: Infinity,
              duration: 6 + index,
              ease: 'easeInOut',
            }}
          >
            <p className="text-gray-700 italic">“{t.text}”</p>
            <footer className="mt-4 text-right text-sm font-semibold text-gray-600">
              – {t.name}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

export default TestimonialCarousel;
