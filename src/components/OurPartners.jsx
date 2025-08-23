// src/components/OurPartners.jsx
import React from "react";

// Define partner logos and their URLs
const partners = [
  { name: "logo1", image: "/partners/logo1.jpeg", url: "https://www.newindia.co.in/" },
  { name: "logo2", image: "/partners/logo2.jpeg", url: "https://www.icicilombard.com/" },
  { name: "logo3", image: "/partners/logo3.jpeg", url: "https://www.sbigeneral.in/" },
  { name: "logo4", image: "/partners/logo4.jpeg", url: "https://www.iffcotokio.co.in/" },
  { name: "logo5", image: "/partners/logo5.jpeg", url: "https://www.royalsundaram.in/" },
  { name: "logo6", image: "/partners/logo6.jpeg", url: "https://www.libertyinsurance.in/" },
  { name: "logo7", image: "/partners/logo7.jpeg", url: "https://www.generalicentralinsurance.com/" },
  { name: "logo8", image: "/partners/logo8.jpeg", url: "https://www.starhealth.in/" },
  { name: "logo9", image: "/partners/logo9.jpeg", url: "https://www.nivabupa.com/" },
  { name: "logo10", image: "/partners/logo10.jpeg", url: "https://www.hdfcergo.com/" },
  { name: "logo11", image: "/partners/logo11.jpeg", url: "https://www.godigit.com/" },
  { name: "logo12", image: "/partners/logo12.jpeg", url: "https://www.shriramgi.com/" },
  { name: "logo13", image: "/partners/logo13.jpeg", url: "https://www.tataaig.com/" },
  { name: "logo14", image: "/partners/logo14.jpeg", url: "https://www.sbilife.co.in/" },
  { name: "logo15", image: "/partners/logo15.jpeg", url: "https://www.tataaia.com/" },
];

const OurPartners = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-orange-500">
          Our Trusted Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full flex items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
