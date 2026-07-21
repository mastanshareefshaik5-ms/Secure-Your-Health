// BloodDonation.jsx

import { useEffect, useState } from "react";
import API from "../../api/api";
import "./BloodDonation.css";

function BloodDonation() {

  const [donors, setDonors] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [form, setForm] = useState({
    donorName: "",
    bloodGroup: "",
    phone: "",
    city: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDonors();
  }, []);

  useEffect(() => {
    setFiltered(
      donors.filter((d) =>
        d.donorName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, donors]);

  const fetchDonors = async () => {
    const res = await API.get("/blooddonations");
    setDonors(res.data);
    setFiltered(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (editingId) {
      await API.put(`/blooddonations/${editingId}`, form);
    } else {
      await API.post("/blooddonations", form);
    }

    setForm({
      donorName:"",
      bloodGroup:"",
      phone:"",
      city:"",
    });

    setEditingId(null);

    fetchDonors();

  };

  const editDonor=(d)=>{

    setEditingId(d._id);

    setForm({
      donorName:d.donorName,
      bloodGroup:d.bloodGroup,
      phone:d.phone,
      city:d.city,
    });

    window.scrollTo({top:0,behavior:"smooth"});

  };

  const deleteDonor=async(id)=>{

    if(!window.confirm("Delete Donor?")) return;

    await API.delete(`/blooddonations/${id}`);

    fetchDonors();

  };

  return(

<div className="donation-page">

<h1 className="donation-title">

Blood Donation Management

</h1>

<form className="donation-form" onSubmit={handleSubmit}>

<input
name="donorName"
placeholder="Donor Name"
value={form.donorName}
onChange={handleChange}
required
/>

<input
name="bloodGroup"
placeholder="Blood Group"
value={form.bloodGroup}
onChange={handleChange}
required
/>

<input
name="phone"
placeholder="Phone"
value={form.phone}
onChange={handleChange}
required
/>

<input
name="city"
placeholder="City"
value={form.city}
onChange={handleChange}
required
/>

<button>

{editingId?"Update Donor":"Add Donor"}

</button>

</form>

<input
className="search-box"
placeholder="Search Donor..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="donation-grid">

{filtered.map((d)=>(

<div className="donation-card" key={d._id}>

<h3>{d.donorName}</h3>

<p><strong>Blood :</strong> {d.bloodGroup}</p>

<p><strong>Phone :</strong> {d.phone}</p>

<p><strong>City :</strong> {d.city}</p>

<div className="card-buttons">

<button className="edit-btn" onClick={()=>editDonor(d)}>

Edit

</button>

<button className="delete-btn" onClick={()=>deleteDonor(d._id)}>

Delete

</button>

</div>

</div>

))}

</div>

</div>

);

}

export default BloodDonation;