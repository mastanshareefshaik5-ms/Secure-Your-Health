import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>

      <ul>
        <li>🏠 Dashboard</li>
        <li>🏥 Hospitals</li>
        <li>👨‍⚕️ Doctors</li>
        <li>💊 Medicines</li>
        <li>📅 Appointments</li>
        <li>❤️ Health Tips</li>
        <li>🚑 Emergency</li>
        <li>📞 Contact Us</li>
      </ul>
    </div>
  );
}

export default Sidebar;