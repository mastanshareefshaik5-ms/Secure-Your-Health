import { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("user"));

    if (data) {
      setUser(data);
    }

  }, []);

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  };

  const saveProfile = () => {

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Profile Updated Successfully");

  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />

        </div>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <div className="profile-form">

          <label>Name</label>

          <input
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <label>Email</label>

          <input
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <button onClick={saveProfile}>
            Save Changes
          </button>

        </div>

      </div>

    </div>

  );

}

export default Profile;