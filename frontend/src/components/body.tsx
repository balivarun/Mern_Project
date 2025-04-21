import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Body = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Search Container */}
      <div className="max-w-2xl mx-auto pt-10">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search for your favorite pizza..."
            className="w-full px-6 py-3 text-lg rounded-full border-2 border-gray-300
                     focus:outline-none focus:border-orange-500 pr-12
                     shadow-sm hover:shadow-md transition-shadow"
          />
          <button
            className="absolute right-4 text-gray-500 hover:text-orange-500
                     transition-colors duration-200"
          >
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;