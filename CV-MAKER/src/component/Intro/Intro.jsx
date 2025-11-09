import React from 'react';

const Intro = () => {
  return (
    <header className="border-b pb-6 mb-6">
      <h1 className="text-4xl font-bold tracking-wider text-gray-900">JONATHAN DOE</h1>
      <h3 className="text-lg italic text-gray-500 mb-3">WEB DESIGNER, DIRECTOR</h3>

      <div className="flex items-center gap-6 text-sm">
        <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
          Download PDF
        </button>
        <div>
          <p className="text-red-600 font-semibold">name@yourdomain.com</p>
          <p>(313) - 867-5309</p>
        </div>
      </div>
    </header>
  );
};

export default Intro