import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar d-flex">
      <div className="navbar-nav">
        <div className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
