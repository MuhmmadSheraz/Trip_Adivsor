import React from "react";
import BannerImage from "../Assets/banner.jpg";
const Banner = () => {
  return (
    <div className="flex relative justify-center items-center flex-row">
      <img
        src={BannerImage}
        alt="group of peoples"
        className="h-h_90vh  w-screen"
      />
      <p className="absolute  top-1/2 text-center text-3xl w-full sm:text-4xl md:text-6xl font-semibold ">
        We Are Here For You...
      </p>
    </div>
  );
};

export default Banner;
