import React from "react";
import { FaCheck } from "react-icons/fa";

const CreditAssistance = () => {
  return (
    <div className="bg-emerald-700 py-28 ">
      <div className="container flex flex-col gap-12">
        <div className="bg-white p-6 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-w bg-emerald-200 row-start-2 md:row-start-1  rounded-3xl shadow-2xl">
            <h1 className="font-bold text-2xl">
              Full-Coverage Credit Assistance
            </h1>
            <p className="my-4">
              We specialize in fighting all credit report inaccuracies that can
              harm your score and ability to get financial products like loans
              and mortgages. We manage disputes with creditors as well as the
              credit bureaus.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <FaCheck className="text-emerald-700" />
                challenges to the 3 credit bureaus
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-emerald-700" />
                score analysis
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-emerald-700" />
                creditor interventions
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-emerald-700" />
                score tracker
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-emerald-700" />
                inquiry targeting
              </li>
            </ul>
          </div>
          <div className="p-6  rounded-3xl lg:shadow-none shadow-2xl">
            <h1 className="font-bold text-3xl">Credit Cleanse+</h1>
            <p className="my-2 text-gray-700 font-semibold">
              Agressiveness: Very High
            </p>
            <p className="text-5xl font-bold text-emerald-700 mt-8 mb-2">
              $129.99<span className="text-black text-xl">/month</span>
            </p>

            <p className=" text-gray-700 ">+$129 initial working fee</p>
            <p className=" text-gray-700 mb-8">+ applicable sales tax</p>
            <button className="btn-primary w-full">Get Started</button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-w bg-emerald-200 row-start-2 md:row-start-1  rounded-3xl shadow-2xl">
            <h1 className="font-bold text-2xl">
              Full-Coverage Credit Assistance
            </h1>
            <p className="my-4">
              We specialize in fighting all credit report inaccuracies that can
              harm your score and ability to get financial products like loans
              and mortgages. We manage disputes with creditors as well as the
              credit bureaus.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <FaCheck className="text-emerald-700" />
                challenges to the 3 credit bureaus
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-emerald-700" />
                score analysis
              </li>

              <li className="flex items-center gap-2">
                {" "}
                <FaCheck className="text-emerald-700" />
                score tracker
              </li>
            </ul>
          </div>
          <div className="p-6  rounded-3xl lg:shadow-none shadow-2xl">
            <h1 className="font-bold text-3xl">Credit Cleanse</h1>
            <p className="my-2 text-gray-700 font-semibold">
              Agressiveness: Cleanse
            </p>
            <p className="text-5xl font-bold text-emerald-700 mt-8 mb-2">
              $89.99<span className="text-black text-xl">/month</span>
            </p>

            <p className=" text-gray-700 ">+$89 initial working fee</p>
            <p className=" text-gray-700 mb-8">+ applicable sales tax</p>
            <button className="btn-primary w-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditAssistance;
