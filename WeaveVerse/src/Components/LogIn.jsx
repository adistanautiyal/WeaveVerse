import React from "react";
import LoginPage from "../assets/LoginPage.png";

const LogIn = () => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="w-[32rem] p-10 rounded-lg relative" // Adjusted width and padding
        style={{ backgroundColor: "#E1DAD2" }}
      >
        {/* Close Button */}
        <button
          //   onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600"
        >
          &times;
        </button>

        {/* Login Header */}
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Log In
        </h2>

        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src={LoginPage} // Update with actual image path
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Login Form */}
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full p-3 border border-gray-400 rounded-2xl bg-[#E1DAD2]"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full p-3 border border-gray-400 rounded-2xl bg-[#E1DAD2]"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="mb-4 text-right">
            <button className="text-sm text-gray-500">Forgot Password?</button>
          </div>

          {/* Login Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-1/2 py-2 bg-[#96A588] text-white rounded-2xl hover:bg-[#89A073] transition-all text-lg"
            >
              Log In
            </button>
          </div>

          {/* Sign-up Option */}
          <div className="text-center">
            <p className="text-sm">
              Not having an account?{" "}
              <button className="text-[#3c5c1e]">Sign Up</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
