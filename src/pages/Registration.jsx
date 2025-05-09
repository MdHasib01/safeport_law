import React, { useState } from "react";
import RegistrationNav from "../components/registration/nav";
import TabSelection from "../components/registration/tabSelection";
import Personalinfo from "../components/registration/personalinfo";
import Footer from "../components/shared/footer";
import ServiceSelection from "../components/registration/serviceSelection";
import PaymentSection from "../components/registration/paymentSection";
import Agreement from "../components/registration/agreement";

const Registration = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <RegistrationNav />
      <TabSelection activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 1 ? (
        <Personalinfo setActiveTab={setActiveTab} />
      ) : activeTab === 2 ? (
        <ServiceSelection setActiveTab={setActiveTab} />
      ) : activeTab === 3 ? (
        <PaymentSection setActiveTab={setActiveTab} />
      ) : (
        <Agreement />
      )}

      <Footer />
    </div>
  );
};

export default Registration;
