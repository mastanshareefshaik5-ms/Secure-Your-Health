import "./DarkMode.css";
import { useState, useEffect } from "react";

function DarkMode() {

  // Get saved theme from Local Storage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme and save to Local Storage
  useEffect(() => {

    if (darkMode) {

      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");

    } else {

      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");

    }

  }, [darkMode]);

  return (

    <div className="dark-container">

      <div className="dark-card">

        <h1>🌙 Dark Mode</h1>

        <p>
          Choose your preferred theme. Your selection will be saved even after refreshing the page.
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
        </button>

        <h3 style={{ marginTop: "20px" }}>
          Current Theme :
          <span style={{ color: "#0077cc" }}>
            {darkMode ? " Dark Mode" : " Light Mode"}
          </span>
        </h3>

      </div>

    </div>

  );

}

export default DarkMode;