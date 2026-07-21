// BloodBank.jsx (Part 1)

import { useEffect, useState } from "react";
import API from "../../api/api";
import "./BloodBank.css";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function BloodBank() {

  const [bloodBanks, setBloodBanks] = useState([]);

  const [form, setForm] = useState({
    bloodGroup: "",
    units: "",
    hospital: "",
    contact: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const bloodBanksPerPage = 6;

  useEffect(() => {
    fetchBloodBanks();
  }, []);

  const fetchBloodBanks = async () => {

    try {

      const res = await API.get("/bloodbanks");

      setBloodBanks(res.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load Blood Bank");

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
        !form.bloodGroup ||
        !form.units ||
        !form.hospital ||
        !form.contact
      ) {

        toast.warning("Please fill all fields");

        return;

      }

      if (editingId) {

        await API.put(
          `/bloodbanks/${editingId}`,
          form
        );

        toast.success("Blood Stock Updated");

      } else {

        await API.post(
          "/bloodbanks",
          form
        );

        toast.success("Blood Stock Added");

      }

      setForm({

        bloodGroup: "",

        units: "",

        hospital: "",

        contact: "",

      });

      setEditingId(null);

      fetchBloodBanks();

    } catch (err) {

      console.log(err);

      toast.error("Operation Failed");

    }

  };

  const editBlood = (blood) => {

    setEditingId(blood._id);

    setForm({

      bloodGroup: blood.bloodGroup,

      units: blood.units,

      hospital: blood.hospital,

      contact: blood.contact,

    });

    window.scrollTo({

      top:0,

      behavior:"smooth",

    });

  };

  const deleteBlood = async(id)=>{

    if(!window.confirm("Delete Blood Record?")) return;

    try{

      await API.delete(`/bloodbanks/${id}`);

      toast.success("Deleted Successfully");

      fetchBloodBanks();

    }

    catch{

      toast.error("Delete Failed");

    }

  };
    const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Secure Your Health", 14, 15);

    doc.setFontSize(12);
    doc.text("Blood Bank Report", 14, 25);

    autoTable(doc, {

      startY: 35,

      head: [[
        "Blood Group",
        "Units",
        "Hospital",
        "Contact"
      ]],

      body: bloodBanks.map((blood) => [

        blood.bloodGroup,

        blood.units,

        blood.hospital,

        blood.contact,

      ])

    });

    doc.save("BloodBank_Report.pdf");

    toast.success("PDF Downloaded");

  };

  const filteredBlood = bloodBanks.filter((blood)=>

    blood.bloodGroup
    .toLowerCase()
    .includes(search.toLowerCase())

  );

  const pagesVisited = pageNumber * bloodBanksPerPage;

  const displayBlood = filteredBlood

  .slice(

    pagesVisited,

    pagesVisited + bloodBanksPerPage

  )

  .map((blood)=>(

    <div

      className="blood-card"

      key={blood._id}

    >

      <h3>

        {blood.bloodGroup}

      </h3>

      <p>

        <strong>Units :</strong>

        {blood.units}

      </p>

      <p>

        <strong>Hospital :</strong>

        {blood.hospital}

      </p>

      <p>

        <strong>Contact :</strong>

        {blood.contact}

      </p>

      <div className="card-buttons">

        <button

          className="edit-btn"

          onClick={()=>editBlood(blood)}

        >

          Edit

        </button>

        <button

          className="delete-btn"

          onClick={()=>deleteBlood(blood._id)}

        >

          Delete

        </button>

      </div>

    </div>

  ));

  const pageCount = Math.ceil(

    filteredBlood.length /

    bloodBanksPerPage

  );
    return (

    <div className="bloodbank-page">

      <div className="page-header">

        <h1 className="bloodbank-title">

          Blood Bank Management

        </h1>

        <button

          className="pdf-btn"

          onClick={exportPDF}

        >

          Download PDF

        </button>

      </div>

      <form

        className="bloodbank-form"

        onSubmit={handleSubmit}

      >

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

          name="units"

          placeholder="Available Units"

          value={form.units}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="hospital"

          placeholder="Hospital Name"

          value={form.hospital}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="contact"

          placeholder="Contact Number"

          value={form.contact}

          onChange={handleChange}

          required

        />

        <button

          type="submit"

          className="submit-btn"

        >

          {

            editingId

              ? "Update Blood Stock"

              : "Add Blood Stock"

          }

        </button>

      </form>

      <input

        className="search-box"

        type="text"

        placeholder="Search Blood Group..."

        value={search}

        onChange={(e)=>{

          setSearch(e.target.value);

          setPageNumber(0);

        }}

      />

      <div className="blood-grid">

        {

          displayBlood.length>0

          ?

          displayBlood

          :

          <div className="empty-data">

            No Blood Records Found

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

export default BloodBank;