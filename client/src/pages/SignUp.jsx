import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5006";

function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleUserData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth/signup`, userData)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        const error = err.response.data.message;
        setErrorMessage(error);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleUserData}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleUserData}
        />

        <label>Name:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleUserData}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignUp;
