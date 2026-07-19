import "./Hospital.css";

function Hospital() {

  const hospitals = [
    {
      name: "Apollo Hospital",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    },
    {
      name: "Yashoda Hospital",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
    },
    {
      name: "CARE Hospital",
      location: "Visakhapatnam",
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
    },
    {
      name: "AIIMS",
      location: "New Delhi",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    },
    {
      name: "KIMS Hospital",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800",
    },
    {
      name: "NIMS Hospital",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    },
  ];

  return (
    <div className="hospital-container">

      <h1 className="hospital-title">
        Top Multi-Speciality Hospitals
      </h1>

      <p className="hospital-subtitle">
        Find the best hospitals across India.
      </p>

      <div className="hospital-grid">

        {hospitals.map((hospital, index) => (

          <div className="hospital-card" key={index}>

            <img
              src={hospital.image}
              alt={hospital.name}
            />

            <h2>{hospital.name}</h2>

            <p className="location">
              📍 {hospital.location}
            </p>

            <p>
              Multi-speciality hospital with experienced doctors and modern healthcare facilities.
            </p>

            <p className="rating">
              ⭐ 4.8 / 5
            </p>

            <button className="book-btn">
              Book Appointment
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Hospital;