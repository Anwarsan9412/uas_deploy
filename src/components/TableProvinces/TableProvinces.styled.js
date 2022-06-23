import styled from "styled-components";

const StyledTableprovinces = styled.div`
  overflow-x: auto;
  table {
    border-collapse: collapse;
    width: 100%;
    background-color: white;
  }
  table,
  td,
  th {
    border: 0.5px solid #ddd;
    text-align: left;
    font-size: 1rem;
  }
  th,
  td {
    text-align: center;
  }

  th {
    color: #06d6a0;
    padding: 0.8rem;
    /* background-color: #eeeeee; */
  }
  tr:nth-child(even) {
    background-color: #f1f8e9;
  }
`;
export default StyledTableprovinces;
