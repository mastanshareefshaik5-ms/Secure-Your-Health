import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Appointment.css";

function Appointment() {

  const [appointments, setAppointments] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    hospital: "",
    date: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    setFiltered(
      appointments.filter((a) =>
        a.patientName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, appointments]);

  const fetchAppointments = async () => {
    try {
      const res = await API.get("/appointments");
      setAppointments(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (editingId) {
        await API.put(`/appointments/${editingId}`, form);
      } else {
        await API.post("/appointments", form);
      }

      setForm({
        patientName: "",
        doctorName: "",
        hospital: "",
        date: "",
      });

      setEditingId(null);

      fetchAppointments();

    } catch (err) {
      console.log(err);
    }
  };

  const editAppointment = (appointment) => {

    setEditingId(appointment._id);

    setForm({
      patientName: appointment.patientName,
      doctorName: appointment.doctorName,
      hospital: appointment.hospital,
      date: appointment.date?.substring(0,10),
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const deleteAppointment = async (id) => {

    if (!window.confirm("Delete Appointment?")) return;

    await API.delete(`/appointments/${id}`);

    fetchAppointments();

  };

  return (

    <div className="appointment-page">

      <h1 className="appointment-title">
        Appointment Management
      </h1>

      <form
        className="appointment-form"
        onSubmit={handleSubmit}
      >

        <input
          name="patientName"
          placeholder="Patient Name"
          value={form.patientName}
          onChange={handleChange}
          required
        />

        <input
          name="doctorName"
          placeholder="Doctor Name"
          value={form.doctorName}
          onChange={handleChange}
          required
        />

        <input
          name="hospital"
          placeholder="Hospital Name"
          value={form.hospital}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <button>
          {editingId ? "Update Appointment" : "Book Appointment"}
        </button>

      </form>

      <input
        className="search-box"
        placeholder="Search Patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="appointment-grid">

        {filtered.map((appointment) => (

          <div
            className="appointment-card"
            key={appointment._id}
          >

            <h3>{appointment.patientName}</h3>

            <p>
              <strong>Doctor :</strong> {appointment.doctorName}
            </p>

            <p>
              <strong>Hospital :</strong> {appointment.hospital}
            </p>

            <p>
              <strong>Date :</strong>{" "}
              {new Date(appointment.date).toLocaleDateString()}
            </p>

            <div className="card-buttons">

              <button
                className="edit-btn"
                onClick={() => editAppointment(appointment)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteAppointment(appointment._id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Appointment;