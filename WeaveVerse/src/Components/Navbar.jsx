import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showLogIn, setShowLogIn] = useState(false);

  const handleProtectedNav = (path) => {
    const isAuthenticated = sessionStorage.getItem("accessToken");
    if (!isAuthenticated) {
      setShowLogIn(true);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <nav className="flex justify-center mt-8">
        <ul className="flex divide-x divide-[#000000] border border-[#000000] rounded-full overflow-hidden">
          {/* Use Link for navigation */}
          <li>
            <Link
              to="/story"
              className="px-6 py-4 bg-[#B7BAA5] text-black hover:bg-[#AEB48D] transition-all block"
            >
              Our story
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleProtectedNav("/write")}
              className="px-6 py-4 bg-[#B7BAA5] text-black hover:bg-[#AEB48D] transition-all block"
            >
              Write
            </button>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-6 py-4 bg-[#B7BAA5] text-black hover:bg-[#AEB48D] transition-all block"
            >
              Contact us
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleProtectedNav("/get-started")}
              className="px-6 py-4 bg-[#B7BAA5] text-black hover:bg-[#AEB48D] transition-all block"
            >
              Get started
            </button>
          </li>
        </ul>
      </nav>
      {showLogIn && <LogIn setShowLogIn={setShowLogIn} />}
    </>
  );
};

export default Navbar;
