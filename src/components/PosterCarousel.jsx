// src/components/Posters.js
import React from "react";
import { motion } from "framer-motion";

const postersData = [
  { id: "poster-1", src: "/posters/poster1.jpeg", alt: "Action movie poster" },
  { id: "poster-2", src: "/posters/poster2.jpeg", alt: "Indie drama poster" },
  { id: "poster-3", src: "/posters/poster3.jpeg", alt: "Film festival poster" },
];

function Posters() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 }
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-12 sm:py-16">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold tracking-tight text-orange-500 sm:text-5xl"
        >
          TRUSTIFFY
        </motion.h2>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {postersData.map(({ id, src, alt }, index) => (
          <motion.div
            key={id}
            className="relative overflow-hidden rounded-2xl shadow-xl transform-gpu"
            variants={itemVariants}
            animate={{
              y: [0, -12, 0, 12, 0],        // vertical float
              x: [0, 6, 0, -6, 0],          // horizontal drift
              rotate: [0, 1.5, 0, -1.5, 0], // slight sway
            }}
            transition={{
              duration: 8 + index * 2, // each one moves differently
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.1,
              rotateX: 6,
              rotateY: 6,
              transformPerspective: 1000,
              boxShadow: "0 40px 80px rgba(255, 165, 0, 0.6)",
              zIndex: 20
            }}
          >
            <motion.img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-[500px] w-auto object-cover"
              whileHover={{
                filter: "brightness(1.2) contrast(1.15) saturate(1.25)",
              }}
            />

            {/* Glow border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-4 border-orange-500 opacity-0"
              whileHover={{
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Posters;
