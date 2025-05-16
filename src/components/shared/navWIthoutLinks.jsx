import React from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/safeportlaw-logo-with-text.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../store/features/auth/slice";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { IoIosLogOut } from "react-icons/io";

const NavWIthoutLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLoggedIn = useIsLoggedIn();
  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow-xl py-8 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            className="w-48 cursor-pointer"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <div>
            {userLoggedIn && (
              <button
                className=" items-center gap-2 font-semibold hidden lg:flex mr-4 cursor-pointer border px-4 py-1 text-emerald-600 border-emerald-600 rounded-3xl"
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
              >
                Log out <IoIosLogOut />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavWIthoutLinks;
