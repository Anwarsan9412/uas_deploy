import React from "react";
import DataGlobals from "../components/DataGlobals/DataGlobals";
import Hero from "../components/Hero";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateGlobal } from "../features/GlobalsSlice";
import SummaryGlobal from "../components/SummaryGlobal";

const Indonesia = () => {
  const [indonesia, setIndonesia] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataIndonesia();
  }, []);

  const getDataIndonesia = async () => {
    try {
      const { data } = await axios.get(
        "https://covid19.mathdro.id/api/countries/indonesia"
      );
      const indonesiaData = [
        {
          status: "Confirmed",
          total: data.confirmed.value,
          detail: data.confirmed.detail,
        },
        {
          status: "Recovered",
          total: data.recovered.value,
          detail: data.recovered.detail,
        },
        {
          status: "Deaths",
          total: data.deaths.value,
          detail: data.deaths.detail,
        },
      ];
      dispatch(updateGlobal(indonesiaData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Hero />
      <DataGlobals
        globals={indonesia}
        title="Indonesia"
        desc="Data Covid Berdasarkan Indonesia"
      />
      <SummaryGlobal
        url="https://covid19.mathdro.id/api/countries/indonesia/og"
        title="Indonesia"
      />
    </>
  );
};

export default Indonesia;
