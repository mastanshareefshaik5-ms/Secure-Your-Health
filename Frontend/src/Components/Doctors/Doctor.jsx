import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Doctor.css";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Doctor() {

  const [doctors, setDoctors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    specialization: "",
    hospital: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const doctorsPerPage = 6;

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {

    try {

      const res = await API.get("/doctors");

      setDoctors(res.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load doctors");

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
        !form.specialization ||
        !form.hospital ||
        !form.phone
      ) {

        toast.warning("Please fill all fields");

        return;

      }

      if (editingId) {

        await API.put(
          `/doctors/${editingId}`,
          form
        );

        toast.success("Doctor Updated");

      } else {

        await API.post(
          "/doctors",
          form
        );

        toast.success("Doctor Added");

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

      toast.error("Operation Failed");

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

    window.scrollTo({

      top:0,

      behavior:"smooth",

    });

  };

  const deleteDoctor = async (id) => {

    if (!window.confirm("Delete Doctor?")) return;

    try{

      await API.delete(`/doctors/${id}`);

      toast.success("Doctor Deleted");

      fetchDoctors();

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
    doc.text("Doctor Report", 14, 25);

    autoTable(doc, {

      startY: 35,

      head: [[
        "Doctor",
        "Specialization",
        "Hospital",
        "Phone"
      ]],

      body: doctors.map((doctor) => [

        doctor.name,

        doctor.specialization,

        doctor.hospital,

        doctor.phone,

      ])

    });

    doc.save("Doctor_Report.pdf");

    toast.success("PDF Downloaded");

  };

  const filteredDoctors = doctors.filter((doctor) =>

    doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const pagesVisited = pageNumber * doctorsPerPage;

  const displayDoctors = filteredDoctors

    .slice(

      pagesVisited,

      pagesVisited + doctorsPerPage

    )

    .map((doctor) => (

      <div
        className="doctor-card"
        key={doctor._id}
      >

        <h3>{doctor.name}</h3>

        <p>

          <strong>Specialization :</strong>

          {doctor.specialization}

        </p>

        <p>

          <strong>Hospital :</strong>

          {doctor.hospital}

        </p>

        <p>

          <strong>Phone :</strong>

          {doctor.phone}

        </p>

        <div className="card-buttons">

          <button

            className="edit-btn"

            onClick={() =>
              editDoctor(doctor)
            }

          >

            Edit

          </button>

          <button

            className="delete-btn"

            onClick={() =>
              deleteDoctor(
                doctor._id
              )
            }

          >

            Delete

          </button>

        </div>

      </div>

    ));

  const pageCount = Math.ceil(

    filteredDoctors.length /

    doctorsPerPage

  );
    return (

    <div className="doctor-page">

      <div className="page-header">

        <h1 className="doctor-title">

          Doctor Management

        </h1>

        <button

          className="pdf-btn"

          onClick={exportPDF}

        >

          Download PDF

        </button>

      </div>

      <form

        className="doctor-form"

        onSubmit={handleSubmit}

      >

        <input

          type="text"

          name="name"

          placeholder="Doctor Name"

          value={form.name}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="specialization"

          placeholder="Specialization"

          value={form.specialization}

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

              ? "Update Doctor"

              : "Add Doctor"

          }

        </button>

      </form>

      <input

        className="search-box"

        type="text"

        placeholder="Search Doctor..."

        value={search}

        onChange={(e) => {

          setSearch(e.target.value);

          setPageNumber(0);

        }}

      />

      <div className="doctor-grid">

        {

          displayDoctors.length > 0

            ? displayDoctors

            : (

              <div className="empty-data">

                No Doctors Found

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

export default Doctor;