import Search from "./Search Components/Search";
import Navbar from "./Main Components/Navbar";
import Footer from "./Main Components/Footer";
import MostWanted from "./Search Components/Mostwanted";
import img1sub from './DS_images/Hawaii/hawaii-honolulu-beach.jpeg';
import img1header from './DS_images/Hawaii/hawaii-main.jpg';
import img1place from './DS_images/Hawaii/hawaii-Oahu.jpg';
import img1fplace from './DS_images/Hawaii/hawaii-Farmers-Market.jpg';
import img1room from './DS_images/Hawaii/hawaii-room.jpg';
import img2sub from './DS_images/China/china-greatwall.jpg';
import img2header from './DS_images/China/china-main.jpg';
import img2place from './DS_images/China/china-themepark.jpg';
import img2fplace from './DS_images/China/china-food.jpg';
import img2room from './DS_images/China/china-room.jpg';
import img3sub from './DS_images/Dubai/underwateraquarium.jpg';
import img3header from './DS_images/Dubai/dubai-main.jpg';
import img3place from './DS_images/Dubai/swimming-pool.jpg';
import img3fplace from './DS_images/Dubai/dubai-camel-ride.jpeg';
import img3room from './DS_images/Dubai/dubai-room.jpg';
import img4sub from './DS_images/Egypt/egypt-pyramid-giza.png';
import img4header from './DS_images/Egypt/Egypt-main.jpg';
import img4place from './DS_images/Egypt/egypt-resort.jpeg';
import img4fplace from './DS_images/Egypt/egypt-food.jpeg';
import img4room from './DS_images/Egypt/egypt-room.jpg'; 
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
import img9sub from './DS_images/Australia/aust-Opera-House.jpg';
import img9header from './DS_images/Australia/Aust-Westpac-Long-Gallery.jpg'
import img9place from './DS_images/Australia/aust-botanical-garden.jpg'
import img9fplace from './DS_images/Australia/aust-food.jpg'
import img9room from './DS_images/Australia/aust-kakadu-national-park.jpg'
import img10sub from './DS_images/Canada/Stanley-Park-no-Canada-min.png';
import img10header from './DS_images/Canada/niagara_falls-canada.jpg'
import img10place from './DS_images/Canada/canada_Northern_Lights.jpeg'
import img10fplace from './DS_images/Canada/canada-food.png'
import img10room from './DS_images/Canada/CN-Tower-canada.jpeg'
import img11sub from './DS_images/Germany/germany-cologne-cathedral.jpg';
import img11header from './DS_images/Germany/germany-europa-park.jpg'
import img11place from './DS_images/Germany/germany-main.jpg'
import img11fplace from './DS_images/Germany/german-food.jpg'
import img11room from './DS_images/Germany/germany_brandenburg-gate.jpg'
import img12sub from './DS_images/Malaysia/mal-main.jpg';
import img12header from './DS_images/Malaysia/mal-legoland.jpg'
import img12place from './DS_images/Malaysia/mal-aquaria-klcc.jpg'
import img12fplace from './DS_images/Malaysia/mal-food.jpg'
import img12room from './DS_images/Malaysia/mal-batu-caves.jpg'
import img13sub from './DS_images/Paris/eiffel-tower-paris.jpg';
import img13header from './DS_images/Paris/Sainte-Chapelle-Paris.jpg'
import img13place from './DS_images/Paris/paris-arc-de-triomphe.jpg'
import img13fplace from './DS_images/Paris/paris-food.jpg'
import img13room from './DS_images/Paris/paris-eiffel-tower-room.jpg'
import img14sub from './DS_images/Switzerland/switz-lake-geneva.jpg';
import img14header from './DS_images/Switzerland/switz-chapel-bridge.jpg'
import img14place from './DS_images/Switzerland/switz_Rheinfall.jpg'
import img14fplace from './DS_images/Switzerland/switz-aquaparc.jpg'
import img14room from './DS_images/Switzerland/switz-room.jpg'

export default function Main() {
  const imagesContainer1 = [
    { header: img1header, subheader: img1sub, commonplace: img1place, famousplace: img1fplace, room: img1room, placename: 'Hawaii',Travelfee: '1000',Foodfee:'200',RoomFee:"500" },
    { header: img2header, subheader: img2sub, commonplace: img2place, famousplace: img2fplace, room: img2room, placename: 'China',Travelfee: "1500",Foodfee:"400",RoomFee:"300"  },
    { header: img3header, subheader: img3sub, commonplace: img3place, famousplace: img3fplace, room: img3room, placename: 'Dubai',Travelfee: "800",Foodfee:"600",RoomFee:"1000"  },
    { header: img4header, subheader: img4sub, commonplace: img4place, famousplace: img4fplace, room: img4room, placename: 'Egypt',Travelfee: "700",Foodfee:"400",RoomFee:"200"  },
  ];

  const imagesContainer2 = [
    { header: img5header, subheader: img5sub, commonplace: img5place, famousplace: img5fplace, room: img5room, placename: 'Singapore',Travelfee: "800",Foodfee:"600",RoomFee:"1000"  },
    { header: img6header, subheader: img6sub, commonplace: img6place, famousplace: img6fplace, room: img6room, placename: 'Thailand',Travelfee: "700",Foodfee:"400",RoomFee:"200"  },
    { header: img7header, subheader: img7sub, commonplace: img7place, famousplace: img7fplace, room: img7room, placename: 'NewYork' ,Travelfee: "1500",Foodfee:"400",RoomFee:"300" },
    { header: img8header, subheader: img8sub, commonplace: img8place, famousplace: img8fplace, room: img8room, placename: 'Bangkok',Travelfee: '1000',Foodfee:'200',RoomFee:"500" },
    { header: img9header, subheader: img9sub, commonplace: img9place, famousplace: img9fplace, room: img9room, placename: 'Australia' ,Travelfee: "800",Foodfee:"600",RoomFee:"1000"},
    { header: img10header, subheader: img10sub, commonplace: img10place, famousplace: img10fplace, room: img10room, placename: 'Canada',Travelfee: "1500",Foodfee:"400",RoomFee:"300"  },
    { header: img11header, subheader: img11sub, commonplace: img11place, famousplace: img11fplace, room: img11room, placename: 'Germany',Travelfee: "700",Foodfee:"400",RoomFee:"200"   },
    { header: img12header, subheader: img12sub, commonplace: img12place, famousplace: img12fplace, room: img12room, placename: 'Malaysia' ,Travelfee: '1000',Foodfee:'200',RoomFee:"500" },
    // { header: img13header, subheader: img13sub, commonplace: img13place, famousplace: img13fplace, room: img13room, placename: 'Paris' },
    // { header: img14header, subheader: img14sub, commonplace: img14place, famousplace: img14fplace, room: img14room, placename: 'Switzerland' }
  ];

  return (
    <>
      <Navbar />
      <Search />
      <MostWanted value={"The places visited the most this year. Grab the tickets and enjoy with your loved ones"} names={"Top Choices"} images={imagesContainer1} />
      <MostWanted value={"The place to visit during this winter break with your friends and family "} names={"Seasoned Trips"} images={imagesContainer2} />
      
      <Footer />
    </>
  );
}


