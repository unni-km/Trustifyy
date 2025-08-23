import React from "react";
import {
  FaHeartbeat,
  FaCar,
  FaFire,
  FaHome,
  FaPlane,
  FaUserShield,
  FaTruck,
  FaStore,
  FaBriefcase,
  FaShip,
  FaLock,
  FaTools,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";

const InsurancePromo = () => {
  const servicesLeft = [
    { name: "Health Insurance", icon: <FaHeartbeat className="text-red-400" /> },
    { name: "Motor Insurance", icon: <FaCar className="text-blue-400" /> },
    { name: "Fire Insurance", icon: <FaFire className="text-orange-500" /> },
    { name: "Home Insurance", icon: <FaHome className="text-green-400" /> },
    { name: "Critical Illness Insurance", icon: <FaUserShield className="text-purple-400" /> },
    { name: "Travel Insurance", icon: <FaPlane className="text-teal-400" /> },
    { name: "Personal Accident Insurance", icon: <FaShieldAlt className="text-pink-400" /> },
    { name: "Commercial Vehicle Insurance", icon: <FaTruck className="text-yellow-400" /> },
  ];

  const servicesRight = [
    { name: "Shopkeeper's & Office Package Policies", icon: <FaStore className="text-indigo-400" /> },
    { name: "Public Liability Insurance", icon: <FaBriefcase className="text-gray-400" /> },
    { name: "Professional Indemnity Insurance", icon: <FaUserShield className="text-purple-400" /> },
    { name: "Marine Insurance", icon: <FaShip className="text-blue-500" /> },
    { name: "Burglary Insurance", icon: <FaLock className="text-red-400" /> },
    { name: "Machinery Breakdown Insurance", icon: <FaTools className="text-yellow-500" /> },
    { name: "Contractors’ All Risks & Erection All Risks Insurance", icon: <FaShieldAlt className="text-green-500" /> },
    { name: "Cyber Insurance", icon: <FaGlobe className="text-cyan-400" /> },
    { name: "And More!", icon: <FaShieldAlt className="text-orange-400" /> },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 md:p-12 rounded-2xl shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-orange-500 tracking-wide">
            GENERAL INSURANCE <br className="hidden md:block" /> MADE EASY
          </h1>
          <p className="mt-4 text-gray-300 text-sm md:text-lg leading-relaxed">
            Feel confident knowing you’re backed by professionals committed to
            your{" "}
            <span className="text-orange-400 font-semibold">security</span> and{" "}
            <span className="text-orange-400 font-semibold">comfort</span>.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src="/logo.png"
            alt="Trustiffy Logo"
            className="rounded-full border-4 border-orange-500 w-32 h-32 md:w-48 md:h-48 object-cover shadow-xl hover:scale-105 transform transition duration-300"
          />
        </div>
      </div>

      {/* Services */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-orange-500/30 transition duration-300">
          <h2 className="font-bold text-xl mb-4 text-orange-400">
            Our Core Services
          </h2>
          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
            {servicesLeft.map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:text-orange-400 transition duration-200"
              >
                {service.icon} {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-orange-500/30 transition duration-300">
          <h2 className="font-bold text-xl mb-4 text-orange-400">
            Specialized Coverage
          </h2>
          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
            {servicesRight.map((service, index) => (
              <li
                key={index}
                className="flex items-center gap-3 hover:text-orange-400 transition duration-200"
              >
                {service.icon} {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-gray-700 pt-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📞</span>
          <p className="text-base md:text-lg font-semibold text-gray-100">
            +91 7012768369, 9995728486
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">📍</span>
          <p className="text-base md:text-lg text-gray-100">
            Trustiffy, Kaimanom, Opp BSNL Office, Pappanamcode
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsurancePromo;
