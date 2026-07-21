import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Medicine.css";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Medicine() {

  const [medicines, setMedicines] = useState([]);

  const [form, setForm] = useState({
    name: "",
    company: "",
    price: "",
    stock: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const medicinesPerPage = 6;

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {

    try {

      const res = await API.get("/medicines");

      setMedicines(res.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load medicines");

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
        !form.name ||
        !form.company ||
        !form.price ||
        !form.stock
      ) {

        toast.warning("Please fill all fields");

        return;

      }

      if (editingId) {

        await API.put(

          `/medicines/${editingId}`,

          form

        );

        toast.success("Medicine Updated");

      } else {

        await API.post(

          "/medicines",

          form

        );

        toast.success("Medicine Added");

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

      toast.error("Operation Failed");

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

      top:0,

      behavior:"smooth",

    });

  };

  const deleteMedicine = async (id) => {

    if (!window.confirm("Delete Medicine?")) return;

    try{

      await API.delete(`/medicines/${id}`);

      toast.success("Medicine Deleted");

      fetchMedicines();

    }

    catch(err){

      toast.error("Delete Failed");

    }

  };
    const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Secure Your Health", 14, 15);

    doc.setFontSize(12);
    doc.text("Medicine Report", 14, 25);

    autoTable(doc, {

      startY: 35,

      head: [[
        "Medicine",
        "Company",
        "Price",
        "Stock"
      ]],

      body: medicines.map((medicine) => [

        medicine.name,

        medicine.company,

        `₹${medicine.price}`,

        medicine.stock,

      ])

    });

    doc.save("Medicine_Report.pdf");

    toast.success("PDF Downloaded");

  };

  const filteredMedicines = medicines.filter((medicine) =>

    medicine.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const pagesVisited = pageNumber * medicinesPerPage;

  const displayMedicines = filteredMedicines

    .slice(

      pagesVisited,

      pagesVisited + medicinesPerPage

    )

    .map((medicine) => (

      <div
        className="medicine-card"
        key={medicine._id}
      >

        <h3>{medicine.name}</h3>

        <p>

          <strong>Company :</strong>

          {medicine.company}

        </p>

        <p>

          <strong>Price :</strong>

          ₹{medicine.price}

        </p>

        <p>

          <strong>Stock :</strong>

          {medicine.stock}

        </p>

        <div className="card-buttons">

          <button

            className="edit-btn"

            onClick={() =>
              editMedicine(medicine)
            }

          >

            Edit

          </button>

          <button

            className="delete-btn"

            onClick={() =>
              deleteMedicine(
                medicine._id
              )
            }

          >

            Delete

          </button>

        </div>

      </div>

    ));

  const pageCount = Math.ceil(

    filteredMedicines.length /

    medicinesPerPage

  );
    return (

    <div className="medicine-page">

      <div className="page-header">

        <h1 className="medicine-title">

          Medicine Management

        </h1>

        <button

          className="pdf-btn"

          onClick={exportPDF}

        >

          Download PDF

        </button>

      </div>

      <form

        className="medicine-form"

        onSubmit={handleSubmit}

      >

        <input

          type="text"

          name="name"

          placeholder="Medicine Name"

          value={form.name}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="company"

          placeholder="Company Name"

          value={form.company}

          onChange={handleChange}

          required

        />

        <input

          type="number"

          name="price"

          placeholder="Price"

          value={form.price}

          onChange={handleChange}

          required

        />

        <input

          type="number"

          name="stock"

          placeholder="Available Stock"

          value={form.stock}

          onChange={handleChange}

          required

        />

        <button

          type="submit"

          className="submit-btn"

        >

          {

            editingId

              ? "Update Medicine"

              : "Add Medicine"

          }

        </button>

      </form>

      <input

        className="search-box"

        type="text"

        placeholder="Search Medicine..."

        value={search}

        onChange={(e)=>{

          setSearch(e.target.value);

          setPageNumber(0);

        }}

      />

      <div className="medicine-grid">

        {

          displayMedicines.length>0

          ? displayMedicines

          :

          <div className="empty-data">

            No Medicines Found

          </div>

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

          renderOnZeroPageCount={null}

        />

      }

    </div>

  );

}

export default Medicine;