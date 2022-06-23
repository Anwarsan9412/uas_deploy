import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DataGlobals from "../components/DataGlobals/DataGlobals";
import { useState } from "react";
import AddCovidForm from "../components/AddCovidForm/AddCovidForm";
import data from "../utils/constants/provinces";
import DataProvinces from "../components/DataProvinces/DataProvinces";
import TableProvinces from "../components/TableProvinces";
import SummaryGlobal from "../components/SummaryGlobal";

function Home() {
  return (
    <>
      <Hero />
      <DataGlobals />
      <SummaryGlobal />
    </>
  );
}

export default Home;
