import React from 'react';
import '../index.css';

const services = [
  {
    title: "Seamless Travel Planning",
    description: "Get personalized travel recommendations, real-time price comparisons, and effortless booking.",
  },     
  {
    title: "AI-Powered Travel Insights",
    description: "Our system provides valuable insights on destinations and prices to maximize your travel experience.",
  },
  {
    title: "Containerized Booking Engine",
    description: "Our Docker-integrated technology ensures high availability and rapid deployment.",
  },
];

const Service = () => {
  return (
    <div className="p-10 bg-gray-900 text-white ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-white">We Provide Best</h2>
        <h2 className="text-3xl font-extrabold text-blue-400">Customer Experience</h2>
        <p className="mt-2 text-gray-300">
          || We ensure that our customers have the best trip experience across the world
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h4 className="text-lg font-bold text-white">{service.title}</h4>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
