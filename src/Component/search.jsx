import React from "react";

const SearchHeader = ({ title, onSearch }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
      {/* Title */}
      <h1 className="text-lg font-bold text-gray-800">{title}</h1>

      {/* Search Icon */}
      <button onClick={onSearch} className="text-gray-600 hover:text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </button>
    </header>
  );
};

export default SearchHeader;
