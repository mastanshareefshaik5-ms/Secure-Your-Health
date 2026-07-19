import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Medicine.css";

function Medicine() {
  const [medicines, setMedicines] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [form, setForm] = useState({
    name: "",
    company: "",
    price: "",
    stock: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMedicines();
  }, []);

  useEffect(() => {
    setFiltered(
      medicines.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, medicines]);

  const fetchMedicines = async () => {
    try {
      const res = await API.get("/medicines");
      setMedicines(res.data);
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
        await API.put(`/medicines/${editingId}`, form);
      } else {
        await API.post("/medicines", form);
      }

      setForm({
        name: "",
        company: "",
        price: "",
        stock: "",
      });

      setEditingId(null);
      fetchMedicines();

    } catch (err) {
      console.log(err);
    }
  };

  const editMedicine = (medicine) => {
    setEditingId(medicine._id);

    setForm({
      name: medicine.name,
      company: medicine.company,
      price: medicine.price,
      stock: medicine.stock,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteMedicine = async (id) => {
    if (!window.confirm("Delete Medicine?")) return;

    await API.delete(`/medicines/${id}`);

    fetchMedicines();
  };

  return (
    <div className="medicine-page">

      <h1 className="medicine-title">
        Medicine Management
      </h1>

      <form className="medicine-form" onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Medicine Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          required
        />

        <button>
          {editingId ? "Update Medicine" : "Add Medicine"}
        </button>

      </form>

      <input
        className="search-box"
        placeholder="Search Medicine..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="medicine-grid">

        {filtered.map((medicine) => (

          <div
            className="medicine-card"
            key={medicine._id}
          >

            <h3>{medicine.name}</h3>

            <p><strong>Company:</strong> {medicine.company}</p>

            <p><strong>Price:</strong> ₹{medicine.price}</p>

            <p><strong>Stock:</strong> {medicine.stock}</p>

            <div className="card-buttons">

              <button
                className="edit-btn"
                onClick={() => editMedicine(medicine)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteMedicine(medicine._id)}
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

export default Medicine;