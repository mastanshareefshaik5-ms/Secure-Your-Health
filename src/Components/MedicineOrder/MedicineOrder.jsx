import "./MedicineOrder.css";
import { useState, useEffect } from "react";

function MedicineOrder() {

  const [medicine, setMedicine] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orders, setOrders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load data from Local Storage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("medicineOrders")) || [];
    setOrders(storedOrders);
  }, []);

  // Save data to Local Storage
  useEffect(() => {
    localStorage.setItem("medicineOrders", JSON.stringify(orders));
  }, [orders]);

  // Add or Update Order
  const handleSubmit = (e) => {
    e.preventDefault();

    if (medicine === "" || quantity === "") {
      alert("Please fill all fields");
      return;
    }

    const newOrder = {
      medicine,
      quantity,
    };

    if (editIndex === null) {
      // Add
      setOrders([...orders, newOrder]);
      alert("Medicine Added Successfully");
    } else {
      // Update
      const updatedOrders = [...orders];
      updatedOrders[editIndex] = newOrder;
      setOrders(updatedOrders);
      setEditIndex(null);
      alert("Medicine Updated Successfully");
    }

    setMedicine("");
    setQuantity("");
  };

  // Edit
  const handleEdit = (index) => {
    setMedicine(orders[index].medicine);
    setQuantity(orders[index].quantity);
    setEditIndex(index);
  };

  // Delete
  const handleDelete = (index) => {

    if (window.confirm("Delete this medicine?")) {

      const updatedOrders = orders.filter((_, i) => i !== index);

      setOrders(updatedOrders);

    }

  };

  return (
    <div className="medicine-order-container">

      <h1>Medicine Order</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Medicine Name"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">
          {editIndex === null ? "Add Medicine" : "Update Medicine"}
        </button>

      </form>

      <table>

        <thead>

          <tr>
            <th>S.No</th>
            <th>Medicine</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {orders.length === 0 ? (

            <tr>
              <td colSpan="4">No Medicines Ordered</td>
            </tr>

          ) : (

            orders.map((order, index) => (

              <tr key={index}>

                <td>{index + 1}</td>

                <td>{order.medicine}</td>

                <td>{order.quantity}</td>

                <td>

                  <button onClick={() => handleEdit(index)}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(index)}>
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default MedicineOrder;