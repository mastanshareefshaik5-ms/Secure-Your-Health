import "./Appointment.css";
import { useState } from "react";

function Appointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    mobile: "",
    email: "",
    hospital: "",
    doctor: "",
    date: "",
    problem: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("✅ Appointment Booked Successfully!");

    setFormData({
      patientName: "",
      mobile: "",
      email: "",
      hospital: "",
      doctor: "",
      date: "",
      problem: "",
    });
  };

  return (
    <div className="appointment-container">

      <h1 className="appointment-title">
        Book an Appointment
      </h1>

      <p className="appointment-subtitle">
        Fill the form below to schedule your appointment.
      </p>

      <div className="appointment-box">

        <form onSubmit={handleSubmit}>

          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            placeholder="Enter Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            required
          />

          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Select Hospital</label>
          <select
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            required
          >
            <option value="">Choose Hospital</option>
            <option>Apollo Hospital</option>
            <option>Yashoda Hospital</option>
            <option>CARE Hospital</option>
            <option>KIMS Hospital</option>
            <option>AIIMS</option>
          </select>

          <label>Select Doctor</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Choose Doctor</option>
            <option>Cardiologist</option>
            <option>Neurologist</option>
            <option>Orthopedic</option>
            <option>Dermatologist</option>
            <option>General Physician</option>
          </select>

          <label>Appointment Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Problem Description</label>
          <textarea
            name="problem"
            placeholder="Describe your health problem..."
            value={formData.problem}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="book-btn">
            Book Appointment
          </button>

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}

        </form>

      </div>

    </div>
  );
}

export default Appointment;