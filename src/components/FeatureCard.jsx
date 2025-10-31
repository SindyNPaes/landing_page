import React from "react";

const FeatureCard = ({ emoji, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border border-primary">
      <span className="text-2xl">{emoji}</span>
      <h3 className="mt-2 font-semibold text-black">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  );
};

export default FeatureCard;
