import { useNavigate } from "react-router-dom";

const MostWanted = ({ value, images = [], names }) => {
  const navigate = useNavigate();

  // Check if images is an array
  if (!Array.isArray(images)) {
    console.error('Expected images to be an array, received:', images);
    return <p>Error: No image data available.</p>;
  }

  const handleImageClick = (image) => {
    navigate('/details', { state: { imagesContainer: image } });
  };

  return (
    <div className="p-5">
      <h2 className="py-5 text-2xl font-bold">{names}</h2>
      <p className='text-lg font-bold mb-3'>{value}</p>
      <div className="flex justify-around flex-wrap">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative flex-basis-1/5 m-2 cursor-pointer mt-6"
            onClick={() => handleImageClick(src)}
          >
            <p className="text-xl font-bold mb-2">{src.placename}</p>
            <img
              width="250"
              height="200"
              src={src.header}
              alt="Loading..."
              className="rounded-lg transition-transform transform hover:scale-105"
            />
            <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-900 text-gray-200 border-none rounded-md hover:bg-gray-700 transition duration-300 ease-in-out hover:opacity-100">
              Book Now <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostWanted;