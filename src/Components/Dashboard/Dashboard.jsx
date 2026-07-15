import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const stats = [
    { title: "Hospitals", value: "120", icon: "🏥" },
    { title: "Doctors", value: "250", icon: "👨‍⚕️" },
    { title: "Appointments", value: "35", icon: "📅" },
    { title: "Medicines", value: "500", icon: "💊" },
    { title: "Blood Banks", value: "18", icon: "🩸" },
    { title: "Blood Donors", value: "1200", icon: "❤️" },
    { title: "Medicine Orders", value: "45", icon: "🛒" },
    { title: "Patients", value: "3500", icon: "👥" },
  ];

  const services = [
    { title: "BMI Calculator", icon: "🩺", path: "/bmi" },
    { title: "Blood Donation", icon: "❤️", path: "/blooddonation" },
    { title: "Blood Bank", icon: "🏥", path: "/bloodbank" },
    { title: "Medicine Order", icon: "💊", path: "/medicineorder" },
    { title: "Cart", icon: "🛒", path: "/cart" },
    { title: "AI ChatBot", icon: "🤖", path: "/chatbot" },
    { title: "Dark Mode", icon: "🌙", path: "/darkmode" },
    { title: "Profile", icon: "👤", path: "/profile" },
  ];

  const activities = [
    "Appointment booked with Dr. Deepika",
    "Medicine order delivered successfully",
    "Blood donation request approved",
    "New hospital added to the portal",
  ];

  const tips = [
    "Drink at least 3 litres of water daily.",
    "Exercise for 30 minutes every day.",
    "Eat healthy fruits and vegetables.",
    "Sleep for 7–8 hours every night.",
  ];
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if(!isLoggedIn){

    return <Navigate to="/login" />;

}

  return (
    <div className="dashboard">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <h1>🏥 Secure Your Health Dashboard</h1>
          <p>Welcome to your Healthcare Management Portal</p>
        </div>

        <div className="header-right">

          <div className="date">
            📅 {new Date().toLocaleDateString()}
          </div>

          <div className="notification">
            🔔 3 Notifications
          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.value}</h2>

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

      {/* Quick Services */}

      <div className="quick-services">

        <h2>🚀 Quick Services</h2>

        <div className="service-grid">

          {services.map((service, index) => (

            <Link
              key={index}
              to={service.path}
              className="service-card"
            >

              <div className="service-icon">

                {service.icon}

              </div>

              <h3>{service.title}</h3>

            </Link>

          ))}

        </div>

      </div>

      {/* Bottom Section */}

      <div className="bottom-section">

        <div className="activity-box">

          <h2>📋 Recent Activity</h2>

          {activities.map((item, index) => (

            <p key={index}>✅ {item}</p>

          ))}

        </div>

        <div className="tips-box">

          <h2>❤️ Daily Health Tips</h2>

          {tips.map((tip, index) => (

            <p key={index}>✔ {tip}</p>

          ))}

        </div>

        <div className="emergency-box">

          <h2>🚑 Emergency Contacts</h2>

          <p>🚑 Ambulance : <strong>108</strong></p>

          <p>👮 Police : <strong>100</strong></p>

          <p>🔥 Fire : <strong>101</strong></p>

          <p>☎ Hospital Helpline : <strong>1800-500-500</strong></p>

        </div>

      </div>

      {/* Analytics */}

      <div className="analytics-section">

        <h2>📊 Healthcare Analytics</h2>

        <div className="analytics-grid">

          {/* Bar Chart */}

          <div className="chart-card">

            <h3>Monthly Appointments</h3>

            <div className="bar-chart">

              <div className="bar" style={{ height: "60%" }}><span>Jan</span></div>

              <div className="bar" style={{ height: "80%" }}><span>Feb</span></div>

              <div className="bar" style={{ height: "50%" }}><span>Mar</span></div>

              <div className="bar" style={{ height: "90%" }}><span>Apr</span></div>

              <div className="bar" style={{ height: "75%" }}><span>May</span></div>

              <div className="bar" style={{ height: "100%" }}><span>Jun</span></div>

            </div>

          </div>

          {/* Blood Availability */}

          <div className="chart-card">

            <h3>Blood Group Availability</h3>

            <div className="progress-item">
              <p>A+ <span>90%</span></p>
              <div className="progress"><div style={{ width: "90%" }}></div></div>
            </div>

            <div className="progress-item">
              <p>B+ <span>70%</span></p>
              <div className="progress"><div style={{ width: "70%" }}></div></div>
            </div>

            <div className="progress-item">
              <p>O+ <span>95%</span></p>
              <div className="progress"><div style={{ width: "95%" }}></div></div>
            </div>

            <div className="progress-item">
              <p>AB+ <span>45%</span></p>
              <div className="progress"><div style={{ width: "45%" }}></div></div>
            </div>

          </div>

          {/* Medicine Orders */}

          <div className="chart-card">

            <h3>Medicine Orders</h3>

            <div className="progress-item">
              <p>Completed <span>80%</span></p>
              <div className="progress"><div style={{ width: "80%" }}></div></div>
            </div>

            <div className="progress-item">
              <p>Pending <span>15%</span></p>
              <div className="progress"><div style={{ width: "15%" }}></div></div>
            </div>

            <div className="progress-item">
              <p>Cancelled <span>5%</span></p>
              <div className="progress"><div style={{ width: "5%" }}></div></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;