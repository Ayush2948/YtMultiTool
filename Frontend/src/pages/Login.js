import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Paving the Way for Safer Cities."
      desc2="Building safer cities, one innovation at a time."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
