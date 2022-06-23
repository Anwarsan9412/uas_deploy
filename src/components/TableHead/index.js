import React from "react";
import styles from "./tableHead.module.css";

const Tablehead = () => {
  return (
    <>
      <th className={styles.table__no}>No</th>
      <th>Provinsi</th>
      <th>Positif</th>
      <th>Sembuh</th>
      <th>Dirawat</th>
      <th>Meninggal</th>
    </>
  );
};

export default Tablehead;
