import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import AddArtwork from "../components/AddArtwork";
import RenderYourArtworks from "../components/RenderYourArtworks";

const API_URL = "http://localhost:5006";

function ProfilePage() {
  const [artwork3, setArtwork3] = useState([]);
  const { user } = useContext(AuthContext);

  const getYourCreations = () => {
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      // maybe it has to be redirected to gallery/:artwork ???
      .get(`${API_URL}/gallery/${user.username}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setArtwork3(response.data.slice(-3)))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    if (!user) {
      return null;
    } else {
      getYourCreations();
    }
  }, []);

  return (
    <>
      <h2> {user.username}</h2>

      <AddArtwork refreshArtworks={getYourCreations} userId={user._id} />

      <RenderYourArtworks artwork={artwork3} />
    </>
  );
}

export default ProfilePage;
