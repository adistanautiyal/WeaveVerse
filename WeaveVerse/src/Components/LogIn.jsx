import React, { useContext, useState } from "react";
import LoginPage from "../assets/LoginPage.png";
import SigninPage from "../assets/SigninPage.png";
import AuthContext from "../context/AuthContext";

const LogIn = () => {
  const { Account, toggleAccount, onInputChange, signup, login } = useContext(AuthContext);
  
  // Prevent form default submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents page reload

    // Check if it's a login or signup form and call the respective function
    if (Account === "login") {
      login(); // Call the login function (You need to implement this)
    } else {
      signup(); // Call the signup function (You need to implement this)
    }
  };

  const signUpUser=()=>{};

  return (
    <>
      {Account === "login" ? (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="w-[32rem] p-10 rounded-lg relative"
            style={{ backgroundColor: "#E1DAD2" }}
          >
            {/* Close Button */}
            <button className="absolute top-0 right-2 text-xl font-bold text-gray-600">
              &times;
            </button>

            {/* Login Header */}
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
              Log In
            </h2>

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={LoginPage}
                alt="Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Login Form */}
            <form onSubmit={handleFormSubmit}>
              {/* Username Input */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="USERNAME"
                  className="w-full p-3 border border-gray-400 rounded-2xl bg-[#E1DAD2]"
                  onChange={onInputChange}
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="PASSWORD"
                  className="w-full p-3 border border-gray-400 rounded-2xl bg-[#E1DAD2]"
                  onChange={onInputChange}
                />
              </div>

              {/* Forgot Password Link */}
              <div className="mb-4 text-right">
                <button className="text-sm text-gray-500">
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="w-1/2 py-2 bg-[#536e39] text-white rounded-2xl hover:bg-[#89A073] transition-all text-lg"
                >
                  Log In
                </button>
              </div>

              {/* Sign-up Option */}
              <div className="text-center">
                <p className="text-sm">
                  Not having an account?{" "}
                  <button
                    type="button"
                    onClick={toggleAccount}
                    className="text-[#3c5c1e]"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="w-[32rem] p-10 rounded-lg relative"
            style={{ backgroundColor: "#E1DAD2" }}
          >
            {/* Close Button */}
            <button className="absolute top-0 right-2 text-xl font-bold text-gray-600">
              &times;
            </button>

            {/* Sign-Up Header */}
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
              Sign Up
            </h2>

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={SigninPage}
                alt="Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Sign-Up Form */}
            <form onSubmit={handleFormSubmit}>
              {/* Username Input */}
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="USERNAME"
                  className="w-full p-3 border border-gray-400 rounded-2xl bg-[#E1DAD2]"
                  onChange={onInputChange}
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <input
                  name="email"
                  type="email"
                  placeholder="E-MAIL"
                  className="w-full p-3 border border-gray-400 rounded-2xl bg-[#E1DAD2]"
                  onChange={onInputChange}
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <input
                  name="password"
                  type="password"
                  placeholder="PASSWORD"
                  className="w-full p-3 border border-gray-400 rounded-2xl bg-[#E1DAD2]"
                  onChange={onInputChange}
                />
              </div>

              {/* Sign-Up Button */}
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  onClick={()=>signUpUser()}
                  className="w-1/2 py-2 bg-[#536e39] text-white rounded-2xl hover:bg-[#89A073] transition-all text-lg"
                >
                  Sign Up
                </button>
              </div>

              {/* Log-in Option */}
              <div className="text-center">
                <p className="text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleAccount}
                    className="text-[#3c5c1e]"
                  >
                    Log In
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
