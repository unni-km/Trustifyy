import React from "react";
import { FaCar, FaHeartbeat, FaMotorcycle, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const typeMap = {
  car: {
    icon: <FaCar />,
    color: "from-blue-500 to-indigo-400",
    label: "Car",
  },
  health: {
    icon: <FaHeartbeat />,
    color: "from-pink-500 to-rose-400",
    label: "Health",
  },
  bike: {
    icon: <FaMotorcycle />,
    color: "from-yellow-500 to-amber-400",
    label: "Bike",
  },
  home: {
    icon: <FaHome />,
    color: "from-green-500 to-emerald-400",
    label: "Home",
  },
};

function InsuranceTypeIcon({ type, index = 0 }) {
  const item = typeMap[type];

  return (
    <motion.div
      className="flex flex-col items-center space-y-3 cursor-pointer"
      animate={{
        y: [0, -6, 0, 6, 0], // floating
        rotate: [0, 1.2, 0, -1.2, 0], // gentle tilt
      }}
      transition={{
        duration: 5 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.15,
        y: -4,
        transition: { duration: 0.3 },
      }}
    >
      {/* Halo + Icon */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Glow Halo */}
        <motion.div
          className="absolute w-full h-full rounded-full bg-gradient-to-tr from-orange-500 via-yellow-400 to-pink-500 opacity-40 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 2.2 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Icon Circle */}
        <motion.div
          className={`relative z-10 w-16 h-16 rounded-full text-white text-2xl flex items-center justify-center shadow-xl bg-gradient-to-tr ${item.color}`}
          whileHover={{
            scale: 1.2,
            boxShadow: "0 12px 30px rgba(249,115,22,0.6)", // orange glow
          }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Label */}
      <motion.p
        className="text-sm font-semibold text-gray-300 tracking-wide"
        whileHover={{ color: "#f97316", scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {item.label}
      </motion.p>
    </motion.div>
  );
}

export default InsuranceTypeIcon;
