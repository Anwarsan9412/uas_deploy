import React from "react";
import Tablehead from "../TableHead";
import TableBody from "../TableBody";
import StyledTableprovinces from "./TableProvinces.styled";

const TableProvinces = ({ provinces }) => {
  return (
    <StyledTableprovinces>
      <div>
        <table>
          <thead>
            <tr>
              <Tablehead />
            </tr>
          </thead>
          <tbody>
            {provinces.provinces.map((province, index) => {
              return (
                <TableBody province={province} key={index} index={index} />
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledTableprovinces>
  );
};

export default TableProvinces;
