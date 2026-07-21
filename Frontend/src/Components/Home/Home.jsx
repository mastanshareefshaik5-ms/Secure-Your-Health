import "./Home.css";

import banner from "../../Images/Banner.jpg";
import doctor from "../../Images/Doctor.jpg";
import hospital from "../../Images/Hospital.jpg";
import medicine from "../../Images/Medicine.jpg";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-left">

          <h1>
            Secure Your Health
          </h1>

          <p>
            A complete Healthcare Management System to manage hospitals,
            doctors, medicines and appointments efficiently.
          </p>

          <button>
            Book Appointment
          </button>

        </div>

        <div className="hero-right">

          <img
            src={banner}
            alt="Healthcare"
          />

        </div>

      </section>

      <section className="statistics">

        <div className="stat">
          <h2>100+</h2>
          <p>Hospitals</p>
        </div>

        <div className="stat">
          <h2>250+</h2>
          <p>Doctors</p>
        </div>

        <div className="stat">
          <h2>500+</h2>
          <p>Medicines</p>
        </div>

        <div className="stat">
          <h2>1000+</h2>
          <p>Patients</p>
        </div>

      </section>

      <section className="services">

        <h1>
          Our Services
        </h1>

        <div className="service-grid">

          <div className="service-card">

            <img
              src={doctor}
              alt=""
            />

            <h3>
              Expert Doctors
            </h3>

            <p>
              Experienced specialists available for every healthcare need.
            </p>

          </div>

          <div className="service-card">

            <img
              src={hospital}
              alt=""
            />

            <h3>
              Modern Hospitals
            </h3>

            <p>
              Search hospitals with advanced facilities and emergency care.
            </p>

          </div>

          <div className="service-card">

            <img
              src={medicine}
              alt=""
            />

            <h3>
              Medicines
            </h3>

            <p>
              Order medicines quickly and manage prescriptions easily.
            </p>

          </div>

        </div>

      </section>

      <section className="emergency">

        <h2>
          🚑 Emergency Support 24 × 7
        </h2>

        <p>
          Our ambulance services and emergency healthcare are available
          round the clock for immediate assistance.
        </p>

      </section>

    </div>
  );
}

export default Home;