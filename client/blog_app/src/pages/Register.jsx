import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  // console.log(inputs);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", inputs, {
        timeout: 5000,
      });
      //takes us straight to the login page after submission with the same login details
      navigate("/login");

      // console.log(res);
    } catch (err) {
      // console.log(err);
      //error response returned by axios
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <form action="">
        <h1>Register here</h1>
        <input
          required
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="email "
          onChange={handleChange}
        />
        <input
          required
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleSubmit}>Register</button>
        <span>
          Do you not have an account?<Link to="/login">Login </Link>
          here
        </span>
      </form>
    </div>
  );
}

export default Register;
