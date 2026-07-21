import { useEffect, useState } from "react";
import API from "../../api/api";
import "./MedicineOrder.css";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function MedicineOrder() {

  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    customerName: "",
    medicineName: "",
    quantity: "",
    address: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const ordersPerPage = 6;

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const res = await API.get("/medicineorders");

      setOrders(res.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load Orders");

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

      if (

        !form.customerName ||

        !form.medicineName ||

        !form.quantity ||

        !form.address ||

        !form.phone

      ) {

        toast.warning("Please fill all fields");

        return;

      }

      if (editingId) {

        await API.put(

          `/medicineorders/${editingId}`,

          form

        );

        toast.success("Order Updated");

      }

      else {

        await API.post(

          "/medicineorders",

          form

        );

        toast.success("Order Placed Successfully");

      }

      setForm({

        customerName: "",

        medicineName: "",

        quantity: "",

        address: "",

        phone: "",

      });

      setEditingId(null);

      fetchOrders();

    }

    catch (err) {

      console.log(err);

      toast.error("Operation Failed");

    }

  };

  const editOrder = (order) => {

    setEditingId(order._id);

    setForm({

      customerName: order.customerName,

      medicineName: order.medicineName,

      quantity: order.quantity,

      address: order.address,

      phone: order.phone,

    });

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  const deleteOrder = async (id) => {

    if (!window.confirm("Delete Order?")) return;

    try {

      await API.delete(`/medicineorders/${id}`);

      toast.success("Order Deleted");

      fetchOrders();

    }

    catch {

      toast.error("Delete Failed");

    }

  };

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.text("Medicine Order Report", 14, 15);

    autoTable(doc, {

      startY: 25,

      head: [[

        "Customer",

        "Medicine",

        "Qty",

        "Address",

        "Phone"

      ]],

      body: orders.map(order => [

        order.customerName,

        order.medicineName,

        order.quantity,

        order.address,

        order.phone

      ])

    });

    doc.save("MedicineOrders.pdf");

  };

  const filteredOrders = orders.filter(order =>

    order.customerName

      .toLowerCase()

      .includes(search.toLowerCase())

  );

  const pagesVisited = pageNumber * ordersPerPage;

  const displayOrders = filteredOrders

    .slice(

      pagesVisited,

      pagesVisited + ordersPerPage

    )

    .map(order => (

      <div

        className="order-card"

        key={order._id}

      >

        <h3>{order.customerName}</h3>

        <p><strong>Medicine :</strong> {order.medicineName}</p>

        <p><strong>Quantity :</strong> {order.quantity}</p>

        <p><strong>Address :</strong> {order.address}</p>

        <p><strong>Phone :</strong> {order.phone}</p>

        <div className="card-buttons">

          <button

            className="edit-btn"

            onClick={() => editOrder(order)}

          >

            Edit

          </button>

          <button

            className="delete-btn"

            onClick={() => deleteOrder(order._id)}

          >

            Delete

          </button>

        </div>

      </div>

    ));

  const pageCount = Math.ceil(

    filteredOrders.length /

    ordersPerPage

  );

  return (

    <div className="medicineorder-page">

      <div className="page-header">

        <h1 className="medicineorder-title">

          Medicine Orders

        </h1>

        <button

          className="pdf-btn"

          onClick={exportPDF}

        >

          Download PDF

        </button>

      </div>

      <form

        className="medicineorder-form"

        onSubmit={handleSubmit}

      >

        <input

          name="customerName"

          placeholder="Customer Name"

          value={form.customerName}

          onChange={handleChange}

          required

        />

        <input

          name="medicineName"

          placeholder="Medicine Name"

          value={form.medicineName}

          onChange={handleChange}

          required

        />

        <input

          type="number"

          name="quantity"

          placeholder="Quantity"

          value={form.quantity}

          onChange={handleChange}

          required

        />

        <input

          name="address"

          placeholder="Delivery Address"

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

        <button className="submit-btn">

          {editingId ? "Update Order" : "Place Order"}

        </button>

      </form>

      <input

        className="search-box"

        placeholder="Search Customer..."

        value={search}

        onChange={(e)=>{

          setSearch(e.target.value);

          setPageNumber(0);

        }}

      />

      <div className="order-grid">

        {

          displayOrders.length

          ? displayOrders

          : <div className="empty-data">No Orders Found</div>

        }

      </div>

      {

        pageCount>1 &&

        <ReactPaginate

          previousLabel={"← Previous"}

          nextLabel={"Next →"}

          pageCount={pageCount}

          onPageChange={({selected})=>setPageNumber(selected)}

          containerClassName="pagination"

          pageClassName="page-item"

          pageLinkClassName="page-link"

          previousClassName="page-item"

          previousLinkClassName="page-link"

          nextClassName="page-item"

          nextLinkClassName="page-link"

          activeClassName="active"

          breakLabel="..."

          pageRangeDisplayed={3}

          marginPagesDisplayed={1}

        />

      }

    </div>

  );

}

export default MedicineOrder;