import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h1>My Profile</h1>

        <div className="profile-info">

          <div className="info-row">
            <span className="label">Full Name</span>
            <span className="value">Shaik Mastan Shareef</span>
          </div>

          <div className="info-row">
            <span className="label">Email</span>
            <span className="value">mastan@gmail.com</span>
          </div>

          <div className="info-row">
            <span className="label">Mobile</span>
            <span className="value">+91 9876543210</span>
          </div>

          <div className="info-row">
            <span className="label">Age</span>
            <span className="value">21 Years</span>
          </div>

          <div className="info-row">
            <span className="label">Gender</span>
            <span className="value">Male</span>
          </div>

          <div className="info-row">
            <span className="label">Blood Group</span>
            <span className="value">O+</span>
          </div>

          <div className="info-row">
            <span className="label">Address</span>
            <span className="value">Guntur, Andhra Pradesh</span>
          </div>

        </div>

        <button className="edit-btn">
          Edit Profile
        </button>

      </div>
    </div>
  );
}

export default Profile;