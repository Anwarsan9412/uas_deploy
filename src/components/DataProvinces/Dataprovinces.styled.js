import styled from "styled-components";

const StyledDataprovinces = styled.div`
  margin: 1rem auto;
  padding: 1rem;

  div > div {
    text-align: center;
    margin-bottom: 1rem;
  }
  h2 {
    font-family: "Poppins";
    font-style: normal;
    margin-bottom: 0.5rem;
    font-size: 1.95rem;
    text-align: center;
    color: #06d6a0;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: #118ab2;
    text-align: center;
  }
  div > div:nth-child(2) {
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  /* Small Screen */

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 800px;
  }
`;
export default StyledDataprovinces;
