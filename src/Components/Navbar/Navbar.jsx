import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img src={Logo} alt="Logo" className="logo" />
        <h2>Secure Your Health</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hospitals">Hospitals</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/medicines">Medicines</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/healthtips">Health Tips</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="profile-section">
        <Link to="/profile" className="profile-btn">
          👤 Profile
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;