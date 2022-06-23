import styled from "styled-components";

const StyledGlobal = styled.div`
  /* Small Screen */
  border: 1rem;
  margin-bottom: 1rem;
  padding: 20px;
  /* background-color: white;
  height: auto;
  border-radius: 10px;
  max-width: 100%;
  font-size: 2rem; */
  box-shadow: 5px 5px 5px lightblue;

  p:nth-child(1) {
    font-family: "Poppins";
    margin-bottom: 0.5rem;
    font-size: 1.95rem;
    text-align: center;
    color: #073b4c;
  }
  p:nth-child(2) {
    color: #2372b3;
    margin-bottom: 0.5rem;
    font-size: 1.95rem;
    text-align: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    margin: 1rem 1rem;
    padding: 4rem;
    box-shadow: 10px 10px 5px lightblue;
  }

  /* Large Screen */
  @media (min-width: 992px) {
  }
`;

export default StyledGlobal;
