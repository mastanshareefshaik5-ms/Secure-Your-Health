import "./Appointment.css";
import { useState, useEffect } from "react";

function Appointment() {

  const [appointments, setAppointments] = useState([]);

  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: ""
  });

  useEffect(() => {

    const data = [
      {
        patient: "Rahul",
        doctor: "Dr. Deepika",
        date: "2026-07-20",
        time: "10:00 AM"
      }
    ];

    setAppointments(data);

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setAppointments([...appointments, formData]);

    setFormData({
      patient: "",
      doctor: "",
      date: "",
      time: ""
    });

    alert("Appointment Booked Successfully");

  };

  return (

    <div className="appointment-container">

      <h1>Book Appointment</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="patient"
          placeholder="Patient Name"
          value={formData.patient}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={formData.doctor}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button>Book Appointment</button>

      </form>

      <h2>Booked Appointments</h2>

      <table>

        <thead>

          <tr>

            <th>Patient</th>

            <th>Doctor</th>

            <th>Date</th>

            <th>Time</th>

          </tr>

        </thead>

        <tbody>

          {appointments.map((item, index) => (

            <tr key={index}>

              <td>{item.patient}</td>

              <td>{item.doctor}</td>

              <td>{item.date}</td>

              <td>{item.time}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Appointment;