 // Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ openBar }) => {

     const navbar = [{title: 'Home',link:'/'}

     ,{title:'Collections', link:'/Main'},{title:'Contact'}]

  return (
    <nav className="flex justify-between items-center p-4 shadow-lg shadow-gray-500">
      <h1 className='text-lg font-semibold'>DreamScape</h1>
      <div className="hidden md:flex gap-5">

       {navbar.map(function(items,index){
        return(
          <>
                  <Link to={items.link}  className="text-gray-800 text-md no-underline hover:underline hover:cursor-pointer">{items.title}</Link>

          </>
        )
       })}


        
      </div>
      <div className="block md:hidden" onClick={openBar}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
