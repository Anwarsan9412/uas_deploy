import styled from "styled-components";

const StyledAddCovidForm = styled.div`
  /* small */
  margin: 1rem 1rem;
  section {
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
  }
  section > div:nth-child(1) {
    margin-bottom: 1rem;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  h2 {
    font-size: 1.5rem;
    color: #06d6a0;
    text-align: center;
    border-bottom: 4rem;
  }
  form {
    margin-top: 1rem;
  }
  form > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  form > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  label {
    display: inline-block;
    margin-bottom: 1rem;
  }
  select {
    outline: none;
    padding: 0.8rem 0.3rem;
    border-radius: 10px;
    border: 1px solid #06d6a0;
    cursor: pointer;
    display: inline-block;
    position: relative;
    color: black;
  }
  input {
    outline: none;
    padding: 0.6rem 0.3rem;
    border-radius: 10px;
    border: 1px solid #06d6a0;
    cursor: pointer;
    display: inline-block;
    position: relative;
    font: normal 11px/22px Arial, Sans-Serif;
    color: black;
    width: 100%;
  }
  /* button {
    padding: 0.8rem 0.3rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: white;
    display: block;
    margin: 2rem 0 auto;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
  } */

  /* Medium Screen */
  @media (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    section > div:nth-child(1) {
      flex-basis: 50%;
      margin: auto 0rem;
      justify-content: left;
      display: block;
    }
    section > div:nth-child(2) {
      flex-basis: 40%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;

export default StyledAddCovidForm;
