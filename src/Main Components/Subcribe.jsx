 // News.jsx
import React from 'react';

const News = () => {
  return (
    <div className="text-center p-5">
      <h2>Join our News Letter</h2>
      <p>Signup for our email newsletter to get exclusive discounts and updates and more.</p>
      <input type="text" className="p-3 w-[80vw] border-2 border-black rounded" />
      <div>      <button className="mt-2 px-5 py-2.5 bg-gray-900 text-white rounded">Subscribe <i className="fa-solid fa-arrow-right"></i></button>
</div>
    </div>
  );
};

export default News;
