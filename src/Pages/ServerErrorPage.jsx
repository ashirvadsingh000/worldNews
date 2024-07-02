import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ServerErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
        <h1 className="text-2xl font-bold text-red-500 mb-2">500 Internal Server Error</h1>
        <p className="text-gray-700 mb-4">
          We're sorry, but something went wrong on our end. Please try again later.
        </p>
        <div className="mt-6">
          <p className="text-gray-700 mb-2">If the problem persists, please contact our support team.</p>
          <p className="text-gray-700">Email: <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a></p>
          <p className="text-gray-700">Phone: <a href="tel:1234567890" className="text-blue-500">123-456-7890</a></p>
        </div>
      </div>
    </div>
  );
};

export default ServerErrorPage;
