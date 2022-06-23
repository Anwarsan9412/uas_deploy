import styled from "styled-components";

const StyledNavbar = styled.div`
  /* small screen */
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;

  div > div {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  a {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: white;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    div > div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    a {
      flex-direction: row;
      font-size: 1rem;
      margin: 0 1rem;
      color: white;
      cursor: pointer;
    }
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
  }
`;
export default StyledNavbar;
