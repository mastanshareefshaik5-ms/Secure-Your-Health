import { useState } from "react";
import "./BMI.css";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    const h = Number(height) / 100;
    const w = Number(weight);

    if (!h || !w) return;

    const result = (w / (h * h)).toFixed(2);

    setBmi(result);

    if (result < 18.5) setStatus("Underweight");
    else if (result < 25) setStatus("Normal");
    else if (result < 30) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className="bmi-container">

      <div className="bmi-card">

        <h2>BMI Calculator</h2>

        <form onSubmit={calculateBMI}>

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <button>Calculate BMI</button>

        </form>

        {bmi && (
          <div className="result">

            <h3>Your BMI : {bmi}</h3>

            <p>Status : {status}</p>

          </div>
        )}

      </div>

    </div>
  );
}

export default BMI;