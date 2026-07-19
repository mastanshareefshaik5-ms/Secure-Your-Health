import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Hospital.css";

function Hospital() {
  const [hospitals, setHospitals] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getHospitals();
  }, []);

  useEffect(() => {
    const result = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, hospitals]);

  const getHospitals = async () => {
    try {
      const res = await API.get("/hospitals");
      setHospitals(res.data);
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
        await API.put(`/hospitals/${editingId}`, form);
      } else {
        await API.post("/hospitals", form);
      }

      setForm({
        name: "",
        address: "",
        phone: "",
      });

      setEditingId(null);

      getHospitals();
    } catch (err) {
      console.log(err);
    }
  };

  const editHospital = (hospital) => {
    setEditingId(hospital._id);

    setForm({
      name: hospital.name,
      address: hospital.address,
      phone: hospital.phone,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteHospital = async (id) => {
    if (!window.confirm("Delete Hospital?")) return;

    try {
      await API.delete(`/hospitals/${id}`);
      getHospitals();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hospital-page">

      <h1 className="hospital-title">
        Hospital Management
      </h1>

      <form className="hospital-form" onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Hospital Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <button>
          {editingId ? "Update Hospital" : "Add Hospital"}
        </button>

      </form>

      <input
        className="search-box"
        placeholder="Search Hospital..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="hospital-grid">

        {filtered.map((hospital) => (

          <div
            className="hospital-card"
            key={hospital._id}
          >

            <h3>{hospital.name}</h3>

            <p>
              <strong>Address :</strong> {hospital.address}
            </p>

            <p>
              <strong>Phone :</strong> {hospital.phone}
            </p>

            <div className="card-buttons">

              <button
                className="edit-btn"
                onClick={() => editHospital(hospital)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteHospital(hospital._id)}
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

export default Hospital;