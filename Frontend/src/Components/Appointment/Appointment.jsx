import { useEffect, useState } from "react";
import API from "../../api/api";
import "./Appointment.css";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Appointment() {

  const [appointments, setAppointments] = useState([]);

  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    hospital: "",
    date: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const appointmentsPerPage = 6;

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {

    try {

      const res = await API.get("/appointments");

      setAppointments(res.data);

    } catch (err) {

      console.log(err);

      toast.error("Unable to load appointments");

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
        !form.patientName ||
        !form.doctorName ||
        !form.hospital ||
        !form.date
      ) {

        toast.warning("Please fill all fields");

        return;

      }

      if (editingId) {

        await API.put(

          `/appointments/${editingId}`,

          form

        );

        toast.success("Appointment Updated");

      } else {

        await API.post(

          "/appointments",

          form

        );

        toast.success("Appointment Booked");

      }

      setForm({

        patientName: "",

        doctorName: "",

        hospital: "",

        date: "",

      });

      setEditingId(null);

      fetchAppointments();

    } catch (err) {

      console.log(err);

      toast.error("Operation Failed");

    }

  };

  const editAppointment = (appointment) => {

    setEditingId(appointment._id);

    setForm({

      patientName: appointment.patientName,

      doctorName: appointment.doctorName,

      hospital: appointment.hospital,

      date: appointment.date.substring(0,10),

    });

    window.scrollTo({

      top:0,

      behavior:"smooth",

    });

  };

  const deleteAppointment = async (id) => {

    if (!window.confirm("Delete Appointment?")) return;

    try{

      await API.delete(`/appointments/${id}`);

      toast.success("Appointment Deleted");

      fetchAppointments();

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
    doc.text("Appointment Report", 14, 25);

    autoTable(doc, {
      startY: 35,

      head: [[
        "Patient",
        "Doctor",
        "Hospital",
        "Appointment Date"
      ]],

      body: appointments.map((item) => [

        item.patientName,
        item.doctorName,
        item.hospital,
        new Date(item.date).toLocaleDateString(),

      ])

    });

    doc.save("Appointments_Report.pdf");

    toast.success("PDF Downloaded");

  };

  const filteredAppointments = appointments.filter((appointment) =>

    appointment.patientName
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const pagesVisited = pageNumber * appointmentsPerPage;

  const displayAppointments = filteredAppointments

    .slice(

      pagesVisited,

      pagesVisited + appointmentsPerPage

    )

    .map((appointment) => (

      <div
        className="appointment-card"
        key={appointment._id}
      >

        <h3>

          {appointment.patientName}

        </h3>

        <p>

          <strong>Doctor :</strong>

          {appointment.doctorName}

        </p>

        <p>

          <strong>Hospital :</strong>

          {appointment.hospital}

        </p>

        <p>

          <strong>Date :</strong>

          {new Date(
            appointment.date
          ).toLocaleDateString()}

        </p>

        <div className="card-buttons">

          <button

            className="edit-btn"

            onClick={() =>
              editAppointment(appointment)
            }

          >

            Edit

          </button>

          <button

            className="delete-btn"

            onClick={() =>
              deleteAppointment(
                appointment._id
              )
            }

          >

            Delete

          </button>

        </div>

      </div>

    ));

  const pageCount = Math.ceil(

    filteredAppointments.length /

    appointmentsPerPage

  );
    return (

    <div className="appointment-page">

      <div className="page-header">

        <h1 className="appointment-title">

          Appointment Management

        </h1>

        <button

          className="pdf-btn"

          onClick={exportPDF}

        >

          Download PDF

        </button>

      </div>

      <form

        className="appointment-form"

        onSubmit={handleSubmit}

      >

        <input

          type="text"

          name="patientName"

          placeholder="Patient Name"

          value={form.patientName}

          onChange={handleChange}

          required

        />

        <input

          type="text"

          name="doctorName"

          placeholder="Doctor Name"

          value={form.doctorName}

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

          type="date"

          name="date"

          value={form.date}

          onChange={handleChange}

          required

        />

        <button

          type="submit"

          className="submit-btn"

        >

          {

            editingId

              ? "Update Appointment"

              : "Book Appointment"

          }

        </button>

      </form>

      <input

        className="search-box"

        type="text"

        placeholder="Search Patient..."

        value={search}

        onChange={(e) => {

          setSearch(e.target.value);

          setPageNumber(0);

        }}

      />

      <div className="appointment-grid">

        {

          displayAppointments.length > 0

            ? displayAppointments

            : (

              <div className="empty-data">

                No Appointments Found

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

export default Appointment;