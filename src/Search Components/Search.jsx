import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Search = ({ images = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const results = images.filter((item) =>
        item.placename.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, images]);

  const handleClick = (place) => {
    navigate(`/details`, { state: { imagesContainer: place } });
  };

  return (
    <div className="relative w-full flex flex-col items-center p-6 bg-gray-900">
      {/* Search Input */}
      <motion.input
        type="text"
        placeholder="Search dream destinations..."
        className="w-2/3 p-4 text-lg text-white bg-gray-800 border border-gray-600 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300 z-50 relative"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        whileFocus={{ scale: 1.05 }}
      />

      {/* Search Results Container */}
      {searchResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-20 w-2/3 bg-gray-800 shadow-2xl rounded-lg p-2 border border-gray-700 z-50"
          style={{
            backdropFilter: "blur(10px)", // Glass effect
            WebkitBackdropFilter: "blur(10px)",
            backgroundColor: "rgba(30, 30, 30, 0.8)", // Semi-transparent dark
          }}
        >
          {searchResults.map((place, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, backgroundColor: "#374151" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-4 p-4 border-b border-gray-700 cursor-pointer rounded-lg transition-all text-white"
              onClick={() => handleClick(place)}
            >
              <motion.img
                src={place.header}
                alt={place.placename}
                className="w-15 h-12 rounded-lg object-cover shadow-md"
                whileHover={{ scale: 1.1, rotate: 2 }}
              />
              <p className="text-xl font-semibold">{place.placename}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Search;
