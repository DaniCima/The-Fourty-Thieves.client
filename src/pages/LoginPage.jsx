import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function LoginPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUserData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/auth/login`, userData)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser(response.data.authToken);
        navigate("/");
      })
      .catch((err) => {
        // setErrorMessage(err);
        console.log(err);
      });
  };
  return (
    <>
      <h1>Login</h1>

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

        <br />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </>
  );
}

export default LoginPage;
