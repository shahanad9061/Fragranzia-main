import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for your purchase. Your transaction has been completed successfully.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default SuccessPage;