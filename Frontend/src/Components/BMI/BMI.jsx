import "./BMI.css";
import { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [status, setStatus] = useState("");
  const [advice, setAdvice] = useState("");

  const calculateBMI = () => {
    if (height === "" || weight === "") {
      alert("Please enter both height and weight.");
      return;
    }

    const h = height / 100;
    const bmiValue = (weight / (h * h)).toFixed(1);

    setBMI(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
      setAdvice("Increase your calorie intake and consult a healthcare professional if needed.");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setStatus("Normal Weight");
      setAdvice("Great! Maintain a balanced diet and exercise regularly.");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setStatus("Overweight");
      setAdvice("Exercise regularly and reduce high-calorie foods.");
    } else {
      setStatus("Obese");
      setAdvice("Consult a doctor or nutritionist for a healthy weight-loss plan.");
    }
  };

  const resetFields = () => {
    setHeight("");
    setWeight("");
    setBMI("");
    setStatus("");
    setAdvice("");
  };

  return (
    <div className="bmi-container">
      <div className="bmi-card">

        <h1>🩺 BMI Calculator</h1>
        <p>Calculate your Body Mass Index</p>

        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button onClick={calculateBMI} className="calculate-btn">
            Calculate BMI
          </button>

          <button onClick={resetFields} className="reset-btn">
            Reset
          </button>
        </div>

        {bmi && (
          <div className="result-box">
            <h2>Your BMI: {bmi}</h2>

            <h3>Status: {status}</h3>

            <p>{advice}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default BMI;