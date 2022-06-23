import styled from "styled-components";

const StyledHero = styled.div`
  * {
    margin-bottom: 1rem;
  }

  /* small screen */
  margin: 1rem auto;
  padding: 1rem;
  section {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  h2 {
    color: #06d6a0;
    font-size: 1.5rem;
  }
  p:nth-child(2) {
    margin-bottom: 1rem;
    color: #2196f3;
    font-size: 1rem;
  }
  p:nth-child(3) {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  div:nth-child(1) {
    flex-basis: 40%;
  }
  div:nth-child(2) {
    flex-basis: 50%;
  }
  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    cursor: pointer;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    div > section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }
`;
export default StyledHero;
