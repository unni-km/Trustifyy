import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function EnquireNow() {
  const phoneNumber = "7012768369"; // Your WhatsApp Business number
  const message = "Hello, I would like to know more about your insurance services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="font-semibold">Discover More</span>
      </a>
    </div>
  );
}

export default EnquireNow;
