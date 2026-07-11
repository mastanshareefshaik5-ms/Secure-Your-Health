import "./Ambulance.css";
import AmbulanceImage from "../../Images/Ambulance.png";

function Ambulance() {
  return (
    <div className="ambulance-page">

      <h1>Emergency Ambulance Service</h1>

      <img
        src={AmbulanceImage}
        alt="Ambulance"
        style={{
        width: "500px",
        maxWidth: "90%",
        height: "auto",
        objectFit: "contain",
        display: "block",
        margin: "20px auto"
      }}
   />

      <h2>24/7 Emergency Support</h2>

      <p><strong>Emergency Number:</strong> 108</p>

      <p><strong>Service:</strong> Free Government Ambulance</p>

      <p><strong>Availability:</strong> 24 Hours / 7 Days</p>

      <p><strong>Response Time:</strong> 10 - 20 Minutes</p>

      <p><strong>Facilities:</strong></p>

      <ul>
        <li>Basic Life Support (BLS)</li>
        <li>Advanced Life Support (ALS)</li>
        <li>Emergency Medical Team</li>
        <li>Oxygen Support</li>
        <li>Patient Transportation</li>
      </ul>

    </div>
  );
}

export default Ambulance;