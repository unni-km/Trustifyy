import React, { useState } from 'react';

function Hero({ onSubmit }) {
  const [data, setData] = useState({ type: 'car', value: '' });

  return (
    <section className="bg-blue-50 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Compare Insurance Plans Instantly
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(data);
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <select
            value={data.type}
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className="w-full sm:w-52 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="car">Car Insurance</option>
            <option value="health">Health Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="travel">Travel Insurance</option>
          </select>

          <input
            type="text"
            placeholder="Enter Details"
            value={data.value}
            onChange={(e) => setData({ ...data, value: e.target.value })}
            className="w-full sm:w-64 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Get Quotes
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
