import React from "react";
import Typed from "react-typed";
import ParticlesHome from "./particlesHome";

const Hero = () => {
  return (
    <div className="text-white">
      <ParticlesHome />
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold text-2xl">
          Unlock Educational Excellence
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
          Grow with Edusmartly.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
            We provide you the Best
          </p>
          <Typed
            className="md:text-4xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["Website", "App", "Customizations", "Integrations"]}
            typeSpeed={120}
            backkSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Effortlessly monitor student progress, manage staff, handle fees, and
          seamlessly integrate online payments
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
