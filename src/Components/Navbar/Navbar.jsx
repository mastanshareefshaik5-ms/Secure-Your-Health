import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={Logo} alt="Logo" className="logo" />
        <h2>Secure Your Health</h2>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/hospitals">Hospitals</Link>
        </li>

        <li>
          <Link to="/doctors">Doctors</Link>
        </li>

        <li>
          <Link to="/medicines">Medicines</Link>
        </li>

        <li>
          <Link to="/ambulance">Ambulance</Link>
        </li>

        <li>
          <Link to="/appointment">Appointment</Link>
        </li>

        <li>
          <Link to="/healthtips">Health Tips</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;