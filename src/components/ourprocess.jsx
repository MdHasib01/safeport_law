import React from "react";
import icon1 from "../assets/icons/our-process__setting-up.png";
import icon2 from "../assets/icons/our-process__reviewing.png";
import icon3 from "../assets/icons/our-process__oprimizing.png";
const Ourprocess = () => {
  return (
    <div className="container my-20">
      <h1 className="text-5xl font-bold mb-4 text-center">Our Process</h1>
      <p className="text-gray-900 text-xl text-center max-w-3xl mx-auto mb-12">
        Safeport Law targets the credit bureaus and creditors with challenges to
        correct credit report errors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" max-w-[350px] mx-auto">
          <div className="flex flex-col items-center ">
            <img src={icon1} alt="icon" className="w-28 h-28 mb-4" />
            <div className="bg-red-200 w-15 h-15 rounded-full flex justify-center  items-center">
              <p className="text-orange-700 font-bold text-3xl">1</p>
            </div>
            <h2 className="text-emerald-600 font-bold text-3xl text-center my-4">
              Setting Up
            </h2>
            <p className="text-gray-900 text-xl text-center">
              We gather some basic personal information and then securely pull a
              credit report, free of charge.
            </p>
          </div>
        </div>
        <div className=" max-w-[350px] mx-auto">
          <div className="flex flex-col items-center ">
            <img src={icon2} alt="icon" className="w-28 h-28 mb-4" />
            <div className="bg-red-200 w-15 h-15 rounded-full flex justify-center  items-center">
              <p className="text-orange-700 font-bold text-3xl">2</p>
            </div>
            <h2 className="text-emerald-600 font-bold text-3xl text-center my-4">
              Reviewing
            </h2>
            <p className="text-gray-900 text-xl text-center">
              We review your credit history and identify the items you disagree
              with that are damaging your credit.
            </p>
          </div>
        </div>
        <div className=" max-w-[350px] mx-auto">
          <div className="flex flex-col items-center ">
            <img src={icon3} alt="icon" className="w-28 h-28 mb-4" />
            <div className="bg-red-200 w-15 h-15 rounded-full flex justify-center  items-center">
              <p className="text-orange-700 font-bold text-3xl">3</p>
            </div>
            <h2 className="text-emerald-600 font-bold text-3xl text-center my-4">
              Analyzing & Optimizing
            </h2>
            <p className="text-gray-900 text-xl text-center">
              We analyze your positive credit and optimize your report using
              financial techniques suited to your situation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="btn-primary w-48 ">Create an account</button>
      </div>
    </div>
  );
};

export default Ourprocess;
