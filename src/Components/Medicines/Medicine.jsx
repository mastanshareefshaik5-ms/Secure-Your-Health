import "./Medicine.css";
import MedicineImage from "../../Images/Medicine.jpg";

function Medicine() {
  return (
    <div>
      <h1>Medicines</h1>

      <img src={MedicineImage} alt="Medicine" width="400" />
    </div>
  );
}

export default Medicine;