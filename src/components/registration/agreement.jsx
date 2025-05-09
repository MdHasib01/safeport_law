import React, { useState } from "react";

const Agreement = () => {
  const [aggree, setAggree] = useState(false);
  return (
    <div className="container">
      <h2 className="text-2xl text-[#fc8937] mb-4 font-bold mt-12">
        Chcek the box to complete the registration
      </h2>
      <div className="flex items-start gap-2 mb-8 mt-4">
        <input
          type="checkbox"
          className="mt-1"
          onChange={() => {
            setAggree(!aggree);
          }}
          checked={aggree}
        />
        <p className="text-justify">
          By clicking SIGN UP NOW you consent to be contacted at the above
          number or email by Safeport Law, LLC or its affiliates. This request
          will be dialed and responded to automatically, in some cases with
          pre-recorded messages for efficiency or via AI/Artificial voice calls.
          Consenting is not a required condition of purchase. No purchase is
          necessary by way of this consent and the call is free - no obligation!
          You also consent to receive text/SMS messages subject to your
          carrier’s cellular rates. If you do not consent, please call the
          number at the top of your screen. You understand by clicking on the
          button, you agree you are providing “written instructions” to Array
          and its partners to send you transactional messages for identify
          verification purposes.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={() => {}}
          className="btn-secondary opa w-48 my-8"
          disabled={!aggree}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Agreement;
