import React, { useState } from 'react';

function QuoteForm() {
  const [type, setType] = useState('car');
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Get quote for ${type}: ${input}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Get Your Insurance Quote
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full sm:w-48 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="car">Car Insurance</option>
          <option value="health">Health Insurance</option>
        </select>

        <input
          type="text"
          placeholder="Enter details"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Get Quote
        </button>
      </div>
    </form>
  );
}

export default QuoteForm;
