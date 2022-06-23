import React from "react";
import DataProvinces from "../components/DataProvinces/DataProvinces";
import Hero from "../components/Hero";
import AddCovidForm from "../components/AddCovidForm/AddCovidForm";

const Provinces = () => {
  return (
    <>
      <Hero />
      <DataProvinces />
      <AddCovidForm />
    </>
  );
};

export default Provinces;
