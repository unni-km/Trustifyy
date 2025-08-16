import React, { useState, useEffect } from 'react';

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
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 text-gray-800">
      
      {/* Page Banner */}
      <div className="bg-gradient-to-r from-white-500 to-yellow-400 text-black py-20 shadow-lg">
        <h1 className="text-4xl font-bold text-center drop-shadow-lg">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="px-6 py-12 flex flex-col items-center">
        <p className="max-w-3xl text-lg leading-relaxed text-center whitespace-pre-line font-medium animate-fadeIn">
          {displayText}
        </p>
      </div>
    </div>
  );
}

export default About;
