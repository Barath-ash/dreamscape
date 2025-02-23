import { useLocation, useNavigate } from 'react-router-dom';
import MostWanted from '../Search Components/Mostwanted';
import { MdFastfood } from "react-icons/md";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaPassport } from "react-icons/fa6"; 
import { GiSteeringWheel } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const { imagesContainer } = location.state || {};  
  if (!imagesContainer) {
    return <p className="text-center text-red-500 text-xl">Error: No image data found.</p>;
  }

  const { header, subheader, room, famousplace, commonplace, placename, Travelfee, Foodfee, RoomFee } = imagesContainer;

  const accommodations = [
    { name: 'Travel Booking', icon: <IoAirplaneSharp className="text-blue-500 text-3xl" /> },
    { name: 'Passport and Visa Arrangement', icon: <FaPassport className="text-green-500 text-3xl" /> },
    { name: 'Personal Driver', icon: <GiSteeringWheel className="text-yellow-500 text-3xl" /> },
    { name: 'Food', icon: <MdFastfood className="text-red-500 text-3xl" /> },
    { name: 'Room Arrangement', icon: <IoBed className="text-purple-500 text-3xl" /> },
  ];

  const handleBooking = () => {
    toast.success("Redirecting to payment page", { position: "top-center" });
    navigate('/payment', { state: { imagesContainer } });
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-700 to-gray-900 min-h-screen animate-fade-in">  
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <button 
            onClick={() => navigate(-1)} 
            className="fixed top-4 left-4 flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition duration-300 shadow-md animate-slide-in"
          >
            <FaArrowLeft /> Back
          </button>
          
          <p className="text-4xl font-extrabold text-emerald-400 mt-6 text-center uppercase animate-fade-in">
            Explore {placename}
          </p>
          
          {/* Image Gallery - This section remains unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="col-span-2">
              <img src={header} alt="hotel" className="rounded-lg w-full h-80 object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <img src={subheader} alt="hotel" className="rounded-lg w-full h-80 object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <img src={room} alt="hotel" className="rounded-lg w-full h-52 object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <img src={famousplace} alt="hotel" className="rounded-lg w-full h-52 object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <img src={commonplace} alt="hotel" className="rounded-lg w-full h-52 object-cover shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Accommodations Section */}
          <div className="mt-8 p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700 text-gray-300 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Accommodations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accommodations.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg shadow-sm hover:bg-gray-600 transition duration-300"
                >
                  <span>{item.icon}</span>
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="mt-8 p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700 text-gray-300 animate-fade-in">
            <h3 className="text-2xl font-bold">Booking Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="p-4 bg-gray-700 rounded-lg text-center shadow-md hover:bg-gray-600 transition duration-300">
                <p className="text-lg font-semibold">Travel Fee</p>
                <p className="text-xl font-bold text-blue-400">${Travelfee}</p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg text-center shadow-md hover:bg-gray-600 transition duration-300">
                <p className="text-lg font-semibold">Food Fee</p>
                <p className="text-xl font-bold text-red-400">${Foodfee}</p>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg text-center shadow-md hover:bg-gray-600 transition duration-300">
                <p className="text-lg font-semibold">Room Fee</p>
                <p className="text-xl font-bold text-purple-400">${RoomFee}</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <button 
                onClick={handleBooking} 
                className="px-6 py-3 text-xl bg-blue-600 border-none rounded-lg hover:bg-blue-700 text-gray-300 font-bold transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>

          <MostWanted value={"Similar places you might like:"} images={imagesContainer} />
        </>
      )}
    </div>
  );
};

export default DetailsPage;
