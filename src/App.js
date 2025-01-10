import Navbar from "./Main Components/Navbar"
import Header from "./Main Components/Header"
import Service from "./Main Components/Service"
import Newarrival from "./Main Components/Newarrival"
// import Mostwanted from "./Main Components/Mostwanted"
import Subcribe from "./Main Components/Subcribe"
import Footer from "./Main Components/Footer"
import MostWanted from "./Search Components/Mostwanted"
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








export default function App(){

    const imagesContainer2 = [
        { header: img5header, subheader: img5sub, commonplace: img5place, famousplace: img5fplace, room: img5room, placename: 'Singapore' },
        { header: img6header, subheader: img6sub, commonplace: img6place, famousplace: img6fplace, room: img6room, placename: 'Thailand' },
        { header: img7header, subheader: img7sub, commonplace: img7place, famousplace: img7fplace, room: img7room, placename: 'NewYork' },
        { header: img8header, subheader: img8sub, commonplace: img8place, famousplace: img8fplace, room: img8room, placename: 'Bangkok' },
      ];






    return(
        <>
        
           <Navbar/> 
           <Header/>
           <Service/>
           {/* <MostWanted/> */}
           <MostWanted value={"The place to visit during this winter break with your friends and family "} names={"Seasoned Trips"} images={imagesContainer2} />

           <Subcribe/>
           <Footer/>
        </>
    )
}