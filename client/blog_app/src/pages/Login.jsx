import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [inputs, setInputs] = React.useState({
    username: "",
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
      await axios.post("http://localhost:3000/api/auth/login", inputs, {
        timeout: 5000,
      });
      //takes us straight to the login page after submission with the same login details
      //redirect
      navigate("/");

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
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        {error && <p>{error}</p>}
        <button onClick={handleSubmit}>Login</button>
        <span>
          You do not have an account?<Link to="/register">Register </Link>
          here
        </span>
      </form>
    </div>
  );
}

export default Login;
