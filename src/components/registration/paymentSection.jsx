import React from "react";
import { useDispatch, useSelector } from "react-redux";
import creditCards from "../../assets/creditcards.jpg";
import { setPaymentInfoStore } from "../../store/features/registration/slice";
const month = {
  0: "Month",
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
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
const PaymentSection = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.registration.personalInfo);

  const initialPaymentInfo = useSelector(
    (state) => state.registration.paymentInfo
  );
  const [paymentInfo, setPaymentInfo] = React.useState(initialPaymentInfo);

  const handleSubmit = () => {
    dispatch(setPaymentInfoStore(paymentInfo));
    setActiveTab();
  };
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
                value={paymentInfo.cardNumber}
                onChange={(e) =>
                  setPaymentInfo({
                    ...paymentInfo,
                    cardNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 gap-4 items-center">
              <label className="text-gray-600 col-span-2">
                Expiration Date:
              </label>
              <select
                className="border rounded-3xl border-emerald-700 p-2"
                value={paymentInfo.expiryMonth}
                onChange={(e) =>
                  setPaymentInfo({
                    ...paymentInfo,
                    expiryMonth: e.target.value,
                  })
                }
              >
                {Object.entries(month).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
              <select
                className="border rounded-3xl border-emerald-700 p-2"
                value={paymentInfo.expiryYear}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, expiryYear: e.target.value })
                }
              >
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
                value={paymentInfo.cvv}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
                }
                className="border rounded-3xl border-emerald-700 p-2"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button onClick={handleSubmit} className="btn-secondary w-48 my-8">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
