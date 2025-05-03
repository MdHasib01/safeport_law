import React from "react";
import brand1 from "../assets/brands/money.png";
import brand2 from "../assets/brands/cre.png";
import brand3 from "../assets/brands/mysa.svg";
import { SlBadge } from "react-icons/sl";

const Brands = () => {
  return (
    <div className="bg-emerald-600 overflow-hidden w-full">
      <div className="container mx-auto py-8">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-white justify-center uppercase flex items-center gap-2 mb-6">
          <SlBadge className="text-yellow-500" /> Featured on top financial
          sites
        </h1>
        <div className="flex gap-2">
          <img
            src={brand1}
            className="bg-white py-1 px-8 rounded-full lg:rounded-xl w-60 h-10 lg:w-80 object-contain lg:h-12"
            alt="money"
          />
          <img
            src={brand2}
            className="bg-white py-1 px-8 rounded-full lg:rounded-xl w-60 h-10 lg:w-80 object-contain lg:h-12"
            alt="creditrepair"
          />
          <img
            src={brand3}
            className="bg-white py-1 px-8 rounded-full lg:rounded-xl w-60 h-10 lg:w-80 object-contain lg:h-12"
            alt="mysa"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
