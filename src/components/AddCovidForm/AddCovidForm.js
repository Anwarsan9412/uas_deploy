import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import Alert from "../Alert/Alert";
import StyledAddCovidForm from "./AddCovidForm.styled";
import { updateProvinces } from "../../features/ProvincesSlice";
import { useRef } from "react";
import Button from "../ui/Button";

const AddCovidForm = () => {
  const dispatch = useDispatch();
  const provinces = useSelector((store) => store.provinces.provinces);

  const [selectedProvinces, setSelectedProvinces] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedJumlah, setSelectedJumlah] = useState("");

  const [isprovinceseError, setIsprovincesError] = useState(false);
  const [isJumlahError, setIsJumlahError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const ref = useRef(null);

  function validate() {
    if (selectedProvinces === "") {
      setIsprovincesError(true);
      return false;
    } else if (selectedStatus === "") {
      setIsStatusError(true);
      setIsprovincesError(false);
      return false;
    } else if (selectedJumlah === "") {
      setIsJumlahError(true);
      setIsStatusError(false);
      return false;
    } else {
      setIsprovincesError(false);
      setIsStatusError(false);
      setIsJumlahError(false);
      return true;
    }
  }

  function SubmitProvinces() {
    dispatch(
      updateProvinces({
        kota: selectedProvinces,
        status: selectedStatus,
        total: selectedJumlah,
      })
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    validate() && SubmitProvinces();
    ref.current.value = "";
    setSelectedJumlah("");
  };

  return (
    <StyledAddCovidForm>
      <div>
        <section>
          <div>
            <img src="https://picsum.photos/536/354" alt="" />
          </div>
          <div>
            <h2>Form Covid</h2>
            <form onSubmit={handleUpdate}>
              <div>
                <label htmlFor="provinces">Provinsi</label>
                <select
                  defaultValue={"default"}
                  name="provinces"
                  id="provinces"
                  ref={ref}
                  onClick={(e) => setSelectedProvinces(e.target.value)}
                >
                  <option value={"default"} disabled>
                    -- Choice --
                  </option>
                  {provinces.provinces.map((province, index) => (
                    <option key={index} value={province.kota}>
                      {province.kota}
                    </option>
                  ))}
                </select>
                {isprovinceseError && <Alert>Provinsi Wajib Di Pilih</Alert>}
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  onClick={(e) => setSelectedStatus(e.target.value)}
                  defaultValue={"default"}
                >
                  <option value={"default"} disabled>
                    -- Choice --
                  </option>
                  <option value="kasus">Positif</option>
                  <option value="sembuh">Sembuh</option>
                  <option value="dirawat">Dirawat</option>
                  <option value="meninggal">Meninggal</option>
                </select>
                {isStatusError && <Alert>Status Wajib Di Pilih</Alert>}
              </div>
              <div>
                <label htmlFor="jumlah">Jumlah</label>
                <input
                  id="jumlah"
                  name="jumlah"
                  type="number"
                  ref={ref}
                  onChange={(e) => setSelectedJumlah(e.target.value)}
                />
                {isJumlahError && <Alert>Jumlah Wajib Diisi</Alert>}
              </div>

              <div>
                <Button full variant="secondary" padding="lg">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </StyledAddCovidForm>
  );
};

export default AddCovidForm;
