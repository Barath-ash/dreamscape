 // Header.jsx
import React from 'react';
import Mainimg from '../DS_images/home-banner2.jpeg' 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-center relative  ">
      <div className='absolute top-28 right-72  font-bold text-2xl opacity-100 '>
        <h1 className='font-bold'>Book Your Adventures</h1>
        <p className='mt-1'>Explore Around The World</p>
         <button className=" mt-1 bg-gray-800 text-white  text-lg px-2 py-2 border-black rounded-md cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/Main')}}>Book Now</button> 
      </div>
      <div className=''>
        <img src={Mainimg}  alt="Adventure" className=" w-full h-full   " />
        </div>
    </header>
  );
};

export default Header;
