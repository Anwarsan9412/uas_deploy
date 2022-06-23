import styled from "styled-components";

const StyledTableBody = styled.div`
  /* small screen */
  td:nth-child(1) {
    width: 3%;
    text-align: center;
  }
  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;
export default StyledTableBody;
