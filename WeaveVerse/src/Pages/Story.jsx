import React from 'react';
import book from '../assets/book.png';
import logo from '../assets/logo.png'; // Logo image
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Story = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h1>
          <p className="text-lg text-gray-600 mb-4">
            We’re just a group of students trying to figure things out and
            learning as we go. This blog application is a result of our mini
            project—an idea that gave us a chance to experiment, build, and have
            some fun along the way.
          </p>
          <p className="text-lg text-gray-600">
            It’s not perfect, but it’s ours. Whether you’re here to read, write,
            or explore, we hope you enjoy it!
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </p>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <img
            src={book}
            alt="Staircase illustration"
            className="max-w-sm"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Story;
