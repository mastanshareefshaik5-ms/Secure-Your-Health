import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaHospital,
  FaUserMd,
  FaPills,
  FaCalendarCheck,
  FaTint,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaShoppingCart,
  FaComments,
  FaUserCircle,
  FaPhoneAlt,
  FaLightbulb,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      path: "/home",
      icon: <FaHome />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Hospitals",
      path: "/hospitals",
      icon: <FaHospital />,
    },
    {
      name: "Doctors",
      path: "/doctors",
      icon: <FaUserMd />,
    },
    {
      name: "Medicines",
      path: "/medicines",
      icon: <FaPills />,
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: <FaCalendarCheck />,
    },
    {
      name: "Blood Bank",
      path: "/bloodbank",
      icon: <FaTint />,
    },
    {
      name: "Blood Donation",
      path: "/blooddonation",
      icon: <FaHandHoldingHeart />,
    },
    {
      name: "BMI Calculator",
      path: "/bmi",
      icon: <FaHeartbeat />,
    },
    {
      name: "Medicine Order",
      path: "/medicineorder",
      icon: <FaShoppingCart />,
    },
    {
      name: "ChatBot",
      path: "/chatbot",
      icon: <FaComments />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUserCircle />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaPhoneAlt />,
    },
    {
      name: "Health Tips",
      path: "/healthtips",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;