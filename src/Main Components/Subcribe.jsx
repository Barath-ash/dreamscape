import React from 'react';

const News = () => {
  return (
    <div className="text-center p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
      <p className="mt-2 text-gray-300">
        Sign up for our email newsletter to get exclusive discounts, updates, and more.
      </p>
      
      {/* Input Field & Button */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-3 w-full sm:w-[350px] border-2 border-gray-700 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition duration-300">
          Subscribe <i className="fa-solid fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default News;
