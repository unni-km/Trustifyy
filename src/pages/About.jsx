import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fullText = `
At Trustiffy Insurance Solutions, we are a newly established insurance platform dedicated to making insurance simple, transparent, and accessible for everyone. Just like your trusted marketplace, we allow you to explore, compare, and choose from a wide range of insurance partners — all in one place.

Whether you’re looking for Car Insurance, Health Insurance, Bike Insurance, or Life Insurance, our platform connects you with top insurance companies to help you find the perfect coverage at the right price.

Our mission is simple — Smart Coverage, Real Assurance. We believe that buying insurance should be as easy as shopping online, and we’re here to empower you with the right information so you can make confident decisions for your future.
`;

function About() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 15);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-200">
      {/* Banner */}
    <div className="relative py-20 bg-black/40 backdrop-blur-md border-b border-gray-800">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-bold text-center text-white tracking-wide"
  >
    About Us
  </motion.h1>
</div>


      {/* Content Section */}
      <div className="px-6 py-16 flex justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl text-lg md:text-xl leading-relaxed text-gray-300 text-center whitespace-pre-line font-medium"
        >
          {displayText}
        </motion.p>
      </div>
    </div>
  );
}

export default About;
