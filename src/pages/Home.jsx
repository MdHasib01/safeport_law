import React from "react";
import Banner from "../components/banner";
import Brands from "../components/brands";
import Ourprocess from "../components/ourprocess";
import Navbar from "../components/shared/navbar";
import MoneyBack from "../components/moneyBack";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brands />
      <Ourprocess />
      <MoneyBack />
    </div>
  );
};

export default Home;
