 // Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-5 bg-gray-900 text-gray-200 p-10">
      <div className="mb-5">
        <h2 className="pb-2">DreamScape</h2>
        <p>If you want to contact us use the links below.</p>
        <div className="flex space-x-2 pt-2">
          <i className="fa-brands fa-instagram fa-lg"></i>
          <i className="fa-brands fa-twitter fa-lg"></i>
          <i className="fa-brands fa-facebook fa-lg"></i>
        </div>
      </div>
      <p>@ 2024 DreamScape.com</p>
    </footer>
  );
};

export default Footer;
