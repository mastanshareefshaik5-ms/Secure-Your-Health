import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Welcome Section */}
      <div className="welcome">
        <h1>Welcome to Secure Your Health</h1>
        <p>Your one-stop platform to find hospitals, doctors, and book appointments.</p>
      </div>

      {/* Hospital Details */}
      <div className="section">
        <h2>Hospitals</h2>

        <div className="card">
          <h3>Apollo Hospital</h3>
          <p><strong>Disease:</strong> Heart Disease</p>
          <p><strong>Doctor:</strong> Dr. Rajesh Kumar</p>
          <p><strong>Location:</strong> Hyderabad</p>
        </div>

        <div className="card">
          <h3>KIMS Hospital</h3>
          <p><strong>Disease:</strong> Orthopedic</p>
          <p><strong>Doctor:</strong> Dr. Ramesh</p>
          <p><strong>Location:</strong> Hyderabad</p>
        </div>

        <div className="card">
          <h3>CARE Hospital</h3>
          <p><strong>Disease:</strong> Neurology</p>
          <p><strong>Doctor:</strong> Dr. Priya Sharma</p>
          <p><strong>Location:</strong> Vijayawada</p>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="section">
        <h2>Doctors</h2>

        <ul>
          <li>👨‍⚕️ Dr. Rajesh Kumar - Cardiologist</li>
          <li>👩‍⚕️ Dr. Priya Sharma - Neurologist</li>
          <li>👨‍⚕️ Dr. Ramesh - Orthopedic Surgeon</li>
        </ul>
      </div>

      {/* Appointment Form */}
      <div className="section">
        <h2>Book Appointment</h2>

        <form>
          <input type="text" placeholder="Patient Name" />

          <input type="text" placeholder="Mobile Number" />

          <input type="email" placeholder="Email Address" />

          <label>Date of Birth</label>
          <input type="date" />

          <label>Appointment Date</label>
          <input type="date" />

          <button type="submit">Book Slot</button>
        </form>
      </div>

      {/* Emergency */}
      <div className="section">
        <h2>Emergency Contacts</h2>

        <p>🚑 Ambulance : <strong>108</strong></p>
        <p>👮 Police : <strong>100</strong></p>
        <p>🔥 Fire : <strong>101</strong></p>
      </div>

    </div>
  );
}

export default Dashboard;