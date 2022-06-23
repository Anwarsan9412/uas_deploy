import styled from "styled-components";

const StyledGlobals = styled.div`
  * {
    margin-bottom: 1rem;
  }
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
  section {
    text-align: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    div > section > div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      text-align: center;
    }
  }
`;

export default StyledGlobals;
