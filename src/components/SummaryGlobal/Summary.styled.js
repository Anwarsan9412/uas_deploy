import styled from "styled-components";

const StyledSummary = styled.div`
  * {
    margin-bottom: 1rem;
  }

  /* small screen */
  margin: 1rem auto;
  padding: 1rem;
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

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
      border-radius: 25px;
    }
  }
`;
export default StyledSummary;
