import React from 'react';
import { FaCar, FaHeartbeat, FaMotorcycle, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const typeMap = {
  car: { icon: <FaCar />, color: 'bg-blue-500', label: 'Car' },
  health: { icon: <FaHeartbeat />, color: 'bg-pink-500', label: 'Health' },
  bike: { icon: <FaMotorcycle />, color: 'bg-yellow-500', label: 'Bike' },
  home: { icon: <FaHome />, color: 'bg-green-500', label: 'Home' },
};

function InsuranceTypeIcon({ type, index = 0 }) {
  const item = typeMap[type];

  return (
    <motion.div
      className="flex flex-col items-center space-y-2"
      animate={{
        y: [0, -6, 0, 6, 0], // floating
        rotate: [0, 1.5, 0, -1.5, 0], // gentle tilt
      }}
      transition={{
        duration: 5 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.2,
        rotate: 5,
        y: 0,
        transition: { duration: 0.3 },
      }}
    >
      {/* Energy pulse halo */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <motion.div
          className="absolute w-full h-full rounded-full bg-gradient-to-tr from-orange-500 via-yellow-400 to-pink-500 opacity-40 blur-lg"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div
          className={`relative z-10 w-16 h-16 rounded-full text-white text-2xl flex items-center justify-center shadow-lg ${item.color}`}
        >
          {item.icon}
        </div>
      </div>

      {/* Label */}
      <motion.p
        className="text-sm font-medium text-gray-300"
        whileHover={{ color: "#f97316" }}
      >
        {item.label}
      </motion.p>
    </motion.div>
  );
}

export default InsuranceTypeIcon;
