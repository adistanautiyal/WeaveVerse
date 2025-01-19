import React from 'react';

import logo from '../assets/logo.png'; // Logo image
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center">
      {/* Top Section with Logo and Centered Navbar */}
      <div className="w-full flex justify-between items-center p-4">
        {/* Logo */}
         
       

        {/* Navbar */}
        <div className="flex-grow flex justify-center">
          <Navbar />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-grow flex flex-row justify-center items-center w-full px-6">
        {/* Text Content */}
        <div className="w-3/4 text-left pr-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact</h1>

          <img src={logo} alt="Logo" className="h-10 w-auto" />
        
        </div>

      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
