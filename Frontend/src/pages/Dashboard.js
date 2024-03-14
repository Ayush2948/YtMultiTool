import React from "react";
import CoolButton from "../components/Button/CoolButton";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center text-3xl h-full">
      <Link to="/traffic">
        <CoolButton />
      </Link>
    </div>
  );
};

export default Dashboard;
