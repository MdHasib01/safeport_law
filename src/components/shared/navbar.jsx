import React, { useState } from "react";
import logo from "../../assets/safeportlaw-logo-with-text.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import { IoIosLogOut } from "react-icons/io";
import { logout } from "../../store/features/auth/slice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();
  const dispatch = useDispatch();
  return (
    <div className="bg-emerald-50 pb-8 mx-4">
      <div className="container flex justify-between items-center bg-white px-4 py-8 rounded-b-3xl shadow-md">
        <div className="flex gap-8 items-center">
          <img
            src={logo}
            alt=""
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <ul className="lg:flex gap-4 font-semibold hidden items-center">
            <li className="cursor-pointer">Credit</li>
            <li className="cursor-pointer">Out Promise</li>
            <li className="cursor-pointer">FAQ</li>
            {isLoggedIn && (
              <li
                className="cursor-pointer text-emerald-600 border border-emerald-600 rounded-3xl px-4 py-1"
                onClick={() => navigate("/chat")}
              >
                Chat
              </li>
            )}
          </ul>
        </div>
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="font-semibold hidden lg:block mr-4 cursor-pointer">
              Login
            </button>
          </Link>
        ) : (
          <button
            className=" items-center gap-2 font-semibold hidden lg:flex mr-4 cursor-pointer border px-4 py-1 text-emerald-600 border-emerald-600 rounded-3xl"
            onClick={() => dispatch(logout())}
          >
            Log out <IoIosLogOut />
          </button>
        )}
        <GiHamburgerMenu
          className="w-8 h-8 lg:hidden text-emerald-500"
          onClick={() => setOpen(true)}
        />
      </div>
      <div>
        <div
          className={`bg-white h-screen w-full fixed z-10 top-0 left-0 duration-300 translate-x-0 ${
            open ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-full`}
        >
          <div className="border-b border-emerald-500 py-8 px-4 p flex items-center justify-between">
            <img src={logo} alt="" />
            <FaArrowRightLong
              className="w-6 h-6 "
              onClick={() => setOpen(false)}
            />
          </div>
          <ul className="flex  flex-col gap-8 font-semibold p-4 text-xl">
            <li>Credit</li>
            <li>Out Promise</li>
            <li>FAQ</li>
            <li>
              {!isLoggedIn ? (
                <Link to="/login">
                  <button className="w-full rounded-full p-2 border font-semibold border-gray-300">
                    Login
                  </button>
                </Link>
              ) : (
                <button className="w-full rounded-full p-2 border font-semibold border-gray-300">
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
