import React, { useState } from "react";
import StartButton from "../Components/StartButton";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeImage from "../assets/HomeImage.png";
import logo from "../assets/logo.png";
import LogIn from "../Components/LogIn";

const LandingPage = () => {
  const [showLogIn , setshowLogIn]=useState(false);

  const handleStartReadingClick=()=>{
    setshowLogIn(true);
  }
  return (
    <div className="bg-[#E1DAD2] min-h-screen flex flex-col"> {/* Use flex layout and ensure full height */}
    <img
          src={logo}
          alt="Home"
          className="absolute top-8 left-8 w-232 h-50 object-contain"
        />
      <Navbar />
      <main className="flex-grow p-8 relative flex flex-col items-center justify-center"> {/* Main content grows to take remaining space */}
        {/* Top left image */}
        
        
        {/* Big text in the center */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Your Voice, Your Story, Your Space.
        </h1>

         {/* amall text in the center */}
         <h1 className="text-xl md:text-xl  text-center mb-8">
         A place to read, write and deepen your understanding
        </h1>
        
        {/* Bottom right image */}
        <img
          src={HomeImage}
          alt="Logo"
          className="absolute bottom-0 right-2 w-404 h-339 object-contain"
        />

       <StartButton  onClick={handleStartReadingClick} />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
