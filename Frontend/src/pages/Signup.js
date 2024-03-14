import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join the hands to save the city"
      desc1="Paving the Way for Safer Cities."
      desc2="Building safer cities, one innovation at a time."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
