import StyledGlobals from "./Globals.styled";
import DataGlobal from "../DataGlobal/DataGlobal";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGlobal } from "../../features/GlobalsSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function DataGlobals({ title, desc }) {
  const dispatch = useDispatch();
  const globals = useSelector((store) => store.globals.globals);

  useEffect(() => {
    getDataGlobal();
  }, []);

  const getDataGlobal = async () => {
    try {
      const { data } = await axios.get(ENDPOINTS.GLOBAL);
      const globalsData = [
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
      dispatch(addGlobal(globalsData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledGlobals>
      <div>
        <section>
          {title ? <h2>{title}</h2> : <h2>Global</h2>}
          {desc ? <p>{desc}</p> : <p>Data Covid Berdasarkan Global</p>}
          <div>
            {globals.map((data, index) => {
              return <DataGlobal key={index} data={data} />;
            })}
          </div>
        </section>
      </div>
    </StyledGlobals>
  );
}

export default DataGlobals;
