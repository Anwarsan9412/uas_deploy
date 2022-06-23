import React from "react";
import styles from "./tableBody.module.css";
import StyledTableBody from "./TableBody.styled";

const TableBody = ({ province, index }) => {
  return (
    <>
      <tr>
        <td className={styles.table__no}>{index + 1}</td>
        <td>{province.kota}</td>
        <td className={styles.td__angka}>
          {province.kasus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td className={styles.td__angka}>
          {province.sembuh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td className={styles.td__angka}>
          {province.dirawat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
        <td className={styles.td__angka}>
          {province.meninggal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </td>
      </tr>
    </>
  );
};

export default TableBody;
