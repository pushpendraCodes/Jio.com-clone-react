import React from "react";

const FiveG_Poster = () => {
  return (
    <div className="p-5">
      <div
        // style={{ height: "19rem" }}
        className="container py-10 rounded-2xl  text-white fiveG-bg mx-auto text-center bg-no-repeat overflow-hidden  my-10"
      >
        <div className="  text-center  mx-auto my-5 flex flex-col  items-center ">
          <img
            className=" w-36 h-12 mb-5"
            src="https://jep-asset.akamaized.net/jiostaticresources/v05/images/True5G-Badge-07-07-2023.svg"
            alt=""
          />
          <h2 className="text-4xl font-bold ">Now In 6,525 Neighbourhoods</h2>
        </div>

        <button className="bg-white text-orange-600 p-3 px-4 font-bold hover:bg-orange-600 hover:text-white rounded-3xl mt-10">
          Check True 5G Coverage
        </button>
      </div>
    </div>
  );
};

export default FiveG_Poster;
