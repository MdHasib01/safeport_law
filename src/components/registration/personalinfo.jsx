import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../store/features/registration/slice";

const Personalinfo = ({ setActiveTab }) => {
  const states = useSelector((state) => state.registration.states);
  const dispatch = useDispatch();

  const initialState = useSelector((state) => state.registration.personalInfo);

  const [personalInfo, serPersonalInfo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPersonalInfo(personalInfo));
    setActiveTab(2);
  };
  return (
    <div className="container mt-8">
      <h1 className="text-3xl text-[#fc8937] font-bold my-2">
        Congratulations on taking a smart step!
      </h1>
      <p className="text-gray-600 text-lg">
        <span className="font-bold">
          To sign up please enter the following information.
        </span>{" "}
        This and every Get Started page is encrypted to protect your privacy and
        personal information.
      </p>
      <p className="text-gray-600 text-lg">
        Already have an account?{" "}
        <span className="text-[#fc8937] underline cursor-pointer ">
          Log In Here.
        </span>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid gird-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="md:col-span-2">
            <label className="">Home Address</label>
            <input
              required
              value={personalInfo.homeAddress}
              onChange={(e) => {
                serPersonalInfo({
                  ...personalInfo,
                  homeAddress: e.target.value,
                });
              }}
              type="text"
              className="w-full bg-white rounded-3xl border border-emerald-700 py-2 px-4 mt-2"
            />
            <p className="text-red-600 text-sm hidden">
              Please enter your home address
            </p>
          </div>
          <div>
            <label className="">Zip Code</label>
            <input
              required
              type="text"
              value={personalInfo.zipCode}
              onChange={(e) => {
                serPersonalInfo({ ...personalInfo, zipCode: e.target.value });
              }}
              className="w-full bg-white rounded-3xl border border-emerald-700 py-2 px-4 mt-2"
            />
            <p className="text-red-600 text-sm hidden">
              Please enter your unit/appartment details
            </p>
          </div>
          <div className="md:col-span-2">
            <label className="">City</label>
            <input
              required
              value={personalInfo.city}
              onChange={(e) => {
                serPersonalInfo({ ...personalInfo, city: e.target.value });
              }}
              type="text"
              className="w-full bg-white rounded-3xl border border-emerald-700 py-2 px-4 mt-2"
            />
            <p className="text-red-600 text-sm hidden">
              Please enter your home address
            </p>
          </div>
          <div>
            <label className="">State</label>
            <select
              required
              name=""
              id=""
              className="w-full bg-white rounded-3xl border border-emerald-700 py-2 px-4 mt-2"
            >
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <p className="text-red-600 text-sm hidden">
              Please enter your unit/appartment details
            </p>
          </div>
          <div className="md:col-span-2">
            <label className="">Phone Number</label>
            <input
              required
              value={personalInfo.phone}
              onChange={(e) => {
                serPersonalInfo({ ...personalInfo, phone: e.target.value });
              }}
              type="text"
              className="w-full bg-white rounded-3xl border border-emerald-700 py-2 px-4 mt-2"
            />
            <p className="text-red-600 text-sm hidden">
              Please enter your home address
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button type="submit" disabled className="btn-secondary w-48 my-8">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Personalinfo;
