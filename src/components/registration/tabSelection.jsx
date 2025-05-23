import React from "react";

import { IoMdArrowDropright } from "react-icons/io";
const TabSelection = ({ activeTab }) => {
  return (
    <div className="container flex justify-center">
      <ul className="mt-28 flex flex-col md:flex-row gap-4  ">
        <li className="flex flex-col md:flex-row items-center">
          <span
            className={` border border-emerald-600 ${
              activeTab === 1 ? "bg-emerald-600 text-white" : "text-emerald-600"
            }       text-xl px-4 py-1 rounded mr-0 duration-300`}
          >
            1. Contact Informations
          </span>
          <IoMdArrowDropright className="text-emerald-600 rotate-90 md:rotate-0 text-2xl" />
        </li>
        {/* <li className="flex flex-col md:flex-row items-center">
          <span
            className={` border border-emerald-600 ${
              activeTab === 2 ? "bg-emerald-600 text-white" : "text-emerald-600"
            }       text-xl  px-4 py-1 rounded mr-0 duration-300`}
          >
            2. Select Service Level
          </span>
          <IoMdArrowDropright className="text-emerald-600 rotate-90 md:rotate-0 text-2xl" />
        </li> */}
        {/* <li className="flex flex-col md:flex-row items-center">
          <span
            className={` border border-emerald-600 ${
              activeTab === 3 ? "bg-emerald-600 text-white" : "text-emerald-600"
            }       text-xl px-4 py-1 rounded mr-0 duration-300`}
          >
            3. Payment Details
          </span>
          <IoMdArrowDropright className="text-emerald-600 rotate-90 md:rotate-0 text-2xl" />
        </li> */}
        <li className="flex flex-col md:flex-row items-center">
          <span
            className={` border border-emerald-600 ${
              activeTab === 2 ? "bg-emerald-600 text-white" : "text-emerald-600"
            }       text-xl px-4 py-1 rounded mr-0 duration-300`}
          >
            2. Agreement
          </span>
          <IoMdArrowDropright className="text-emerald-600 rotate-90 md:rotate-0 text-2xl" />
        </li>
        <li className="flex flex-col md:flex-row items-center">
          <span
            className={` border border-emerald-600 ${
              activeTab === 3 ? "bg-emerald-600 text-white" : "text-emerald-600"
            }       text-xl px-4 py-1 rounded mr-0 duration-300`}
          >
            3. Create Account
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TabSelection;
