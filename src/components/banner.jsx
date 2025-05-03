import React from "react";
import trophy1 from "../assets/trophy/trophy-100magazine.svg";
import trophy2 from "../assets/trophy/trophy-google.svg";
import trophy3 from "../assets/trophy/trophy-90days.svg";
import { FaLock } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="py-20 bg-gradient-to-t from-emerald-200 to-emerald-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <div className="flex flex-col text-center lg:text-left">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl ">
                Don&#8217;t fignt credit problems yourself.
              </h1>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#bf5432] mb-2">
                Send attorneys.
              </h2>
              <div className="flex lg:flex-col flex-row justify-center lg:justify-start gap-2 my-4">
                <p className="font-bold text-gray-500 lg:text-[#408b82] lg:text-3xl ">
                  50 States.
                </p>
                <p className="font-bold text-gray-500 lg:text-[#408b82] lg:text-3xl">
                  27 Attorneys.
                </p>
                <p className="font-bold text-gray-500 lg:text-[#408b82] lg:text-3xl ">
                  Zero Nonsense.
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start lg:mt-8">
              <img
                className="w-20 md:w-30 lg:w-40"
                src={trophy1}
                alt="trophy-100magazine"
              />
              <img
                className="w-20 md:w-30 lg:w-40"
                src={trophy2}
                alt="trophy-google"
              />
              <img
                className="w-20 md:w-30 lg:w-40"
                src={trophy3}
                alt="trophy-90days"
              />
            </div>
          </div>
          <div className=" bg-white px-8 py-4 rounded-lg shadow-xl">
            <h2 className="text-center text-[#408b82] font-bold text-3xl mb-2">
              Get started today!
            </h2>
            <p className="text-sm text-gray-500 mb-2 flex items-center justify-center gap-2">
              <FaLock className="text-[#408b82]" />
              We take your data protection seriously
            </p>
            <form>
              <input
                className="p-4 border border-gray-300 rounded-lg w-full mb-4"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="p-4 border border-gray-300 rounded-lg w-full mb-4"
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                className="p-4 border border-gray-300 rounded-lg w-full mb-4"
                type="text"
                placeholder="+1 (___) ___-____"
                required
              />
              <input
                className="p-4 border border-gray-300 rounded-lg w-full mb-4"
                type="email"
                placeholder="Email"
                required
              />
              <select
                name=""
                id=""
                className="p-4 border border-gray-300 rounded-lg w-full mb-4"
              >
                <option value="">Alaska</option>
                <option value="">Alabama</option>
                <option value="">Arizona</option>
                <option value="">Arkansas</option>
                <option value="">California</option>
                <option value="">Colorado</option>
                <option value="">Connecticut</option>
                <option value="">Delaware</option>
                <option value="">Florida</option>
                <option value="">Georgia</option>
                <option value="">Hawaii</option>
                <option value="">Idaho</option>
                <option value="">Illinois</option>
                <option value="">Indiana</option>
                <option value="">Iowa</option>
                <option value="">Kansas</option>
                <option value="">Kentucky</option>
                <option value="">Louisiana</option>
                <option value="">Maine</option>
                <option value="">Maryland</option>
                <option value="">Massachusetts</option>
              </select>
              <button className="btn-primary w-full">Sign up now</button>
            </form>
            <p className="text-justify text-xs text-gray-500 my-4">
              By clicking SIGN UP NOW you consent to be contacted at the above
              number or email by Safeport Law, LLC or its affiliates. This
              request will be dialed and responded to automatically, in some
              cases with pre-recorded messages for efficiency or via
              AI/Artificial voice calls. Consenting is not a required condition
              of purchase. No purchase is necessary by way of this consent and
              the call is free - no obligation! You also consent to receive
              text/SMS messages subject to your carrier’s cellular rates. If you
              do not consent, please call the number at the top of your screen.
              You understand by clicking on the button, you agree you are
              providing “written instructions” to Array and its partners to send
              you transactional messages for identify verification purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
