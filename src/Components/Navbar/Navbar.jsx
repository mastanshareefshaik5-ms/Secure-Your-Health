import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <div className="logo">
        <h2>🏥 Secure Your Health</h2>
      </div>

      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Hospitals</a>
        <a href="#">Doctors</a>
        <a href="#">Medicines</a>
        <a href="#">Appointment</a>
        <a href="#">Contact</a>
      </div>

      <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>

    </div>
  );
}

export default Navbar;