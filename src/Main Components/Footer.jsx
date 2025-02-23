import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 p-10 shadow-md border-t border-gray-700">
      <div className="mb-5 text-center">
        <h2 className="pb-2 text-2xl font-bold text-white">DreamScape</h2>
        <p className="text-gray-400">If you want to contact us, use the links below.</p>
        <div className="flex justify-center space-x-4 pt-3">
          <i className="fa-brands fa-instagram fa-lg text-gray-400 hover:text-pink-500 transition"></i>
          <i className="fa-brands fa-twitter fa-lg text-gray-400 hover:text-blue-400 transition"></i>
          <i className="fa-brands fa-facebook fa-lg text-gray-400 hover:text-blue-600 transition"></i>
        </div>
      </div>
      <p className="text-center text-gray-400">&copy; 2024 DreamScape.com</p>
    </footer>
  );
};

export default Footer;
