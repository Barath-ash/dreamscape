import React from 'react';
import '../index.css'
// import { FaceSmileIcon } from '@heroicons/react/24/solid';

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
    <div className="p-5"> 
      <div className="flex justify-between items-center">
        <div>
          <h2>We Provide Best</h2>
          <h2>Customer Experience</h2>
        </div>
        <div>
          <p>|| We ensure that our customers have the best trip experience across the world</p>
        </div>
      </div>
      <div className="flex justify-center gap-2 flex-wrap mt-5">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded service-card">
         
            <h4 className="text-lg font-semibold">{service.title}</h4>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
