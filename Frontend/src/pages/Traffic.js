import React from "react";
import TrafficImage from "../assets/Traffic.png";

const Traffic = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center w-full">
        <div className="h-[120px] w-[120px] bg-black m-2 text-white">
          North Input
        </div>
        <div className="h-[120px] w-[120px] bg-black m-2 text-white">
          North Output
        </div>
      </div>
      <div className="Abosulte bg-green-600 mb-2 rounded-full border-4 mx-auto h-[50px] w-[50px]">
        North Signal
      </div>
      <div className="flex">
        <div className="flex-col my-auto h-full">
          <div className="h-[120px] w-[120px] bg-black m-2 text-white">
            West Input
          </div>
          <div className="h-[120px] w-[120px] bg-black m-2 text-white">
            West Output
          </div>
        </div>
        <div className="Abosulte bg-green-600 rounded-full border-4 mr-2 my-auto h-[50px] w-[50px]">
          West Signal
        </div>
        <img
          src={TrafficImage}
          alt="template hero image"
          width={500}
          loading="lazy"
        />
        <div className="Abosulte bg-green-600 rounded-full border-4 ml-2 my-auto h-[50px] w-[50px]">
          East Signal
        </div>
        <div className="flex-col my-auto h-full">
          <div className="h-[120px] w-[120px] bg-black m-2 text-white">
            East Input
          </div>
          <div className="h-[120px] w-[120px] bg-black m-2 text-white">
            East Output
          </div>
        </div>
      </div>
      <div className="Abosulte bg-green-600 rounded-full border-4 mt-2 mx-auto h-[50px] w-[50px]">
        South Signal
      </div>
      <div className="flex justify-center w-full">
        <div className="h-[120px] w-[120px] bg-black m-2 text-white">
          South Input
        </div>
        <div className="h-[120px] w-[120px] bg-black m-2 text-white">
          South Output
        </div>
      </div>
    </div>
  );
};

export default Traffic;
