 
import React from 'react';
import img1 from '../Assets/1.jpg'
 

const TopPlaces = () => {
    const places = [
        { id: 1, src: img1, alt: 'Place 1' },
        { id: 2, src: img1, alt: 'Place 2' },
      
    ];

    return (
        <div className="flex flex-wrap justify-center p-10 service-card">
            {places.map(place => (
                <div key={place.id} className="m-4 relative">
                    <img src={place.src} alt={place.alt} className="rounded-lg" width="250" height="200" />
                    <button className=" mt-4   absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-lg p-2">Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default TopPlaces;