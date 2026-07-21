import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Hospital.css";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Hospital() {

  const [hospitals, setHospitals] = useState([]);

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const hospitalsPerPage = 6;

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {

    try {

      const res = await API.get("/hospitals");

      setHospitals(res.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load hospitals");

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
        !form.address ||
        !form.phone
      ) {

        toast.warning("Please fill all fields");

        return;

      }

      if (editingId) {

        await API.put(

          `/hospitals/${editingId}`,

          form

        );

        toast.success("Hospital Updated");

      } else {

        await API.post(

          "/hospitals",

          form

        );

        toast.success("Hospital Added");

      }

      setForm({

        name: "",

        address: "",

        phone: "",

      });

      setEditingId(null);

      fetchHospitals();

    } catch (err) {

      console.log(err);

      toast.error("Operation Failed");

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

      top:0,

      behavior:"smooth",

    });

  };

  const deleteHospital = async (id) => {

    if (!window.confirm("Delete Hospital?")) return;

    try{

      await API.delete(`/hospitals/${id}`);

      toast.success("Hospital Deleted");

      fetchHospitals();

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
    doc.text("Hospital Report", 14, 25);

    autoTable(doc, {
      startY: 35,

      head: [[
        "Hospital",
        "Address",
        "Phone"
      ]],

      body: hospitals.map((hospital) => [

        hospital.name,

        hospital.address,

        hospital.phone,

      ])

    });

    doc.save("Hospital_Report.pdf");

    toast.success("PDF Downloaded");

  };

  const filteredHospitals = hospitals.filter((hospital) =>

    hospital.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const pagesVisited = pageNumber * hospitalsPerPage;

  const displayHospitals = filteredHospitals

    .slice(

      pagesVisited,

      pagesVisited + hospitalsPerPage

    )

    .map((hospital) => (

      <div
        className="hospital-card"
        key={hospital._id}
      >

        <h3>{hospital.name}</h3>

        <p>

          <strong>Address :</strong>

          {hospital.address}

        </p>

        <p>

          <strong>Phone :</strong>

          {hospital.phone}

        </p>

        <div className="card-buttons">

          <button

            className="edit-btn"

            onClick={() =>
              editHospital(hospital)
            }

          >

            Edit

          </button>

          <button

            className="delete-btn"

            onClick={() =>
              deleteHospital(
                hospital._id
              )
            }

          >

            Delete

          </button>

        </div>

      </div>

    ));

  const pageCount = Math.ceil(

    filteredHospitals.length /

    hospitalsPerPage

  );
    return (

    <div className="hospital-page">

      <div className="page-header">

        <h1 className="hospital-title">

          Hospital Management

        </h1>

        <button

          className="pdf-btn"

          onClick={exportPDF}

        >

          Download PDF

        </button>

      </div>

      <form

        className="hospital-form"

        onSubmit={handleSubmit}

      >

        <input

          type="text"

          name="name"

          placeholder="Hospital Name"

          value={form.name}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="address"

          placeholder="Hospital Address"

          value={form.address}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="phone"

          placeholder="Phone Number"

          value={form.phone}

          onChange={handleChange}

          required

        />

        <button

          type="submit"

          className="submit-btn"

        >

          {

            editingId

              ? "Update Hospital"

              : "Add Hospital"

          }

        </button>

      </form>

      <input

        className="search-box"

        type="text"

        placeholder="Search Hospital..."

        value={search}

        onChange={(e) => {

          setSearch(e.target.value);

          setPageNumber(0);

        }}

      />

      <div className="hospital-grid">

        {

          displayHospitals.length > 0

            ? displayHospitals

            : (

              <div className="empty-data">

                No Hospitals Found

              </div>

            )

        }

      </div>

      {

        pageCount > 1 && (

          <ReactPaginate

            previousLabel={"← Previous"}

            nextLabel={"Next →"}

            pageCount={pageCount}

            onPageChange={({ selected }) =>

              setPageNumber(selected)

            }

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

        )

      }

    </div>

  );

}

export default Hospital;