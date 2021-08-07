import React from "react";

const Navbar = () => {
  return (
    <div className="bg-purple-200 w-full items-center flex justify-between px-1 md:px-10 py-5 space-x-2 sm:space-x-0">
      <h1 className="font-nunito text-xl sm:text-3xl md:text-4xl text-purple-700 font-semibold">
        TripAdvisor
      </h1>
      <div className="flex items-center space-x-1 sm:space-x-4 justify-end  sm:flex-grow-0">
        <input
          type="text"
          className="focus:outline-none focus:ring focus:border-purple-700  w-full text-lg py-2 px-1 mx:px-5 rounded"
        />
        <button className=" text-white bg-purple-400 rounded px-1 sm:px-3 py-2 sm:py-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
