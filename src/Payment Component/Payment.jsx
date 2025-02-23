import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPaying, setIsPaying] = useState(false);

  const { imagesContainer } = location.state || {};
  if (!imagesContainer) {
    return <p className="text-center text-red-500 text-xl">Error: No booking data found.</p>;
  }

  const { placename, Travelfee = 0, Foodfee = 0, RoomFee = 0 } = imagesContainer;
  const tax = 50;
  const total = parseFloat(Travelfee) + parseFloat(Foodfee) + parseFloat(RoomFee) + tax;

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      toast.success("Payment Successful!", { position: "top-center" });
      navigate('/confirmation');
    }, 3000);
  };

  return (
    <div className="font-sans bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 shadow-xl rounded-lg p-6 max-w-lg w-full border border-gray-700 text-gray-300">
        <h2 className="text-3xl font-bold text-emerald-400 mb-4 text-center">
          Book Your Adventure to {placename}
        </h2>
        <div className="border-b border-gray-600 pb-4">
          <ul className="text-gray-400 space-y-3">
            <li className="flex justify-between">
              Travel Booking <span className="font-bold text-blue-400">${Travelfee}</span>
            </li>
            <li className="flex justify-between">
              Food <span className="font-bold text-red-400">${Foodfee}</span>
            </li>
            <li className="flex justify-between">
              Room Arrangement <span className="font-bold text-purple-400">${RoomFee}</span>
            </li>
            <li className="flex justify-between">
              Tax <span className="font-bold text-yellow-400">${tax}</span>
            </li>
            <li className="flex justify-between font-bold text-lg border-t border-gray-600 pt-3">
              Total <span className="text-green-400">${total.toFixed(2)}</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center mt-4">
          <input id="terms" type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
          <label htmlFor="terms" className="ml-2 text-sm">
            I accept the
            <a href="#" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
          </label>
        </div>

        <div className="flex justify-between mt-6">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition duration-300">
            <FaArrowLeft /> Back
          </button>
          
          <button 
            onClick={handlePayment} 
            className={`px-6 py-2 text-lg rounded-md text-gray-100 font-bold transition duration-300 shadow-md
              ${isPaying ? 'bg-green-500 animate-pulse cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`} 
            disabled={isPaying}>
            {isPaying ? 'Processing...' : `Pay $${total.toFixed(2)}`}
          </button>
        </div>

        {/* Placeholder for Razorpay Integration */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          * Razorpay integration will be added here
        </div>
      </div>
    </div>
  );
};

export default Payment;