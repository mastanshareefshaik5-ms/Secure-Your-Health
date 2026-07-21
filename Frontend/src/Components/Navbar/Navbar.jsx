import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    sessionStorage.clear();

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <div className="navbar-logo">

        <h2>

          🏥 Secure Your Health

        </h2>

      </div>

      <ul className="navbar-links">

        <li>

          <Link

            className={location.pathname==="/home"?"active":""}

            to="/home"

          >

            Home

          </Link>

        </li>

        <li>

          <Link

            className={location.pathname==="/dashboard"?"active":""}

            to="/dashboard"

          >

            Dashboard

          </Link>

        </li>

        <li>

          <Link

            className={location.pathname==="/profile"?"active":""}

            to="/profile"

          >

            Profile

          </Link>

        </li>

        <li>

          <Link

            className={location.pathname==="/contact"?"active":""}

            to="/contact"

          >

            Contact

          </Link>

        </li>

      </ul>

      <button

        className="logout-btn"

        onClick={logout}

      >

        Logout

      </button>

    </nav>

  );

}

export default Navbar;