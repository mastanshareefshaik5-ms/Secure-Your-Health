import "./Home.css";

import banner from "../../Images/Banner.jpg";
import doctor from "../../Images/Doctor.jpg";
import hospital from "../../Images/Hospital.jpg";
import medicine from "../../Images/Medicine.jpg";

function Home() {
  return (
    <div className="home">

      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>

      <div className="welcome">
        <h1>Welcome to Secure Your Health</h1>

        <p>
          Secure Your Health is your trusted healthcare platform where
          patients can find the best hospitals, doctors, medicines and
          emergency ambulance services in one place.
        </p>
      </div>

      <div className="services">

        <div className="card">
          <img src={doctor} alt="Doctors" />
          <h2>Expert Doctors</h2>
          <p>
            Find experienced specialists for every medical need.
          </p>
        </div>

        <div className="card">
          <img src={hospital} alt="Hospitals" />
          <h2>Top Hospitals</h2>
          <p>
            Search hospitals with advanced facilities.
          </p>
        </div>

        <div className="card">
          <img src={medicine} alt="Medicine" />
          <h2>Medicines</h2>
          <p>
            Find medicines and healthcare products easily.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;