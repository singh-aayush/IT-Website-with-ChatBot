import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <nav>
        <div className="companyLogo">
          <img src="/src/Image/logo.webp" alt="company-logo" />
        </div>
        <div className="pageOptions">
          <ul>
            <li className="listItems">
              <Link to="/">Home</Link>
            </li>
            <li className="listItems">
              <Link to="/about">About Us</Link>
            </li>
            <li className="listItems">
              <Link to="/service">Service</Link>
            </li>
            <li className="listItems">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="listItems">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
