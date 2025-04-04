import Navbar from "./Main Components/Navbar";
import Header from "./Main Components/Header";
import Service from "./Main Components/Service";
import MostWanted from "./Search Components/Mostwanted";
 import Subcribe from "./Main Components/Subcribe";
import Footer from "./Main Components/Footer";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import img5header from './DS_images/Singapore/singapore-MarinabaySand.jpg';
import img5sub from './DS_images/Singapore/singapore-main.png';
import img5place from './DS_images/Singapore/singapore-resort.jpg';
import img5fplace from './DS_images/Singapore/singapore-food.jpeg';
import img5room from './DS_images/Singapore/singapore-room.jpg';
import img6sub from './DS_images/Thailand/TL-coral-island.png';
import img6header from './DS_images/Thailand/TL-main.jpg';
import img6place from './DS_images/Thailand/TL-resort.jpg';
import img6fplace from './DS_images/Thailand/TL-food.jpg';
import img6room from './DS_images/Thailand/TL-room.jpg';
import img7sub from './DS_images/NewYork/ny-resort.jpg';
import img7header from './DS_images/NewYork/NY-Coney-thmpark.jpeg';
import img7place from './DS_images/NewYork/NY-Coney-thmpark.jpeg';
import img7fplace from './DS_images/NewYork/NY-food.jpeg';
import img7room from './DS_images/NewYork/NY-room.jpg';
import img8sub from './DS_images/Bangkok/bgk-athenee-hotel.jpeg';
import img8header from './DS_images/Bangkok/bgk-national-museum.jpg';
import img8place from './DS_images/Bangkok/bgk-Chatuchak-Market.jpeg';
import img8fplace from './DS_images/Bangkok/bgk-grand_palace-main.jpg';
import img8room from './DS_images/Bangkok/bgk-room.png';

export default function App() {
    const [userName, setUserName] = useState("");
    const [showWelcome, setShowWelcome] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const name = localStorage.getItem("name");
        if (name) {
            setUserName(name);
            setTimeout(() => setLoading(false), 1500); // Simulates a loader delay
        }
    }, []);

    const imagesContainer2 = [
        { header: img5header, subheader: img5sub, commonplace: img5place, famousplace: img5fplace, room: img5room, placename: 'Singapore', Travelfee: "95", Foodfee: "35", RoomFee: "80" },
        { header: img6header, subheader: img6sub, commonplace: img6place, famousplace: img6fplace, room: img6room, placename: 'Thailand', Travelfee: "65", Foodfee: "50", RoomFee: "40" },
        { header: img7header, subheader: img7sub, commonplace: img7place, famousplace: img7fplace, room: img7room, placename: 'NewYork', Travelfee: "120", Foodfee: "60", RoomFee: "110" },
        { header: img8header, subheader: img8sub, commonplace: img8place, famousplace: img8fplace, room: img8room, placename: 'Bangkok', Travelfee: "80", Foodfee: "45", RoomFee: "70" },
    ];
    

    return (
        <>
            <Navbar />

            {showWelcome && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={() => setShowWelcome(false)}
                >
                    <motion.div
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        exit={{ y: -50 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-gradient-to-br from-indigo-500 to-cyan-400 text-white text-3xl font-extrabold py-10 px-16 rounded-2xl shadow-2xl text-center border-4 border-white relative"
                    >
                        {loading ? (
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                <p className="mt-4 text-lg">Loading...</p>
                            </div>
                        ) : (
                            <>
                                <p>🌍 Welcome, <span className="text-yellow-300">{userName}</span>! ✈️</p>
                                <p className="text-lg mt-2">Your next journey awaits!</p>
                                <button
                                    onClick={() => setShowWelcome(false)}
                                    className="mt-6 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition"
                                >
                                    Start Exploring 🌎
                                </button>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}

            <Header />
            <Service />
            <MostWanted value={"The place to visit during this winter break with your friends and family"} names={"Seasoned Trips"} images={imagesContainer2} />
            <Subcribe />
            <Footer />
        </>
    );
}
