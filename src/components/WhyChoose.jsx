import React from "react";
import { useNavigate } from "react-router-dom";

function WhyChoose() {
  const navigate = useNavigate();

  return (
    <section className="my-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          Why Choose Trustiffy?
        </h2>
        <p className="text-gray-300 mb-4">
          We are a new-age insurance platform helping you explore, compare, and
          choose the best insurance partners — all in one place.
        </p>
        <p className="text-gray-300 mb-6">
          From Car, Health, Bike, to Life Insurance – we’ve got you covered
          with the best deals.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition"
        >
          Learn More
        </button>
      </div>

      {/* Right image */}
      <div className="flex justify-center">
        <img
          src="/logo.png"
          alt="Trustiffy"
          className="w-64 md:w-80 drop-shadow-lg"
        />
      </div>
    </section>
  );
}

export default WhyChoose;
