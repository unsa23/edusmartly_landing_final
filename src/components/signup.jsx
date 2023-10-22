import React from "react";
import Lottie from "lottie-react";
import SignupAnimationData from "../assets/signup.json";

const Signup = () => {
  return (
    <div className="w-full py-16  text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Want To Give Your Institution A Better ERP?
          </h1>
          <p>
            Share your contact information, and we'll reach out to you promptly!
          </p>
          <Lottie
            animationData={SignupAnimationData}
            loop={true}
            className="md:w-[500px] sm:w-[400px] sm:h-[400px] h-[500px] lg:my-[-68px] lg:mx-40"
          />
        </div>
        <div className="my-4 ">
          <div className="flex flex-col  items-center justify-between w-full ">
            <input
              className="p-3 mb-3 mt-2 w-full rounded-md text-black"
              type="text"
              placeholder="School Name"
            />
            <input
              className="p-3 mb-3 w-full rounded-md text-black"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="p-3 mb-3 w-full rounded-md text-black"
              type="number"
              placeholder="Phone Number"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
