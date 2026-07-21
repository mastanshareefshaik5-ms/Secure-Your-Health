import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/api";
import "./Login.css";
import { toast } from "react-toastify";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
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

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", res.data.user.name);

      toast.success("Login Successful");

      navigate("/home");

    } catch (err) {

      toast.error(err.response?.data?.message || "Login Failed");

    }
  };

  return (

    <div className="login-container">

      <div className="overlay"></div>

      <form className="login-box" onSubmit={handleSubmit}>

        <h1>🏥</h1>

        <h2>Secure Your Health</h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </form>

    </div>

  );
}

export default Login;