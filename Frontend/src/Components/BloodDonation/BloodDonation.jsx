// BloodDonation.jsx (Part 1)

import { useEffect, useState } from "react";
import API from "../../api/api";
import "./BloodDonation.css";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function BloodDonation() {

  const [donors, setDonors] = useState([]);

  const [form, setForm] = useState({
    donorName: "",
    bloodGroup: "",
    age: "",
    phone: "",
    city: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const donorsPerPage = 6;

  useEffect(() => {

    fetchDonors();

  }, []);

  const fetchDonors = async () => {

    try {

      const res = await API.get("/blooddonation");

      setDonors(res.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load Donors");

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

        !form.donorName ||

        !form.bloodGroup ||

        !form.age ||

        !form.phone ||

        !form.city

      ) {

        toast.warning("Please fill all fields");

        return;

      }

      if (editingId) {

        await API.put(

          `/blooddonation/${editingId}`,

          form

        );

        toast.success("Donor Updated");

      } else {

        await API.post(

          "/blooddonation",

          form

        );

        toast.success("Donor Added");

      }

      setForm({

        donorName: "",

        bloodGroup: "",

        age: "",

        phone: "",

        city: "",

      });

      setEditingId(null);

      fetchDonors();

    } catch (err) {

      console.log(err);

      toast.error("Operation Failed");

    }

  };

  const editDonor = (donor) => {

    setEditingId(donor._id);

    setForm({

      donorName: donor.donorName,

      bloodGroup: donor.bloodGroup,

      age: donor.age,

      phone: donor.phone,

      city: donor.city,

    });

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  const deleteDonor = async (id) => {

    if (!window.confirm("Delete Donor?")) return;

    try {

      await API.delete(`/blooddonation/${id}`);

      toast.success("Donor Deleted");

      fetchDonors();

    } catch {

      toast.error("Delete Failed");

    }

  };
    const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Secure Your Health", 14, 15);

    doc.setFontSize(12);
    doc.text("Blood Donation Report", 14, 25);

    autoTable(doc, {

      startY: 35,

      head: [[
        "Donor",
        "Blood Group",
        "Age",
        "Phone",
        "City"
      ]],

      body: donors.map((donor) => [

        donor.donorName,

        donor.bloodGroup,

        donor.age,

        donor.phone,

        donor.city,

      ])

    });

    doc.save("BloodDonation_Report.pdf");

    toast.success("PDF Downloaded");

  };

  const filteredDonors = donors.filter((donor)=>

    donor.donorName
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const pagesVisited = pageNumber * donorsPerPage;

  const displayDonors = filteredDonors

    .slice(

      pagesVisited,

      pagesVisited + donorsPerPage

    )

    .map((donor)=>(

      <div

        className="donor-card"

        key={donor._id}

      >

        <h3>{donor.donorName}</h3>

        <p>

          <strong>Blood Group :</strong>

          {donor.bloodGroup}

        </p>

        <p>

          <strong>Age :</strong>

          {donor.age}

        </p>

        <p>

          <strong>Phone :</strong>

          {donor.phone}

        </p>

        <p>

          <strong>City :</strong>

          {donor.city}

        </p>

        <div className="card-buttons">

          <button

            className="edit-btn"

            onClick={()=>editDonor(donor)}

          >

            Edit

          </button>

          <button

            className="delete-btn"

            onClick={()=>deleteDonor(donor._id)}

          >

            Delete

          </button>

        </div>

      </div>

    ));

  const pageCount = Math.ceil(

    filteredDonors.length /

    donorsPerPage

  );
    return (

    <div className="blooddonation-page">

      <div className="page-header">

        <h1 className="blooddonation-title">

          Blood Donation Management

        </h1>

        <button

          className="pdf-btn"

          onClick={exportPDF}

        >

          Download PDF

        </button>

      </div>

      <form

        className="blooddonation-form"

        onSubmit={handleSubmit}

      >

        <input

          type="text"

          name="donorName"

          placeholder="Donor Name"

          value={form.donorName}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="bloodGroup"

          placeholder="Blood Group"

          value={form.bloodGroup}

          onChange={handleChange}

          required

        />

        <input

          type="number"

          name="age"

          placeholder="Age"

          value={form.age}

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

        <input

          type="text"

          name="city"

          placeholder="City"

          value={form.city}

          onChange={handleChange}

          required

        />

        <button

          type="submit"

          className="submit-btn"

        >

          {

            editingId

              ? "Update Donor"

              : "Add Donor"

          }

        </button>

      </form>

      <input

        className="search-box"

        type="text"

        placeholder="Search Donor..."

        value={search}

        onChange={(e)=>{

          setSearch(e.target.value);

          setPageNumber(0);

        }}

      />

      <div className="donor-grid">

        {

          displayDonors.length>0

          ?

          displayDonors

          :

          <div className="empty-data">

            No Donors Found

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

export default BloodDonation;