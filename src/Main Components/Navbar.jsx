import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ openBar }) => {
  const navbar = [
    { title: 'Home', link: '/' },
    { title: 'Collections', link: '/Main' },
    { title: 'Contact', link: '/Contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg border-b border-gray-700">
      <h1 className="text-2xl font-bold tracking-wide text-gray-100">DreamScape</h1>
      
      <div className="hidden md:flex gap-8">
        {navbar.map((item, index) => (
          <Link 
            key={index} 
            to={item.link}  
            className="text-lg font-medium transition-colors duration-300 hover:text-teal-400"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="md:hidden cursor-pointer text-xl text-gray-200" onClick={openBar}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
