import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    artist: false,
    discipline: "",
    autodefinition: "",
    collaborators: [],
    link: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleUserData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "artist") {
      console.log(userData.artist);
      setUserData({ ...userData, [name]: !userData.artist });
    } else {
      setUserData({ ...userData, [name]: value });
    }
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
        <label>*Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleUserData}
        />
        <br />

        <label>*Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleUserData}
        />
        <br />

        <label>*Unique username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleUserData}
        />
        <br />

        <label>Just looking? Or need your own gallery?</label>
        <input
          type="checkbox"
          name="artist"
          checked={userData.artist}
          onChange={handleUserData}
        />
        <br />

        {userData.artist && (
          <>
            <label>"Discipline":</label>
            <select
              name="discipline"
              value={userData.discipline}
              onChange={handleUserData}
            >
              <option value="Music">Music</option>
              <option value="Painting">Painting</option>
              <option value="Muralism">Muralism</option>
              <option value="Dance">Dance</option>
              <option value="Magic">Magic</option>
              <option value="Fimls and Photography">
                Fimls and Photography
              </option>
              <option value="Juggle and Balance">Juggle and Balance</option>
              <option value="Poems and Writtings">Poems and Writtings</option>
              <option value="Handmade Objects">Handmade Objects</option>
              <option value="Sculptures">Sculptures</option>
            </select>
            <br />
            <label>Auto-definition:</label>
            <input
              type="text"
              name="autodefinition"
              value={userData.autodefinition}
              onChange={handleUserData}
            />
            <br />
            <label>Collaborators:</label>
            <input
              type="text"
              name="collaborators"
              value={userData.collaborators}
              onChange={handleUserData}
            />
            <br />
            <label>Link to Youtube/ Spotify/ etc :</label>
            <input
              type="text"
              name="link"
              value={userData.link}
              onChange={handleUserData}
            />
            <br />
          </>
        )}
        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>( * Required Fields )</p>

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignUp;
