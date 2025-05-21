import React from "react";
import { XCircle } from "lucide-react"; // optional icon library

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-center p-10 bg-white rounded-2xl shadow-md">
        <XCircle className="mx-auto text-red-500" size={50} />
        <h1 className="text-3xl font-bold mt-4 text-red-700">Payment Canceled</h1>
        <p className="mt-2 text-gray-600">Looks like you canceled the payment process.</p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
        >
          Try Again
        </a>
      </div>
    </div>
  );
};

export default Cancel;
