import React from "react";
import Banner from "../components/banner";
import Brands from "../components/brands";
import Ourprocess from "../components/ourprocess";
import Navbar from "../components/shared/navbar";
import MoneyBack from "../components/moneyBack";
import WhySafeport from "../components/whySafeport";
import CreditAssistance from "../components/creditAssistance";
import Footer from "../components/shared/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brands />
      <Ourprocess />
      <MoneyBack />
      <WhySafeport />
      <CreditAssistance />
      <Footer />
    </div>
  );
};

export default Home;
