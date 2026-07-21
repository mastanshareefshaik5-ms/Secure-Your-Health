import { useState } from "react";
import "./BMI.css";

function BMI() {

  const [height, setHeight] = useState("");

  const [weight, setWeight] = useState("");

  const [bmi, setBMI] = useState("");

  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {

    e.preventDefault();

    if (!height || !weight) {

      alert("Please enter Height and Weight");

      return;

    }

    const h = Number(height) / 100;

    const w = Number(weight);

    const result = (w / (h * h)).toFixed(2);

    setBMI(result);

    if (result < 18.5) {

      setStatus("Underweight");

    }

    else if (result < 25) {

      setStatus("Normal Weight");

    }

    else if (result < 30) {

      setStatus("Overweight");

    }

    else {

      setStatus("Obese");

    }

  };

  const resetForm = () => {

    setHeight("");

    setWeight("");

    setBMI("");

    setStatus("");

  };

  return (

    <div className="bmi-page">

      <div className="bmi-card">

        <h1>

          BMI Calculator

        </h1>

        <form onSubmit={calculateBMI}>

          <input

            type="number"

            placeholder="Height (cm)"

            value={height}

            onChange={(e)=>setHeight(e.target.value)}

            required

          />

          <input

            type="number"

            placeholder="Weight (kg)"

            value={weight}

            onChange={(e)=>setWeight(e.target.value)}

            required

          />

          <button type="submit">

            Calculate BMI

          </button>

          <button

            type="button"

            className="reset-btn"

            onClick={resetForm}

          >

            Reset

          </button>

        </form>

        {

          bmi &&

          <div className="result">

            <h2>

              BMI : {bmi}

            </h2>

            <h3>

              Status : {status}

            </h3>

          </div>

        }

      </div>

    </div>

  );

}

export default BMI;