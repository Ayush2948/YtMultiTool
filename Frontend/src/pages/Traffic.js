import React from "react";
import TrafficImage from "../assets/Traffic.png";

const Traffic = () => {
  return (
    <div className="h-full mx-auto">
      <img
        src={TrafficImage}
        alt="template hero image"
        width={800}
        loading="lazy"
      />
    </div>
  );
};

export default Traffic;
