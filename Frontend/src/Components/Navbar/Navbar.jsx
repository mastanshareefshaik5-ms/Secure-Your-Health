import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Images/Logo.png";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  const username = sessionStorage.getItem("username");

  const handleLogout = () => {

    sessionStorage.clear();

    alert("Logged Out Successfully");

    navigate("/login");

  };

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

        {isLoggedIn ? (

          <>

            <span className="user-name">

              👋 {username}

            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>

        ) : (

          <Link to="/login" className="profile-btn">

            Login

          </Link>

        )}

      </div>

    </nav>

  );

}

export default Navbar;