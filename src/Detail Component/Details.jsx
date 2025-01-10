import { useLocation } from 'react-router-dom';
import MostWanted from '../Search Components/Mostwanted';
import { MdFastfood } from "react-icons/md";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaPassport } from "react-icons/fa6"; 
import { GiSteeringWheel } from "react-icons/gi";
import { IoBed } from "react-icons/io5";


const DetailsPage = () => {
  const location = useLocation();
  const { imagesContainer } = location.state || {}; // Safely access state

  if (!imagesContainer) {
    return <p>Error: No image data found.</p>;
  }

  const { header, subheader, room, famousplace, commonplace, placename } = imagesContainer;

  const accommodations = [
    'Travel Booking',
    'Password and Visa Arrangement',
    'Personal Driver',
    'Food',
    'Room Arrangement'
  ];
  const icons = [
   
    <IoAirplaneSharp />,
    <FaPassport />,
    <GiSteeringWheel />,
    
    <MdFastfood />,
    <IoBed />



  ]

  return (
    <div className="p-8">
      <p className='text-3xl font-bold'>Explore the city of {placename}</p>
      <div className="flex flex-wrap">
        <div className="w-3/6 p-2">
          <img src={header} alt="hotel" className="rounded-lg w-full h-80" />
        </div>
        <div className="w-3/6 p-2">
          <img src={subheader} alt="hotel" className="rounded-lg w-full h-80" />
        </div>
        <div className="w-2/6 p-2">
          <img src={room} alt="hotel" className="rounded-lg w-full h-52" />
        </div>
        <div className="w-2/6 p-2">
          <img src={famousplace} alt="hotel" className="rounded-lg w-full h-52" />
        </div>
        <div className="w-2/6 p-2">
          <img src={commonplace} alt="hotel" className="rounded-lg w-full h-52" />
        </div>

        
      </div>

      <div className=' flex items-center justify-center w-screen h-max '>
        <button className="   transform -translate-x-1/2 px-4 py-4
         text-xl bg-[#FF8C00]  border-none rounded-md hover:bg-[#FFA500] text-white font-bold transition duration-300 ease-in-out hover:opacity-100">
          Book Now  </button>
        </div>

      <p className="py-5 text-xl font-bold">This is an awesome place to stay with incredible services and views.</p>

      <ul className="border p-4 border-gray-500 rounded-md list-none font-semibold">
        <p className='text-2xl font-bold'>Accomodations</p>
        {accommodations.map((item, index) => (
          <li key={index} className="px-2 py-2 shadow-md text-lg bg-gray-200 border-none rounded-md w-full mt-3 flex ">
          <li className='flex gap-2 justify-center items-center'> <p>{icons[index]} </p> 
             {item} </li>
          </li>
        ))}
      </ul>

      <MostWanted value={"Some recommendations for similar places ->"} images={imagesContainer} />
    </div>
  );
};

export default DetailsPage;
