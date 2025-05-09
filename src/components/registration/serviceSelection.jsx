import React from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSrvice } from "../../store/features/registration/slice";

const ServiceSelection = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.registration.selectedSrvice);
  const programmes = useSelector((state) => state.registration.servicePlan);

  return (
    <div className="container my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="flex flex-col md:flex-row"
          onClick={() => dispatch(setSelectedSrvice(1))}
        >
          <div
            className={`border border-gray-300 ${
              selected === 1 ? "bg-emerald-100" : "bg-white"
            }  p-4 rounded overflow-hidden relative pt-12 pb-28`}
          >
            <p className="absolute top-6 -left-10 -rotate-45 uppercase bg-red-500 text-xs text-white py-1 px-8">
              Most Popular
            </p>
            <h2 className="text-center text-orange-600 font-semibold text-3xl ">
              Credit Cleanse+
            </h2>
            <p className="text-center font-semibold mt-2 mb-8">
              Aggressiveness:Very High
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <FaCheck />
                challenges to the 3 credit bureaus
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                score analysis
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                creditor interventions
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                score tracker
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                inquiry targeting
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                90-Day Money-Back Gurantee
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row"
          onClick={() => dispatch(setSelectedSrvice(2))}
        >
          <div
            className={`border border-gray-300 ${
              selected === 2 ? "bg-emerald-100" : "bg-white"
            }  p-4 rounded overflow-hidden relative pt-12 pb-28`}
          >
            <h2 className="text-center text-orange-600 font-semibold text-3xl ">
              Credit Cleanse
            </h2>
            <p className="text-center font-semibold mt-2 mb-8">
              Aggressiveness:Medium
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <FaCheck />
                challenges to the 3 credit bureaus
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                score analysis
              </li>

              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                score tracker
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCheck />
                90-Day Money-Back Gurantee
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-8 p-4 rounded bg-emerald-700 w-full grid grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-center text-white font-bold">First Work Fee</p>
          <p className="text-center text-white font-bold">
            {programmes[selected - 1].price}
          </p>
          <p className="text-center text-white font-bold">
            + applicable sales tax
          </p>
        </div>
        <div>
          <p className="text-center text-white font-bold">
            First Work Fee Date
          </p>

          <p className="text-center text-white font-bold">
            {new Date().toDateString()}
          </p>
        </div>
        <div>
          <p className="text-center text-white font-bold">Monthly Payment</p>
          <p className="text-center text-white font-bold">
            {programmes[selected - 1].price}
          </p>
          <p className="text-center text-white font-bold">
            + applicable sales tax
          </p>
        </div>
        <div>
          <p className="text-center text-white font-bold">
            First Recurring Fee date
          </p>

          <p className="text-center text-white font-bold">
            {new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ).toDateString()}
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="btn-secondary w-48 my-8"
          onClick={() => setActiveTab(3)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ServiceSelection;
