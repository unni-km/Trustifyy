import React from 'react';

function Contact() {
  return (
    <div className="px-6 py-12 bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Company Name */}
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-2">
        TRUSTIFFY INSURANCE SOLUTIONS
      </h1>

      {/* Tagline */}
      <p className="text-center text-lg text-gray-600 italic mb-4">
        Smart Coverage • Real Assurance
      </p>

      {/* Insurance Types */}
      <p className="text-center text-md text-gray-700 mb-8">
        General Insurance / Life Insurance
      </p>

      {/* Logos Section */}
 

      {/* Contact Info */}
      <div className="text-center">
        <p className="text-lg font-semibold">KAIMANOM</p>
        <p className="text-lg">📞 7012768369</p>
        <p className="text-md mt-2">Email: support@myinsuranceco.com</p>
      </div>
    </div>
  );
}

export default Contact;
