import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import AddArtwork from "../components/AddArtwork";
import RenderYourArtworks from "../components/RenderYourArtworks";
import { Navigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function ProfilePage() {
  const [artwork3, setArtwork3] = useState([]);
  const { user } = useContext(AuthContext);

  const getYourCreations = () => {
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      // maybe it has to be redirected to gallery/:artwork ???
      .get(`${API_URL}/gallery/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setArtwork3(response.data.slice(-3));
      })
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    // if (user) {
    getYourCreations();
    // }
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h2> {user && user.username}</h2>

      <p>{user && user.autodefinition}</p>

      <p>{user && user.discipline}</p>

      {user.artist && <AddArtwork refreshArtworks={getYourCreations} />}

      <RenderYourArtworks artwork={artwork3} />
    </>
  );
}

export default ProfilePage;
