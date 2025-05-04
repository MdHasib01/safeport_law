import React from "react";
import logo from "../../assets/logo-footer.svg";

const Footer = () => {
  return (
    <div className="bg-emerald-700">
      <div className="container">
        <div className="grid  md:grid-cols-3 gap-12 md:gap-8 lg:gap-32 mb-4">
          <img src={logo} alt="logo" className="" />
          <div className="flex justify-between gap-2 mb-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl text-white">Credit Info</h3>
              <p className="text-white cursor-pointer hover:underline  text-xl">
                FAQs
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl text-white">About</h3>
              <p className="text-white cursor-pointer hover:underline  text-xl">
                Our Promise
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-white font-bold text-2xl">Legal</li>
            <li className="text-white hover:underline  text-xl cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-white hover:underline  text-xl cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-white hover:underline  text-xl cursor-pointer">
              BLBA Privacy Notice
            </li>
            <li className="text-white hover:underline  text-xl cursor-pointer">
              Your California Privacy Rights
            </li>
            <li className="text-white hover:underline  text-xl cursor-pointer">
              Do Not Sell Request
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6 border-t border-gray-400">
        <p className="text-white text-left lg:text-center text-s,">
          © Safeport Law®. All rights reserved. Coleman Legal, LLC dba Safeport
          Law, and of counsel attorneys. 133 Main St. LaGrange, GA, 30240.
          Attorney Advertising
        </p>
      </div>
    </div>
  );
};

export default Footer;
