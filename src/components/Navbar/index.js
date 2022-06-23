import StyledNavbar from "./Navbar.styled";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <div>
          <div>
            <h2>Covid ID</h2>
          </div>
          <div>
            <ul>
              <Link to="/">Global</Link>
              <Link to="/Indonesia">Indonesia</Link>
              <Link to="/Provinces">Provinsi</Link>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
