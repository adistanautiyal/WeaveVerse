import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center mt-16">
      <ul className="flex space-x  ">
        <li>
          <a
            href="#story"
            className="px-6 py-4 rounded-tl-2xl rounded-bl-2xl bg-[#B7BAA5] border border-[#000000] border-r-[#ffffff] text-blackhover:bg-[#AEB48D] transition-all"
          >
            Our story
          </a>
        </li>
        <li>
          <a
            href="#write"
            className="px-6 py-4  bg-[#B7BAA5] text-black border border-[#000000] border-r-[#ffffff] border-l-[#ffffff] hover:bg-[#AEB48D] transition-all"
          >
            Write
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="px-6 py-4  bg-[#B7BAA5] text-black border border-[#000000] border-r-[#ffffff] border-l-[#ffffff] hover:bg-[#AEB48D] transition-all"
          >
            Contact us
          </a>
        </li>
        <li>
          <a
            href="#get-started"
            className="px-6 py-4 rounded-tr-2xl rounded-br-2xl border border-[#000000] border-l-[#ffffff] bg-[#B7BAA5] text-black hover:bg-[#AEB48D] transition-all"
          >
            Get started
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
