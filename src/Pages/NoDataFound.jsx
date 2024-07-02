import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const NoDataFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 max-w-md bg-white shadow-lg rounded-lg">
        <FaExclamationCircle className="text-red-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">No Data Found</h1>
        <p className="text-gray-600 mb-4">
          We couldn't find any data to display. Please try again later or contact support if the issue persists.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default NoDataFound;
