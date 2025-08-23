import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";

function VehicleLeadForm({ isOpen, onClose }) {
  const [agentCode, setAgentCode] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");

  // Format message
  const formatMessage = () => {
    return `📝 New Vehicle Lead
Agent Code: ${agentCode}
Phone: ${phone}

🚗 Vehicle Details:
Name: ${name}
Vehicle Number: ${vehicleNumber}`;
  };

  // Send via WhatsApp
  const sendWhatsApp = () => {
    const message = formatMessage();
    const url = `https://wa.me/7012768369?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Send via Email
  const sendEmail = () => {
    const message = formatMessage();
    const url = `mailto:support@trustiffy.com?subject=New Vehicle Lead&body=${encodeURIComponent(
      message
    )}`;
    window.location.href = url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-xl rounded-t-3xl md:rounded-2xl shadow-2xl w-full md:w-[420px] max-h-[90vh] overflow-y-auto p-6 relative"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
              Vehicle Lead Form
            </h2>

            {/* Agent Code */}
            <input
              type="text"
              placeholder="Agent Code"
              value={agentCode}
              onChange={(e) => setAgentCode(e.target.value)}
              className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* Vehicle Number */}
            <input
              type="text"
              placeholder="Vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              className="w-full mb-6 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={sendWhatsApp}
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </button>
              <button
                onClick={sendEmail}
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition"
              >
                <FaEnvelope size={20} /> Email
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default VehicleLeadForm;
