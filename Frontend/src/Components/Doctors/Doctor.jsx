import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Doctor.css";

function Doctor() {

  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [form, setForm] = useState({
    name: "",
    specialization: "",
    hospital: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    setFiltered(
      doctors.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, doctors]);

  const fetchDoctors = async () => {
    try {
      const res = await API.get("/doctors");
      setDoctors(res.data);
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
        await API.put(`/doctors/${editingId}`, form);
      } else {
        await API.post("/doctors", form);
      }

      setForm({
        name: "",
        specialization: "",
        hospital: "",
        phone: "",
      });

      setEditingId(null);

      fetchDoctors();

    } catch (err) {
      console.log(err);
    }
  };

  const editDoctor = (doctor) => {

    setEditingId(doctor._id);

    setForm({
      name: doctor.name,
      specialization: doctor.specialization,
      hospital: doctor.hospital,
      phone: doctor.phone,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  const deleteDoctor = async (id) => {

    if (!window.confirm("Delete Doctor?")) return;

    await API.delete(`/doctors/${id}`);

    fetchDoctors();

  };

  return (

    <div className="doctor-page">

      <h1 className="doctor-title">Doctor Management</h1>

      <form className="doctor-form" onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Doctor Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="specialization"
          placeholder="Specialization"
          value={form.specialization}
          onChange={handleChange}
          required
        />

        <input
          name="hospital"
          placeholder="Hospital"
          value={form.hospital}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <button>
          {editingId ? "Update Doctor" : "Add Doctor"}
        </button>

      </form>

      <input
        className="search-box"
        placeholder="Search Doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="doctor-grid">

        {filtered.map((doctor) => (

          <div className="doctor-card" key={doctor._id}>

            <h3>{doctor.name}</h3>

            <p><strong>Specialization:</strong> {doctor.specialization}</p>

            <p><strong>Hospital:</strong> {doctor.hospital}</p>

            <p><strong>Phone:</strong> {doctor.phone}</p>

            <div className="card-buttons">

              <button
                className="edit-btn"
                onClick={() => editDoctor(doctor)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteDoctor(doctor._id)}
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

export default Doctor;