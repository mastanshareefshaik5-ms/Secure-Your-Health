import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="sidebar-title">Healthcare Services</h2>

      <ul className="sidebar-menu">

        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/bmi">🩺 BMI Calculator</Link>
        </li>

        <li>
          <Link to="/blooddonation">🩸 Blood Donation</Link>
        </li>

        <li>
          <Link to="/bloodbank">🏥 Blood Bank</Link>
        </li>

        <li>
          <Link to="/medicineorder">💊 Medicine Order</Link>
        </li>

        <li>
          <Link to="/cart">🛒 Cart</Link>
        </li>

        <li>
          <Link to="/chatbot">🤖 AI ChatBot</Link>
        </li>

        <li>
          <Link to="/darkmode">🌙 Dark Mode</Link>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;