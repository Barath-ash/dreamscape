import React from 'react';
import Mainimg from '../DS_images/home-banner2.jpeg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="relative w-full h-[500px] lg:h-[550px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `url(${Mainimg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-6 h-full">
        <h1 className="text-5xl font-extrabold drop-shadow-lg leading-tight">
          Book Your Adventures
        </h1>
        <p className="mt-2 text-xl font-medium drop-shadow-md text-gray-300">
          Explore Around The World
        </p>
        <button 
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg shadow-md transition duration-300"
          onClick={() => navigate('/Main')}
        >
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
