import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../store/features/registration/slice";
import { useNavigate } from "react-router";

const BannerRegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Selectors
  const states = useSelector((state) => state.registration.states);

  const initialState = useSelector((state) => state.registration.personalInfo);

  const [personalInfo, serPersonalInfo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPersonalInfo(personalInfo));
    navigate("/register");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input
          className="p-4 border border-gray-300 rounded-lg w-full "
          type="text"
          placeholder="First Name"
          value={personalInfo.firstname}
          onChange={(e) =>
            serPersonalInfo({ ...personalInfo, firstname: e.target.value })
          }
          required
        />
        <input
          className="p-4 border border-gray-300 rounded-lg w-full "
          type="text"
          placeholder="Last Name"
          value={personalInfo.lastname}
          onChange={(e) =>
            serPersonalInfo({ ...personalInfo, lastname: e.target.value })
          }
          required
        />
        <input
          className="p-4 border border-gray-300 rounded-lg w-full mb-4"
          type="text"
          placeholder="+1 (___) ___-____"
          value={personalInfo.phone}
          onChange={(e) =>
            serPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
          required
        />
        <input
          className="p-4 border border-gray-300 rounded-lg w-full mb-4"
          type="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={(e) =>
            serPersonalInfo({ ...personalInfo, email: e.target.value })
          }
          required
        />
      </div>
      <select
        name=""
        id=""
        className="p-4 border border-gray-300 rounded-lg w-full mb-4"
      >
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
      <button type="submit" className="btn-primary w-full">
        Sign up now
      </button>
    </form>
  );
};

export default BannerRegisterForm;
