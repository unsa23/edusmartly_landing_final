import React from "react";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

import footerAnimation from "../assets/footer.json";
import Lottie from "lottie-react";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          EDUSMARTLY.
        </h1>
        <p className="pt-4 font-semibold">
          Phone:
          <span className="font-light">
            +91 - 9452125449 /+91 - 6387001815
          </span>{" "}
        </p>
        <p className=" font-semibold">
          Email:
          <span className="font-light"> edusmartlyconnect@gmail.com</span>{" "}
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaYoutubeSquare size={30} />
        </div>
      </div>

      <div className="lg:w-[140px] md:mx-9 ">
        <h6 className="font-medium text-gray-400 ">Useful Links</h6>
        <ul>
          <li className="py-2 text-sm">Home</li>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Signup</li>
          <li className="py-2 text-sm">Pricing</li>
          <li className="py-2 text-sm">Contact</li>
        </ul>
      </div>

      <div className="">
        <Lottie
          animationData={footerAnimation}
          loop={false}
          className="md:w-[500px] sm:w-[400px] sm:h-[400px] h-[500px] lg:my-[-68px] lg:mx-[-40%]"
        />
      </div>
    </div>
  );
};

export default Footer;
