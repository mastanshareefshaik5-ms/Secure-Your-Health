import "./Doctor.css";
import DoctorImage from "../../Images/Doctor.jpg";

function Doctor() {
  return (
    <div className="doctor-page">

      <h1>Our Doctors</h1>

      <img
        src={DoctorImage}
        alt="Doctor"
        className="doctor-image"
      />

      <h2>Dr. Deepika Sethi</h2>

      <p><strong>Specialization:</strong> Cardiologist</p>

      <p><strong>Experience:</strong> 15 Years</p>

      <p><strong>Hospital:</strong> Apollo Hospital</p>

      <p><strong>Qualification:</strong> MBBS, MD (Cardiology)</p>

      <p><strong>Availability:</strong> Monday - Saturday</p>

      <p><strong>Timing:</strong> 9:00 AM - 5:00 PM</p>

    </div>
  );
}

export default Doctor;