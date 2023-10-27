import React from "react";
import Laptop from "../assets/laptop.jpg";
import Lottie from "lottie-react";
import AboutAnimationData from "../assets/about.json";

const About = () => {
  return (
    <div id="about" className="bg-white w-full py-16 px-4  ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <Lottie
          className=" my-4 "
          animationData={AboutAnimationData}
          loop={true}
        />

        <div className="flex flex-col justify-center md:mx-2">
          <p className="text-[#00df9a] font-bold uppercase">
            What is Edusmartly?
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Streamlining School Operations with Edusmartly ERP Software
          </h1>
          <p>
            Edusmartly's ERP software for schools is designed to efficiently
            manage all day-to-day school activities. This includes
            administrative tasks, teaching, curriculum management, student
            attendance, student information, fee record management, homework
            management, and more.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
