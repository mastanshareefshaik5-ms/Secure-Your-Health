import "./MedicineOrder.css";
import { useState, useEffect } from "react";

function MedicineOrder() {

  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const medicineData = [
      {
        id: 1,
        name: "Paracetamol",
        price: 50,
        company: "Cipla",
        image: "https://via.placeholder.com/200x150?text=Paracetamol"
      },
      {
        id: 2,
        name: "Dolo 650",
        price: 40,
        company: "Micro Labs",
        image: "https://via.placeholder.com/200x150?text=Dolo+650"
      },
      {
        id: 3,
        name: "Azithromycin",
        price: 120,
        company: "Sun Pharma",
        image: "https://via.placeholder.com/200x150?text=Azithromycin"
      },
      {
        id: 4,
        name: "Vitamin C",
        price: 80,
        company: "Himalaya",
        image: "https://via.placeholder.com/200x150?text=Vitamin+C"
      },
      {
        id: 5,
        name: "Crocin",
        price: 35,
        company: "GSK",
        image: "https://via.placeholder.com/200x150?text=Crocin"
      }
    ];

    setMedicines(medicineData);

  }, []);

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (medicine) => {
    alert(`${medicine.name} added to cart successfully.`);
  };

  return (
    <div className="medicine-order-container">

      <h1>💊 Medicine Order</h1>

      <input
        type="text"
        placeholder="Search Medicine..."
        className="medicine-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="medicine-grid">

        {filteredMedicines.map((medicine) => (

          <div className="medicine-card" key={medicine.id}>

            <img src={medicine.image} alt={medicine.name} />

            <h2>{medicine.name}</h2>

            <p><strong>Company:</strong> {medicine.company}</p>

            <p><strong>Price:</strong> ₹{medicine.price}</p>

            <button onClick={() => addToCart(medicine)}>
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MedicineOrder;