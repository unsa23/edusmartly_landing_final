import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl mt-2 font-bold text-[#00df9a]">
        EDUSMARTLY.
      </h1>
      <ul className="hidden md:flex ">
        <li className="p-4 ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="mb-1 border-b-4 border-transparent hover:border-[#00df9a] cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="border-b-4 border-transparent hover:border-[#00df9a] cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="signup"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className=" border-b-4 border-transparent hover:border-[#00df9a] cursor-pointer"
          >
            Signup
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="border-b-4 border-transparent hover:border-[#00df9a] cursor-pointer"
          >
            Pricing
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="border-b-4 border-transparent hover:border-[#00df9a] cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={20} className="mt-2" />
        ) : (
          <AiOutlineMenu size={20} className="mt-2" />
        )}
      </div>
      <div
        className={
          nav
            ? "absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900"
        }
      >
        <h1 className="w-full text-3xl mt-2 font-bold text-[#00df9a] m-4">
          EDUSMARTLY.
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">
            {" "}
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            {" "}
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            {" "}
            <Link
              to="signup"
              spy={true}
              smooth={true}
              offset={5}
              duration={500}
            >
              Signup
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            {" "}
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Pricing
            </Link>
          </li>

          <li className="p-4 border-b border-gray-600">
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
