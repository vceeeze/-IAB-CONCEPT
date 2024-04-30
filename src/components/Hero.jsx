import React from "react";
import img from "../assets/bgImage.jpeg";

const Hero = () => {
  return (
    <div className="w-[full] mx-auto min-h-[50vh]">
      <div className="max-h-[1000px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[900px]  bg-black/40  ">
          <div className="md:ml-[13%] mt-20 mx-5">
            <h1 className="text-4xl md:text-6xl font-bold md:w-[40%]">
              WELCOME TO IAB CONCEPT.
            </h1>

            <p className="md:text-3xl text-2xl mt-3 font-light md:w-[40%]">
              Subscribe to get up to 30% discount this weekend
            </p>

            <button className="rounded-[10px] bg-[#E9853C] h-[45px] w-[160px] text-white my-5 border-[#E9853C]">
              GET STARTED
            </button>
          
          </div>
        </div>
        <img
          className="w-full object-cover min-h-[70vh] max-h-[80vh]"
          src={img}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
