import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPlus, FaTimes } from "react-icons/fa";

function LeadForm({ isOpen, onClose }) {
  const [agentCode, setAgentCode] = useState("");
  const [phone, setPhone] = useState("");
  const [members, setMembers] = useState([{ name: "", dob: "" }]);

  // Add new family member
  const addMember = () => {
    setMembers([...members, { name: "", dob: "" }]);
  };

  // Update member details
  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  // Format message
  const formatMessage = () => {
    let msg = `📝 New Insurance Lead\nAgent Code: ${agentCode}\nPhone: ${phone}\n\n👨‍👩‍👦 Family Members:\n`;
    members.forEach((m, i) => {
      msg += `\n${i + 1}. Name: ${m.name}, DOB: ${m.dob}`;
    });
    return msg;
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
    const url = `mailto:support@trustiffy.com?subject=New Insurance Lead&body=${encodeURIComponent(
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
              Please fill the Details
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
              className="w-full mb-6 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* Family Members */}
            <h3 className="text-lg font-semibold mb-3">👨‍👩‍👦 Family Members</h3>
            {members.map((member, index) => (
              <div
                key={index}
                className="mb-4 p-4 border border-gray-200 rounded-xl bg-gray-50 shadow-sm"
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) =>
                    handleMemberChange(index, "name", e.target.value)
                  }
                  className="w-full mb-2 p-2 border rounded-lg focus:ring-1 focus:ring-orange-400 outline-none"
                />
                <input
                  type="date"
                  value={member.dob}
                  onChange={(e) =>
                    handleMemberChange(index, "dob", e.target.value)
                  }
                  className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-orange-400 outline-none"
                />
              </div>
            ))}

            {/* Add Member Button */}
            <button
              onClick={addMember}
              className="flex items-center justify-center w-full mb-6 py-2 bg-orange-100 text-orange-600 rounded-xl font-medium hover:bg-orange-200 transition"
            >
              <FaPlus className="mr-2" /> Add Family Member
            </button>

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

export default LeadForm;
