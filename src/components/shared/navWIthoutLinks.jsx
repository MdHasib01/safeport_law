import React from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/safeportlaw-logo-with-text.svg";

const NavWIthoutLinks = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow-xl py-8 z-50">
      <div className="container">
        <img
          src={logo}
          className="w-48 cursor-pointer"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>
    </nav>
  );
};

export default NavWIthoutLinks;
