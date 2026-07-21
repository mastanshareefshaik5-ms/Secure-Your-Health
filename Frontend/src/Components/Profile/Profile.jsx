import { useEffect, useState } from "react";
import "./Profile.css";
import { toast } from "react-toastify";

function Profile() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    bloodGroup: "",
    address: "",
  });

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {

      setUser({

        name: storedUser.name || "",

        email: storedUser.email || "",

        phone: storedUser.phone || "",

        age: storedUser.age || "",

        gender: storedUser.gender || "",

        bloodGroup: storedUser.bloodGroup || "",

        address: storedUser.address || "",

      });

    }

  }, []);

  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]: e.target.value,

    });

  };

  const handleSave = () => {

    localStorage.setItem(

      "user",

      JSON.stringify(user)

    );

    toast.success("Profile Updated Successfully");

  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">

            {user.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}

          </div>

          <h1>My Profile</h1>

          <p>

            Manage your personal information

          </p>

        </div>

        <div className="profile-form">

          <div className="input-group">

            <label>Full Name</label>

            <input

              type="text"

              name="name"

              value={user.name}

              onChange={handleChange}

            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input

              type="email"

              name="email"

              value={user.email}

              onChange={handleChange}

            />

          </div>

          <div className="input-group">

            <label>Phone Number</label>

            <input

              type="text"

              name="phone"

              value={user.phone}

              onChange={handleChange}

            />

          </div>

          <div className="input-group">

            <label>Age</label>

            <input

              type="number"

              name="age"

              value={user.age}

              onChange={handleChange}

            />

          </div>

          <div className="input-group">

            <label>Gender</label>

            <select

              name="gender"

              value={user.gender}

              onChange={handleChange}

            >

              <option value="">Select Gender</option>

              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>

            </select>

          </div>

          <div className="input-group">

            <label>Blood Group</label>

            <select

              name="bloodGroup"

              value={user.bloodGroup}

              onChange={handleChange}

            >

              <option value="">Select Blood Group</option>

              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>

            </select>

          </div>

          <div className="input-group full-width">

            <label>Address</label>

            <textarea

              rows="4"

              name="address"

              value={user.address}

              onChange={handleChange}

            />

          </div>

          <button

            className="save-btn"

            onClick={handleSave}

          >

            Save Profile

          </button>

        </div>

      </div>

    </div>

  );

}

export default Profile;