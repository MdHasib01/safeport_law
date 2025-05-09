import React from "react";
import { useSelector } from "react-redux";
import creditCards from "../../assets/creditcards.jpg";
const PaymentSection = ({ setActiveTab }) => {
  const personalInfo = useSelector((state) => state.registration.personalInfo);
  console.log(personalInfo);
  const month = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = [
    "year",
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
    2031,
    2032,
    2033,
    2034,
    2035,
    2036,
  ];
  return (
    <div className="container my-20">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <h2 className="text-2xl text-[#fc8937] mb-4 uppercase">
            Billing Address
          </h2>
          <p>{personalInfo.homeAddress}</p>
          <p>
            {personalInfo.city}
            {personalInfo.state ? ", " : ""}
            {personalInfo.state}
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[#fc8937] mb-4 uppercase">
            Billing Information
          </h2>
          <img src={creditCards} alt="credit cards" className="h-10" />
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4 items-center">
              <label className="text-gray-600">Credit / Debit Card:</label>
              <input
                type="text"
                placeholder="____-____-____-____"
                className="border rounded-3xl border-emerald-700 p-2"
              />
            </div>
            <div className="grid grid-cols-4 gap-4 items-center">
              <label className="text-gray-600 col-span-2">
                Expiration Date:
              </label>
              <select className="border rounded-3xl border-emerald-700 p-2">
                {month.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
              <select className="border rounded-3xl border-emerald-700 p-2">
                {year.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <label className="text-gray-600">Sicurity Code:</label>
              <input
                type="text"
                placeholder="____"
                className="border rounded-3xl border-emerald-700 p-2"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={() => {
            setActiveTab(4);
          }}
          className="btn-secondary w-48 my-8"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
