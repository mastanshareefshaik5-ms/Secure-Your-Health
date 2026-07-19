import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/api";
import "./Register.css";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      alert(err.response?.data?.message || "Registration Failed");

    }
  };

  return (

    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button>
          Register
        </button>

        <p>

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Register;