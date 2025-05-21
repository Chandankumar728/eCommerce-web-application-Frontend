// @ts-ignore
// @ts-nocheck
import React from "react";
import { CheckCircle } from "lucide-react"; // optional icon library

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center p-10 bg-white rounded-2xl shadow-md">
        <CheckCircle className="mx-auto text-green-500" size={50} />
        <h1 className="text-3xl font-bold mt-4 text-green-700">Payment Successful!</h1>
        <p className="mt-2 text-gray-600">Thank you for your purchase.</p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default Success;
