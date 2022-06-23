import { useSelector } from "react-redux";
import TableProvinces from "../TableProvinces";
import StyledDataprovinces from "./Dataprovinces.styled";

const DataProvinces = () => {
  const provinces = useSelector((store) => store.provinces.provinces);

  return (
    <StyledDataprovinces>
      <div>
        <div>
          <h2>Provinsi</h2>
          <p>Data Covid Berdasarkan Provinsi</p>
        </div>
        <div>
          <TableProvinces provinces={provinces} />
        </div>
      </div>
    </StyledDataprovinces>
  );
};

export default DataProvinces;
