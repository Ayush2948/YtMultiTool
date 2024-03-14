import React from "react";

const About = ({ isLoggedIn }) => {
  return (
    <div className="flex-col h-full mx-12 mt-4">
      <div className="text-3xl font-bold">How It Works</div>
      <div className="text-lg font-medium my-2">
        Our Dynamic Traffic Signaling system intelligently reallocates signal
        times based on traffic density, redistributing time to lanes where
        congestion is highest. Meanwhile, our Emergency Vehicle Detection
        technology utilizes audio and video cues to detect and prioritize the
        passage of emergency vehicles. By seamlessly integrating these
        solutions, ClearPath ensures efficient and uninterrupted emergency
        response.
      </div>
      <div className="text-3xl font-bold mt-6 ">Key Features</div>
      <div>
        <div className="text-2xl font-semibold mt-2">
          Dynamic Traffic Signaling
        </div>
        <div className="text-lg font-medium">
          Adaptive signal adjustments optimize traffic flow. Emergency Vehicle
        </div>
        <div className="text-2xl font-semibold mt-4">Detection</div>
        <div className="text-lg font-medium">
          Cutting-edge AI identifies and prioritizes emergency vehicles.
        </div>
        <div className="text-2xl font-semibold mt-4">
          User-Friendly Interface
        </div>
        <div className="text-lg font-medium">
          Intuitive design for seamless interaction.
        </div>
      </div>
    </div>
  );
};

export default About;
