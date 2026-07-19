import "./BloodDonation.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BloodDonation() {
  const { id } = useParams();

  const [donor, setDonor] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    mobile: "",
    email: "",
    city: "",
    lastDonation: "",
  });

  useEffect(() => {
    if (id) {
      console.log("Viewing Donor ID:", id);

      // Dummy data (Later replace with MongoDB API)
      setDonor({
        name: "Rahul Kumar",
        age: "24",
        gender: "Male",
        bloodGroup: "O+",
        mobile: "9876543210",
        email: "rahul@gmail.com",
        city: "Hyderabad",
        lastDonation: "2026-01-15",
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setDonor({
      ...donor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      donor.name === "" ||
      donor.age === "" ||
      donor.gender === "" ||
      donor.bloodGroup === "" ||
      donor.mobile === "" ||
      donor.email === "" ||
      donor.city === ""
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Blood Donor Registered Successfully!");

    console.log(donor);

    setDonor({
      name: "",
      age: "",
      gender: "",
      bloodGroup: "",
      mobile: "",
      email: "",
      city: "",
      lastDonation: "",
    });
  };

  return (
    <div className="blood-container">

      <div className="blood-card">

        <h1>🩸 Blood Donation Registration</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={donor.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={donor.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={donor.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select
            name="bloodGroup"
            value={donor.bloodGroup}
            onChange={handleChange}
          >
            <option value="">Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={donor.mobile}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={donor.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={donor.city}
            onChange={handleChange}
          />

          <label className="date-label">
            Last Blood Donation Date
          </label>

          <input
            type="date"
            name="lastDonation"
            value={donor.lastDonation}
            onChange={handleChange}
          />

          <button type="submit">
            Register as Donor
          </button>

        </form>

      </div>

    </div>
  );
}

export default BloodDonation;