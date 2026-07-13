import "./BloodBank.css";
import { useState, useEffect } from "react";

function BloodBank() {

  const [bloodBanks, setBloodBanks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const data = [
      {
        id: 1,
        hospital: "Apollo Hospital",
        city: "Hyderabad",
        bloodGroup: "A+",
        units: 15
      },
      {
        id: 2,
        hospital: "Yashoda Hospital",
        city: "Hyderabad",
        bloodGroup: "O+",
        units: 10
      },
      {
        id: 3,
        hospital: "Care Hospital",
        city: "Vijayawada",
        bloodGroup: "B+",
        units: 8
      },
      {
        id: 4,
        hospital: "KIMS Hospital",
        city: "Guntur",
        bloodGroup: "AB+",
        units: 5
      },
      {
        id: 5,
        hospital: "Rainbow Hospital",
        city: "Visakhapatnam",
        bloodGroup: "O-",
        units: 12
      }
    ];

    setBloodBanks(data);

  }, []);

  const filteredBloodBanks = bloodBanks.filter((bank) =>
    bank.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
    bank.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bloodbank-container">

      <h1>🩸 Blood Bank</h1>

      <input
        type="text"
        placeholder="Search by Blood Group or City"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="bloodbank-grid">

        {filteredBloodBanks.map((bank) => (

          <div className="bloodbank-card" key={bank.id}>

            <h2>{bank.hospital}</h2>

            <p><strong>City :</strong> {bank.city}</p>

            <p><strong>Blood Group :</strong> {bank.bloodGroup}</p>

            <p><strong>Available Units :</strong> {bank.units}</p>

            <button>Request Blood</button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default BloodBank;