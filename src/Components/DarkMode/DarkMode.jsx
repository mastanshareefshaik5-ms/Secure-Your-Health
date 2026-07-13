import "./DarkMode.css";
import { useState, useEffect } from "react";

function DarkMode() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

  }, [darkMode]);

  return (
    <div className="dark-container">

      <div className="dark-card">

        <h1>🌙 Dark Mode</h1>

        <p>
          Switch between Light Mode and Dark Mode.
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      </div>

    </div>
  );
}

export default DarkMode;