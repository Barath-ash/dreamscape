import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MostWanted = ({ value, images = [], names }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (!Array.isArray(images)) {
    console.error("Expected images to be an array, received:", images);
    return <p className="text-center text-red-500 text-xl opacity-0">Error: No image data available.</p>;
  }

  const handleImageClick = (image) => {
    navigate("/details", { state: { imagesContainer: image } });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white py-12 px-6">
      {/* Back Button */}
     

      {/* Loading Spinner */}
      {loading ? (
        <motion.div
          className="flex flex-col items-center justify-center h-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ProgressBar height="80" width="80" ariaLabel="progress-bar-loading" color="#4F46E5" />
          <p className="text-lg font-bold text-gray-300 mt-4">Loading...</p>
        </motion.div>
      ) : (
        <>
          {/* Title */}
          <motion.h2
            className="text-5xl font-extrabold text-center uppercase tracking-widest mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {names}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg font-medium text-center mb-10 italic text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {value}
          </motion.p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105 cursor-pointer bg-gray-800 border border-gray-700"
                onClick={() => handleImageClick(src)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.1 }}
                whileHover={{ scale: 1.06, rotate: 1 }}
              >
                <motion.img
                  src={src.header}
                  alt={src.placename}
                  className="w-full h-56 object-cover rounded-t-xl hover:opacity-80 transition-opacity"
                   
                />
                <div className="p-5 text-center">
                  <p className="text-xl font-bold text-white">{src.placename}</p>
                  <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-lg px-4 py-2 rounded-lg shadow-md transition-all duration-300">
                    Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MostWanted;
