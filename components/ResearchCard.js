import React from 'react';

const ResearchCard = ({ title, details }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg mb-6 bg-white">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-700">{details}</p>
      </div>
    </div>
  );
};

export default ResearchCard;
