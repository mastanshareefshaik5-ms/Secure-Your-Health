import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful");
    console.log(user);
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Secure Your Health</h1>

        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleChange}
          />

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;