import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <div className="flex ">
          <img src={logo} alt="Logo" width={70} loading="lazy" />
          <div className="my-auto mx-8 text-2xl font-bold">ClearPath</div>
        </div>
      </Link>

      <nav>
        <ul className="flex gap-x-6">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log in
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
