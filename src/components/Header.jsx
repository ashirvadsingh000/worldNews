import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiDotsVertical, BiHome, BiScreenshot } from "react-icons/bi";
import {
  FaFacebook,
  FaFacebookF,
  FaTheaterMasks,
  FaTwitter,
} from "react-icons/fa";
import HomeLogo from "../../public/homeLogo.png";
import { LuLocate, LuOption } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { GoScreenFull } from "react-icons/go";
import { SlScreenDesktop } from "react-icons/sl";
import {
  MdMenuBook,
  MdOutlineFitScreen,
  MdOutlineMenu,
  MdOutlinePhotoSizeSelectActual,
  MdPhotoSizeSelectActual,
} from "react-icons/md";
import { IoMdClose, IoMdCloseCircleOutline } from "react-icons/io";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     
    <header className=" header, border-b-2 border-b-home-blue shadow-lg shadow-home-blue w-screen overflow-y-hidden fixed backdrop-blur-0 top-0 z-10 ">
    <div className="navtop h-6 bg-home-blue justify-between flex gap-5 ">
        <div className="navtop-left  text-white gap-4 flex text-sm items-center ps-4 ">
          <a className=" hover:text-red-500" href="">
            हिन्दी
          </a>
          <a className=" hover:text-red-500" href="">
            English
          </a>
          <a className=" hover:text-red-500 md:flex  hidden " href="">
            भारत
          </a>
          <a className=" hover:text-red-500 md:flex  hidden " href="">
            मराठी
          </a>
          <a className=" hover:text-red-500 md:flex  hidden " href="">
            বাংলা
          </a>
          <a className=" hover:text-red-500 md:flex  hidden " href="">
            தமிழ்
          </a>
          <a className=" hover:text-red-500 md:flex  hidden " href="">
            മലയാളം
          </a>
          <a className=" hover:text-red-500 md:flex  hidden " href="">
            ગુજરાતી
          </a>
          <a className=" hover:text-red-500" href="">
            Tech
          </a>
          <a className=" hover:text-red-500" href="">
            Health
          </a>
          <a className=" hover:text-red-500" href="">
            <BiDotsVertical />
          </a>
        </div>
        <div className="navtop-right flex gap-2 items-center mr-6 ">
          <marquee
            behavior="scroll"
            direction="left"
            className="text-white text-sm text-center"
          >
            worldNews एनबीडीए //एनबीडीएसए द्वारा निर्धारित स्वतंत्र नियमन एवं
            मानकों का पालन करता है. अगर आपको worldNews पर दिखाई गई किसी खबर या
            कार्यक्रम से शिकायत है तो न्यूज़ ब्रॉडकॉस्टिंग एंड डिजिटल स्टेंडर्ड
            अथॉरिटी को लिखें. ज्यादा जानकारी के लिए www.worldnews.com पर लॉग ऑन
            करें.
          </marquee>
          <a className=" hover:text-red-600" href="">
            <FaFacebookF />
          </a>
          <a className=" hover:text-red-600" href="">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="container  flex max-w-full w-full justify-between  pr-6 bg-white ">
        <div className="">
          <img src={HomeLogo} alt="" srcset="" className=" invert h-16 " />
        </div>
        <nav
          className="hidden md:flex  w-fit
  text-xl font-poppins font-bold text-slate-600 md:space-x-6 space-x-4 "
        >
        
      
       
        <a className="hover:text-red-600 flex items-center gap-1 ">
            <BiHome /><Link to="/">Home  </Link>
          </a>
       
          <a href="#" className="hover:text-red-600 flex items-center gap-1">
            <CiLocationOn /><Link to="/states"> STATES</Link>
          </a>
          <a href="#" className="hover:text-red-600 flex items-center gap-1">
            <SlScreenDesktop /><Link to="/live"> LIVE-TV</Link>
          </a>
          <a href="#" className="hover:text-red-600 flex items-center gap-1">
            <MdOutlinePhotoSizeSelectActual /><Link to="/photos"> PHOTOS</Link>
          </a>
          <a href="#" className="hover:text-red-600 flex items-center gap-1">
            <MdOutlineFitScreen /><Link to="/videos"> VEDIOS</Link>
          </a>
          <a href="#" className="hover:text-red-600 flex items-center gap-1">
            {" "}
            <FaTheaterMasks />
            <Link to="/nodata">WEB-STORIES</Link>
          </a>
        </nav>
        <div className="md:hidden flex items-center pr-6">
          <button
            onClick={toggleMenu}
            className="outline-none mobile-menu-button text-4xl hover:text-red-500 "
          >
            {isOpen ? <IoMdClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <nav className=" border-t-2 border-t-home-blue font-poppins font-bold  bg-white ">
          <a
            href="#"
            className="flex px-4 py-2 items-center gap-4 border-b-2 text-md hover:tracking-widest hover:text-red-500 hover:bg-home-blue"
          >
            <Link to="/"> Home</Link>  <BiHome  className="text-lg"/> 
          </a>
          <a
            
            className="flex px-4 py-2 items-center gap-4 border-b-2 text-md hover:tracking-widest hover:text-red-500 hover:bg-home-blue"
          >
           <Link to="/states"> States</Link> <CiLocationOn className="text-lg" />
          </a>
          <a
            
            className="flex px-4 py-2 items-center gap-4 border-b-2 text-md hover:tracking-widest hover:text-red-500 hover:bg-home-blue"
          >
           <Link to="/live"> Live-TV </Link> <SlScreenDesktop /> 
          </a>
          <a
           
            className="flex px-4 py-2 items-center gap-4 border-b-2 text-md hover:tracking-widest hover:text-red-500 hover:bg-home-blue"
          >
            <Link to="/photos"> Photos </Link> <MdOutlinePhotoSizeSelectActual  />
          </a>
          <a
           
            className="flex px-4 py-2 items-center gap-4 border-b-2 text-md hover:tracking-widest hover:text-red-500 hover:bg-home-blue"
          >
           <Link to="/videos"> Videos</Link> <MdOutlineFitScreen className="text-lg" />
          </a>
          <a
            href="#"
            className="flex px-4 py-2 items-center gap-4 border-b-2 text-md hover:tracking-widest hover:text-red-500 hover:bg-home-blue"
          >
          <Link to="/nodata">Web-Stories</Link> <FaTheaterMasks className="text-lg" />
          </a>

        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
