import React from "react";
import HeroGIF from "../components/HeroGIF";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="flex justify-center items-center h-full mx-8">
      <div className="mx-4">
        <div className="flex mx-4 text-3xl font-bold my-4">
          The Green Light for Emergency Response Efficiency
        </div>
        <div className="flex justify-center text-xl font-medium my-4 mx-4">
          Welcome to ClearPath, where we revolutionize urban traffic control to
          prioritize emergency response vehicles. Our cutting-edge technology
          combines AI and real-time monitoring to ensure swift and efficient
          passage for emergency heroes - whether it's a speeding ambulance or a
          police cruiser racing against time.
        </div>
      </div>
      <div>
        <HeroGIF />
      </div>
    </div>
  );
};

export default Home;
